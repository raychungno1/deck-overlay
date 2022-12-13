//@include utils.js;

const battleLength = 0;
const blueDeck = {};
const blueAvgElixir = 0;
const redDeck = {};
const redAvgElixir = 0;
const redInit = {};

const battleOverlay = () => {
  const ROOT_PROJECT = app.project;
  const ROOT_BIN = ROOT_PROJECT.rootItem;

  // Loading Assets
  const CARDS_BIN = findShallow("cards", ROOT_BIN);
  const AVG_BLUE_BIN = findShallow("avg-elixir-blue", ROOT_BIN);
  const AVG_RED_BIN = findShallow("avg-elixir-red", ROOT_BIN);
  const DECK_OVERLAY_BIN = findShallow("deck-overlay", ROOT_BIN);
  const CARD_HIGHLIGHTS = {
    [COMMON]: findShallow("whiteCommon.png", CARDS_BIN),
    [RARE]: findShallow("whiteRare.png", CARDS_BIN),
    [EPIC]: findShallow("whiteEpic.png", CARDS_BIN),
    [LEGENDARY]: findShallow("whiteLegendary.png", CARDS_BIN),
    [HERO]: findShallow("whiteHero.png", CARDS_BIN),
  };

  // Finding sequence preset
  let sampleSeq: Sequence;
  for (let i = 0; i < ROOT_PROJECT.sequences.numSequences; i++) {
    if (ROOT_PROJECT.sequences[i].name === "deck-overlay-sample") {
      sampleSeq = ROOT_PROJECT.sequences[i];
      break;
    }
  }

  // Copying preset & moving to folder
  const seqName = `d${DECK_OVERLAY_BIN.children.numItems}`;
  sampleSeq.videoTracks[0].setTargeted(true, true);
  const seq = sampleSeq.createSubsequence(true);
  seq.name = seqName;
  const seqBin = find(seq.name, ROOT_BIN, EXCLUDE_BINS);
  seqBin.moveBin(DECK_OVERLAY_BIN);

  // Adding background
  addItemToTrack({
    track: seq.videoTracks[0],
    item: findShallow("deck-board.png", ROOT_BIN),
    endSeconds: battleLength,
  });

  // Adding blue average elixir
  addItemToTrack({
    track: seq.videoTracks[1],
    item: findShallow(`blue-${blueAvgElixir}.png`, AVG_BLUE_BIN),
    endSeconds: battleLength,
  });

  // Adding red average elixir
  addItemToTrack({
    track: seq.videoTracks[2],
    item: findShallow(`red-${redAvgElixir}.png`, AVG_RED_BIN),
    endSeconds: battleLength,
  });

  // Adding Blue Cards
  let i = 0;
  for (let cardId in blueDeck) {
    addItemToTrack({
      track: seq.videoTracks[i + 3],
      item: findShallow(`${blueDeck[cardId].name}.png`, CARDS_BIN),
      endSeconds: battleLength,
      position: [(95 + 117.5 * i) / WIDTH, 1010 / HEIGHT],
      scale: 39,
    });
    i += 1;
  }

  // Adding Red Cards
  i = 0;
  for (let cardId in redDeck) {
    const cardTrack = seq.videoTracks[i * 2 + 11];
    const highlightTrack = seq.videoTracks[i * 2 + 12];
    const cardPosition = [(95 + 117.5 * i) / WIDTH, 70 / HEIGHT]

    // If card was never played, empty card full duration
    if (!(cardId in redInit)) {
      addItemToTrack({
        track: cardTrack,
        item: findShallow("empty.png", CARDS_BIN),
        endSeconds: battleLength,
        position: cardPosition,
        scale: 39,
      });
      i += 1;
      continue;
    }

    // Empty card image
    const emptyCard = addItemToTrack({
      track: cardTrack,
      item: findShallow("empty.png", CARDS_BIN),
      endSeconds: redInit[cardId],
      position: cardPosition,
    });

    addKeyframes({
      trackItem: emptyCard,
      property: "scale",
      baseTime: emptyCard.inPoint.seconds + redInit[cardId],
      keyframes: [
        { key: -0.2, value: 39 },
        { key: 0, value: 0 },
      ],
    });

    // Card image
    const card = addItemToTrack({
      track: cardTrack,
      item: findShallow(`${redDeck[cardId].name}.png`, CARDS_BIN),
      startSeconds: redInit[cardId],
      endSeconds: battleLength,
      position: cardPosition,
    });

    // Highlight card image
    const highlightCard = addItemToTrack({
      track: highlightTrack,
      item: CARD_HIGHLIGHTS[redDeck[cardId].rarity],
      startSeconds: redInit[cardId],
      position: cardPosition,
    });

    const cardKeyframes = [
      { key: 0, value: 0 },
      { key: 0.1, value: 56 },
      { key: 0.13, value: 54 },
      { key: 0.83, value: 54 },
      { key: 0.93, value: 56 },
      { key: 1.03, value: 54 },
      { key: 1.13, value: 36 },
      { key: 1.23, value: 39 },
    ];

    addKeyframes({
      trackItem: card,
      property: "scale",
      baseTime: card.inPoint.seconds,
      keyframes: cardKeyframes,
    });

    addKeyframes({
      trackItem: highlightCard,
      property: "scale",
      baseTime: highlightCard.inPoint.seconds,
      keyframes: cardKeyframes,
    });

    addKeyframes({
      trackItem: highlightCard,
      property: "opacity",
      baseTime: highlightCard.inPoint.seconds,
      keyframes: [
        { key: 0.1, value: 0 },
        { key: 0.13, value: 90 },
        { key: 0.33, value: 0 },
      ],
    });

    i += 1;
  }
};
