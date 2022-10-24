const EXCLUDE_BINS = ["TRANSITIONPUNCH_5.0", "SFX"];
const WIDTH = 1920;
const HEIGHT = 1080;

const OPACITY = 0;
const MOTION = 1;
const POSITION = 0;
const SCALE = 1;

function findShallow(binName: string, root: ProjectItem) {
  if (!binName || !root) return;

  for (let i = 0; i < root.children.numItems; i++) {
    let bin = root.children[i];

    if (bin.name.toLowerCase() === binName.toLowerCase()) {
      return bin;
    }
  }
}

function find(binName: string, root: ProjectItem, excludes: string[]) {
  if (!binName || !root || !excludes.length) return;

  for (let i = 0; i < root.children.numItems; i++) {
    let bin = root.children[i];

    if (bin.name.toLowerCase() === binName.toLowerCase()) {
      return bin;
    }

    if (
      bin.type === ProjectItemType.BIN &&
      indexOf(excludes, bin.name) === -1
    ) {
      let found = find(binName, bin, excludes);
      if (found) return found;
    }
  }
}

function indexOf(arr: string[], val: string) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === val.toLowerCase()) return i;
  }
  return -1;
}

function averageElixir(deck: Cards) {
  let total = 0;
  for (let key in deck) {
    total += deck[key].cost;
  }
  return Math.round((total * 10) / 8) / 10;
}

function time(seconds) {
  const time = new Time();
  time.seconds = seconds;
  return time;
}
function setImageLength(image: TrackItem, seconds: number) {
  try {
    image.end = time(seconds);
  } catch (e) {}
}
