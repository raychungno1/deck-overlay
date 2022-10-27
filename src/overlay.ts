//@include utils.js;
//@include cards.js;
//@include sampleReplay.js;

const replay = sampleReplay;
const flip = false;

$.deckOverlay = {
  battle: () => {
    const proj = app.project;
    const rootBin = proj.rootItem;

    // Loading Assets
    const cardsBin = findShallow("cards", rootBin);
    const deckBoard = findShallow("deck-board.png", rootBin);
    const avgBlueBin = findShallow("avg-elixir-blue", rootBin);
    const avgRedBin = findShallow("avg-elixir-red", rootBin);
    const deckOverlayBin = findShallow("deck-overlay", rootBin);

    // Parsing Deck Cards
    const blueDeck: Cards = {};
    const redDeck: Cards = {};
    const battle = replay.replayData.battle;
    for (let i = 0; i < 8; i++) {
      const offset = flip ? 1 : 0;
      const blueId = battle[`deck${offset}`][i].d;
      const redId = battle[`deck${1 - offset}`][i].d;
      blueDeck[blueId] = cards[blueId];
      redDeck[redId] = cards[redId];
    }

    // Parsing First Time Each Red Card Was Played
    const redInit = {};
    const commands = replay.replayData.cmd;
    for (let i = 0; i < commands.length; i++) {
      const {
        c: { t2: time, gid: id },
      } = commands[i];

      if (id in redDeck && !(id in redInit)) {
        redInit[id] = time / 20;
      }
    }

    // Creating Sequence
    const battleLength = replay.replayData.endTick / 20;
    let sampleSeq: Sequence;
    for (let i = 0; i < proj.sequences.numSequences; i++) {
      if (proj.sequences[i].name === "deck-overlay-sample") {
        sampleSeq = proj.sequences[i];
        break;
      }
    }
    const seqName = `d${deckOverlayBin.children.numItems}`;
    sampleSeq.videoTracks[0].setTargeted(true, true);
    const seq = sampleSeq.createSubsequence(true);
    seq.name = seqName;
    const seqBin = find(seq.name, rootBin, EXCLUDE_BINS);
    seqBin.moveBin(deckOverlayBin);

    // Adding BG & Average Elixir
    seq.videoTracks[0].overwriteClip(deckBoard, 0);
    setImageLength(seq.videoTracks[0].clips[0], battleLength);

    const blueAvg = `blue-${averageElixir(blueDeck) * 10}.png`;
    const blueAvgImg = findShallow(blueAvg, avgBlueBin);
    seq.videoTracks[1].overwriteClip(blueAvgImg, 0);
    setImageLength(seq.videoTracks[1].clips[0], battleLength);

    const redAvg = `red-${averageElixir(redDeck) * 10}.png`;
    const redAvgImg = findShallow(redAvg, avgRedBin);
    seq.videoTracks[2].overwriteClip(redAvgImg, 0);
    setImageLength(seq.videoTracks[2].clips[0], battleLength);

    // Adding Blue Cards
    let i = 0;
    for (let key in blueDeck) {
      const track = seq.videoTracks[i + 3];
      track.overwriteClip(
        findShallow(`${blueDeck[key].name}.png`, cardsBin),
        0
      );
      setImageLength(track.clips[0], battleLength);

      const motion = track.clips[0].components[MOTION].properties;
      motion[POSITION].setValue([(95 + 117.5 * i) / WIDTH, 1010 / HEIGHT]);
      motion[SCALE].setValue(39);
      i += 1;
    }

    // Adding Red Cards
    i = 0;
    const white = {
      5: findShallow("whiteCommon.png", cardsBin),
      3.75: findShallow("whiteRare.png", cardsBin),
      2.5: findShallow("whiteEpic.png", cardsBin),
      1.25: findShallow("whiteLegendary.png", cardsBin),
      0: findShallow("whiteHero.png", cardsBin),
    };

    for (let key in redDeck) {
      const track = seq.videoTracks[i * 2 + 11];
      track.overwriteClip(findShallow("empty.png", cardsBin), 0);

      if (key in redInit) {
        setImageLength(track.clips[0], redInit[key]);

        track.overwriteClip(
          findShallow(`${redDeck[key].name}.png`, cardsBin),
          redInit[key]
        );
        setImageLength(track.clips[1], battleLength);

        const trackTop = seq.videoTracks[i * 2 + 12];
        trackTop.overwriteClip(
          white[redDeck[String(key)].rarity],
          redInit[key]
        );

        const motion1 = track.clips[0].components[MOTION].properties;
        const endSeconds = track.clips[0].inPoint.seconds + redInit[key];
        motion1[POSITION].setValue([(95 + 117.5 * i) / WIDTH, 70 / HEIGHT]);
        motion1[SCALE].setTimeVarying(true);
        motion1[SCALE].addKey(endSeconds - 0.2);
        motion1[SCALE].setValueAtKey(endSeconds - 0.2, 39);
        motion1[SCALE].addKey(endSeconds);
        motion1[SCALE].setValueAtKey(endSeconds, 0);

        function cardMotion(clip: TrackItem) {
          const motion = clip.components[MOTION].properties;
          const startSeconds = clip.inPoint.seconds;
          motion[POSITION].setValue([(95 + 117.5 * i) / WIDTH, 70 / HEIGHT]);
          motion[SCALE].setTimeVarying(true);
          motion[SCALE].addKey(startSeconds);
          motion[SCALE].setValueAtKey(startSeconds, 0);
          motion[SCALE].addKey(startSeconds + 0.1);
          motion[SCALE].setValueAtKey(startSeconds + 0.1, 56);
          motion[SCALE].addKey(startSeconds + 0.13);
          motion[SCALE].setValueAtKey(startSeconds + 0.13, 54);
          motion[SCALE].addKey(startSeconds + 0.83);
          motion[SCALE].setValueAtKey(startSeconds + 0.83, 54);
          motion[SCALE].addKey(startSeconds + 0.93);
          motion[SCALE].setValueAtKey(startSeconds + 0.93, 56);
          motion[SCALE].addKey(startSeconds + 1.03);
          motion[SCALE].setValueAtKey(startSeconds + 1.03, 54);
          motion[SCALE].addKey(startSeconds + 1.13);
          motion[SCALE].setValueAtKey(startSeconds + 1.13, 36);
          motion[SCALE].addKey(startSeconds + 1.23);
          motion[SCALE].setValueAtKey(startSeconds + 1.23, 39);
        }

        cardMotion(track.clips[1]);
        cardMotion(trackTop.clips[0]);

        const motion4 = trackTop.clips[0].components[OPACITY].properties;
        const startSeconds = trackTop.clips[0].inPoint.seconds;
        motion4[OPACITY].setTimeVarying(true);
        motion4[OPACITY].addKey(startSeconds + 0.1);
        motion4[OPACITY].setValueAtKey(startSeconds + 0.1, 0);
        motion4[OPACITY].addKey(startSeconds + 0.13);
        motion4[OPACITY].setValueAtKey(startSeconds + 0.13, 90);
        motion4[OPACITY].addKey(startSeconds + 0.33);
        motion4[OPACITY].setValueAtKey(startSeconds + 0.33, 0);
      } else {
        setImageLength(track.clips[0], battleLength);
        const motion = track.clips[0].components[MOTION].properties;
        motion[POSITION].setValue([(95 + 117.5 * i) / WIDTH, 70 / HEIGHT]);
        motion[SCALE].setValue(39);
      }

      i += 1;
    }
  },
};
