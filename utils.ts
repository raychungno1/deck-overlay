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

function setImageLength(image: TrackItem, seconds: number) {
  try {
    const time = new Time();
    time.seconds = seconds;
    image.end = time;
  } catch (e) {}
}
