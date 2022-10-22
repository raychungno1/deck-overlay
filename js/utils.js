function find(binName, root, excludes) {
    if (!binName || !root || !excludes.length)
        return;
    for (var i = 0; i < root.children.numItems; i++) {
        var bin = root.children[i];
        if (bin.name.toLowerCase() === binName.toLowerCase()) {
            $.write("FOUND\n");
            return bin;
        }
        if (bin.type === ProjectItemType.BIN && indexOf(excludes, bin.name) === -1) {
            var found = find(binName, bin, excludes);
            if (found)
                return found;
        }
    }
}
function indexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val)
            return i;
    }
    return -1;
}
