const COMMON = 5;
const RARE = 3.75;
const EPIC = 2.5;
const LEGENDARY = 1.25;
const HERO = 0;

const CARDS: Cards = {
  26000077: {
    id: "26000077",
    name: "monk",
    cost: 4,
    rarity: HERO,
  },
  26000087: {
    id: "26000087",
    name: "phoenix",
    cost: 4,
    rarity: LEGENDARY,
  },
  26000065: {
    id: "26000065",
    name: "mightyMiner",
    cost: 4,
    rarity: HERO,
  },
  26000028: {
    id: "26000028",
    name: "threeMusketeers",
    cost: 9,
    rarity: RARE,
  },
  26000038: {
    id: "26000038",
    name: "iceGolem",
    cost: 2,
    rarity: RARE,
  },
  26000044: {
    id: "26000044",
    name: "hunter",
    cost: 4,
    rarity: EPIC,
  },
  26000050: {
    id: "26000050",
    name: "royalGhost",
    cost: 3,
    rarity: LEGENDARY,
  },
  26000059: {
    id: "26000059",
    name: "royalHogs",
    cost: 5,
    rarity: RARE,
  },
  26000074: {
    id: "26000074",
    name: "goldenKnight",
    cost: 4,
    rarity: HERO,
  },
  28000015: {
    id: "28000015",
    name: "barbBarrel",
    cost: 2,
    rarity: EPIC,
  },
  28000016: {
    id: "28000016",
    name: "healSpirit",
    cost: 1,
    rarity: RARE,
  },
  26000009: {
    id: "26000009",
    name: "golem",
    cost: 8,
    rarity: EPIC,
  },
  26000013: {
    id: "26000013",
    name: "bomber",
    cost: 2,
    rarity: COMMON,
  },
  26000016: {
    id: "26000016",
    name: "prince",
    cost: 5,
    rarity: EPIC,
  },
  26000048: {
    id: "26000048",
    name: "nightWitch",
    cost: 4,
    rarity: LEGENDARY,
  },
  26000049: {
    id: "26000049",
    name: "bats",
    cost: 2,
    rarity: COMMON,
  },
  26000080: {
    id: "26000080",
    name: "skeletonDragons",
    cost: 4,
    rarity: COMMON,
  },
  28000007: {
    id: "28000007",
    name: "lightning",
    cost: 6,
    rarity: EPIC,
  },
  28000012: {
    id: "28000012",
    name: "tornado",
    cost: 3,
    rarity: EPIC,
  },
  26000010: {
    id: "26000010",
    name: "skeletons",
    cost: 1,
    rarity: COMMON,
  },
  26000027: {
    id: "26000027",
    name: "darkPrince",
    cost: 4,
    rarity: EPIC,
  },
  26000072: {
    id: "26000072",
    name: "archerQueen",
    cost: 5,
    rarity: HERO,
  },
  26000083: {
    id: "26000083",
    name: "motherWitch",
    cost: 4,
    rarity: LEGENDARY,
  },
  26000085: {
    id: "26000085",
    name: "electroGiant",
    cost: 8,
    rarity: EPIC,
  },
  27000012: {
    id: "27000012",
    name: "goblinCage",
    cost: 4,
    rarity: RARE,
  },
  26000047: {
    id: "26000047",
    name: "royalRecruits",
    cost: 7,
    rarity: COMMON,
  },
  26000052: {
    id: "26000052",
    name: "zappies",
    cost: 4,
    rarity: RARE,
  },
  26000057: {
    id: "26000057",
    name: "flyingMachine",
    cost: 4,
    rarity: RARE,
  },
  28000000: {
    id: "28000000",
    name: "fireball",
    cost: 4,
    rarity: RARE,
  },
  28000001: {
    id: "28000001",
    name: "arrows",
    cost: 3,
    rarity: COMMON,
  },
  26000004: {
    id: "26000004",
    name: "pekka",
    cost: 7,
    rarity: EPIC,
  },
  26000006: {
    id: "26000006",
    name: "balloon",
    cost: 5,
    rarity: EPIC,
  },
  26000015: {
    id: "26000015",
    name: "babyDragon",
    cost: 4,
    rarity: EPIC,
  },
  26000035: {
    id: "26000035",
    name: "lumberjack",
    cost: 4,
    rarity: LEGENDARY,
  },
  26000042: {
    id: "26000042",
    name: "electroWizard",
    cost: 4,
    rarity: LEGENDARY,
  },
  28000005: {
    id: "28000005",
    name: "freeze",
    cost: 4,
    rarity: EPIC,
  },
  28000008: {
    id: "28000008",
    name: "zap",
    cost: 2,
    rarity: COMMON,
  },
  26000008: {
    id: "26000008",
    name: "barbarians",
    cost: 5,
    rarity: COMMON,
  },
  26000029: {
    id: "26000029",
    name: "lavaHound",
    cost: 7,
    rarity: LEGENDARY,
  },
  26000032: {
    id: "26000032",
    name: "miner",
    cost: 3,
    rarity: LEGENDARY,
  },
  26000037: {
    id: "26000037",
    name: "infernoDragon",
    cost: 4,
    rarity: LEGENDARY,
  },
  26000046: {
    id: "26000046",
    name: "bandit",
    cost: 3,
    rarity: LEGENDARY,
  },
  26000051: {
    id: "26000051",
    name: "ramRider",
    cost: 5,
    rarity: LEGENDARY,
  },
  26000055: {
    id: "26000055",
    name: "megaKnight",
    cost: 7,
    rarity: LEGENDARY,
  },
  26000084: {
    id: "26000084",
    name: "electroSpirit",
    cost: 1,
    rarity: COMMON,
  },
  26000012: {
    id: "26000012",
    name: "skeletonArmy",
    cost: 3,
    rarity: EPIC,
  },
  26000024: {
    id: "26000024",
    name: "royalGiant",
    cost: 6,
    rarity: COMMON,
  },
  26000026: {
    id: "26000026",
    name: "princess",
    cost: 3,
    rarity: LEGENDARY,
  },
  26000040: {
    id: "26000040",
    name: "dartGoblin",
    cost: 3,
    rarity: RARE,
  },
  28000004: {
    id: "28000004",
    name: "goblinBarrel",
    cost: 3,
    rarity: EPIC,
  },
  26000033: {
    id: "26000033",
    name: "sparky",
    cost: 6,
    rarity: LEGENDARY,
  },
  26000043: {
    id: "26000043",
    name: "eliteBarbarians",
    cost: 6,
    rarity: COMMON,
  },
  26000060: {
    id: "26000060",
    name: "goblinGiant",
    cost: 6,
    rarity: EPIC,
  },
  28000002: {
    id: "28000002",
    name: "rage",
    cost: 2,
    rarity: EPIC,
  },
  26000000: {
    id: "26000000",
    name: "knight",
    cost: 3,
    rarity: COMMON,
  },
  26000017: {
    id: "26000017",
    name: "wizard",
    cost: 5,
    rarity: RARE,
  },
  26000020: {
    id: "26000020",
    name: "giantSkeleton",
    cost: 6,
    rarity: EPIC,
  },
  26000021: {
    id: "26000021",
    name: "hog",
    cost: 4,
    rarity: RARE,
  },
  28000011: {
    id: "28000011",
    name: "log",
    cost: 2,
    rarity: LEGENDARY,
  },
  26000003: {
    id: "26000003",
    name: "giant",
    cost: 5,
    rarity: RARE,
  },
  26000005: {
    id: "26000005",
    name: "minions",
    cost: 3,
    rarity: COMMON,
  },
  26000007: {
    id: "26000007",
    name: "witch",
    cost: 5,
    rarity: EPIC,
  },
  28000010: {
    id: "28000010",
    name: "graveyard",
    cost: 5,
    rarity: LEGENDARY,
  },
  28000017: {
    id: "28000017",
    name: "snowball",
    cost: 2,
    rarity: COMMON,
  },
  26000034: {
    id: "26000034",
    name: "bowler",
    cost: 5,
    rarity: EPIC,
  },
  26000063: {
    id: "26000063",
    name: "electroDragon",
    cost: 5,
    rarity: EPIC,
  },
  26000002: {
    id: "26000002",
    name: "goblins",
    cost: 2,
    rarity: COMMON,
  },
  26000011: {
    id: "26000011",
    name: "valkyrie",
    cost: 4,
    rarity: RARE,
  },
  26000030: {
    id: "26000030",
    name: "iceSpirit",
    cost: 1,
    rarity: COMMON,
  },
  26000045: {
    id: "26000045",
    name: "executioner",
    cost: 5,
    rarity: EPIC,
  },
  28000003: {
    id: "28000003",
    name: "rocket",
    cost: 6,
    rarity: RARE,
  },
  26000054: {
    id: "26000054",
    name: "cannonCart",
    cost: 5,
    rarity: COMMON,
  },
  27000001: {
    id: "27000001",
    name: "goblinHut",
    cost: 5,
    rarity: RARE,
  },
  27000010: {
    id: "27000010",
    name: "furnace",
    cost: 4,
    rarity: RARE,
  },
  26000019: {
    id: "26000019",
    name: "spearGoblins",
    cost: 2,
    rarity: COMMON,
  },
  26000022: {
    id: "26000022",
    name: "minionHorde",
    cost: 5,
    rarity: COMMON,
  },
  26000041: {
    id: "26000041",
    name: "goblinGang",
    cost: 3,
    rarity: COMMON,
  },
  27000002: {
    id: "27000002",
    name: "mortar",
    cost: 4,
    rarity: COMMON,
  },
  26000053: {
    id: "26000053",
    name: "rascals",
    cost: 5,
    rarity: COMMON,
  },
  28000006: {
    id: "28000006",
    name: "mirror",
    cost: 1.5,
    rarity: EPIC,
  },
  26000069: {
    id: "26000069",
    name: "skeletonKing",
    cost: 4,
    rarity: HERO,
  },
  26000058: {
    id: "26000058",
    name: "wallbreakers",
    cost: 2,
    rarity: EPIC,
  },
  26000062: {
    id: "26000062",
    name: "magicArcher",
    cost: 4,
    rarity: LEGENDARY,
  },
  27000004: {
    id: "27000004",
    name: "bombTower",
    cost: 4,
    rarity: RARE,
  },
  26000014: {
    id: "26000014",
    name: "musketeer",
    cost: 4,
    rarity: RARE,
  },
  28000009: {
    id: "28000009",
    name: "poison",
    cost: 4,
    rarity: EPIC,
  },
  26000018: {
    id: "26000018",
    name: "miniPekka",
    cost: 4,
    rarity: RARE,
  },
  26000031: {
    id: "26000031",
    name: "fireSpirit",
    cost: 1,
    rarity: COMMON,
  },
  26000036: {
    id: "26000036",
    name: "battleRam",
    cost: 4,
    rarity: RARE,
  },
  26000067: {
    id: "26000067",
    name: "elixirGolem",
    cost: 3,
    rarity: RARE,
  },
  26000068: {
    id: "26000068",
    name: "battleHealer",
    cost: 4,
    rarity: RARE,
  },
  26000023: {
    id: "26000023",
    name: "iceWizard",
    cost: 3,
    rarity: LEGENDARY,
  },
  27000006: {
    id: "27000006",
    name: "tesla",
    cost: 4,
    rarity: COMMON,
  },
  27000008: {
    id: "27000008",
    name: "xbow",
    cost: 6,
    rarity: EPIC,
  },
  26000039: {
    id: "26000039",
    name: "megaMinion",
    cost: 3,
    rarity: RARE,
  },
  26000061: {
    id: "26000061",
    name: "fisherman",
    cost: 3,
    rarity: COMMON,
  },
  26000025: {
    id: "26000025",
    name: "guards",
    cost: 3,
    rarity: EPIC,
  },
  27000013: {
    id: "27000013",
    name: "goblinDrill",
    cost: 3,
    rarity: EPIC,
  },
  26000056: {
    id: "26000056",
    name: "skeletonBarrel",
    cost: 3,
    rarity: COMMON,
  },
  26000064: {
    id: "26000064",
    name: "firecracker",
    cost: 3,
    rarity: COMMON,
  },
  27000005: {
    id: "27000005",
    name: "barbarianHut",
    cost: 7,
    rarity: RARE,
  },
  27000007: {
    id: "27000007",
    name: "elixirCollector",
    cost: 6,
    rarity: RARE,
  },
  27000000: {
    id: "27000000",
    name: "cannon",
    cost: 3,
    rarity: COMMON,
  },
  27000009: {
    id: "27000009",
    name: "tombstone",
    cost: 3,
    rarity: RARE,
  },
  27000003: {
    id: "27000003",
    name: "infernoTower",
    cost: 5,
    rarity: RARE,
  },
  26000001: {
    id: "26000001",
    name: "archer",
    cost: 3,
    rarity: COMMON,
  },
  28000013: {
    id: "28000013",
    name: "clone",
    cost: 3,
    rarity: EPIC,
  },
  28000014: {
    id: "28000014",
    name: "earthquake",
    cost: 3,
    rarity: RARE,
  },
  28000018: {
    id: "28000018",
    name: "royalDelivery",
    cost: 3,
    rarity: COMMON,
  },
};
