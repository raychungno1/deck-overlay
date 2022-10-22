//@include utils.js;
//@include cards.js;

var proj = app.project;

// $.write(5);

// CREATE A FOLDER
var bin1 = proj.rootItem.createBin("Sequence1");

// RENAME FOLDER
bin1.name = "Movies";

// MOVE CLIP FOLDER INTO MOVIES FOLDER
var moveThis = proj.rootItem.createBin("Inner");
var toHere = proj.rootItem.createBin("Outer");
moveThis.moveBin(toHere);

// CREATE A SEQUENCE
var seq = proj.createNewSequenceFromClips("Clips Sequence", [proj.rootItem.children[10], proj.rootItem.children[11]], proj.rootItem)

// MOVE INTO FOLDER
var excludes = ["TRANSITIONPUNCH_5.0", "SFX"];
var targetSeq = find("Clips Sequence", proj.rootItem, excludes);
var targetBin = find("Inner", proj.rootItem, excludes);

targetSeq.moveBin(targetBin);
