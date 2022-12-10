var EXCLUDE_BINS = ["TRANSITIONPUNCH_5.0", "SFX"];
var WIDTH = 1920;
var HEIGHT = 1080;
var OPACITY = 0;
var MOTION = 1;
var POSITION = 0;
var SCALE = 1;
function findShallow(binName, root) {
    if (!binName || !root)
        return;
    for (var i = 0; i < root.children.numItems; i++) {
        var bin = root.children[i];
        if (bin.name.toLowerCase() === binName.toLowerCase()) {
            return bin;
        }
    }
}
function find(binName, root, excludes) {
    if (!binName || !root || !excludes.length)
        return;
    for (var i = 0; i < root.children.numItems; i++) {
        var bin = root.children[i];
        if (bin.name.toLowerCase() === binName.toLowerCase()) {
            return bin;
        }
        if (bin.type === ProjectItemType.BIN &&
            indexOf(excludes, bin.name) === -1) {
            var found = find(binName, bin, excludes);
            if (found)
                return found;
        }
    }
}
function indexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === val.toLowerCase())
            return i;
    }
    return -1;
}
function time(seconds) {
    var time = new Time();
    time.seconds = seconds;
    return time;
}
function setImageLength(image, seconds) {
    try {
        image.end = time(seconds);
    }
    catch (e) { }
}
