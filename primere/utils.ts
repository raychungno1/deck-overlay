const EXCLUDE_BINS = ["TRANSITIONPUNCH_5.0", "SFX"];
const WIDTH = 1920;
const HEIGHT = 1080;

// Properties
const OPACITY = 0;
const MOTION = 1;
const POSITION = 0;
const SCALE = 1;
const SCALEX = 2;
const SCALEY = 1;

// Rarity
const COMMON = 5;
const RARE = 3.75;
const EPIC = 2.5;
const LEGENDARY = 1.25;
const HERO = 0;

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

function findSequence(project: Project, sequenceName: string) {
  for (let i = 0; i < project.sequences.numSequences; i++) {
    if (project.sequences[i].name === sequenceName) {
      return project.sequences[i];
    }
  }
}

function copySequence(sequence: Sequence, name: string) {
  sequence.videoTracks[0].setTargeted(true, true);
  const seq = sequence.createSubsequence(true);
  seq.name = name;
  return seq;
}

function indexOf(arr: string[], val: string) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === val.toLowerCase()) return i;
  }
  return -1;
}

function time(seconds) {
  const time = new Time();
  time.seconds = seconds;
  return time;
}

function setItemLength(item: TrackItem, seconds: number) {
  try {
    item.end = time(seconds);
  } catch (e) {}
}

function addItemToTrack({
  track,
  item,
  startSeconds = 0,
  endSeconds,
  position,
  scale,
  opacity,
}: {
  track: Track;
  item: ProjectItem;
  startSeconds?: number;
  endSeconds?: number;
  position?: number[];
  scale?: number;
  opacity?: number;
}) {
  let clipIdx = 0;
  for (let i = 0; i < track.clips.numItems; i++) {
    if (track.clips[i].start.seconds >= startSeconds) {
      clipIdx = i;
      break;
    }
    if (i === track.clips.numItems - 1) clipIdx = i + 1;
  }
  track.overwriteClip(item, startSeconds);
  const trackItem = track.clips[clipIdx];
  if (endSeconds) {
    setItemLength(trackItem, endSeconds);
  }

  const motion = trackItem.components[MOTION].properties;
  if (position) {
    motion[POSITION].setValue(position);
  }
  if (scale) {
    motion[SCALE].setValue(scale);
  }

  if (opacity) {
    const opacityAttr = trackItem.components[OPACITY].properties;
    opacityAttr[OPACITY].setValue(opacity);
  }

  return trackItem;
}

function addKeyframes({
  trackItem,
  property,
  baseTime,
  keyframes,
}: {
  trackItem: TrackItem;
  property: "position" | "scale" | "scalex" | "scaley" | "opacity";
  baseTime: number;
  keyframes: { key: number; value: number | number[] }[];
}) {
  let trackProperty;
  if (property === "position") {
    trackProperty = trackItem.components[MOTION].properties[POSITION];
  } else if (property === "scale") {
    trackItem.components[MOTION].properties[3].setValue(true);
    trackProperty = trackItem.components[MOTION].properties[SCALE];
  } else if (property === "scalex") {
    trackItem.components[MOTION].properties[3].setValue(false);
    trackProperty = trackItem.components[MOTION].properties[SCALEX];
  } else if (property === "scaley") {
    trackItem.components[MOTION].properties[3].setValue(false);
    trackProperty = trackItem.components[MOTION].properties[SCALEY];
  } else if (property === "opacity") {
    trackProperty = trackItem.components[OPACITY].properties[OPACITY];
  }

  trackProperty.setTimeVarying(true);
  for (const { key, value } of keyframes) {
    trackProperty.addKey(baseTime + key);
    trackProperty.setValueAtKey(baseTime + key, value);
  }
}
