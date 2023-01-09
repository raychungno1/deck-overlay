//@include utils.js;

const overlayInfo: any = {};

const battleOverlay = () => {
  const {
    battleLength,
    blueDeck,
    blueAverageElixir,
    redDeck,
    redAverageElixir,
    redInit,
  } = overlayInfo;

  const ROOT_PROJECT = app.project;
  const ROOT_BIN = ROOT_PROJECT.rootItem;

  // Average Elixir MOGRT
  const RED_AVG_ELIXIR = 0;
  const BLUE_AVG_ELIXIR = 1;

  // Loading Assets
  const CARDS_BIN = findShallow("cards", ROOT_BIN);
  const BATTLE_OVERLAY_BIN = findShallow("battle-overlay", ROOT_BIN);
  const SRC_BIN = findShallow("src", BATTLE_OVERLAY_BIN);
  const CARD_HIGHLIGHTS = {
    [COMMON]: findShallow("whiteCommon.png", CARDS_BIN),
    [RARE]: findShallow("whiteRare.png", CARDS_BIN),
    [EPIC]: findShallow("whiteEpic.png", CARDS_BIN),
    [LEGENDARY]: findShallow("whiteLegendary.png", CARDS_BIN),
    [HERO]: findShallow("whiteHero.png", CARDS_BIN),
  };

  // Copying preset & moving to folder
  const seq = copySequence(
    findSequence(ROOT_PROJECT, "battle-overlay-sample"),
    `d${BATTLE_OVERLAY_BIN.children.numItems - 1}`
  );
  const seqBin = find(seq.name, ROOT_BIN, EXCLUDE_BINS);
  seqBin.moveBin(BATTLE_OVERLAY_BIN);

  // Adding background
  addItemToTrack({
    track: seq.videoTracks[0],
    item: findShallow("deck-board.png", SRC_BIN),
    endSeconds: battleLength,
  });

  // Adding average elixir
  const avgElixirMOGRT = seq.videoTracks[1].clips[0].getMGTComponent();
  avgElixirMOGRT.properties[BLUE_AVG_ELIXIR].setValue(blueAverageElixir);
  avgElixirMOGRT.properties[RED_AVG_ELIXIR].setValue(redAverageElixir);
  setItemLength(seq.videoTracks[1].clips[0], battleLength);

  // Adding Blue Cards
  let i = 0;
  for (let cardId in blueDeck) {
    addItemToTrack({
      track: seq.videoTracks[i + 2],
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
    const cardTrack = seq.videoTracks[i * 2 + 10];
    const highlightTrack = seq.videoTracks[i * 2 + 11];
    const cardPosition = [(95 + 117.5 * i) / WIDTH, 70 / HEIGHT];

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
      scale: 39,
    });

    if (redInit[cardId] >= 0) {
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
    }

    i += 1;
  }
};
