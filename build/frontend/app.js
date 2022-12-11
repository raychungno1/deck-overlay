var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _this = this;
var requestOptions = function () {
    return {
        method: "GET",
        headers: new Headers({ Authorization: "Bearer ".concat(CR_API_KEY) }),
        redirect: "follow"
    };
};
var getBattlelog = function (playerId) { return __awaiter(_this, void 0, void 0, function () {
    var response, data, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                playerId = playerId.replace("#", "%23");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch("https://api.clashroyale.com/v1/players/".concat(playerId, "/battlelog"), requestOptions())];
            case 2:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("".concat(response.status, ": ").concat(response.statusText));
                }
                return [4 /*yield*/, response.json()];
            case 3:
                data = _a.sent();
                return [2 /*return*/, data];
            case 4:
                e_1 = _a.sent();
                return [2 /*return*/, sampleBattlelog];
            case 5: return [2 /*return*/];
        }
    });
}); };
var getReplay = function (replayTag) { return __awaiter(_this, void 0, void 0, function () {
    var response, data, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                replayTag = replayTag.replace("#", "%23");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch("https://api.clashroyale.com/v1/replays/".concat(replayTag), requestOptions())];
            case 2:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("".concat(response.status, ": ").concat(response.statusText));
                }
                return [4 /*yield*/, response.json()];
            case 3:
                data = _a.sent();
                return [2 /*return*/, data];
            case 4:
                e_2 = _a.sent();
                return [2 /*return*/, sampleReplay];
            case 5: return [2 /*return*/];
        }
    });
}); };
var COMMON = 5;
var RARE = 3.75;
var EPIC = 2.5;
var LEGENDARY = 1.25;
var HERO = 0;
var CARDS = {
    26000077: {
        name: "monk",
        cost: 4,
        rarity: HERO,
        dsName: "Monk"
    },
    26000087: {
        name: "phoenix",
        cost: 4,
        rarity: LEGENDARY,
        dsName: "Phoenix"
    },
    26000065: {
        name: "mightyMiner",
        cost: 4,
        rarity: HERO,
        dsName: "MightyMiner"
    },
    26000028: {
        name: "threeMusketeers",
        cost: 9,
        rarity: RARE,
        dsName: "3M"
    },
    26000038: {
        name: "iceGolem",
        cost: 2,
        rarity: RARE,
        dsName: "IceGolem"
    },
    26000044: {
        name: "hunter",
        cost: 4,
        rarity: EPIC,
        dsName: "Hunter"
    },
    26000050: {
        name: "royalGhost",
        cost: 3,
        rarity: LEGENDARY,
        dsName: "Ghost"
    },
    26000059: {
        name: "royalHogs",
        cost: 5,
        rarity: RARE,
        dsName: "RoyalHogs"
    },
    26000074: {
        name: "goldenKnight",
        cost: 4,
        rarity: HERO,
        dsName: "GoldenKnight"
    },
    28000015: {
        name: "barbBarrel",
        cost: 2,
        rarity: EPIC,
        dsName: "BarbBarrel"
    },
    28000016: {
        name: "healSpirit",
        cost: 1,
        rarity: RARE,
        dsName: "HealSpirit"
    },
    26000009: {
        name: "golem",
        cost: 8,
        rarity: EPIC,
        dsName: "Golem"
    },
    26000013: {
        name: "bomber",
        cost: 2,
        rarity: COMMON,
        dsName: "Bomber"
    },
    26000016: {
        name: "prince",
        cost: 5,
        rarity: EPIC,
        dsName: "Prince"
    },
    26000048: {
        name: "nightWitch",
        cost: 4,
        rarity: LEGENDARY,
        dsName: "NightWitch"
    },
    26000049: {
        name: "bats",
        cost: 2,
        rarity: COMMON,
        dsName: "Bats"
    },
    26000080: {
        name: "skeletonDragons",
        cost: 4,
        rarity: COMMON,
        dsName: "SkeletonDragons"
    },
    28000007: {
        name: "lightning",
        cost: 6,
        rarity: EPIC,
        dsName: "Lightning"
    },
    28000012: {
        name: "tornado",
        cost: 3,
        rarity: EPIC,
        dsName: "Tornado"
    },
    26000010: {
        name: "skeletons",
        cost: 1,
        rarity: COMMON,
        dsName: "Skellies"
    },
    26000027: {
        name: "darkPrince",
        cost: 4,
        rarity: EPIC,
        dsName: "DarkPrince"
    },
    26000072: {
        name: "archerQueen",
        cost: 5,
        rarity: HERO,
        dsName: "ArcherQueen"
    },
    26000083: {
        name: "motherWitch",
        cost: 4,
        rarity: LEGENDARY,
        dsName: "MotherWitch"
    },
    26000085: {
        name: "electroGiant",
        cost: 8,
        rarity: EPIC,
        dsName: "ElectroGiant"
    },
    27000012: {
        name: "goblinCage",
        cost: 4,
        rarity: RARE,
        dsName: "GoblinCage"
    },
    26000047: {
        name: "royalRecruits",
        cost: 7,
        rarity: COMMON,
        dsName: "RoyalRecruits"
    },
    26000052: {
        name: "zappies",
        cost: 4,
        rarity: RARE,
        dsName: "Zappies"
    },
    26000057: {
        name: "flyingMachine",
        cost: 4,
        rarity: RARE,
        dsName: "FlyingMachine"
    },
    28000000: {
        name: "fireball",
        cost: 4,
        rarity: RARE,
        dsName: "Fireball"
    },
    28000001: {
        name: "arrows",
        cost: 3,
        rarity: COMMON,
        dsName: "Arrows"
    },
    26000004: {
        name: "pekka",
        cost: 7,
        rarity: EPIC,
        dsName: "PEKKA"
    },
    26000006: {
        name: "balloon",
        cost: 5,
        rarity: EPIC,
        dsName: "Balloon"
    },
    26000015: {
        name: "babyDragon",
        cost: 4,
        rarity: EPIC,
        dsName: "BabyD"
    },
    26000035: {
        name: "lumberjack",
        cost: 4,
        rarity: LEGENDARY,
        dsName: "Lumber"
    },
    26000042: {
        name: "electroWizard",
        cost: 4,
        rarity: LEGENDARY,
        dsName: "eWiz"
    },
    28000005: {
        name: "freeze",
        cost: 4,
        rarity: EPIC,
        dsName: "Freeze"
    },
    28000008: {
        name: "zap",
        cost: 2,
        rarity: COMMON,
        dsName: "Zap"
    },
    26000008: {
        name: "barbarians",
        cost: 5,
        rarity: COMMON,
        dsName: "Barbs"
    },
    26000029: {
        name: "lavaHound",
        cost: 7,
        rarity: LEGENDARY,
        dsName: "Lava"
    },
    26000032: {
        name: "miner",
        cost: 3,
        rarity: LEGENDARY,
        dsName: "Miner"
    },
    26000037: {
        name: "infernoDragon",
        cost: 4,
        rarity: LEGENDARY,
        dsName: "InfernoD"
    },
    26000046: {
        name: "bandit",
        cost: 3,
        rarity: LEGENDARY,
        dsName: "Bandit"
    },
    26000051: {
        name: "ramRider",
        cost: 5,
        rarity: LEGENDARY,
        dsName: "RamRider"
    },
    26000055: {
        name: "megaKnight",
        cost: 7,
        rarity: LEGENDARY,
        dsName: "MegaKnight"
    },
    26000084: {
        name: "electroSpirit",
        cost: 1,
        rarity: COMMON,
        dsName: "ElectroSpirit"
    },
    26000012: {
        name: "skeletonArmy",
        cost: 3,
        rarity: EPIC,
        dsName: "Skarmy"
    },
    26000024: {
        name: "royalGiant",
        cost: 6,
        rarity: COMMON,
        dsName: "RG"
    },
    26000026: {
        name: "princess",
        cost: 3,
        rarity: LEGENDARY,
        dsName: "Princess"
    },
    26000040: {
        name: "dartGoblin",
        cost: 3,
        rarity: RARE,
        dsName: "DartGob"
    },
    28000004: {
        name: "goblinBarrel",
        cost: 3,
        rarity: EPIC,
        dsName: "Barrel"
    },
    26000033: {
        name: "sparky",
        cost: 6,
        rarity: LEGENDARY,
        dsName: "Sparky"
    },
    26000043: {
        name: "eliteBarbarians",
        cost: 6,
        rarity: COMMON,
        dsName: "eBarbs"
    },
    26000060: {
        name: "goblinGiant",
        cost: 6,
        rarity: EPIC,
        dsName: "GobGiant"
    },
    28000002: {
        name: "rage",
        cost: 2,
        rarity: EPIC,
        dsName: "Rage"
    },
    26000000: {
        name: "knight",
        cost: 3,
        rarity: COMMON,
        dsName: "Knight"
    },
    26000017: {
        name: "wizard",
        cost: 5,
        rarity: RARE,
        dsName: "Wiz"
    },
    26000020: {
        name: "giantSkeleton",
        cost: 6,
        rarity: EPIC,
        dsName: "GiantSkelly"
    },
    26000021: {
        name: "hog",
        cost: 4,
        rarity: RARE,
        dsName: "Hog"
    },
    28000011: {
        name: "log",
        cost: 2,
        rarity: LEGENDARY,
        dsName: "Log"
    },
    26000003: {
        name: "giant",
        cost: 5,
        rarity: RARE,
        dsName: "Giant"
    },
    26000005: {
        name: "minions",
        cost: 3,
        rarity: COMMON,
        dsName: "Minions"
    },
    26000007: {
        name: "witch",
        cost: 5,
        rarity: EPIC,
        dsName: "Witch"
    },
    28000010: {
        name: "graveyard",
        cost: 5,
        rarity: LEGENDARY,
        dsName: "Graveyard"
    },
    28000017: {
        name: "snowball",
        cost: 2,
        rarity: COMMON,
        dsName: "Snowball"
    },
    26000034: {
        name: "bowler",
        cost: 5,
        rarity: EPIC,
        dsName: "Bowler"
    },
    26000063: {
        name: "electroDragon",
        cost: 5,
        rarity: EPIC,
        dsName: "eDragon"
    },
    26000002: {
        name: "goblins",
        cost: 2,
        rarity: COMMON,
        dsName: "Gobs"
    },
    26000011: {
        name: "valkyrie",
        cost: 4,
        rarity: RARE,
        dsName: "Valk"
    },
    26000030: {
        name: "iceSpirit",
        cost: 1,
        rarity: COMMON,
        dsName: "IceSpirit"
    },
    26000045: {
        name: "executioner",
        cost: 5,
        rarity: EPIC,
        dsName: "Exe"
    },
    28000003: {
        name: "rocket",
        cost: 6,
        rarity: RARE,
        dsName: "Rocket"
    },
    26000054: {
        name: "cannonCart",
        cost: 5,
        rarity: COMMON,
        dsName: "CannonCart"
    },
    27000001: {
        name: "goblinHut",
        cost: 5,
        rarity: RARE,
        dsName: "GobHut"
    },
    27000010: {
        name: "furnace",
        cost: 4,
        rarity: RARE,
        dsName: "Furnace"
    },
    26000019: {
        name: "spearGoblins",
        cost: 2,
        rarity: COMMON,
        dsName: "SpearGobs"
    },
    26000022: {
        name: "minionHorde",
        cost: 5,
        rarity: COMMON,
        dsName: "Horde"
    },
    26000041: {
        name: "goblinGang",
        cost: 3,
        rarity: COMMON,
        dsName: "GobGang"
    },
    27000002: {
        name: "mortar",
        cost: 4,
        rarity: COMMON,
        dsName: "Mortar"
    },
    26000053: {
        name: "rascals",
        cost: 5,
        rarity: COMMON,
        dsName: "Rascals"
    },
    28000006: {
        name: "mirror",
        cost: 1.5,
        rarity: EPIC,
        dsName: "Mirror"
    },
    26000069: {
        name: "skeletonKing",
        cost: 4,
        rarity: HERO,
        dsName: "SkeletonKing"
    },
    26000058: {
        name: "wallbreakers",
        cost: 2,
        rarity: EPIC,
        dsName: "WallBreakers"
    },
    26000062: {
        name: "magicArcher",
        cost: 4,
        rarity: LEGENDARY,
        dsName: "MagicArcher"
    },
    27000004: {
        name: "bombTower",
        cost: 4,
        rarity: RARE,
        dsName: "BombTower"
    },
    26000014: {
        name: "musketeer",
        cost: 4,
        rarity: RARE,
        dsName: "Musk"
    },
    28000009: {
        name: "poison",
        cost: 4,
        rarity: EPIC,
        dsName: "Poison"
    },
    26000018: {
        name: "miniPekka",
        cost: 4,
        rarity: RARE,
        dsName: "MP"
    },
    26000031: {
        name: "fireSpirit",
        cost: 1,
        rarity: COMMON,
        dsName: "FireSpirit"
    },
    26000036: {
        name: "battleRam",
        cost: 4,
        rarity: RARE,
        dsName: "Ram"
    },
    26000067: {
        name: "elixirGolem",
        cost: 3,
        rarity: RARE,
        dsName: "ElixirGolem"
    },
    26000068: {
        name: "battleHealer",
        cost: 4,
        rarity: RARE,
        dsName: "BattleHealer"
    },
    26000023: {
        name: "iceWizard",
        cost: 3,
        rarity: LEGENDARY,
        dsName: "IceWiz"
    },
    27000006: {
        name: "tesla",
        cost: 4,
        rarity: LEGENDARY,
        dsName: "Tesla"
    },
    27000008: {
        name: "xbow",
        cost: 6,
        rarity: EPIC,
        dsName: "XBow"
    },
    26000039: {
        name: "megaMinion",
        cost: 3,
        rarity: RARE,
        dsName: "MM"
    },
    26000061: {
        name: "fisherman",
        cost: 3,
        rarity: COMMON,
        dsName: "Fisherman"
    },
    26000025: {
        name: "guards",
        cost: 3,
        rarity: EPIC,
        dsName: "Guards"
    },
    27000013: {
        name: "goblinDrill",
        cost: 3,
        rarity: EPIC,
        dsName: "GoblinDrill"
    },
    26000056: {
        name: "skeletonBarrel",
        cost: 3,
        rarity: COMMON,
        dsName: "SkellyBarrel"
    },
    26000064: {
        name: "firecracker",
        cost: 3,
        rarity: COMMON,
        dsName: "Firecracker"
    },
    27000005: {
        name: "barbarianHut",
        cost: 7,
        rarity: RARE,
        dsName: "BarbHut"
    },
    27000007: {
        name: "elixirCollector",
        cost: 6,
        rarity: RARE,
        dsName: "Pump"
    },
    27000000: {
        name: "cannon",
        cost: 3,
        rarity: COMMON,
        dsName: "Cannon"
    },
    27000009: {
        name: "tombstone",
        cost: 3,
        rarity: RARE,
        dsName: "Tombstone"
    },
    27000003: {
        name: "infernoTower",
        cost: 5,
        rarity: RARE,
        dsName: "Inferno"
    },
    26000001: {
        name: "archer",
        cost: 3,
        rarity: COMMON,
        dsName: "Archers"
    },
    28000013: {
        name: "clone",
        cost: 3,
        rarity: EPIC,
        dsName: "Clone"
    },
    28000014: {
        name: "earthquake",
        cost: 3,
        rarity: RARE,
        dsName: "Earthquake"
    },
    28000018: {
        name: "royalDelivery",
        cost: 3,
        rarity: COMMON,
        dsName: "RoyalDelivery"
    }
};
function setStatLink(link) {
    statDeckLink.value = link;
    deckPreview(statDeckLink, "stat-deck-preview");
    selectPage(Page.DECK_STATS);
}
// Deck link preview (stats page)
var statDeckLink = document.getElementById("stat-deck-link");
deckPreview(statDeckLink, "stat-deck-preview");
statDeckLink.addEventListener("input", function () {
    return deckPreview(statDeckLink, "stat-deck-preview");
});
// Initialize sliders
["attack", "defense", "vers", "synergy"].forEach(function (stat) {
    sliderWithLabel("stat-".concat(stat), "stat-".concat(stat, "-lbl"));
});
// Submit stat
var statForm = document.getElementById("stat-form");
statForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submit stats");
});
function setTipsLink(link) {
    tipsDeckLink.value = link;
    deckPreview(tipsDeckLink, "tips-deck-preview");
    createSubs();
    selectPage(Page.DECK_TIPS);
}
// Deck link preview (tips page)
var tipsDeckLink = document.getElementById("tips-deck-link");
deckPreview(tipsDeckLink, "tips-deck-preview");
tipsDeckLink.addEventListener("input", function () {
    return deckPreview(tipsDeckLink, "tips-deck-preview");
});
// Card Substitutes
var subsContainer = document.getElementById("subs-container");
var subCardOptions = [];
var subCardSelects = [];
var numCardsSubbed = 0;
var createSubs = function () {
    var cardIds = tipsDeckLink.value.match(/(\d{8})/g);
    clearElement(subsContainer);
    if (cardIds && cardIds.length === 8 && cardIds.every(function (id) { return id in CARDS; })) {
        cardIds.forEach(function (id) {
            var subContainer = createElement("div", { "class": "sub__container" });
            subsContainer.appendChild(subContainer);
            var cardEl = createElement("img", { "class": "sub__card" });
            cardEl.src = "../cards/".concat(CARDS[id].name, ".png");
            cardEl.alt = CARDS[id].name;
            subContainer.appendChild(cardEl);
            var subInner = createElement("div", { "class": "sub__inner" });
            subContainer.appendChild(subInner);
            var subOptions = createElement("div", { "class": "sub__options" });
            subCardOptions.push(subOptions);
            var selector = createElement("select", {
                "class": "form__select sub__select",
                id: "sub-options-".concat(id)
            });
            selectCardsAlphabetic(selector);
            subCardSelects.push(selector);
            selector.addEventListener("input", function (e) {
                var e_3, _a;
                try {
                    for (var _b = __values(subOptions.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var subOption = _c.value;
                        if (subOption.dataset.id === e.target.value) {
                            return;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                if (subOptions.children.length === 0) {
                    numCardsSubbed += 1;
                }
                var cardEl = createElement("img", { "class": "sub__option" });
                cardEl.src = "../cards/".concat(CARDS[e.target.value].name, ".png");
                cardEl.alt = CARDS[e.target.value].name;
                cardEl.setAttribute("data-id", e.target.value);
                cardEl.addEventListener("click", function () {
                    cardEl.remove();
                    selector.disabled = false;
                    if (subOptions.children.length === 0) {
                        numCardsSubbed -= 1;
                        for (var i = 0; i < 8; i++) {
                            if (subCardOptions[i].children.length !== 3) {
                                subCardSelects[i].disabled = false;
                            }
                        }
                    }
                });
                subOptions.appendChild(cardEl);
                if (numCardsSubbed === 3) {
                    for (var i = 0; i < 8; i++) {
                        if (subCardOptions[i].children.length === 0) {
                            subCardSelects[i].disabled = true;
                        }
                    }
                }
                if (subOptions.children.length >= 3) {
                    selector.disabled = true;
                }
            });
            subInner.appendChild(selector);
            subInner.appendChild(subOptions);
        });
    }
};
createSubs();
tipsDeckLink.addEventListener("input", createSubs);
// Matchups section
var matchups = [];
var sliders = [];
for (var i = 1; i <= 4; i++) {
    matchups.push(selectCardsAlphabetic("matchup-".concat(i, "-list")));
    sliders.push(sliderWithLabel("matchup-".concat(i, "-slider"), "matchup-".concat(i, "-lbl"), "%"));
}
// Submit tips
var tipsForm = document.getElementById("tips-form");
tipsForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submit tips");
});
var CR_API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjdjZDUzNGQwLWQwM2YtNDA1OC1iZTliLWUxODMwNjc5MmY3ZSIsImlhdCI6MTY2NjQ1MTkyOSwic3ViIjoiZGV2ZWxvcGVyLzQ0YWNhMWZiLThmMGItMTgxNy00MTc1LTQwMGYzYjU5YWMyMCIsInNjb3BlcyI6WyJyb3lhbGU6KjpyZXBsYXkiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3NS4xMTguMjEzLjExOSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.zo4x8geAlkqli2uR0wcIzqASxrGuKgM9mc0-KyxZYiLLI7EbE5gMmq9tbbEQjkknpS8KBYpPDpCec8C5PXrJwA";
/**
 * Creates the HTML element specified by type, with certain attributes
 * @param type        the type of HTML element
 * @param attributes  a dictionary of attribute-value pairs
 * @returns           the HTMLElement object
 */
function createElement(type, attributes) {
    var el = document.createElement(type);
    Object.keys(attributes).forEach(function (attr) {
        return el.setAttribute(attr, attributes[attr]);
    });
    return el;
}
/**
 * Clears all children from an HTML element
 * @param el an HTMLElement object
 */
function clearElement(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}
/**
 * Gets an HTML element by reference or id
 * @param idOrEl either the select element or its id
 * @returns an HTMLElement object
 */
function getElement(idOrEl) {
    return typeof idOrEl === "string"
        ? document.getElementById(idOrEl)
        : idOrEl;
}
/**
 * Links a range slider with a label to display its current value. Slider and label must be in the DOM with an id.
 * @param sliderId  the id of the slider element
 * @param labelId   the label of the slider element
 * @param end       a string to append at the end of the label
 */
function sliderWithLabel(sliderId, labelId, end) {
    var slider = document.getElementById(sliderId);
    var label = document.getElementById(labelId);
    label.textContent = slider.value + (end || "");
    slider.oninput = function (e) {
        label.textContent = e.target.value + (end || "");
    };
    return slider;
}
/**
 * Transforms a camel case string to capetalized title text
 * @param text a camel case formatted string
 * @returns a capitalized formatted string
 */
function camelCaseToCapitalized(text) {
    var result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
}
/**
 * Fills a select element with cards in alphabetical order
 * @param selectOrId either the select element or its id
 */
function selectCardsAlphabetic(idOrSelect) {
    var select = getElement(idOrSelect);
    var cardsArray = Object.keys(CARDS).map(function (id) { return (__assign({ id: id }, CARDS[id])); });
    cardsArray.sort(function (a, b) { return (a.name > b.name ? 1 : -1); });
    cardsArray.forEach(function (_a) {
        var id = _a.id, name = _a.name;
        var option = document.createElement("option");
        option.setAttribute("value", id);
        option.setAttribute("label", camelCaseToCapitalized(name));
        select.appendChild(option);
    });
    return select;
}
function deckPreview(idOrInput, idOrPreview) {
    var inputEl = getElement(idOrInput);
    var previewEl = getElement(idOrPreview);
    clearElement(previewEl);
    var cardIds = inputEl.value.match(/(\d{8})/g);
    if (cardIds && cardIds.length === 8 && cardIds.every(function (id) { return id in CARDS; })) {
        cardIds.forEach(function (id) {
            var previewCardEl = createElement("img", {
                "class": "preview__card"
            });
            previewCardEl.src = "../cards/".concat(CARDS[id].name, ".png");
            previewCardEl.alt = CARDS[id].name;
            previewEl.appendChild(previewCardEl);
        });
        var checkEl = createElement("div", { "class": "check" });
        checkEl.innerHTML = '<i class="fa-solid fa-check"></i>';
        previewEl.appendChild(checkEl);
    }
}
/* @ts-ignore */ // Object to interact with primere
var cs = new CSInterface();
// BATTLE OVERLAY
loadBattles("#L008PR8C");
var battleForm = document.getElementById("player-form");
battleForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var input = document.getElementById("playerId");
    loadBattles(input.value);
});
function loadBattles(playerId) {
    return __awaiter(this, void 0, void 0, function () {
        var log, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getBattlelog(playerId)];
                case 1:
                    log = _a.sent();
                    displayDecks(log);
                    return [3 /*break*/, 3];
                case 2:
                    e_4 = _a.sent();
                    displayError(e_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function battleOverlay(replayTag, playerName) {
    if (replayTag === void 0) { replayTag = ""; }
    if (playerName === void 0) { playerName = ""; }
    return __awaiter(this, void 0, void 0, function () {
        var replay, battle, battleLength, flip, blueDeck, redDeck, offset, i, blueId, redId, blueAvgElixir, redAvgElixir, redInit, redPlayerId, commands, i, _a, time, id, playerId, e_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getReplay(replayTag)];
                case 1:
                    replay = _b.sent();
                    battle = replay.replayData.battle;
                    battleLength = replay.replayData.endTick / 20;
                    flip = battle.avatar0.name !== playerName;
                    blueDeck = {};
                    redDeck = {};
                    offset = flip ? 1 : 0;
                    for (i = 0; i < 8; i++) {
                        blueId = battle["deck".concat(offset)][i].d;
                        redId = battle["deck".concat(1 - offset)][i].d;
                        blueDeck[blueId] = CARDS[blueId];
                        redDeck[redId] = CARDS[redId];
                    }
                    blueAvgElixir = averageElixir(blueDeck);
                    redAvgElixir = averageElixir(redDeck);
                    redInit = {};
                    redPlayerId = battle["avatar".concat(1 - offset)]["accountID.hi"];
                    commands = replay.replayData.cmd;
                    for (i = 0; i < commands.length; i++) {
                        _a = commands[i].c, time = _a.t2, id = _a.gid, playerId = _a.idHi;
                        if (playerId == redPlayerId && id in redDeck && !(id in redInit)) {
                            redInit[id] = time / 20;
                        }
                    }
                    cs.evalScript("var battleLength = ".concat(JSON.stringify(battleLength)));
                    cs.evalScript("var blueDeck = ".concat(JSON.stringify(blueDeck)));
                    cs.evalScript("var blueAvgElixir = ".concat(JSON.stringify(blueAvgElixir)));
                    cs.evalScript("var redDeck = ".concat(JSON.stringify(redDeck)));
                    cs.evalScript("var redAvgElixir = ".concat(JSON.stringify(redAvgElixir)));
                    cs.evalScript("var redInit = ".concat(JSON.stringify(redInit)));
                    cs.evalScript("$.deckOverlay.battle()");
                    return [3 /*break*/, 3];
                case 2:
                    e_5 = _b.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function averageElixir(deck) {
    var total = 0;
    for (var key in deck) {
        total += deck[key].cost;
    }
    return Math.round((total * 10) / 8);
}
function displayDecks(battlelog) {
    if (!battlelog || !battlelog.length)
        return displayError("Error: No Battles Found");
    var battlesEl = document.getElementById("battles");
    clearElement(battlesEl);
    var numBattles = battlelog.length;
    var _loop_1 = function (i) {
        var battle = battlelog[i];
        var battleEl = createElement("div", { "class": "battle__container" });
        var detailsEl = createElement("div", { "class": "details__container" });
        battleEl.appendChild(detailsEl);
        var blueEl = createElement("div", { "class": "blue__container" });
        var blueTitleEl = createElement("p", { "class": "title" });
        blueTitleEl.textContent = "".concat(battle.team[0].name);
        var blueSubtitleEl = createElement("p", { "class": "subtitle" });
        blueSubtitleEl.textContent = battle.team[0].clan
            ? "".concat(battle.team[0].clan.name)
            : "-";
        var blueDeckEl = createElement("div", { "class": "deck" });
        detailsEl.appendChild(blueEl);
        blueEl.appendChild(blueTitleEl);
        blueEl.appendChild(blueSubtitleEl);
        blueEl.appendChild(blueDeckEl);
        var redEl = createElement("div", { "class": "red__container" });
        var redTitleEl = createElement("p", { "class": "title" });
        redTitleEl.textContent = "".concat(battle.opponent[0].name);
        var redSubtitleEl = createElement("p", { "class": "subtitle" });
        redSubtitleEl.textContent = battle.opponent[0].clan
            ? "".concat(battle.opponent[0].clan.name)
            : "-";
        var redDeckEl = createElement("div", { "class": "deck" });
        detailsEl.appendChild(redEl);
        redEl.appendChild(redTitleEl);
        redEl.appendChild(redSubtitleEl);
        redEl.appendChild(redDeckEl);
        var blueDeckLink = "https://link.clashroyale.com/deck/en?deck=";
        var redDeckLink = "https://link.clashroyale.com/deck/en?deck=";
        for (var j = 0; j < 8; j++) {
            var blueCard = battle.team[0].cards[j];
            var blueCardEl = createElement("img", { "class": "deck__card" });
            blueCardEl.src = "../cards/".concat(CARDS[blueCard.id].name, ".png");
            blueCardEl.alt = blueCard.name;
            blueDeckEl.appendChild(blueCardEl);
            blueDeckLink += blueCard.id;
            if (j < 7)
                blueDeckLink += ";";
            var redCard = battle.opponent[0].cards[j];
            var redCardEl = createElement("img", { "class": "deck__card" });
            redCardEl.src = "../cards/".concat(CARDS[redCard.id].name, ".png");
            redCardEl.alt = redCard.name;
            redDeckEl.appendChild(redCardEl);
            redDeckLink += redCard.id;
            if (j < 7)
                redDeckLink += ";";
        }
        var deckActionsEl = createElement("div", {
            "class": "deck-actions__container"
        });
        battleEl.appendChild(deckActionsEl);
        var blueDeckActionsEl = createElement("div", { "class": "deck-actions" });
        deckActionsEl.appendChild(blueDeckActionsEl);
        var blueStatBtnEl = createElement("button", { "class": "battle__action" });
        blueStatBtnEl.onclick = function () { return setStatLink(blueDeckLink); };
        blueStatBtnEl.innerHTML = '<i class="fa-solid fa-chart-simple"></i> Stats';
        blueDeckActionsEl.appendChild(blueStatBtnEl);
        var blueTipsBtnEl = createElement("button", { "class": "battle__action" });
        blueTipsBtnEl.onclick = function () { return setTipsLink(blueDeckLink); };
        blueTipsBtnEl.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Tips';
        blueDeckActionsEl.appendChild(blueTipsBtnEl);
        var btnEl = createElement("button", {
            "class": "battle__action deck-actions"
        });
        btnEl.onclick = function () { return battleOverlay(battle.replayTag, battle.team[0].name); };
        btnEl.innerHTML = '<i class="fa-solid fa-shield-halved"></i> Overlay';
        deckActionsEl.appendChild(btnEl);
        var redDeckActionsEl = createElement("div", { "class": "deck-actions" });
        deckActionsEl.appendChild(redDeckActionsEl);
        var redStatBtnEl = createElement("button", { "class": "battle__action" });
        redStatBtnEl.onclick = function () { return setStatLink(redDeckLink); };
        redStatBtnEl.innerHTML = '<i class="fa-solid fa-chart-simple"></i> Stats';
        redDeckActionsEl.appendChild(redStatBtnEl);
        var redTipsBtnEl = createElement("button", { "class": "battle__action" });
        redTipsBtnEl.onclick = function () { return setTipsLink(redDeckLink); };
        redTipsBtnEl.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Tips';
        redDeckActionsEl.appendChild(redTipsBtnEl);
        battlesEl.appendChild(battleEl);
    };
    for (var i = 0; i < numBattles; i++) {
        _loop_1(i);
    }
}
function displayError(error) {
    var battlesEl = document.getElementById("battles");
    clearElement(battlesEl);
    var errorEl = createElement("div", { "class": "error_container" });
    var errorIconEl = createElement("i", {
        "class": "fa-solid fa-triangle-exclamation error__icon"
    });
    var errorMsgEl = createElement("p", { "class": "error__msg" });
    errorMsgEl.textContent = error;
    errorEl.appendChild(errorIconEl);
    errorEl.appendChild(errorMsgEl);
    battlesEl.appendChild(errorEl);
}
var Page;
(function (Page) {
    Page[Page["BATTLE_OVERLAY"] = 0] = "BATTLE_OVERLAY";
    Page[Page["DECK_STATS"] = 1] = "DECK_STATS";
    Page[Page["DECK_TIPS"] = 2] = "DECK_TIPS";
})(Page || (Page = {}));
/**
 * Controls the active page on the navbar
 * @param target The page to switch to
 */
var selectPage = (function () {
    // Load nav links add onclick listeners
    var links = ["battle-nav", "stats-nav", "tips-nav"].map(function (id, i) {
        var link = document.getElementById(id);
        link.onclick = function () { return selectPage(i); };
        return link;
    });
    // Load page containers
    var pages = ["battle-page", "stats-page", "tips-page"].map(function (id) {
        return document.getElementById(id);
    });
    // Function definition
    var selectPage = function (target) {
        for (var i = 0; i < 3; i++) {
            if (i === target) {
                links[i].classList.add("selected");
                pages[i].classList.remove("page__hidden");
            }
            else {
                links[i].classList.remove("selected");
                pages[i].classList.add("page__hidden");
            }
        }
    };
    return selectPage;
})();
var sampleBattlelog = [
    {
        type: "challenge",
        battleTime: "20221113T015202.000Z",
        isLadderTournament: true,
        arena: {
            id: 54000036,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000291,
            name: "Challenge_AllCards_EventDeck"
        },
        replayTag: "#00C9R980GCU0",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7095,
                crowns: 1,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [3052, 1032],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Skeleton King",
                        id: 26000069,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/dCd69_wN9f8DxwuqOGtR4QgWhHIPIaTNxZ1e23RzAAc.png"
                        }
                    },
                    {
                        name: "Miner",
                        id: 26000032,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                        }
                    },
                    {
                        name: "Mortar",
                        id: 27000002,
                        level: 11,
                        starLevel: 2,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Skeleton Army",
                        id: 26000012,
                        level: 6,
                        starLevel: 3,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png"
                        }
                    },
                    {
                        name: "Dart Goblin",
                        id: 26000040,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png"
                        }
                    },
                    {
                        name: "Goblin Gang",
                        id: 26000041,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                        }
                    },
                    {
                        name: "Fireball",
                        id: 28000000,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
                        }
                    },
                ],
                elixirLeaked: 2.83
            },
        ],
        opponent: [
            {
                tag: "#YUY8JG0CR",
                name: "ブラック",
                startingTrophies: 6070,
                crowns: 0,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [1251],
                clan: {
                    tag: "#PCYL99PQ",
                    name: "King of Knights",
                    badgeId: 16000004
                },
                cards: [
                    {
                        name: "Magic Archer",
                        id: 26000062,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Avli3W7BxU9HQ2SoLiXnBgGx25FoNXUSFm7OcAk68ek.png"
                        }
                    },
                    {
                        name: "Fireball",
                        id: 28000000,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
                        }
                    },
                    {
                        name: "Zap",
                        id: 28000008,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                        }
                    },
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Ram Rider",
                        id: 26000051,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QaJyerT7f7oMyZ3Fv1glKymtLSvx7YUXisAulxl7zRI.png"
                        }
                    },
                    {
                        name: "Lumberjack",
                        id: 26000035,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/E6RWrnCuk13xMX5OE1EQtLEKTZQV6B78d00y8PlXt6Q.png"
                        }
                    },
                ],
                elixirLeaked: 6.28
            },
        ],
        challengeTitle: "ロイヤル大会",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T014852.000Z",
        isLadderTournament: true,
        arena: {
            id: 54000036,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000291,
            name: "Challenge_AllCards_EventDeck"
        },
        replayTag: "#0089JC2PL0Q2",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7095,
                crowns: 0,
                kingTowerHitPoints: 3522,
                princessTowersHitPoints: [3052],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Skeleton King",
                        id: 26000069,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/dCd69_wN9f8DxwuqOGtR4QgWhHIPIaTNxZ1e23RzAAc.png"
                        }
                    },
                    {
                        name: "Miner",
                        id: 26000032,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                        }
                    },
                    {
                        name: "Mortar",
                        id: 27000002,
                        level: 11,
                        starLevel: 2,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Skeleton Army",
                        id: 26000012,
                        level: 6,
                        starLevel: 3,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png"
                        }
                    },
                    {
                        name: "Dart Goblin",
                        id: 26000040,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png"
                        }
                    },
                    {
                        name: "Goblin Gang",
                        id: 26000041,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                        }
                    },
                    {
                        name: "Fireball",
                        id: 28000000,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
                        }
                    },
                ],
                elixirLeaked: 0.82
            },
        ],
        opponent: [
            {
                tag: "#2LQVJUUJ",
                name: "A ✨️",
                startingTrophies: 7500,
                crowns: 1,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [2921, 888],
                clan: {
                    tag: "#Y2JLVUU0",
                    name: "FAMILIA HN⚡",
                    badgeId: 16000144
                },
                cards: [
                    {
                        name: "Giant",
                        id: 26000003,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Axr4ox5_b7edmLsoHxBX3vmgijAIibuF6RImTbqLlXE.png"
                        }
                    },
                    {
                        name: "Skeleton King",
                        id: 26000069,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/dCd69_wN9f8DxwuqOGtR4QgWhHIPIaTNxZ1e23RzAAc.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        starLevel: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Skeleton Army",
                        id: 26000012,
                        level: 6,
                        starLevel: 3,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png"
                        }
                    },
                    {
                        name: "Arrows",
                        id: 28000001,
                        level: 11,
                        starLevel: 3,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
                        }
                    },
                    {
                        name: "Giant Snowball",
                        id: 28000017,
                        level: 11,
                        starLevel: 1,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/7MaJLa6hK9WN2_VIshuh5DIDfGwm0wEv98gXtAxLDPs.png"
                        }
                    },
                    {
                        name: "Witch",
                        id: 26000007,
                        level: 6,
                        starLevel: 2,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png"
                        }
                    },
                ],
                elixirLeaked: 0.78
            },
        ],
        challengeTitle: "Royal Tournament",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T014536.000Z",
        isLadderTournament: true,
        arena: {
            id: 54000036,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000291,
            name: "Challenge_AllCards_EventDeck"
        },
        replayTag: "#08J9YPCCQLV9",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7095,
                crowns: 1,
                kingTowerHitPoints: 4628,
                princessTowersHitPoints: [1343, 292],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Skeleton King",
                        id: 26000069,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/dCd69_wN9f8DxwuqOGtR4QgWhHIPIaTNxZ1e23RzAAc.png"
                        }
                    },
                    {
                        name: "Miner",
                        id: 26000032,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                        }
                    },
                    {
                        name: "Mortar",
                        id: 27000002,
                        level: 11,
                        starLevel: 2,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Skeleton Army",
                        id: 26000012,
                        level: 6,
                        starLevel: 3,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png"
                        }
                    },
                    {
                        name: "Dart Goblin",
                        id: 26000040,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png"
                        }
                    },
                    {
                        name: "Goblin Gang",
                        id: 26000041,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                        }
                    },
                    {
                        name: "Fireball",
                        id: 28000000,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
                        }
                    },
                ],
                elixirLeaked: 4.09
            },
        ],
        opponent: [
            {
                tag: "#9QQ9L0Y0",
                name: "wawa",
                startingTrophies: 7063,
                crowns: 0,
                kingTowerHitPoints: 4628,
                princessTowersHitPoints: [2300],
                clan: {
                    tag: "#9CUPPYYQ",
                    name: "毒撚眾一堂",
                    badgeId: 16000163
                },
                cards: [
                    {
                        name: "Royal Giant",
                        id: 26000024,
                        level: 11,
                        starLevel: 2,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/mnlRaNtmfpQx2e6mp70sLd0ND-pKPF70Cf87_agEKg4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Fisherman",
                        id: 26000061,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/U2KZ3g0wyufcuA5P2Xrn3Z3lr1WiJmc5S0IWOZHgizQ.png"
                        }
                    },
                    {
                        name: "Musketeer",
                        id: 26000014,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Tex1C48UTq9FKtAX-3tzG0FJmc9jzncUZG3bb5Vf-Ds.png"
                        }
                    },
                    {
                        name: "Electro Spirit",
                        id: 26000084,
                        level: 11,
                        starLevel: 1,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/WKd4-IAFsgPpMo7dDi9sujmYjRhOMEWiE07OUJpvD9g.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        starLevel: 3,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Lightning",
                        id: 28000007,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/fpnESbYqe5GyZmaVVYe-SEu7tE0Kxh_HZyVigzvLjks.png"
                        }
                    },
                    {
                        name: "The Log",
                        id: 28000011,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                        }
                    },
                ],
                elixirLeaked: 0.58
            },
        ],
        challengeTitle: "Royal Tournament",
        isHostedMatch: false
    },
    {
        type: "riverRacePvP",
        battleTime: "20221113T013920.000Z",
        isLadderTournament: false,
        arena: {
            id: 54000016,
            name: "Arena 19"
        },
        gameMode: {
            id: 72000062,
            name: "TripleElixir_Ladder"
        },
        replayTag: "#00C9R980P2R0",
        deckSelection: "collection",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7095,
                crowns: 0,
                kingTowerHitPoints: 6408,
                princessTowersHitPoints: [1201],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Mega Knight",
                        id: 26000055,
                        level: 5,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/O2NycChSNhn_UK9nqBXUhhC_lILkiANzPuJjtjoz0CE.png"
                        }
                    },
                    {
                        name: "Witch",
                        id: 26000007,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png"
                        }
                    },
                    {
                        name: "Flying Machine",
                        id: 26000057,
                        level: 11,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/hzKNE3QwFcrSrDDRuVW3QY_OnrDPijSiIp-PsWgFevE.png"
                        }
                    },
                    {
                        name: "Cannon Cart",
                        id: 26000054,
                        level: 8,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/aqwxRz8HXzqlMCO4WMXNA1txynjXTsLinknqsgZLbok.png"
                        }
                    },
                    {
                        name: "Goblin Hut",
                        id: 27000001,
                        level: 10,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/l8ZdzzNLcwB4u7ihGgxNFQOjCT_njFuAhZr7D6PRF7E.png"
                        }
                    },
                    {
                        name: "Furnace",
                        id: 27000010,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/iqbDiG7yYRIzvCPXdt9zPb3IvMt7F7Gi4wIPnh2x4aI.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 8,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 8,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 22.07
            },
        ],
        opponent: [
            {
                tag: "#8VPV9YR9",
                name: "€düąrdøت-يشكق™",
                startingTrophies: 6807,
                crowns: 1,
                kingTowerHitPoints: 6408,
                princessTowersHitPoints: [2856, 3765],
                clan: {
                    tag: "#LJLVJLVL",
                    name: "guatelegends",
                    badgeId: 16000142
                },
                cards: [
                    {
                        name: "Cannon Cart",
                        id: 26000054,
                        level: 9,
                        starLevel: 3,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/aqwxRz8HXzqlMCO4WMXNA1txynjXTsLinknqsgZLbok.png"
                        }
                    },
                    {
                        name: "Goblin Gang",
                        id: 26000041,
                        level: 14,
                        starLevel: 3,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                        }
                    },
                    {
                        name: "Mortar",
                        id: 27000002,
                        level: 14,
                        starLevel: 2,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png"
                        }
                    },
                    {
                        name: "Valkyrie",
                        id: 26000011,
                        level: 12,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/0lIoYf3Y_plFTzo95zZL93JVxpfb3MMgFDDhgSDGU9A.png"
                        }
                    },
                    {
                        name: "Dart Goblin",
                        id: 26000040,
                        level: 12,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png"
                        }
                    },
                    {
                        name: "The Log",
                        id: 28000011,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                        }
                    },
                    {
                        name: "Miner",
                        id: 26000032,
                        level: 6,
                        starLevel: 2,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                        }
                    },
                    {
                        name: "Bats",
                        id: 26000049,
                        level: 13,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                        }
                    },
                ],
                elixirLeaked: 13.74
            },
        ],
        isHostedMatch: false
    },
    {
        type: "riverRaceDuel",
        battleTime: "20221113T013501.000Z",
        isLadderTournament: false,
        arena: {
            id: 54000016,
            name: "Arena 19"
        },
        gameMode: {
            id: 72000267,
            name: "CW_Duel_1v1"
        },
        replayTag: "#00C9R9808QJ0",
        deckSelection: "warDeckPick",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7095,
                crowns: 1,
                kingTowerHitPoints: 6408,
                princessTowersHitPoints: [2951],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Goblin Barrel",
                        id: 28000004,
                        level: 7,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/CoZdp5PpsTH858l212lAMeJxVJ0zxv9V-f5xC8Bvj5g.png"
                        }
                    },
                    {
                        name: "Knight",
                        id: 26000000,
                        level: 14,
                        starLevel: 3,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                        }
                    },
                    {
                        name: "Ice Spirit",
                        id: 26000030,
                        level: 14,
                        starLevel: 1,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                        }
                    },
                    {
                        name: "Goblin Gang",
                        id: 26000041,
                        level: 14,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                        }
                    },
                    {
                        name: "Princess",
                        id: 26000026,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png"
                        }
                    },
                    {
                        name: "Inferno Tower",
                        id: 27000003,
                        level: 10,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
                        }
                    },
                    {
                        name: "The Log",
                        id: 28000011,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                        }
                    },
                    {
                        name: "Rocket",
                        id: 28000003,
                        level: 12,
                        starLevel: 3,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Ie07nQNK9CjhKOa4-arFAewi4EroqaA-86Xo7r5tx94.png"
                        }
                    },
                    {
                        name: "Electro Giant",
                        id: 26000085,
                        level: 8,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_uChZkNHAMq6tPb3v6A49xinOe3CnhjstOhG6OZbPYc.png"
                        }
                    },
                    {
                        name: "Dark Prince",
                        id: 26000027,
                        level: 9,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/M7fXlrKXHu2IvpSGpk36kXVstslbR08Bbxcy0jQcln8.png"
                        }
                    },
                    {
                        name: "Inferno Dragon",
                        id: 26000037,
                        level: 6,
                        starLevel: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                        }
                    },
                    {
                        name: "Mother Witch",
                        id: 26000083,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/fO-Xah8XZkYKaSK9SCp3wnzwxtvIhun9NVY-zzte1Ng.png"
                        }
                    },
                    {
                        name: "Bomber",
                        id: 26000013,
                        level: 13,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/12n1CesxKIcqVYntjxcF36EFA-ONw7Z-DoL0_rQrbdo.png"
                        }
                    },
                    {
                        name: "Goblin Cage",
                        id: 27000012,
                        level: 11,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/vD24bBgK4rSq7wx5QEbuqChtPMRFviL_ep76GwQw1yA.png"
                        }
                    },
                    {
                        name: "Tornado",
                        id: 28000012,
                        level: 9,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png"
                        }
                    },
                    {
                        name: "Lightning",
                        id: 28000007,
                        level: 8,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/fpnESbYqe5GyZmaVVYe-SEu7tE0Kxh_HZyVigzvLjks.png"
                        }
                    },
                ],
                rounds: [
                    {
                        crowns: 1,
                        kingTowerHitPoints: 2500,
                        princessTowersHitPoints: [0, 0],
                        cards: [
                            {
                                name: "Goblin Barrel",
                                id: 28000004,
                                level: 7,
                                maxLevel: 9,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/CoZdp5PpsTH858l212lAMeJxVJ0zxv9V-f5xC8Bvj5g.png"
                                }
                            },
                            {
                                name: "Knight",
                                id: 26000000,
                                level: 14,
                                starLevel: 3,
                                maxLevel: 14,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                                }
                            },
                            {
                                name: "Ice Spirit",
                                id: 26000030,
                                level: 14,
                                starLevel: 1,
                                maxLevel: 14,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                                }
                            },
                            {
                                name: "Goblin Gang",
                                id: 26000041,
                                level: 14,
                                maxLevel: 14,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                                }
                            },
                            {
                                name: "Princess",
                                id: 26000026,
                                level: 3,
                                maxLevel: 6,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png"
                                }
                            },
                            {
                                name: "Inferno Tower",
                                id: 27000003,
                                level: 10,
                                maxLevel: 12,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
                                }
                            },
                            {
                                name: "The Log",
                                id: 28000011,
                                level: 6,
                                starLevel: 1,
                                maxLevel: 6,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                                }
                            },
                            {
                                name: "Rocket",
                                id: 28000003,
                                level: 12,
                                starLevel: 3,
                                maxLevel: 12,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/Ie07nQNK9CjhKOa4-arFAewi4EroqaA-86Xo7r5tx94.png"
                                }
                            },
                        ],
                        elixirLeaked: 0.85
                    },
                    {
                        crowns: 0,
                        kingTowerHitPoints: 6408,
                        princessTowersHitPoints: [2951, 0],
                        cards: [
                            {
                                name: "Electro Giant",
                                id: 26000085,
                                level: 8,
                                maxLevel: 9,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/_uChZkNHAMq6tPb3v6A49xinOe3CnhjstOhG6OZbPYc.png"
                                }
                            },
                            {
                                name: "Dark Prince",
                                id: 26000027,
                                level: 9,
                                maxLevel: 9,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/M7fXlrKXHu2IvpSGpk36kXVstslbR08Bbxcy0jQcln8.png"
                                }
                            },
                            {
                                name: "Inferno Dragon",
                                id: 26000037,
                                level: 6,
                                starLevel: 3,
                                maxLevel: 6,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                                }
                            },
                            {
                                name: "Mother Witch",
                                id: 26000083,
                                level: 3,
                                maxLevel: 6,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/fO-Xah8XZkYKaSK9SCp3wnzwxtvIhun9NVY-zzte1Ng.png"
                                }
                            },
                            {
                                name: "Bomber",
                                id: 26000013,
                                level: 13,
                                maxLevel: 14,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/12n1CesxKIcqVYntjxcF36EFA-ONw7Z-DoL0_rQrbdo.png"
                                }
                            },
                            {
                                name: "Goblin Cage",
                                id: 27000012,
                                level: 11,
                                maxLevel: 12,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/vD24bBgK4rSq7wx5QEbuqChtPMRFviL_ep76GwQw1yA.png"
                                }
                            },
                            {
                                name: "Tornado",
                                id: 28000012,
                                level: 9,
                                starLevel: 1,
                                maxLevel: 9,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png"
                                }
                            },
                            {
                                name: "Lightning",
                                id: 28000007,
                                level: 8,
                                starLevel: 1,
                                maxLevel: 9,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/fpnESbYqe5GyZmaVVYe-SEu7tE0Kxh_HZyVigzvLjks.png"
                                }
                            },
                        ],
                        elixirLeaked: 2.78
                    },
                ],
                elixirLeaked: 2.82
            },
        ],
        opponent: [
            {
                tag: "#RGVCQ99U",
                name: "13CHASMS",
                startingTrophies: 7064,
                crowns: 3,
                kingTowerHitPoints: 6408,
                princessTowersHitPoints: [2925, 3475],
                clan: {
                    tag: "#LQYLCL0Q",
                    name: "Mr6",
                    badgeId: 16000139
                },
                cards: [
                    {
                        name: "Giant Skeleton",
                        id: 26000020,
                        level: 9,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/0p0gd0XaVRu1Hb1iSG1hTYbz2AN6aEiZnhaAib5O8Z8.png"
                        }
                    },
                    {
                        name: "Arrows",
                        id: 28000001,
                        level: 14,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
                        }
                    },
                    {
                        name: "Mother Witch",
                        id: 26000083,
                        level: 6,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/fO-Xah8XZkYKaSK9SCp3wnzwxtvIhun9NVY-zzte1Ng.png"
                        }
                    },
                    {
                        name: "Royal Hogs",
                        id: 26000059,
                        level: 12,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/ASSQJG_MoVq9e81HZzo4bynMnyLNpNJMfSLb3hqydOw.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 12,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Mirror",
                        id: 28000006,
                        level: 9,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png"
                        }
                    },
                    {
                        name: "Fisherman",
                        id: 26000061,
                        level: 6,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/U2KZ3g0wyufcuA5P2Xrn3Z3lr1WiJmc5S0IWOZHgizQ.png"
                        }
                    },
                    {
                        name: "Dark Prince",
                        id: 26000027,
                        level: 9,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/M7fXlrKXHu2IvpSGpk36kXVstslbR08Bbxcy0jQcln8.png"
                        }
                    },
                    {
                        name: "P.E.K.K.A",
                        id: 26000004,
                        level: 9,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png"
                        }
                    },
                    {
                        name: "Zap",
                        id: 28000008,
                        level: 14,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                        }
                    },
                    {
                        name: "Battle Ram",
                        id: 26000036,
                        level: 12,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/dyc50V2cplKi4H7pq1B3I36pl_sEH5DQrNHboS_dbbM.png"
                        }
                    },
                    {
                        name: "Earthquake",
                        id: 28000014,
                        level: 12,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/XeQXcrUu59C52DslyZVwCnbi4yamID-WxfVZLShgZmE.png"
                        }
                    },
                    {
                        name: "Baby Dragon",
                        id: 26000015,
                        level: 9,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/cjC9n4AvEZJ3urkVh-rwBkJ-aRSsydIMqSAV48hAih0.png"
                        }
                    },
                    {
                        name: "Hunter",
                        id: 26000044,
                        level: 9,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/VNabB1WKnYtYRSG7X_FZfnZjQDHTBs9A96OGMFmecrA.png"
                        }
                    },
                    {
                        name: "Cannon Cart",
                        id: 26000054,
                        level: 9,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/aqwxRz8HXzqlMCO4WMXNA1txynjXTsLinknqsgZLbok.png"
                        }
                    },
                    {
                        name: "Skeletons",
                        id: 26000010,
                        level: 14,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png"
                        }
                    },
                ],
                rounds: [
                    {
                        crowns: 2,
                        kingTowerHitPoints: 6408,
                        princessTowersHitPoints: [3093, 0],
                        cards: [
                            {
                                name: "Giant Skeleton",
                                id: 26000020,
                                level: 9,
                                maxLevel: 9,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/0p0gd0XaVRu1Hb1iSG1hTYbz2AN6aEiZnhaAib5O8Z8.png"
                                }
                            },
                            {
                                name: "Arrows",
                                id: 28000001,
                                level: 14,
                                maxLevel: 14,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
                                }
                            },
                            {
                                name: "Mother Witch",
                                id: 26000083,
                                level: 6,
                                maxLevel: 6,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/fO-Xah8XZkYKaSK9SCp3wnzwxtvIhun9NVY-zzte1Ng.png"
                                }
                            },
                            {
                                name: "Royal Hogs",
                                id: 26000059,
                                level: 12,
                                maxLevel: 12,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/ASSQJG_MoVq9e81HZzo4bynMnyLNpNJMfSLb3hqydOw.png"
                                }
                            },
                            {
                                name: "Zappies",
                                id: 26000052,
                                level: 12,
                                maxLevel: 12,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                                }
                            },
                            {
                                name: "Mirror",
                                id: 28000006,
                                level: 9,
                                maxLevel: 9,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png"
                                }
                            },
                            {
                                name: "Fisherman",
                                id: 26000061,
                                level: 6,
                                maxLevel: 6,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/U2KZ3g0wyufcuA5P2Xrn3Z3lr1WiJmc5S0IWOZHgizQ.png"
                                }
                            },
                            {
                                name: "Dark Prince",
                                id: 26000027,
                                level: 9,
                                maxLevel: 9,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/M7fXlrKXHu2IvpSGpk36kXVstslbR08Bbxcy0jQcln8.png"
                                }
                            },
                        ],
                        elixirLeaked: 5.87
                    },
                    {
                        crowns: 1,
                        kingTowerHitPoints: 6408,
                        princessTowersHitPoints: [2925, 3475],
                        cards: [
                            {
                                name: "P.E.K.K.A",
                                id: 26000004,
                                level: 9,
                                maxLevel: 9,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png"
                                }
                            },
                            {
                                name: "Zap",
                                id: 28000008,
                                level: 14,
                                maxLevel: 14,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                                }
                            },
                            {
                                name: "Battle Ram",
                                id: 26000036,
                                level: 12,
                                maxLevel: 12,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/dyc50V2cplKi4H7pq1B3I36pl_sEH5DQrNHboS_dbbM.png"
                                }
                            },
                            {
                                name: "Earthquake",
                                id: 28000014,
                                level: 12,
                                maxLevel: 12,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/XeQXcrUu59C52DslyZVwCnbi4yamID-WxfVZLShgZmE.png"
                                }
                            },
                            {
                                name: "Baby Dragon",
                                id: 26000015,
                                level: 9,
                                maxLevel: 9,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/cjC9n4AvEZJ3urkVh-rwBkJ-aRSsydIMqSAV48hAih0.png"
                                }
                            },
                            {
                                name: "Hunter",
                                id: 26000044,
                                level: 9,
                                maxLevel: 9,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/VNabB1WKnYtYRSG7X_FZfnZjQDHTBs9A96OGMFmecrA.png"
                                }
                            },
                            {
                                name: "Cannon Cart",
                                id: 26000054,
                                level: 9,
                                maxLevel: 9,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/aqwxRz8HXzqlMCO4WMXNA1txynjXTsLinknqsgZLbok.png"
                                }
                            },
                            {
                                name: "Skeletons",
                                id: 26000010,
                                level: 14,
                                maxLevel: 14,
                                used: true,
                                iconUrls: {
                                    medium: "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png"
                                }
                            },
                        ],
                        elixirLeaked: 5.28
                    },
                ],
                elixirLeaked: 5.28
            },
        ],
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T012609.000Z",
        challengeId: 73006412,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 9,
        replayTag: "#00C9R92VV9G0",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7095,
                crowns: 1,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [2848, 1703],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 0.0
            },
        ],
        opponent: [
            {
                tag: "#9GPP9UGY",
                name: "The Chancer",
                startingTrophies: 5934,
                crowns: 0,
                kingTowerHitPoints: 4600,
                princessTowersHitPoints: [2881],
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Royal Ghost",
                        id: 26000050,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                        }
                    },
                    {
                        name: "Lumberjack",
                        id: 26000035,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/E6RWrnCuk13xMX5OE1EQtLEKTZQV6B78d00y8PlXt6Q.png"
                        }
                    },
                    {
                        name: "Princess",
                        id: 26000026,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png"
                        }
                    },
                    {
                        name: "Freeze",
                        id: 28000005,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/I1M20_Zs_p_BS1NaNIVQjuMJkYI_1-ePtwYZahn0JXQ.png"
                        }
                    },
                    {
                        name: "Bats",
                        id: 26000049,
                        level: 11,
                        starLevel: 2,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                        }
                    },
                    {
                        name: "Goblin Gang",
                        id: 26000041,
                        level: 11,
                        starLevel: 3,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                        }
                    },
                ],
                elixirLeaked: 0.32
            },
        ],
        challengeTitle: "Monk Launch Party Chain #2",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T012259.000Z",
        challengeId: 73006412,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 8,
        replayTag: "#08P9QP800P89",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7095,
                crowns: 1,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [2537, 3052],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 9.41
            },
        ],
        opponent: [
            {
                tag: "#QQ2VQLJP",
                name: "الزعيم⚡️",
                startingTrophies: 5539,
                crowns: 0,
                kingTowerHitPoints: 4600,
                princessTowersHitPoints: [2666],
                clan: {
                    tag: "#Y2228JV",
                    name: "الجنوب",
                    badgeId: 16000024
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "The Log",
                        id: 28000011,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                        }
                    },
                    {
                        name: "Sparky",
                        id: 26000033,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2GKMkBrArZXgQxf2ygFjDs4VvGYPbx8F6Lj_68iVhIM.png"
                        }
                    },
                    {
                        name: "Skeleton Barrel",
                        id: 26000056,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png"
                        }
                    },
                    {
                        name: "Electro Spirit",
                        id: 26000084,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/WKd4-IAFsgPpMo7dDi9sujmYjRhOMEWiE07OUJpvD9g.png"
                        }
                    },
                    {
                        name: "Tesla",
                        id: 27000006,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/OiwnGrxFMNiHetYEerE-UZt0L_uYNzFY7qV_CA_OxR4.png"
                        }
                    },
                    {
                        name: "Giant Skeleton",
                        id: 26000020,
                        level: 6,
                        starLevel: 2,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/0p0gd0XaVRu1Hb1iSG1hTYbz2AN6aEiZnhaAib5O8Z8.png"
                        }
                    },
                    {
                        name: "Three Musketeers",
                        id: 26000028,
                        level: 9,
                        starLevel: 1,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_J2GhbkX3vswaFk1wG-dopwiHyNc_YiPhwroiKF3Mek.png"
                        }
                    },
                ],
                elixirLeaked: 3.75
            },
        ],
        challengeTitle: "Monk Launch Party Chain #2",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T011947.000Z",
        challengeId: 73006412,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 7,
        replayTag: "#09Y8RCGGP0CL",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7095,
                crowns: 3,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [3052, 3052],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 0.36
            },
        ],
        opponent: [
            {
                tag: "#GV2UPQ2Y",
                name: "etrom",
                startingTrophies: 5427,
                crowns: 0,
                kingTowerHitPoints: 0,
                princessTowersHitPoints: null,
                clan: {
                    tag: "#2UG290GY",
                    name: "CAPA PRETA",
                    badgeId: 16000029
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Electro Dragon",
                        id: 26000063,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/tN9h6lnMNPCNsx0LMFmvpHgznbDZ1fBRkx-C7UfNmfY.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Wizard",
                        id: 26000017,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Mej7vnv4H_3p_8qPs_N6_GKahy6HDr7pU7i9eTHS84U.png"
                        }
                    },
                    {
                        name: "Elixir Golem",
                        id: 26000067,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/puhMsZjCIqy21HW3hYxjrk_xt8NIPyFqjRy-BeLKZwo.png"
                        }
                    },
                    {
                        name: "Battle Healer",
                        id: 26000068,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/KdwXcoigS2Kg-cgA7BJJIANbUJG6SNgjetRQ-MegZ08.png"
                        }
                    },
                    {
                        name: "Tornado",
                        id: 28000012,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png"
                        }
                    },
                    {
                        name: "Rage",
                        id: 28000002,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/bGP21OOmcpHMJ5ZA79bHVV2D-NzPtDkvBskCNJb7pg0.png"
                        }
                    },
                ],
                elixirLeaked: 0.13
            },
        ],
        challengeTitle: "Monk Launch Party Chain #2",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T011801.000Z",
        challengeId: 73006412,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 6,
        replayTag: "#02P9RQCGG99V",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7095,
                crowns: 3,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [3052, 2322],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 0.08
            },
        ],
        opponent: [
            {
                tag: "#GQ9RC2GL",
                name: "worx",
                startingTrophies: 6151,
                crowns: 0,
                kingTowerHitPoints: 0,
                princessTowersHitPoints: null,
                clan: {
                    tag: "#9G8GGYUC",
                    name: "4N eSports",
                    badgeId: 16000121
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        starLevel: 3,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Cannon",
                        id: 27000000,
                        level: 11,
                        starLevel: 3,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/nZK1y-beLxO5vnlyUhK6-2zH2NzXJwqykcosqQ1cmZ8.png"
                        }
                    },
                    {
                        name: "Minions",
                        id: 26000005,
                        level: 11,
                        starLevel: 3,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/yHGpoEnmUWPGV_hBbhn-Kk-Bs838OjGzWzJJlQpQKQA.png"
                        }
                    },
                    {
                        name: "Bats",
                        id: 26000049,
                        level: 11,
                        starLevel: 2,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                        }
                    },
                    {
                        name: "Dart Goblin",
                        id: 26000040,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png"
                        }
                    },
                    {
                        name: "Royal Giant",
                        id: 26000024,
                        level: 11,
                        starLevel: 2,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/mnlRaNtmfpQx2e6mp70sLd0ND-pKPF70Cf87_agEKg4.png"
                        }
                    },
                    {
                        name: "The Log",
                        id: 28000011,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                        }
                    },
                ],
                elixirLeaked: 1.1
            },
        ],
        challengeTitle: "Monk Launch Party Chain #2",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T011600.000Z",
        challengeId: 73006412,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 6,
        replayTag: "#02Y9RQJ2U0C2",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7095,
                crowns: 0,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [1727],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 2.53
            },
        ],
        opponent: [
            {
                tag: "#9GLC8R0LQ",
                name: "<c6>ImAkiles!⚔️",
                startingTrophies: 6612,
                crowns: 1,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [14, 2346],
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "The Log",
                        id: 28000011,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                        }
                    },
                    {
                        name: "Miner",
                        id: 26000032,
                        level: 3,
                        starLevel: 2,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        starLevel: 3,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Ice Spirit",
                        id: 26000030,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                        }
                    },
                    {
                        name: "Bomb Tower",
                        id: 27000004,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/rirYRyHPc97emRjoH-c1O8uZCBzPVnToaGuNGusF3TQ.png"
                        }
                    },
                ],
                elixirLeaked: 1.0
            },
        ],
        challengeTitle: "Monk Launch Party Chain #2",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T011114.000Z",
        challengeId: 73006412,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 5,
        replayTag: "#00C9R92VQJ0L",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7095,
                crowns: 2,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [2376, 2738],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 1.46
            },
        ],
        opponent: [
            {
                tag: "#GCQQ09R9",
                name: "Jwo",
                startingTrophies: 6560,
                crowns: 0,
                kingTowerHitPoints: 872,
                princessTowersHitPoints: null,
                clan: {
                    tag: "#8LQUQ0G",
                    name: "SG Wolves",
                    badgeId: 16000164
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Mirror",
                        id: 28000006,
                        level: 6,
                        starLevel: 3,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png"
                        }
                    },
                    {
                        name: "Tornado",
                        id: 28000012,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png"
                        }
                    },
                    {
                        name: "Electro Giant",
                        id: 26000085,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_uChZkNHAMq6tPb3v6A49xinOe3CnhjstOhG6OZbPYc.png"
                        }
                    },
                    {
                        name: "Baby Dragon",
                        id: 26000015,
                        level: 6,
                        starLevel: 2,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/cjC9n4AvEZJ3urkVh-rwBkJ-aRSsydIMqSAV48hAih0.png"
                        }
                    },
                    {
                        name: "Night Witch",
                        id: 26000048,
                        level: 3,
                        starLevel: 2,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/NpCrXDEDBBJgNv9QrBAcJmmMFbS7pe3KCY8xJ5VB18A.png"
                        }
                    },
                    {
                        name: "Lightning",
                        id: 28000007,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/fpnESbYqe5GyZmaVVYe-SEu7tE0Kxh_HZyVigzvLjks.png"
                        }
                    },
                ],
                elixirLeaked: 1.48
            },
        ],
        challengeTitle: "Monk Launch Party Chain #2",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T010803.000Z",
        challengeId: 73006412,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 4,
        replayTag: "#02Y9RQJ2R0QP",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7095,
                crowns: 1,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [2640, 2944],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 0.84
            },
        ],
        opponent: [
            {
                tag: "#Y299R2Y2",
                name: "Pseudohuman",
                startingTrophies: 6560,
                crowns: 0,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [1142],
                clan: {
                    tag: "#29YU089C",
                    name: "Twitch SirTagCR",
                    badgeId: 16000142
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Electro Giant",
                        id: 26000085,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_uChZkNHAMq6tPb3v6A49xinOe3CnhjstOhG6OZbPYc.png"
                        }
                    },
                    {
                        name: "Dart Goblin",
                        id: 26000040,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png"
                        }
                    },
                    {
                        name: "Princess",
                        id: 26000026,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png"
                        }
                    },
                    {
                        name: "Skeleton Army",
                        id: 26000012,
                        level: 6,
                        starLevel: 3,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png"
                        }
                    },
                    {
                        name: "Bats",
                        id: 26000049,
                        level: 11,
                        starLevel: 2,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                        }
                    },
                    {
                        name: "Elite Barbarians",
                        id: 26000043,
                        level: 11,
                        starLevel: 2,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/C88C5JH_F3lLZj6K-tLcMo5DPjrFmvzIb1R2M6xCfTE.png"
                        }
                    },
                    {
                        name: "Mirror",
                        id: 28000006,
                        level: 6,
                        starLevel: 2,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png"
                        }
                    },
                ],
                elixirLeaked: 1.53
            },
        ],
        challengeTitle: "Monk Launch Party Chain #2",
        isHostedMatch: false
    },
    {
        type: "PvP",
        battleTime: "20221113T010426.000Z",
        isLadderTournament: false,
        arena: {
            id: 54000016,
            name: "Arena 19"
        },
        gameMode: {
            id: 72000044,
            name: "Ladder_GoldRush"
        },
        replayTag: "#00C9R92VY8RP",
        deckSelection: "collection",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7066,
                trophyChange: 29,
                crowns: 1,
                kingTowerHitPoints: 6254,
                princessTowersHitPoints: [260, 4032],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Mortar",
                        id: 27000002,
                        level: 14,
                        starLevel: 2,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png"
                        }
                    },
                    {
                        name: "Knight",
                        id: 26000000,
                        level: 14,
                        starLevel: 3,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                        }
                    },
                    {
                        name: "Archers",
                        id: 26000001,
                        level: 14,
                        starLevel: 2,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png"
                        }
                    },
                    {
                        name: "Ice Spirit",
                        id: 26000030,
                        level: 14,
                        starLevel: 1,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                        }
                    },
                    {
                        name: "Skeletons",
                        id: 26000010,
                        level: 14,
                        starLevel: 3,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png"
                        }
                    },
                    {
                        name: "The Log",
                        id: 28000011,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                        }
                    },
                    {
                        name: "Tornado",
                        id: 28000012,
                        level: 9,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png"
                        }
                    },
                    {
                        name: "Rocket",
                        id: 28000003,
                        level: 12,
                        starLevel: 3,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Ie07nQNK9CjhKOa4-arFAewi4EroqaA-86Xo7r5tx94.png"
                        }
                    },
                ],
                elixirLeaked: 0.53
            },
        ],
        opponent: [
            {
                tag: "#82YR0P2VJ",
                name: "たかティーー",
                startingTrophies: 7058,
                trophyChange: -29,
                crowns: 0,
                kingTowerHitPoints: 6330,
                princessTowersHitPoints: [3877],
                cards: [
                    {
                        name: "Mortar",
                        id: 27000002,
                        level: 14,
                        starLevel: 2,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png"
                        }
                    },
                    {
                        name: "Skeletons",
                        id: 26000010,
                        level: 14,
                        starLevel: 1,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png"
                        }
                    },
                    {
                        name: "Miner",
                        id: 26000032,
                        level: 6,
                        starLevel: 2,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                        }
                    },
                    {
                        name: "The Log",
                        id: 28000011,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 5,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Ice Spirit",
                        id: 26000030,
                        level: 14,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                        }
                    },
                    {
                        name: "Valkyrie",
                        id: 26000011,
                        level: 12,
                        starLevel: 1,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/0lIoYf3Y_plFTzo95zZL93JVxpfb3MMgFDDhgSDGU9A.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 9,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 1.29
            },
        ],
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T005943.000Z",
        challengeId: 73006412,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 3,
        replayTag: "#08Y9QPRVV088",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7066,
                crowns: 1,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [3052, 2917],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 2.77
            },
        ],
        opponent: [
            {
                tag: "#LQR92829",
                name: "Drexler217",
                startingTrophies: 5850,
                crowns: 0,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [2512],
                clan: {
                    tag: "#UQG99",
                    name: "Laurens Thunder",
                    badgeId: 16000010
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Mirror",
                        id: 28000006,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png"
                        }
                    },
                    {
                        name: "Elixir Collector",
                        id: 27000007,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/BGLo3Grsp81c72EpxLLk-Sofk3VY56zahnUNOv3JcT0.png"
                        }
                    },
                    {
                        name: "The Log",
                        id: 28000011,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                        }
                    },
                    {
                        name: "Zap",
                        id: 28000008,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                        }
                    },
                    {
                        name: "Rage",
                        id: 28000002,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/bGP21OOmcpHMJ5ZA79bHVV2D-NzPtDkvBskCNJb7pg0.png"
                        }
                    },
                    {
                        name: "Archers",
                        id: 26000001,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png"
                        }
                    },
                ],
                elixirLeaked: 5.16
            },
        ],
        challengeTitle: "Monk Launch Party Chain #2",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T005457.000Z",
        challengeId: 73006412,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 2,
        replayTag: "#00C9R92V2GQU",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7066,
                crowns: 2,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [1728, 2531],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 8.41
            },
        ],
        opponent: [
            {
                tag: "#22L0J02V0",
                name: "CATALINA",
                startingTrophies: 5303,
                crowns: 0,
                kingTowerHitPoints: 4165,
                princessTowersHitPoints: null,
                clan: {
                    tag: "#GP0VRCGY",
                    name: "ok",
                    badgeId: 16000161
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Valkyrie",
                        id: 26000011,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/0lIoYf3Y_plFTzo95zZL93JVxpfb3MMgFDDhgSDGU9A.png"
                        }
                    },
                    {
                        name: "Magic Archer",
                        id: 26000062,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Avli3W7BxU9HQ2SoLiXnBgGx25FoNXUSFm7OcAk68ek.png"
                        }
                    },
                    {
                        name: "Witch",
                        id: 26000007,
                        level: 6,
                        starLevel: 2,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png"
                        }
                    },
                    {
                        name: "Balloon",
                        id: 26000006,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/qBipxLo-3hhCnPrApp2Nn3b2NgrSrvwzWytvREev0CY.png"
                        }
                    },
                    {
                        name: "Fireball",
                        id: 28000000,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
                        }
                    },
                    {
                        name: "Wizard",
                        id: 26000017,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Mej7vnv4H_3p_8qPs_N6_GKahy6HDr7pU7i9eTHS84U.png"
                        }
                    },
                    {
                        name: "Electro Giant",
                        id: 26000085,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_uChZkNHAMq6tPb3v6A49xinOe3CnhjstOhG6OZbPYc.png"
                        }
                    },
                ],
                elixirLeaked: 7.41
            },
        ],
        challengeTitle: "Monk Launch Party Chain #2",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T005129.000Z",
        challengeId: 73006412,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 1,
        replayTag: "#0988JUG08Q92",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7066,
                crowns: 1,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [3052, 2311],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 3.93
            },
        ],
        opponent: [
            {
                tag: "#80UUQRPUU",
                name: "いんこ",
                startingTrophies: 6000,
                crowns: 0,
                kingTowerHitPoints: 4662,
                princessTowersHitPoints: [2860],
                clan: {
                    tag: "#LRQCYPLR",
                    name: "ずっと真夜中でいいのに。",
                    badgeId: 16000032
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Mirror",
                        id: 28000006,
                        level: 6,
                        starLevel: 3,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png"
                        }
                    },
                    {
                        name: "The Log",
                        id: 28000011,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                    {
                        name: "Bomb Tower",
                        id: 27000004,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/rirYRyHPc97emRjoH-c1O8uZCBzPVnToaGuNGusF3TQ.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                ],
                elixirLeaked: 6.53
            },
        ],
        challengeTitle: "Monk Launch Party Chain #2",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T004812.000Z",
        challengeId: 73006412,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 0,
        replayTag: "#00C9R92UUVUR",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7066,
                crowns: 1,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [3052, 711],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 6.3
            },
        ],
        opponent: [
            {
                tag: "#2YRGURG9",
                name: "Anol Beads",
                startingTrophies: 5860,
                crowns: 0,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [2588],
                clan: {
                    tag: "#2Q9PUQU",
                    name: "Ruthless Royals",
                    badgeId: 16000015
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Archers",
                        id: 26000001,
                        level: 11,
                        starLevel: 1,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png"
                        }
                    },
                    {
                        name: "Ice Golem",
                        id: 26000038,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png"
                        }
                    },
                    {
                        name: "Fireball",
                        id: 28000000,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
                        }
                    },
                    {
                        name: "Skeletons",
                        id: 26000010,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png"
                        }
                    },
                    {
                        name: "The Log",
                        id: 28000011,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                        }
                    },
                    {
                        name: "X-Bow",
                        id: 27000008,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/zVQ9Hme1hlj9Dc6e1ORl9xWwglcSrP7ejow5mAhLUJc.png"
                        }
                    },
                    {
                        name: "Tesla",
                        id: 27000006,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/OiwnGrxFMNiHetYEerE-UZt0L_uYNzFY7qV_CA_OxR4.png"
                        }
                    },
                ],
                elixirLeaked: 3.28
            },
        ],
        challengeTitle: "Monk Launch Party Chain #2",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T004142.000Z",
        challengeId: 73006411,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 5,
        replayTag: "#00C9R92UJLCR",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7066,
                crowns: 1,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [2809, 2697],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 4.38
            },
        ],
        opponent: [
            {
                tag: "#QP98V0QL",
                name: "YaşarBey.#",
                startingTrophies: 6399,
                crowns: 0,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [2592],
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Electro Wizard",
                        id: 26000042,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Dart Goblin",
                        id: 26000040,
                        level: 9,
                        starLevel: 1,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png"
                        }
                    },
                    {
                        name: "Bats",
                        id: 26000049,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                        }
                    },
                    {
                        name: "Magic Archer",
                        id: 26000062,
                        level: 3,
                        starLevel: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Avli3W7BxU9HQ2SoLiXnBgGx25FoNXUSFm7OcAk68ek.png"
                        }
                    },
                    {
                        name: "Zap",
                        id: 28000008,
                        level: 11,
                        starLevel: 1,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                        }
                    },
                    {
                        name: "P.E.K.K.A",
                        id: 26000004,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png"
                        }
                    },
                ],
                elixirLeaked: 2.03
            },
        ],
        challengeTitle: "Monk Launch Party Chain #1",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T003749.000Z",
        challengeId: 73006411,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 4,
        replayTag: "#0928JV8JG9P0",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7066,
                crowns: 3,
                kingTowerHitPoints: 1691,
                princessTowersHitPoints: [3052],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 2.0
            },
        ],
        opponent: [
            {
                tag: "#8V0J899L9",
                name: "Emanuel2",
                startingTrophies: 5521,
                crowns: 1,
                kingTowerHitPoints: 0,
                princessTowersHitPoints: null,
                clan: {
                    tag: "#PPG2GG2L",
                    name: "Brasil eSports",
                    badgeId: 16000058
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Witch",
                        id: 26000007,
                        level: 6,
                        starLevel: 2,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png"
                        }
                    },
                    {
                        name: "Mega Knight",
                        id: 26000055,
                        level: 3,
                        starLevel: 2,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/O2NycChSNhn_UK9nqBXUhhC_lILkiANzPuJjtjoz0CE.png"
                        }
                    },
                    {
                        name: "Rage",
                        id: 28000002,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/bGP21OOmcpHMJ5ZA79bHVV2D-NzPtDkvBskCNJb7pg0.png"
                        }
                    },
                    {
                        name: "Wizard",
                        id: 26000017,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Mej7vnv4H_3p_8qPs_N6_GKahy6HDr7pU7i9eTHS84U.png"
                        }
                    },
                    {
                        name: "Arrows",
                        id: 28000001,
                        level: 11,
                        starLevel: 3,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
                        }
                    },
                    {
                        name: "Ram Rider",
                        id: 26000051,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QaJyerT7f7oMyZ3Fv1glKymtLSvx7YUXisAulxl7zRI.png"
                        }
                    },
                    {
                        name: "Mirror",
                        id: 28000006,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png"
                        }
                    },
                ],
                elixirLeaked: 2.63
            },
        ],
        challengeTitle: "Monk Launch Party Chain #1",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T003517.000Z",
        challengeId: 73006411,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 3,
        replayTag: "#00C9R92UG0QV",
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7066,
                crowns: 2,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [2647, 2235],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 3.77
            },
        ],
        opponent: [
            {
                tag: "#QR2RQJPP",
                name: "ghg",
                startingTrophies: 5660,
                crowns: 0,
                kingTowerHitPoints: 876,
                princessTowersHitPoints: null,
                clan: {
                    tag: "#99UGJQYG",
                    name: "!!!UKRAINE!!!",
                    badgeId: 16000175
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Dart Goblin",
                        id: 26000040,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png"
                        }
                    },
                    {
                        name: "Goblin Barrel",
                        id: 28000004,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/CoZdp5PpsTH858l212lAMeJxVJ0zxv9V-f5xC8Bvj5g.png"
                        }
                    },
                    {
                        name: "Cannon",
                        id: 27000000,
                        level: 11,
                        starLevel: 3,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/nZK1y-beLxO5vnlyUhK6-2zH2NzXJwqykcosqQ1cmZ8.png"
                        }
                    },
                    {
                        name: "Bomber",
                        id: 26000013,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/12n1CesxKIcqVYntjxcF36EFA-ONw7Z-DoL0_rQrbdo.png"
                        }
                    },
                    {
                        name: "Goblin Gang",
                        id: 26000041,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                        }
                    },
                    {
                        name: "Ice Spirit",
                        id: 26000030,
                        level: 11,
                        starLevel: 1,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                        }
                    },
                    {
                        name: "Arrows",
                        id: 28000001,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
                        }
                    },
                ],
                elixirLeaked: 4.41
            },
        ],
        challengeTitle: "Monk Launch Party Chain #1",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T003205.000Z",
        challengeId: 73006411,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 2,
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7066,
                crowns: 3,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [3052, 2511],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 1.17
            },
        ],
        opponent: [
            {
                tag: "#PULQGPJC",
                name: "Ýştøş",
                startingTrophies: 5570,
                crowns: 0,
                kingTowerHitPoints: 0,
                princessTowersHitPoints: null,
                clan: {
                    tag: "#QQJ8L8PY",
                    name: "ActifH24",
                    badgeId: 16000078
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Fireball",
                        id: 28000000,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
                        }
                    },
                    {
                        name: "Elixir Golem",
                        id: 26000067,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/puhMsZjCIqy21HW3hYxjrk_xt8NIPyFqjRy-BeLKZwo.png"
                        }
                    },
                    {
                        name: "Mirror",
                        id: 28000006,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png"
                        }
                    },
                    {
                        name: "Goblin Gang",
                        id: 26000041,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                        }
                    },
                    {
                        name: "Battle Healer",
                        id: 26000068,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/KdwXcoigS2Kg-cgA7BJJIANbUJG6SNgjetRQ-MegZ08.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Magic Archer",
                        id: 26000062,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Avli3W7BxU9HQ2SoLiXnBgGx25FoNXUSFm7OcAk68ek.png"
                        }
                    },
                ],
                elixirLeaked: 6.66
            },
        ],
        challengeTitle: "Monk Launch Party Chain #1",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T002956.000Z",
        challengeId: 73006411,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 1,
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7066,
                crowns: 3,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [3052, 2646],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 0.82
            },
        ],
        opponent: [
            {
                tag: "#C8V0YU09",
                name: "ShieldMaiden",
                startingTrophies: 5213,
                crowns: 0,
                kingTowerHitPoints: 0,
                princessTowersHitPoints: null,
                clan: {
                    tag: "#22LGP9G8",
                    name: "DARK SYNERGY",
                    badgeId: 16000139
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Witch",
                        id: 26000007,
                        level: 6,
                        starLevel: 2,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png"
                        }
                    },
                    {
                        name: "Miner",
                        id: 26000032,
                        level: 3,
                        starLevel: 2,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                        }
                    },
                    {
                        name: "Barbarian Hut",
                        id: 27000005,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/ho0nOG2y3Ch86elHHcocQs8Fv_QNe0cFJ2CijsxABZA.png"
                        }
                    },
                    {
                        name: "Rage",
                        id: 28000002,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/bGP21OOmcpHMJ5ZA79bHVV2D-NzPtDkvBskCNJb7pg0.png"
                        }
                    },
                    {
                        name: "Mother Witch",
                        id: 26000083,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/fO-Xah8XZkYKaSK9SCp3wnzwxtvIhun9NVY-zzte1Ng.png"
                        }
                    },
                    {
                        name: "Mega Knight",
                        id: 26000055,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/O2NycChSNhn_UK9nqBXUhhC_lILkiANzPuJjtjoz0CE.png"
                        }
                    },
                    {
                        name: "Royal Giant",
                        id: 26000024,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/mnlRaNtmfpQx2e6mp70sLd0ND-pKPF70Cf87_agEKg4.png"
                        }
                    },
                ],
                elixirLeaked: 0.0
            },
        ],
        challengeTitle: "Monk Launch Party Chain #1",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T002820.000Z",
        challengeId: 73006411,
        isLadderTournament: false,
        arena: {
            id: 54000066,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000325,
            name: "Event_Monk_Tease"
        },
        challengeWinCountBefore: 0,
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7066,
                crowns: 1,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [2199, 2828],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                ],
                elixirLeaked: 2.64
            },
        ],
        opponent: [
            {
                tag: "#2ULC9QUGR",
                name: "스프리",
                startingTrophies: 5540,
                crowns: 0,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [2936],
                clan: {
                    tag: "#8LRRJV00",
                    name: "KOREA",
                    badgeId: 16000126
                },
                cards: [
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                    {
                        name: "Skeletons",
                        id: 26000010,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png"
                        }
                    },
                    {
                        name: "Tombstone",
                        id: 27000009,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
                        }
                    },
                    {
                        name: "Graveyard",
                        id: 28000010,
                        level: 3,
                        starLevel: 2,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Zappies",
                        id: 26000052,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
                        }
                    },
                    {
                        name: "Barbarian Barrel",
                        id: 28000015,
                        level: 6,
                        starLevel: 1,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png"
                        }
                    },
                ],
                elixirLeaked: 2.38
            },
        ],
        challengeTitle: "Monk Launch Party Chain #1",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T002021.000Z",
        isLadderTournament: true,
        arena: {
            id: 54000036,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000291,
            name: "Challenge_AllCards_EventDeck"
        },
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7066,
                crowns: 1,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [3052, 1048],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Skeleton King",
                        id: 26000069,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/dCd69_wN9f8DxwuqOGtR4QgWhHIPIaTNxZ1e23RzAAc.png"
                        }
                    },
                    {
                        name: "Miner",
                        id: 26000032,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                        }
                    },
                    {
                        name: "Mortar",
                        id: 27000002,
                        level: 11,
                        starLevel: 2,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Skeleton Army",
                        id: 26000012,
                        level: 6,
                        starLevel: 3,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png"
                        }
                    },
                    {
                        name: "Dart Goblin",
                        id: 26000040,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png"
                        }
                    },
                    {
                        name: "Goblin Gang",
                        id: 26000041,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                        }
                    },
                    {
                        name: "Fireball",
                        id: 28000000,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
                        }
                    },
                ],
                elixirLeaked: 7.69
            },
        ],
        opponent: [
            {
                tag: "#RRR2Y888J",
                name: "PIEROMASTER",
                startingTrophies: 5503,
                crowns: 0,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [3052],
                clan: {
                    tag: "#PR98QJGV",
                    name: "Red devils",
                    badgeId: 16000145
                },
                cards: [
                    {
                        name: "Musketeer",
                        id: 26000014,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Tex1C48UTq9FKtAX-3tzG0FJmc9jzncUZG3bb5Vf-Ds.png"
                        }
                    },
                    {
                        name: "Fireball",
                        id: 28000000,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
                        }
                    },
                    {
                        name: "The Log",
                        id: 28000011,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                        }
                    },
                    {
                        name: "Cannon",
                        id: 27000000,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/nZK1y-beLxO5vnlyUhK6-2zH2NzXJwqykcosqQ1cmZ8.png"
                        }
                    },
                    {
                        name: "Ice Spirit",
                        id: 26000030,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                        }
                    },
                    {
                        name: "Skeletons",
                        id: 26000010,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png"
                        }
                    },
                    {
                        name: "Ice Golem",
                        id: 26000038,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png"
                        }
                    },
                    {
                        name: "Hog Rider",
                        id: 26000021,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Ubu0oUl8tZkusnkZf8Xv9Vno5IO29Y-jbZ4fhoNJ5oc.png"
                        }
                    },
                ],
                elixirLeaked: 8.69
            },
        ],
        challengeTitle: "Royal Tournament",
        isHostedMatch: false
    },
    {
        type: "challenge",
        battleTime: "20221113T001554.000Z",
        isLadderTournament: true,
        arena: {
            id: 54000036,
            name: "Legendary Arena"
        },
        gameMode: {
            id: 72000291,
            name: "Challenge_AllCards_EventDeck"
        },
        deckSelection: "eventDeck",
        team: [
            {
                tag: "#L008PR8C",
                name: "Legendaray龍神™",
                startingTrophies: 7066,
                crowns: 1,
                kingTowerHitPoints: 4824,
                princessTowersHitPoints: [2685, 2650],
                clan: {
                    tag: "#UUR0LG",
                    name: "69",
                    badgeId: 16000124
                },
                cards: [
                    {
                        name: "Skeleton King",
                        id: 26000069,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/dCd69_wN9f8DxwuqOGtR4QgWhHIPIaTNxZ1e23RzAAc.png"
                        }
                    },
                    {
                        name: "Miner",
                        id: 26000032,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                        }
                    },
                    {
                        name: "Mortar",
                        id: 27000002,
                        level: 11,
                        starLevel: 2,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Skeleton Army",
                        id: 26000012,
                        level: 6,
                        starLevel: 3,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png"
                        }
                    },
                    {
                        name: "Dart Goblin",
                        id: 26000040,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png"
                        }
                    },
                    {
                        name: "Goblin Gang",
                        id: 26000041,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                        }
                    },
                    {
                        name: "Fireball",
                        id: 28000000,
                        level: 9,
                        starLevel: 2,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
                        }
                    },
                ],
                elixirLeaked: 0.64
            },
        ],
        opponent: [
            {
                tag: "#UJUUC22RJ",
                name: "imtired",
                startingTrophies: 5078,
                crowns: 0,
                kingTowerHitPoints: 3271,
                princessTowersHitPoints: [341],
                clan: {
                    tag: "#QGQL9LQR",
                    name: "ASS",
                    badgeId: 16000155
                },
                cards: [
                    {
                        name: "The Log",
                        id: 28000011,
                        level: 3,
                        starLevel: 1,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                        }
                    },
                    {
                        name: "Poison",
                        id: 28000009,
                        level: 6,
                        maxLevel: 9,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                        }
                    },
                    {
                        name: "Goblins",
                        id: 26000002,
                        level: 11,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                        }
                    },
                    {
                        name: "Bomb Tower",
                        id: 27000004,
                        level: 9,
                        maxLevel: 12,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/rirYRyHPc97emRjoH-c1O8uZCBzPVnToaGuNGusF3TQ.png"
                        }
                    },
                    {
                        name: "Miner",
                        id: 26000032,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                        }
                    },
                    {
                        name: "Phoenix",
                        id: 26000087,
                        level: 3,
                        maxLevel: 6,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png"
                        }
                    },
                    {
                        name: "Ice Spirit",
                        id: 26000030,
                        level: 11,
                        starLevel: 1,
                        maxLevel: 14,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                        }
                    },
                    {
                        name: "Monk",
                        id: 26000077,
                        level: 1,
                        maxLevel: 4,
                        iconUrls: {
                            medium: "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png"
                        }
                    },
                ],
                elixirLeaked: 9.41
            },
        ],
        challengeTitle: "Royal Tournament",
        isHostedMatch: false
    },
];
var sampleReplay = {
    tag: "#00C9GURRJ8LJ",
    battleTime: "20221021T145352.000Z",
    viewCount: 1,
    shareCount: 0,
    replayData: {
        battle: {
            gmt: 1,
            plt: 1,
            t1s: 0,
            t2s: 0,
            gamemode: 72000201,
            hm: false,
            deck0: [
                {
                    d: 26000014,
                    t: 26762011,
                    l: 11,
                    pr: 2,
                    rcnt: 18
                },
                {
                    d: 26000021,
                    t: 26762021,
                    l: 11,
                    pr: 3,
                    rcnt: 20
                },
                {
                    d: 26000038,
                    t: -1,
                    l: 11,
                    pr: 1,
                    rcnt: 24
                },
                {
                    d: 27000000,
                    t: 26778165,
                    l: 13,
                    pr: 3,
                    rcnt: 15
                },
                {
                    d: 28000000,
                    l: 11,
                    pr: 2,
                    rcnt: 9
                },
                {
                    d: 26000010,
                    t: -1,
                    l: 13,
                    pr: 3,
                    rcnt: 23
                },
                {
                    d: 26000030,
                    t: -1,
                    l: 13,
                    pr: 1,
                    rcnt: 22
                },
                {
                    d: 28000011,
                    t: 26814735,
                    l: 5,
                    pr: 1,
                    rcnt: 19
                },
            ],
            deck1: [
                {
                    d: 27000008,
                    t: 24314392,
                    l: 8,
                    pr: 3,
                    rcnt: 23
                },
                {
                    d: 27000002,
                    t: 24357029,
                    l: 13,
                    pr: 2,
                    rcnt: 36
                },
                {
                    d: 26000034,
                    t: 24462100,
                    l: 8,
                    pr: 2,
                    rcnt: 28
                },
                {
                    d: 26000037,
                    t: 24589158,
                    l: 5,
                    pr: 3,
                    rcnt: 24
                },
                {
                    d: 26000050,
                    t: -1,
                    l: 5,
                    pr: 1,
                    rcnt: 34
                },
                {
                    d: 26000041,
                    t: 24798987,
                    l: 13,
                    rcnt: 33
                },
                {
                    d: 28000012,
                    t: -1,
                    l: 8,
                    pr: 1,
                    rcnt: 25
                },
                {
                    d: 28000003,
                    t: 24313356,
                    l: 11,
                    pr: 3,
                    rcnt: 18
                },
            ],
            avatar0: {
                "accountID.hi": 50,
                "accountID.lo": 50397360,
                expLevel: 14,
                totalExpPoints: 242173,
                name: "『BRAVE』henryッ™✨",
                clan_name: "@BraveHeartsGam",
                arena: 54000017,
                badge: 16000004,
                welo: 840,
                scr: 6786,
                spi: 94,
                lti: 96,
                clan_id_hi: 38,
                clan_id_lo: 3137169,
                npc: false
            },
            avatar1: {
                "accountID.hi": 11,
                "accountID.lo": 2470979,
                expLevel: 14,
                totalExpPoints: 517811,
                name: "Legendaray龍神™",
                clan_name: "69",
                arena: 54000017,
                badge: 16000124,
                welo: 1387,
                scr: 6821,
                spi: 79,
                lti: 96,
                clan_id_hi: 20,
                clan_id_lo: 27108,
                npc: false
            },
            location: 15000041,
            arena: 54000065,
            event: {
                id: 6297,
                version_id: 1,
                variant_id: -1,
                personally_targeted: false,
                name: "Season 39 - Ladder 2 - Crown Rush [Arena 15, 25 Crowns]",
                category: 8,
                start_time: 1666339200,
                end_time: 1666598400,
                visible_time: 1666339200,
                event_name: "Season 39 - Ladder 2 - Crown Rush [Arena 15, 25 Crowns]",
                json: '{"ExtraGameModeChance":100,"ExtraGameMode":"Ladder_CrownRush","GameMode":"Ladder","ExtraGameModeRewards":[{"MinArena":"TrainingCamp","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25},{"MinArena":"Arena1","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25},{"MinArena":"Arena2","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25},{"MinArena":"Arena3","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25},{"MinArena":"Arena4","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25},{"MinArena":"Arena5","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25},{"MinArena":"Arena6","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25},{"MinArena":"Arena7","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25},{"MinArena":"Arena8","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25},{"MinArena":"Arena9","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25},{"MinArena":"Arena_L","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25},{"MinArena":"Arena_Electric","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25},{"MinArena":"Arena_T","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25},{"MinArena":"Arena13","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25},{"MinArena":"Arena14","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25},{"MinArena":"Arena_L1","RewardTower1":1,"RewardTower2":1,"RewardTower3":1,"MaxReward":25}]}',
                event_group_id: -1,
                event_top_group_id: -1,
                impression_id: -1,
                visible_end_time: 1666598400
            },
            hbd: [
                {
                    em: {
                        oe: [
                            4294967296, 4294967297, 4294967298, 4294967299, 197568495616,
                            438086664192, 322122547200, 64424509442, 77309411331,
                            442381631488, 34359738369, 528280977408, 549755813888,
                            558345748480, 545460846592, 554050781184, 562640715776,
                            566935683072, 579820584960, 575525617664, 472446402560,
                            588410519552, 584115552256, 605590388736, 592705486848,
                            601295421440, 609885356032, 618475290624, 639950127104,
                            51539607553, 8589934595, 665719930880, 661424963584, 670014898176,
                            51539607555, 708669603840, 700079669248, 743029342208,
                            725849473024,
                        ],
                        de: [
                            {
                                p: 165,
                                e: 0
                            },
                            {
                                p: 163,
                                e: 0
                            },
                            {
                                p: 1,
                                e: 3
                            },
                            {
                                p: 12,
                                e: 1
                            },
                            {
                                p: 1,
                                e: 1
                            },
                            {
                                p: 18,
                                e: 3
                            },
                            {
                                p: 12,
                                e: 3
                            },
                            {
                                p: 2,
                                e: 3
                            },
                        ]
                    },
                    sa: 54000065,
                    sk: {
                        os: [
                            87000001, 94000027, 94000029, 94000030, 94000031, 94000033,
                            94000034, 94000035, 94000036, 94000037, 94000039,
                        ],
                        ss: [94000033],
                        ats: 94000033,
                        lss: [
                            {
                                CustomId: 94000033,
                                ScFile: {
                                    File: "towerskin_season_32.sc",
                                    Checksum: "ec2e4b79"
                                },
                                KingTowerDeathFx: "Default_King_Tower_Die",
                                PrincessTowerDeathFx: "Default_Princess_Tower_Die"
                            },
                        ],
                        rnd: false
                    },
                    bn: {
                        bg: 126000004,
                        fg: 126000003
                    }
                },
                {
                    em: {
                        oe: [
                            4294967296, 4294967297, 4294967298, 4294967299, 25769803776,
                            25769803777, 25769803778, 25769803779, 64424509440, 64424509441,
                            64424509442, 64424509443, 77309411328, 85899345920, 68719476736,
                            94489280512, 55834574849, 98784247810, 103079215106, 107374182400,
                            107374182402, 111669149697, 115964116992, 120259084288,
                            120259084289, 77309411331, 124554051586, 128849018881,
                            133143986178, 137438953472, 141733920768, 146028888064,
                            154618822656, 167503724544, 158913789952, 176093659137,
                            188978561024, 180388626432, 197568495616, 210453397504,
                            214748364800, 214748364802, 223338299393, 223338299392,
                            231928233984, 257698037760, 266287972352, 270582939648,
                            279172874241, 77309411330, 296352743424, 313532612608,
                            304942678016, 343597383680, 347892350976, 373662154752,
                            390842023936, 386547056640, 399431958528, 412316860416,
                            425201762304, 429496729603, 438086664193, 438086664192,
                            446676598784, 450971566080, 442381631488, 455266533376,
                            446676598785, 463856467968, 468151435264, 481036337152,
                            476741369856, 502511173633, 472446402560, 515396075520,
                            549755813888, 558345748480, 554050781184, 575525617664,
                            588410519552, 601295421440, 627065225216, 622770257920,
                            618475290624, 635655159808, 644245094400, 665719930880,
                            687194767360, 695784701952, 704374636544, 760209211392,
                            764504178688, 785979015168, 773094113280,
                        ],
                        de: [
                            {
                                p: 24,
                                e: 2
                            },
                            {
                                p: 22,
                                e: 0
                            },
                            {
                                p: 128,
                                e: 0
                            },
                            {
                                p: 27,
                                e: 0
                            },
                            {
                                p: 29,
                                e: 2
                            },
                            {
                                p: 6,
                                e: 3
                            },
                            {
                                p: 87,
                                e: 0
                            },
                            {
                                p: 13,
                                e: 1
                            },
                        ]
                    },
                    sa: 54000065,
                    sk: {
                        os: [
                            87000001, 94000001, 94000003, 94000004, 94000005, 94000006,
                            94002001, 94000007, 94000008, 94000009, 94000010, 94000011,
                            94000013, 94000014, 94000015, 94002002, 94001002, 94000018,
                            94000023,
                        ],
                        ss: [94000018],
                        ats: 94000018,
                        lss: [
                            {
                                CustomId: 94000018,
                                ScFile: {
                                    File: "towerskin_season_18b_dl.sc",
                                    Checksum: "ecca5762"
                                },
                                KingTowerDeathFx: "holiday_season18b_king_die",
                                PrincessTowerDeathFx: "holiday_season_18b_princess_die"
                            },
                        ],
                        rnd: false
                    },
                    bn: {
                        bg: 126000071,
                        fg: 126000031,
                        bd1: {
                            b: 125000004,
                            "1": 20,
                            "2": -1,
                            c: false,
                            l: 1
                        },
                        bd2: {
                            b: 125000003,
                            "1": 20,
                            "2": -1,
                            c: false,
                            l: 1
                        },
                        bd3: {
                            b: 125000002,
                            "1": 20,
                            "2": -1,
                            c: false,
                            l: 1
                        }
                    }
                },
            ]
        },
        endTick: 6211,
        cmd: [
            {
                ct: 191,
                c: {
                    t: 191,
                    t2: 211,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 6,
                    gid: 26000030,
                    px: 2499,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 231,
                    t2: 251,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 4,
                    gid: 26000050,
                    px: 2499,
                    py: 20499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 294,
                    t2: 314,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 0,
                    gid: 26000014,
                    px: 8499,
                    py: 8500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 351,
                    t2: 371,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 5,
                    gid: 26000010,
                    px: 4499,
                    py: 13500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 403,
                    t2: 423,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 2,
                    gid: 26000034,
                    px: 8499,
                    py: 26499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 594,
                    t2: 614,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 2,
                    gid: 26000038,
                    px: 15500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 631,
                    t2: 651,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 1,
                    gid: 26000021,
                    px: 15500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 636,
                    t2: 656,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 5,
                    gid: 26000041,
                    px: 15500,
                    py: 17499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 682,
                    t2: 702,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 7,
                    gid: 28000011,
                    px: 15500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 735,
                    t2: 755,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 6,
                    gid: 28000012,
                    px: 9500,
                    py: 24500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 825,
                    t2: 845,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 6,
                    gid: 26000030,
                    px: 8499,
                    py: 9500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 866,
                    t2: 886,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 5,
                    gid: 26000010,
                    px: 4499,
                    py: 13500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 1017,
                    t2: 1037,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 3,
                    gid: 26000037,
                    px: 8500,
                    py: 31500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 1146,
                    t2: 1166,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 0,
                    gid: 26000014,
                    px: 8499,
                    py: 500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 1177,
                    t2: 1197,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 1,
                    gid: 27000002,
                    px: 2500,
                    py: 19500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 1234,
                    t2: 1254,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 2,
                    gid: 26000038,
                    px: 8499,
                    py: 10500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 1301,
                    t2: 1321,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 1,
                    gid: 26000021,
                    px: 1499,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 1332,
                    t2: 1352,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 2,
                    gid: 26000034,
                    px: 4499,
                    py: 18499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 1344,
                    t2: 1364,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 6,
                    gid: 26000030,
                    px: 499,
                    py: 10500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 1411,
                    t2: 1431,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 3,
                    gid: 27000000,
                    px: 8500,
                    py: 13500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 1641,
                    t2: 1661,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 4,
                    gid: 26000050,
                    px: 4499,
                    py: 18499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 1781,
                    t2: 1801,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 5,
                    gid: 26000010,
                    px: 4499,
                    py: 12500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 1841,
                    t2: 1861,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 2,
                    gid: 26000038,
                    px: 2499,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 1882,
                    t2: 1902,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 5,
                    gid: 26000041,
                    px: 2499,
                    py: 17499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 1932,
                    t2: 1952,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 7,
                    gid: 28000011,
                    px: 3500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2074,
                    t2: 2094,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 3,
                    gid: 26000037,
                    px: 8500,
                    py: 31500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2217,
                    t2: 2237,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 0,
                    gid: 26000014,
                    px: 8499,
                    py: 500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2266,
                    t2: 2286,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 6,
                    gid: 26000030,
                    px: 15500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2282,
                    t2: 2302,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 1,
                    gid: 26000021,
                    px: 16500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2284,
                    t2: 2304,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 7,
                    gid: 28000003,
                    px: 5500,
                    py: 7500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2367,
                    t2: 2387,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 6,
                    gid: 28000012,
                    px: 9500,
                    py: 24500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2402,
                    t2: 2422,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 5,
                    gid: 26000010,
                    px: 10500,
                    py: 11500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2473,
                    t2: 2493,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 2,
                    gid: 26000038,
                    px: 5499,
                    py: 8500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2581,
                    t2: 2601,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 4,
                    gid: 26000050,
                    px: 9500,
                    py: 26499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2636,
                    t2: 2656,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 5,
                    gid: 26000041,
                    px: 3499,
                    py: 17499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2655,
                    t2: 2675,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 0,
                    gid: 26000014,
                    px: 17500,
                    py: 1500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2692,
                    t2: 2712,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 7,
                    gid: 28000011,
                    px: 3500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2738,
                    t2: 2758,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 1,
                    gid: 27000002,
                    px: 2500,
                    py: 19500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2761,
                    t2: 2781,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 1,
                    gid: 26000021,
                    px: 9500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2778,
                    t2: 2798,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 2,
                    gid: 26000034,
                    px: 4499,
                    py: 17499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2786,
                    t2: 2806,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 3,
                    gid: 27000000,
                    px: 3500,
                    py: 13500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2821,
                    t2: 2841,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 5,
                    gid: 26000010,
                    px: 13500,
                    py: 12500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2852,
                    t2: 2872,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 6,
                    gid: 28000012,
                    px: 9500,
                    py: 24500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2861,
                    t2: 2881,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 2,
                    gid: 26000038,
                    px: 7499,
                    py: 9500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2961,
                    t2: 2981,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 0,
                    gid: 26000014,
                    px: 499,
                    py: 9500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 2968,
                    t2: 2988,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 4,
                    gid: 26000050,
                    px: 15500,
                    py: 17499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3032,
                    t2: 3052,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 6,
                    gid: 26000030,
                    px: 9500,
                    py: 11500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3076,
                    t2: 3096,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 3,
                    gid: 27000000,
                    px: 9500,
                    py: 12500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3094,
                    t2: 3114,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 5,
                    gid: 26000041,
                    px: 2499,
                    py: 17499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3138,
                    t2: 3158,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 7,
                    gid: 28000011,
                    px: 3500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3322,
                    t2: 3342,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 1,
                    gid: 27000002,
                    px: 8500,
                    py: 21500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3396,
                    t2: 3416,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 4,
                    gid: 28000000,
                    px: 5500,
                    py: 22500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3442,
                    t2: 3462,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 0,
                    gid: 27000008,
                    px: 2500,
                    py: 19500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3492,
                    t2: 3512,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 2,
                    gid: 26000034,
                    px: 4499,
                    py: 17499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3497,
                    t2: 3517,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 2,
                    gid: 26000038,
                    px: 499,
                    py: 8500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3544,
                    t2: 3564,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 0,
                    gid: 26000014,
                    px: 8499,
                    py: 8500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3572,
                    t2: 3592,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 1,
                    gid: 26000021,
                    px: 7499,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3583,
                    t2: 3603,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 6,
                    gid: 28000012,
                    px: 4500,
                    py: 9500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3622,
                    t2: 3642,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 7,
                    gid: 28000011,
                    px: 3500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3672,
                    t2: 3692,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 3,
                    gid: 27000000,
                    px: 8500,
                    py: 9500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3685,
                    t2: 3705,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 4,
                    gid: 26000050,
                    px: 1499,
                    py: 17499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3774,
                    t2: 3794,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 1,
                    gid: 27000002,
                    px: 8500,
                    py: 18500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3775,
                    t2: 3795,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 2,
                    gid: 26000038,
                    px: 8499,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3848,
                    t2: 3868,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 0,
                    gid: 26000014,
                    px: 499,
                    py: 11500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3882,
                    t2: 3902,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 6,
                    gid: 26000030,
                    px: 10500,
                    py: 9500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3958,
                    t2: 3978,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 3,
                    gid: 26000037,
                    px: 1500,
                    py: 17500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 3996,
                    t2: 4016,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 1,
                    gid: 26000021,
                    px: 7499,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4033,
                    t2: 4053,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 5,
                    gid: 26000041,
                    px: 6499,
                    py: 17499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4082,
                    t2: 4102,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 7,
                    gid: 28000011,
                    px: 7500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4204,
                    t2: 4224,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 0,
                    gid: 27000008,
                    px: 9500,
                    py: 21500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4236,
                    t2: 4256,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 5,
                    gid: 26000010,
                    px: 1499,
                    py: 9500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4273,
                    t2: 4293,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 4,
                    gid: 26000050,
                    px: 8499,
                    py: 17499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4344,
                    t2: 4364,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 2,
                    gid: 26000038,
                    px: 6499,
                    py: 7500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4459,
                    t2: 4479,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 1,
                    gid: 27000002,
                    px: 2500,
                    py: 19500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4462,
                    t2: 4482,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 0,
                    gid: 26000014,
                    px: 8499,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4499,
                    t2: 4519,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 2,
                    gid: 26000034,
                    px: 5499,
                    py: 17499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4504,
                    t2: 4524,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 3,
                    gid: 27000000,
                    px: 2500,
                    py: 13500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4513,
                    t2: 4533,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 1,
                    gid: 26000021,
                    px: 1499,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4558,
                    t2: 4578,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 5,
                    gid: 26000041,
                    px: 1499,
                    py: 17499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4576,
                    t2: 4596,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 7,
                    gid: 28000011,
                    px: 2500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4633,
                    t2: 4653,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 2,
                    gid: 26000038,
                    px: 499,
                    py: 7500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4809,
                    t2: 4829,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 7,
                    gid: 28000003,
                    px: 5500,
                    py: 8500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4814,
                    t2: 4834,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 0,
                    gid: 26000014,
                    px: 499,
                    py: 11500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4844,
                    t2: 4864,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 6,
                    gid: 26000030,
                    px: 8499,
                    py: 10500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4879,
                    t2: 4899,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 1,
                    gid: 26000021,
                    px: 1499,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4884,
                    t2: 4904,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 5,
                    gid: 26000010,
                    px: 3499,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4895,
                    t2: 4915,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 4,
                    gid: 26000050,
                    px: 1499,
                    py: 17499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4933,
                    t2: 4953,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 1,
                    gid: 27000002,
                    px: 8500,
                    py: 21500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 4946,
                    t2: 4966,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 7,
                    gid: 28000011,
                    px: 3500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5009,
                    t2: 5029,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 0,
                    gid: 26000014,
                    px: 8499,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5034,
                    t2: 5054,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 2,
                    gid: 26000034,
                    px: 2499,
                    py: 23499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5076,
                    t2: 5096,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 2,
                    gid: 26000038,
                    px: 15500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5112,
                    t2: 5132,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 1,
                    gid: 26000021,
                    px: 15500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5116,
                    t2: 5136,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 0,
                    gid: 27000008,
                    px: 9500,
                    py: 21500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5132,
                    t2: 5152,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 6,
                    gid: 26000030,
                    px: 12500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5177,
                    t2: 5197,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 7,
                    gid: 28000011,
                    px: 3500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5185,
                    t2: 5205,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 3,
                    gid: 26000037,
                    px: 8500,
                    py: 23500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5307,
                    t2: 5327,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 0,
                    gid: 26000014,
                    px: 8499,
                    py: 10500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5345,
                    t2: 5365,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 4,
                    gid: 26000050,
                    px: 8499,
                    py: 17499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5355,
                    t2: 5375,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 2,
                    gid: 26000038,
                    px: 2499,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5394,
                    t2: 5414,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 1,
                    gid: 26000021,
                    px: 2499,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5396,
                    t2: 5416,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 1,
                    gid: 27000002,
                    px: 8500,
                    py: 21500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5407,
                    t2: 5427,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 5,
                    gid: 26000010,
                    px: 7499,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5445,
                    t2: 5465,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 4,
                    gid: 28000000,
                    px: 7500,
                    py: 19500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5467,
                    t2: 5487,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 2,
                    gid: 26000034,
                    px: 8499,
                    py: 25499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5537,
                    t2: 5557,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 0,
                    gid: 26000014,
                    px: 8499,
                    py: 10500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5604,
                    t2: 5624,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 7,
                    gid: 28000003,
                    px: 5500,
                    py: 8500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5604,
                    t2: 5624,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 2,
                    gid: 26000038,
                    px: 15500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5637,
                    t2: 5657,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 1,
                    gid: 26000021,
                    px: 15500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5654,
                    t2: 5674,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 7,
                    gid: 28000011,
                    px: 14500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5664,
                    t2: 5684,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 0,
                    gid: 27000008,
                    px: 9500,
                    py: 22500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5687,
                    t2: 5707,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 6,
                    gid: 26000030,
                    px: 15500,
                    py: 14500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5733,
                    t2: 5753,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 4,
                    gid: 26000050,
                    px: 9500,
                    py: 20499,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5787,
                    t2: 5807,
                    idHi: 50,
                    idLo: 50397360,
                    idx: 0,
                    gid: 26000014,
                    px: 8499,
                    py: 6500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5898,
                    t2: 5918,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 1,
                    gid: 27000002,
                    px: 2500,
                    py: 18500,
                    sid: -1
                }
            },
            {
                ct: 191,
                c: {
                    t: 5939,
                    t2: 5959,
                    idHi: 11,
                    idLo: 2470979,
                    idx: 6,
                    gid: 28000012,
                    px: 3500,
                    py: 10500,
                    sid: -1
                }
            },
        ],
        evt: [
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [140],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [179],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [181],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [225],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [235],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [233],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [240],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [237],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [241],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [244],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [241],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [245],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [247],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [248],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [252],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [256],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [259],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [263],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [280],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [271],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [296],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [298],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [300],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [302],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [305],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [307],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [336],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [342],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [325],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [347],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [352],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [394],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [374],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [413],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [420],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [417],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [426],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [426],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [431],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [434],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [436],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [440],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [442],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [445],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [453],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [452],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [456],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [459],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [462],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [464],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [468],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [470],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [473],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [479],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [483],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [492],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [502],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [511],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [459],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [536],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [541],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [552],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [553],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [560],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [563],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [566],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [570],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [574],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [581],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [579],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [597],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [602],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [604],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [613],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [616],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [620],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [623],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [627],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [623],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [634],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [635],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [642],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [645],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [648],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [652],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [661],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [660],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [664],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [675],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [677],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [699],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [702],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [715],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [718],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [721],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [732],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [746],
                params: [1]
            },
            {
                type: 3,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [778],
                params: [3, 0, 2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [780],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [784],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [787],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [801],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [806],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [810],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [817],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [822],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [810],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [849],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [852],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [908],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [918],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [929],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [940],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [948],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [982],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1007],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1013],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1028],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1035],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1038],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1056],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1059],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1060],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1063],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1067],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1073],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1078],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1105],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1126],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1112],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1140],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1171],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1183],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1186],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1189],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1193],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1196],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1199],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1204],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1210],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1214],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1224],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1228],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1231],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1222],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1237],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1244],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1249],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1252],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1256],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1262],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1269],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1273],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1276],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1284],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1290],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1292],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1264],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1325],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1300],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1337],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1343],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1339],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1346],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1350],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1353],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1356],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1359],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1365],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1368],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1371],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1374],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1377],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1380],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1384],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1392],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1395],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1399],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1402],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1408],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1375],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1411],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1415],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1418],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1422],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1425],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1428],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1431],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1435],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1438],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1444],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1447],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1451],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1454],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1457],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1460],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1464],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1467],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1471],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1474],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1476],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1483],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1486],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1496],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1499],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1502],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1506],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1513],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1516],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1523],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1540],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1543],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1546],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1550],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1553],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1557],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1560],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1564],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1591],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1602],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1622],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1648],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1651],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1654],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1642],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1704],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1743],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1746],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1751],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1754],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1756],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1761],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1764],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1772],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1776],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1751],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1785],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1820],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1824],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1831],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1844],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1856],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1878],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1892],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1897],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1900],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [1914],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1976],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1979],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1982],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1984],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1988],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [1992],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2004],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2061],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2064],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2067],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2067],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2082],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2086],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2090],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2093],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2099],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2103],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2113],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2118],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2128],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2135],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2073],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2155],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2226],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2238],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2242],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2270],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2264],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2300],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2303],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2310],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2316],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2321],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2325],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2329],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2328],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2333],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2336],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2339],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2343],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2342],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2345],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2374],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2377],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2382],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2403],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2405],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2410],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2413],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2415],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2420],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2425],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2429],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2430],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2432],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2433],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2436],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2437],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2440],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2441],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2443],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2447],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2451],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2454],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2459],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2462],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2461],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2467],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2470],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2466],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2475],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2478],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2481],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2528],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2532],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2535],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2539],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2542],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2546],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2549],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2554],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2557],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2562],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2571],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2578],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2587],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2591],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2594],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2596],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2600],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2601],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2604],
                params: [1]
            },
            {
                type: 3,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2602],
                params: [3, 0, 1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2607],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2610],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2612],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2616],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2618],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2622],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2624],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2630],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2632],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2641],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2643],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2623],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2645],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2648],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2651],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2652],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2650],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2655],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2659],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2662],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2664],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2670],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2674],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2681],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2687],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2672],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2694],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2708],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2711],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2715],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2718],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2721],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2726],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2750],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2753],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2756],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2723],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2759],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2762],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2765],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2767],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2775],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2777],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2785],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2788],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2790],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2820],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2836],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2838],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2843],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2856],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2858],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2842],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2860],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2862],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2865],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2868],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2871],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2874],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2878],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2882],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2885],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2889],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2896],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2899],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2898],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2902],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2905],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2909],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2908],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2912],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2916],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2919],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2928],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2933],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2937],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2939],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [2920],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2947],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2976],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2980],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2984],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2987],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2988],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2991],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [2994],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3001],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3005],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3014],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3025],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3030],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3057],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3066],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3066],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3070],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3076],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3079],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3086],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3091],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3104],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3106],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3110],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3126],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3130],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3142],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3145],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3148],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3152],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3154],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3163],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3166],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3169],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3172],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3176],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3178],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3182],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3185],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3188],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3191],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3195],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3198],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3201],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3204],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3207],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3211],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3220],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3217],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3237],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3240],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3336],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3357],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3349],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3363],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3363],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3367],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3373],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3377],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3382],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3387],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3391],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3365],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3397],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3401],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3430],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3432],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3457],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3470],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3473],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3476],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3474],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3483],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3492],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3495],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3480],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3496],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3499],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3500],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3503],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3504],
                params: [2]
            },
            {
                type: 3,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3502],
                params: [2, 0, 0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3507],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3507],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3510],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3510],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3515],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3518],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3520],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3522],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3523],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3522],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3525],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3527],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3527],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3529],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3532],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3532],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3551],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3561],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3565],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3568],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3549],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3572],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3575],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3579],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3601],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3636],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3655],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3658],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3661],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3665],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3668],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3671],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3651],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3675],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3679],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3682],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3682],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3696],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3700],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3703],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3706],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3710],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3709],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3713],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3717],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3720],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3723],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3726],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3754],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3759],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3764],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3770],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3732],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3777],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3781],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3784],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3785],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3786],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3789],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3792],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3793],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3796],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3796],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3801],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3804],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3814],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3817],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3820],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3822],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3825],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3828],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3831],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3834],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3837],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3840],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3843],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3846],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3813],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3853],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3857],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3861],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3859],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3864],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3868],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3868],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3871],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3874],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3877],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3874],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3880],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3887],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3891],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3893],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3898],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3909],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3913],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3919],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3919],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3923],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3929],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3932],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3934],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3939],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3942],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3945],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3944],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3948],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3952],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3954],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3954],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3957],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3970],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [3977],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [3998],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4004],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4010],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4016],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4020],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4023],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4020],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4026],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4025],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4029],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4030],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4036],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4042],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4033],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4069],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4064],
                params: [0]
            },
            {
                type: 3,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4116],
                params: [2, 0, 0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4124],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4130],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4209],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4212],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4214],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4216],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4218],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4220],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4225],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4229],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4228],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4231],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4235],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4239],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4269],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4255],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4279],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4282],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4284],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4287],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4288],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4290],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4292],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4296],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4296],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4298],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4305],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4307],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4309],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4311],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4278],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4315],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4313],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4318],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4328],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4331],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4339],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4329],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4344],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4348],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4356],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4359],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4358],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4362],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4375],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4380],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4384],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4361],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4391],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4397],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4409],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4424],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4437],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4441],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4446],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4450],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4434],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4452],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4470],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4473],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4477],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4480],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4484],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4470],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4487],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4490],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4493],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4493],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4496],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4498],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4499],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4504],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4506],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4510],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4504],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4513],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4514],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4519],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4522],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4533],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4536],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4541],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4543],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4554],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4556],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4557],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4610],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4613],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4615],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4617],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4620],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4622],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4629],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4632],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4619],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4635],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4638],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4642],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4644],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4648],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4650],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4657],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4660],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4665],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4669],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4669],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4681],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4684],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4688],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4689],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4691],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4695],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4698],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4707],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4711],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4721],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4724],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4728],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4731],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4735],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4739],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4742],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4746],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4749],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4753],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4756],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4759],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4768],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4772],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4776],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4779],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4782],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4786],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4798],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4800],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4806],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4716],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4819],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4822],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4830],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4836],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4843],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4833],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4856],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4862],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4864],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4867],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4874],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4877],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4869],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4880],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4878],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4878],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4885],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4902],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4905],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4908],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4912],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4926],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4928],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4934],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4938],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4941],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4936],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4945],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4948],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4951],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4955],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4958],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4962],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4971],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4974],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4977],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4982],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4985],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4991],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4994],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [4998],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5002],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5006],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [4983],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5010],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5013],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5017],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5021],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5023],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5028],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5030],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5044],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5048],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5049],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5051],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5055],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5056],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5062],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5070],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5065],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5078],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5088],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5101],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5104],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5103],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5107],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5106],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5112],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5117],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5122],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5126],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5125],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5129],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5133],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5136],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5148],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5169],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5171],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5175],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5166],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5178],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5181],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5182],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5193],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5202],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5203],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5206],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5208],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5211],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5212],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5216],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5218],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5218],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5226],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5225],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5229],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5234],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5233],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5238],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5250],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5252],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5255],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5258],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5261],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5264],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5266],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5265],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5269],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5271],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5276],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5280],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5283],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5286],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5290],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5293],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5295],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5271],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5324],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5327],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5342],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5344],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5349],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5339],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5354],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5358],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5362],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5366],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5369],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5377],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5386],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5387],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5379],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5396],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5402],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5405],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5398],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5409],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5412],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5415],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5417],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5421],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5424],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5426],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5431],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5434],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5437],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5432],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5444],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5448],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5451],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5454],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5457],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5458],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5463],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5475],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5479],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5512],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5534],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5517],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5537],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5541],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5544],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5547],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5551],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5554],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5557],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5563],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5574],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5578],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5585],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5594],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5597],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5576],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5611],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5615],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5619],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5624],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5627],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5632],
                params: [3]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5632],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5647],
                params: [1]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5646],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5648],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5653],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5659],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5667],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5672],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5674],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5675],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5681],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5685],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5667],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5688],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5692],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5694],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5697],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5706],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5726],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5727],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5746],
                params: [0]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5772],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5805],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5811],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5815],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5818],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5821],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5824],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5828],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5834],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5843],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5851],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5857],
                params: [2]
            },
            {
                type: 1,
                id_hi: 50,
                id_lo: 50397360,
                ticks: [5856],
                params: [3]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5860],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5865],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5869],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5873],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5879],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5895],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5901],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5904],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5908],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5911],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5915],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5918],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5921],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5924],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5928],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5931],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5935],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5951],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5955],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5990],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [5993],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [6008],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [6012],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [6017],
                params: [1]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [6024],
                params: [2]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [6027],
                params: [0]
            },
            {
                type: 1,
                id_hi: 11,
                id_lo: 2470979,
                ticks: [6028],
                params: [1]
            },
        ],
        rndSeed: -83590402,
        time: 1666363720
    },
    version: {
        major: 3,
        build: 2872,
        content: 15
    }
};
var Deck = /** @class */ (function () {
    /**
     * Creates a deck from a deck link
     * @param link  a deck link to parse
     */
    function Deck(link) {
        var ids = link.match(/(\d{8})/g);
        this.cards = ids.map(function (id) { return (__assign({ id: id }, CARDS[id])); });
        this._initDeck();
    }
    Deck.prototype._initDeck = function () {
        var e_6, _a;
        // Sorting cards
        this.cards.sort(function (a, b) { return (a.cost > b.cost ? 1 : -1); });
        // Average elixir
        var total = this.cards.reduce(function (prev, _a) {
            var cost = _a.cost;
            return prev + cost;
        }, 0);
        this.averageElixir = Math.round((total * 10) / 8);
        try {
            // Fastest cycle
            for (var _b = __values(this.cards), _c = _b.next(); !_c.done; _c = _b.next()) {
                var card = _c.value;
                if (this.fastestCycle.length < 4 && card.name !== "mirror") {
                    this.fastestCycle.push(card);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    /**
     * Verifies a deck link
     * @param link  a deck link to parse
     * @returns     true if the deck link is valid, false otherwise
     */
    Deck.deckLinkIsValid = function (link) {
        var ids = link.match(/(\d{8})/g);
        return ids && ids.length === 8 && ids.every(function (id) { return id in CARDS; });
    };
    /**
     * Returns an iterables of cards in the deck
     */
    Deck.prototype[Symbol.iterator] = function () {
        return this.cards.values();
    };
    return Deck;
}());
