//@include utils.js;

const statsInfo: any = {};

const deckStats = () => {
  const {
    title,
    cards,
    averageElixir,
    attack,
    defense,
    f2p,
    synergy,
    vers,
    matchups,
    tipsEnabled,
    playstyle,
    cycleCards,
    cycleCost,
    subs,
  } = statsInfo;

  const ROOT_PROJECT = app.project;
  const ROOT_BIN = ROOT_PROJECT.rootItem;

  // Deck Stats MOGRT
  const DECK_TITLE = 0;
  const STATS_AVG_ELIXIR = 1;
  const ATTACK = 2;
  const F2P = 3;
  const SYNERGY = 4;
  const VERSATILITY = 5;
  const DEFENSE = 6;

  // Deck Tips BG MOGRT
  const TIPS_AVG_ELIXIR = 0;
  const PLAYSTYLE = 1;
  const CYCLE_COST = 2;

  // Loading Assets
  const CARDS_BIN = findShallow("cards", ROOT_BIN);
  const DECK_STATS_BIN = findShallow("deck-stats", ROOT_BIN);
  const SRC_BIN = findShallow("src", DECK_STATS_BIN);

  // Copying preset & moving to folder
  const statsSeq = copySequence(
    findSequence(ROOT_PROJECT, "deck-stats-sample"),
    `d${DECK_STATS_BIN.children.numItems - 1}-stats`
  );
  const statsSeqBin = find(statsSeq.name, ROOT_BIN, EXCLUDE_BINS);
  statsSeqBin.moveBin(DECK_STATS_BIN);

  // Adding deck stats
  const deckStatsMOGRT = statsSeq.videoTracks[11].clips[0].getMGTComponent();
  deckStatsMOGRT.properties[DECK_TITLE].setValue(title);
  deckStatsMOGRT.properties[STATS_AVG_ELIXIR].setValue(averageElixir);
  deckStatsMOGRT.properties[ATTACK].setValue(attack);
  deckStatsMOGRT.properties[F2P].setValue(f2p);
  deckStatsMOGRT.properties[SYNERGY].setValue(synergy);
  deckStatsMOGRT.properties[VERSATILITY].setValue(vers);
  deckStatsMOGRT.properties[DEFENSE].setValue(defense);

  // Adding Cards
  let i = 0;
  for (const card of cards) {
    const cardEl = addItemToTrack({
      track: statsSeq.videoTracks[i + 2],
      item: findShallow(`${card.name}.png`, CARDS_BIN),
      endSeconds: 5,
      position: [(180 + 250 * (i % 4)) / WIDTH, (i < 4 ? 484 : 767) / HEIGHT],
      scale: 87,
    });

    addKeyframes({
      trackItem: cardEl,
      property: "scalex",
      baseTime: cardEl.inPoint.seconds + 0.03 * i,
      keyframes: [
        { key: 0, value: 0 },
        { key: 0.25, value: 8.5 },
        { key: 0.4, value: 18.5 },
        { key: 0.5, value: 43.5 },
        { key: 0.6, value: 63.5 },
        { key: 0.75, value: 83.5 },
        { key: 1, value: 87 },
      ],
    });

    i += 1;
  }

  // Adding matchups
  const matchupsMOGRT = statsSeq.videoTracks[1].clips[1].getMGTComponent();
  i = 0;
  for (const { name, percent } of matchups) {
    matchupsMOGRT.properties[i].setValue(+percent);

    const cardEl = addItemToTrack({
      track: statsSeq.videoTracks[i + 2],
      item: findShallow(`${name}.png`, CARDS_BIN),
      startSeconds: 5,
      endSeconds: 10,
      position: [(510 + 300 * i) / WIDTH, 480 / HEIGHT],
    });

    addKeyframes({
      trackItem: cardEl,
      property: "scalex",
      baseTime: cardEl.inPoint.seconds + 0.03 * (i + 1),
      keyframes: [
        { key: 0, value: 0 },
        { key: 0.1, value: 100 },
      ],
    });

    addKeyframes({
      trackItem: cardEl,
      property: "position",
      baseTime: cardEl.inPoint.seconds + 0.03 * (i + 1),
      keyframes: [
        { key: 0, value: [(510 + 300 * i) / WIDTH, 480 / HEIGHT] },
        { key: 0.1, value: [(510 + 300 * i) / WIDTH, 460 / HEIGHT] },
        { key: 0.75, value: [(510 + 300 * i) / WIDTH, 458 / HEIGHT] },
        { key: 0.925, value: [(510 + 300 * i) / WIDTH, 475 / HEIGHT] },
        { key: 1.1, value: [(510 + 300 * i) / WIDTH, 480 / HEIGHT] },
        { key: 2.5, value: [(510 + 300 * i) / WIDTH, 475 / HEIGHT] },
        { key: 3.9, value: [(510 + 300 * i) / WIDTH, 480 / HEIGHT] },
        { key: 5.3, value: [(510 + 300 * i) / WIDTH, 475 / HEIGHT] },
      ],
    });
    i += 1;
  }

  if (!tipsEnabled) return;

  // Copying preset & moving to folder
  const tipsSeq = copySequence(
    findSequence(ROOT_PROJECT, "deck-tips-sample"),
    `d${DECK_STATS_BIN.children.numItems - 1}-tips`
  );
  const tipsSeqBin = find(tipsSeq.name, ROOT_BIN, EXCLUDE_BINS);
  tipsSeqBin.moveBin(DECK_STATS_BIN);

  // Deck tips bg mogrt
  const deckTipsBgMOGRT = tipsSeq.videoTracks[0].clips[0].getMGTComponent();
  deckTipsBgMOGRT.properties[TIPS_AVG_ELIXIR].setValue(averageElixir);
  deckTipsBgMOGRT.properties[PLAYSTYLE].setValue(playstyle);
  deckTipsBgMOGRT.properties[CYCLE_COST].setValue(`${cycleCost}`);

  // Adding deck tips cards
  i = 0;
  for (const card of cards) {
    addItemToTrack({
      track: tipsSeq.videoTracks[i + 1],
      item: findShallow(`${card.name}.png`, CARDS_BIN),
      endSeconds: 360,
      position: [(1233 + 135 * (i % 4)) / WIDTH, (i < 4 ? 206 : 363) / HEIGHT],
      scale: 48,
    });
    i += 1;
  }

  i = 0;
  for (const card of cycleCards) {
    addItemToTrack({
      track: tipsSeq.videoTracks[i + 9],
      item: findShallow(`${card.name}.png`, CARDS_BIN),
      endSeconds: 360,
      position: [(1455 + 60 * i) / WIDTH, 600 / HEIGHT],
      scale: 20,
    });
    i += 1;
  }

  // Deck matchups mogrt
  function matchupsKeyframes(base) {
    const pos = [];
    const opacity = [];
    for (let i = 10; i < 360; i += 40) {
      pos.push({ key: i, value: base });
      pos.push({ key: i + 0.1, value: [base[0] + 300 / WIDTH, base[1]] });
      pos.push({ key: i + 20, value: [base[0] - 300 / WIDTH, base[1]] });
      pos.push({ key: i + 20.1, value: base });

      opacity.push({ key: i, value: 100 });
      opacity.push({ key: i + 0.1, value: 0 });
      opacity.push({ key: i + 20, value: 0 });
      opacity.push({ key: i + 20.1, value: 100 });
    }
    return [pos, opacity];
  }

  const tipsMatchupsEl = tipsSeq.videoTracks[13].clips[0];
  const tipsMatchupsMOGRT = tipsMatchupsEl.getMGTComponent();
  const [matchupsPos, matchupsOpa] = matchupsKeyframes([
    960 / WIDTH,
    540 / HEIGHT,
  ]);
  addKeyframes({
    trackItem: tipsMatchupsEl,
    property: "position",
    baseTime: tipsMatchupsEl.inPoint.seconds,
    keyframes: matchupsPos,
  });
  addKeyframes({
    trackItem: tipsMatchupsEl,
    property: "opacity",
    baseTime: tipsMatchupsEl.inPoint.seconds,
    keyframes: matchupsOpa,
  });

  i = 0;
  for (const { name, percent } of matchups) {
    tipsMatchupsMOGRT.properties[i].setValue(+percent);

    const pos = [(1233 + 135 * i) / WIDTH, 850 / HEIGHT];
    const cardEl = addItemToTrack({
      track: tipsSeq.videoTracks[i + 14],
      item: findShallow(`${name}.png`, CARDS_BIN),
      endSeconds: 360,
      position: pos,
      scale: 48,
    });

    const [matchupsPos, matchupsOpa] = matchupsKeyframes(pos);
    addKeyframes({
      trackItem: cardEl,
      property: "position",
      baseTime: cardEl.inPoint.seconds,
      keyframes: matchupsPos,
    });
    addKeyframes({
      trackItem: cardEl,
      property: "opacity",
      baseTime: cardEl.inPoint.seconds,
      keyframes: matchupsOpa,
    });
    i += 1;
  }

  // Deck subs
  function subsKeyframes(base) {
    const pos = [];
    const opacity = [];
    for (let i = 10; i < 360; i += 40) {
      pos.push({ key: i, value: [base[0] - 300 / WIDTH, base[1]] });
      pos.push({ key: i + 0.1, value: base });
      pos.push({ key: i + 20, value: base });
      pos.push({ key: i + 20.1, value: [base[0] + 300 / WIDTH, base[1]] });

      opacity.push({ key: i, value: 0 });
      opacity.push({ key: i + 0.1, value: 100 });
      opacity.push({ key: i + 20, value: 100 });
      opacity.push({ key: i + 20.1, value: 0 });
    }
    return [pos, opacity];
  }

  const tipsSubsEl = tipsSeq.videoTracks[18].clips[0];
  const [subsPos, subsOpa] = subsKeyframes([960 / WIDTH, 540 / HEIGHT]);
  addKeyframes({
    trackItem: tipsSubsEl,
    property: "position",
    baseTime: tipsSubsEl.inPoint.seconds,
    keyframes: subsPos,
  });
  addKeyframes({
    trackItem: tipsSubsEl,
    property: "opacity",
    baseTime: tipsSubsEl.inPoint.seconds,
    keyframes: subsOpa,
  });

  const CENTER = 1435.5;
  const startX = CENTER - (190 * (subs.length - 1)) / 2;
  i = 0;
  let trackNum = 19;
  for (const { name, subs: subArr } of subs) {
    const cardX = startX + 190 * i;

    const cardPos = [cardX / WIDTH, 842 / HEIGHT];
    const cardEl = addItemToTrack({
      track: tipsSeq.videoTracks[trackNum],
      item: findShallow(`${name}.png`, CARDS_BIN),
      endSeconds: 360,
      position: cardPos,
      scale: 48,
    });

    const [cardPosFrames, cardOpaFrames] = subsKeyframes(cardPos);
    addKeyframes({
      trackItem: cardEl,
      property: "position",
      baseTime: cardEl.inPoint.seconds,
      keyframes: cardPosFrames,
    });
    addKeyframes({
      trackItem: cardEl,
      property: "opacity",
      baseTime: cardEl.inPoint.seconds,
      keyframes: cardOpaFrames,
    });

    const subStartX = cardX - (60 * (subArr.length - 1)) / 2;
    let j = 0;
    for (const subName of subArr) {
      trackNum += 1;
      const subPos = [(subStartX + 60 * j) / WIDTH, 960 / HEIGHT];
      const subEl = addItemToTrack({
        track: tipsSeq.videoTracks[trackNum],
        item: findShallow(`${subName}.png`, CARDS_BIN),
        endSeconds: 360,
        position: subPos,
        scale: 20,
      });

      const [subPosFrames, subOpaFrames] = subsKeyframes(subPos);
      addKeyframes({
        trackItem: subEl,
        property: "position",
        baseTime: subEl.inPoint.seconds,
        keyframes: subPosFrames,
      });
      addKeyframes({
        trackItem: subEl,
        property: "opacity",
        baseTime: subEl.inPoint.seconds,
        keyframes: subOpaFrames,
      });
      j += 1;
    }
    i += 1;
    trackNum += 1;
  }
};
