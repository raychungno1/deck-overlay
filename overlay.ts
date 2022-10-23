//@include utils.js;
//@include cards.js;
//@include sampleReplay.js;
const qe = null;
app.enableQE();
const proj = app.project;
const rootBin = proj.rootItem;
const flip = true;

// Loading Assets
const cardsBin = findShallow("cards", rootBin);
const deckBoard = findShallow("deck-board.png", rootBin);
const avgBlueBin = findShallow("avg-elixir-blue", rootBin);
const avgRedBin = findShallow("avg-elixir-red", rootBin);

// Parsing Deck Cards
const blueDeck: Cards = {};
const redDeck: Cards = {};
const battle = sampleReplay.replayData.battle;
for (let i = 0; i < 8; i++) {
  const offset = flip ? 1 : 0;
  const blueId = battle[`deck${offset}`][i].d;
  const redId = battle[`deck${1 - offset}`][i].d;
  blueDeck[blueId] = cards[blueId];
  redDeck[redId] = cards[redId];
}

// Parsing First Time Each Card Was Played
const blueInit = {};
const redInit = {};
const commands = sampleReplay.replayData.cmd;
for (let i = 0; i < commands.length; i++) {
  const {
    c: { t2: time, gid: id },
  } = commands[i];

  if (id in blueDeck && !(id in blueInit)) {
    blueInit[id] = time;
  } else if (id in redDeck && !(id in redInit)) {
    redInit[id] = time;
  }
}

// Creating Sequence
const battleLength = sampleReplay.replayData.endTick / 20;
var presets = qe.getSequencePresets();
for (let key in presets) {
  $.writeln(key)
  $.writeln(presets[key])
}
// seq.addTracks(15)
// qe.project.getActiveSequence().addTracks(15);

const seq = proj.createNewSequenceFromClips("d0", [deckBoard], proj.rootItem);
setImageLength(seq.videoTracks[0].clips[0], battleLength);

const blueAvg = `blue-${averageElixir(blueDeck) * 10}.png`;
const blueAvgImg = findShallow(blueAvg, avgBlueBin);
seq.videoTracks[1].overwriteClip(blueAvgImg, 0);
setImageLength(seq.videoTracks[1].clips[0], battleLength);

const redAvg = `red-${averageElixir(redDeck) * 10}.png`;
const redAvgImg = findShallow(redAvg, avgRedBin);
seq.videoTracks[2].overwriteClip(redAvgImg, 0);
setImageLength(seq.videoTracks[2].clips[0], battleLength);

// Adding Cards

// img.duration = createTime(5);
// const test = findShallow("d0", rootBin);
// $.write(averageElixir(blueDeck))
// $.write(averageElixir(redDeck))
// for (let key in blueInit) {
//   $.write(`Card: ${blueDeck[key].name}\tKey: ${key}\tTime: ${blueInit[key]}\n`)
// }

// for (let key in redInit) {
//   $.write(`Card: ${redDeck[key].name}\tKey: ${key}\tTime: ${redInit[key]}\n`)
// }
