//@include utils.js;
var battleLength = 0;
var blueDeck = {};
var blueAvgElixir = 0;
var redDeck = {};
var redAvgElixir = 0;
var redInit = {};
$.deckOverlay = {
    battle: function () {
        var proj = app.project;
        var rootBin = proj.rootItem;
        // Loading Assets
        var cardsBin = findShallow("cards", rootBin);
        var deckBoard = findShallow("deck-board.png", rootBin);
        var avgBlueBin = findShallow("avg-elixir-blue", rootBin);
        var avgRedBin = findShallow("avg-elixir-red", rootBin);
        var deckOverlayBin = findShallow("deck-overlay", rootBin);
        // Creating Sequence
        var sampleSeq;
        for (var i_1 = 0; i_1 < proj.sequences.numSequences; i_1++) {
            if (proj.sequences[i_1].name === "deck-overlay-sample") {
                sampleSeq = proj.sequences[i_1];
                break;
            }
        }
        var seqName = "d".concat(deckOverlayBin.children.numItems);
        sampleSeq.videoTracks[0].setTargeted(true, true);
        var seq = sampleSeq.createSubsequence(true);
        seq.name = seqName;
        var seqBin = find(seq.name, rootBin, EXCLUDE_BINS);
        seqBin.moveBin(deckOverlayBin);
        // Adding BG & Average Elixir
        seq.videoTracks[0].overwriteClip(deckBoard, 0);
        setImageLength(seq.videoTracks[0].clips[0], battleLength);
        var blueAvg = "blue-".concat(blueAvgElixir * 10, ".png");
        var blueAvgImg = findShallow(blueAvg, avgBlueBin);
        seq.videoTracks[1].overwriteClip(blueAvgImg, 0);
        setImageLength(seq.videoTracks[1].clips[0], battleLength);
        var redAvg = "red-".concat(redAvgElixir * 10, ".png");
        var redAvgImg = findShallow(redAvg, avgRedBin);
        seq.videoTracks[2].overwriteClip(redAvgImg, 0);
        setImageLength(seq.videoTracks[2].clips[0], battleLength);
        // Adding Blue Cards
        var i = 0;
        for (var key in blueDeck) {
            var track = seq.videoTracks[i + 3];
            track.overwriteClip(findShallow("".concat(blueDeck[key].name, ".png"), cardsBin), 0);
            setImageLength(track.clips[0], battleLength);
            var motion = track.clips[0].components[MOTION].properties;
            motion[POSITION].setValue([(95 + 117.5 * i) / WIDTH, 1010 / HEIGHT]);
            motion[SCALE].setValue(39);
            i += 1;
        }
        // Adding Red Cards
        i = 0;
        var white = {
            5: findShallow("whiteCommon.png", cardsBin),
            3.75: findShallow("whiteRare.png", cardsBin),
            2.5: findShallow("whiteEpic.png", cardsBin),
            1.25: findShallow("whiteLegendary.png", cardsBin),
            0: findShallow("whiteHero.png", cardsBin)
        };
        for (var key in redDeck) {
            var track = seq.videoTracks[i * 2 + 11];
            track.overwriteClip(findShallow("empty.png", cardsBin), 0);
            if (key in redInit) {
                setImageLength(track.clips[0], redInit[key]);
                track.overwriteClip(findShallow("".concat(redDeck[key].name, ".png"), cardsBin), redInit[key]);
                setImageLength(track.clips[1], battleLength);
                var trackTop = seq.videoTracks[i * 2 + 12];
                trackTop.overwriteClip(white[redDeck[String(key)].rarity], redInit[key]);
                var motion1 = track.clips[0].components[MOTION].properties;
                var endSeconds = track.clips[0].inPoint.seconds + redInit[key];
                motion1[POSITION].setValue([(95 + 117.5 * i) / WIDTH, 70 / HEIGHT]);
                motion1[SCALE].setTimeVarying(true);
                motion1[SCALE].addKey(endSeconds - 0.2);
                motion1[SCALE].setValueAtKey(endSeconds - 0.2, 39);
                motion1[SCALE].addKey(endSeconds);
                motion1[SCALE].setValueAtKey(endSeconds, 0);
                function cardMotion(clip) {
                    var motion = clip.components[MOTION].properties;
                    var startSeconds = clip.inPoint.seconds;
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
                var motion4 = trackTop.clips[0].components[OPACITY].properties;
                var startSeconds = trackTop.clips[0].inPoint.seconds;
                motion4[OPACITY].setTimeVarying(true);
                motion4[OPACITY].addKey(startSeconds + 0.1);
                motion4[OPACITY].setValueAtKey(startSeconds + 0.1, 0);
                motion4[OPACITY].addKey(startSeconds + 0.13);
                motion4[OPACITY].setValueAtKey(startSeconds + 0.13, 90);
                motion4[OPACITY].addKey(startSeconds + 0.33);
                motion4[OPACITY].setValueAtKey(startSeconds + 0.33, 0);
            }
            else {
                setImageLength(track.clips[0], battleLength);
                var motion = track.clips[0].components[MOTION].properties;
                motion[POSITION].setValue([(95 + 117.5 * i) / WIDTH, 70 / HEIGHT]);
                motion[SCALE].setValue(39);
            }
            i += 1;
        }
    }
};
