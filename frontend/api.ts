function requestOptions(): RequestInit {
  return {
    method: "GET",
    headers: new Headers({ Authorization: `Bearer ${CR_API_KEY}` }),
    redirect: "follow",
  };
}

async function getBattlelog(playerId: string): Promise<BattleDetail[]> {
  playerId = playerId.replace("#", "%23");
  try {
    const response = await fetch(
      `https://api.clashroyale.com/v1/players/${playerId}/battlelog`,
      requestOptions()
    );

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    return sampleBattlelog;
  }
}

async function getReplay(replayTag: string): Promise<Replay> {
  replayTag = replayTag.replace("#", "%23");

  const response = await fetch(
    `https://api.clashroyale.com/v1/replays/${replayTag}`,
    requestOptions()
  );

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

const sampleBattlelog: BattleDetail[] = [
  {
    type: "challenge",
    battleTime: "20221113T015202.000Z",
    isLadderTournament: true,
    arena: {
      id: 54000036,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000291,
      name: "Challenge_AllCards_EventDeck",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Skeleton King",
            id: 26000069,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/dCd69_wN9f8DxwuqOGtR4QgWhHIPIaTNxZ1e23RzAAc.png",
            },
          },
          {
            name: "Miner",
            id: 26000032,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png",
            },
          },
          {
            name: "Mortar",
            id: 27000002,
            level: 11,
            starLevel: 2,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Skeleton Army",
            id: 26000012,
            level: 6,
            starLevel: 3,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png",
            },
          },
          {
            name: "Dart Goblin",
            id: 26000040,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png",
            },
          },
          {
            name: "Goblin Gang",
            id: 26000041,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png",
            },
          },
          {
            name: "Fireball",
            id: 28000000,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png",
            },
          },
        ],
        elixirLeaked: 2.83,
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
          badgeId: 16000004,
        },
        cards: [
          {
            name: "Magic Archer",
            id: 26000062,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Avli3W7BxU9HQ2SoLiXnBgGx25FoNXUSFm7OcAk68ek.png",
            },
          },
          {
            name: "Fireball",
            id: 28000000,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png",
            },
          },
          {
            name: "Zap",
            id: 28000008,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png",
            },
          },
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Ram Rider",
            id: 26000051,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QaJyerT7f7oMyZ3Fv1glKymtLSvx7YUXisAulxl7zRI.png",
            },
          },
          {
            name: "Lumberjack",
            id: 26000035,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/E6RWrnCuk13xMX5OE1EQtLEKTZQV6B78d00y8PlXt6Q.png",
            },
          },
        ],
        elixirLeaked: 6.28,
      },
    ],
    challengeTitle: "ロイヤル大会",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T014852.000Z",
    isLadderTournament: true,
    arena: {
      id: 54000036,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000291,
      name: "Challenge_AllCards_EventDeck",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Skeleton King",
            id: 26000069,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/dCd69_wN9f8DxwuqOGtR4QgWhHIPIaTNxZ1e23RzAAc.png",
            },
          },
          {
            name: "Miner",
            id: 26000032,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png",
            },
          },
          {
            name: "Mortar",
            id: 27000002,
            level: 11,
            starLevel: 2,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Skeleton Army",
            id: 26000012,
            level: 6,
            starLevel: 3,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png",
            },
          },
          {
            name: "Dart Goblin",
            id: 26000040,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png",
            },
          },
          {
            name: "Goblin Gang",
            id: 26000041,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png",
            },
          },
          {
            name: "Fireball",
            id: 28000000,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png",
            },
          },
        ],
        elixirLeaked: 0.82,
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
          badgeId: 16000144,
        },
        cards: [
          {
            name: "Giant",
            id: 26000003,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Axr4ox5_b7edmLsoHxBX3vmgijAIibuF6RImTbqLlXE.png",
            },
          },
          {
            name: "Skeleton King",
            id: 26000069,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/dCd69_wN9f8DxwuqOGtR4QgWhHIPIaTNxZ1e23RzAAc.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            starLevel: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Skeleton Army",
            id: 26000012,
            level: 6,
            starLevel: 3,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png",
            },
          },
          {
            name: "Arrows",
            id: 28000001,
            level: 11,
            starLevel: 3,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png",
            },
          },
          {
            name: "Giant Snowball",
            id: 28000017,
            level: 11,
            starLevel: 1,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/7MaJLa6hK9WN2_VIshuh5DIDfGwm0wEv98gXtAxLDPs.png",
            },
          },
          {
            name: "Witch",
            id: 26000007,
            level: 6,
            starLevel: 2,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png",
            },
          },
        ],
        elixirLeaked: 0.78,
      },
    ],
    challengeTitle: "Royal Tournament",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T014536.000Z",
    isLadderTournament: true,
    arena: {
      id: 54000036,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000291,
      name: "Challenge_AllCards_EventDeck",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Skeleton King",
            id: 26000069,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/dCd69_wN9f8DxwuqOGtR4QgWhHIPIaTNxZ1e23RzAAc.png",
            },
          },
          {
            name: "Miner",
            id: 26000032,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png",
            },
          },
          {
            name: "Mortar",
            id: 27000002,
            level: 11,
            starLevel: 2,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Skeleton Army",
            id: 26000012,
            level: 6,
            starLevel: 3,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png",
            },
          },
          {
            name: "Dart Goblin",
            id: 26000040,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png",
            },
          },
          {
            name: "Goblin Gang",
            id: 26000041,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png",
            },
          },
          {
            name: "Fireball",
            id: 28000000,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png",
            },
          },
        ],
        elixirLeaked: 4.09,
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
          badgeId: 16000163,
        },
        cards: [
          {
            name: "Royal Giant",
            id: 26000024,
            level: 11,
            starLevel: 2,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/mnlRaNtmfpQx2e6mp70sLd0ND-pKPF70Cf87_agEKg4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Fisherman",
            id: 26000061,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/U2KZ3g0wyufcuA5P2Xrn3Z3lr1WiJmc5S0IWOZHgizQ.png",
            },
          },
          {
            name: "Musketeer",
            id: 26000014,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Tex1C48UTq9FKtAX-3tzG0FJmc9jzncUZG3bb5Vf-Ds.png",
            },
          },
          {
            name: "Electro Spirit",
            id: 26000084,
            level: 11,
            starLevel: 1,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/WKd4-IAFsgPpMo7dDi9sujmYjRhOMEWiE07OUJpvD9g.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            starLevel: 3,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Lightning",
            id: 28000007,
            level: 6,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/fpnESbYqe5GyZmaVVYe-SEu7tE0Kxh_HZyVigzvLjks.png",
            },
          },
          {
            name: "The Log",
            id: 28000011,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png",
            },
          },
        ],
        elixirLeaked: 0.58,
      },
    ],
    challengeTitle: "Royal Tournament",
    isHostedMatch: false,
  },
  {
    type: "riverRacePvP",
    battleTime: "20221113T013920.000Z",
    isLadderTournament: false,
    arena: {
      id: 54000016,
      name: "Arena 19",
    },
    gameMode: {
      id: 72000062,
      name: "TripleElixir_Ladder",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Mega Knight",
            id: 26000055,
            level: 5,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/O2NycChSNhn_UK9nqBXUhhC_lILkiANzPuJjtjoz0CE.png",
            },
          },
          {
            name: "Witch",
            id: 26000007,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png",
            },
          },
          {
            name: "Flying Machine",
            id: 26000057,
            level: 11,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/hzKNE3QwFcrSrDDRuVW3QY_OnrDPijSiIp-PsWgFevE.png",
            },
          },
          {
            name: "Cannon Cart",
            id: 26000054,
            level: 8,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/aqwxRz8HXzqlMCO4WMXNA1txynjXTsLinknqsgZLbok.png",
            },
          },
          {
            name: "Goblin Hut",
            id: 27000001,
            level: 10,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/l8ZdzzNLcwB4u7ihGgxNFQOjCT_njFuAhZr7D6PRF7E.png",
            },
          },
          {
            name: "Furnace",
            id: 27000010,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/iqbDiG7yYRIzvCPXdt9zPb3IvMt7F7Gi4wIPnh2x4aI.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 8,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 8,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 22.07,
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
          badgeId: 16000142,
        },
        cards: [
          {
            name: "Cannon Cart",
            id: 26000054,
            level: 9,
            starLevel: 3,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/aqwxRz8HXzqlMCO4WMXNA1txynjXTsLinknqsgZLbok.png",
            },
          },
          {
            name: "Goblin Gang",
            id: 26000041,
            level: 14,
            starLevel: 3,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png",
            },
          },
          {
            name: "Mortar",
            id: 27000002,
            level: 14,
            starLevel: 2,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png",
            },
          },
          {
            name: "Valkyrie",
            id: 26000011,
            level: 12,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/0lIoYf3Y_plFTzo95zZL93JVxpfb3MMgFDDhgSDGU9A.png",
            },
          },
          {
            name: "Dart Goblin",
            id: 26000040,
            level: 12,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png",
            },
          },
          {
            name: "The Log",
            id: 28000011,
            level: 6,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png",
            },
          },
          {
            name: "Miner",
            id: 26000032,
            level: 6,
            starLevel: 2,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png",
            },
          },
          {
            name: "Bats",
            id: 26000049,
            level: 13,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png",
            },
          },
        ],
        elixirLeaked: 13.74,
      },
    ],
    isHostedMatch: false,
  },
  {
    type: "riverRaceDuel",
    battleTime: "20221113T013501.000Z",
    isLadderTournament: false,
    arena: {
      id: 54000016,
      name: "Arena 19",
    },
    gameMode: {
      id: 72000267,
      name: "CW_Duel_1v1",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Goblin Barrel",
            id: 28000004,
            level: 7,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/CoZdp5PpsTH858l212lAMeJxVJ0zxv9V-f5xC8Bvj5g.png",
            },
          },
          {
            name: "Knight",
            id: 26000000,
            level: 14,
            starLevel: 3,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png",
            },
          },
          {
            name: "Ice Spirit",
            id: 26000030,
            level: 14,
            starLevel: 1,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png",
            },
          },
          {
            name: "Goblin Gang",
            id: 26000041,
            level: 14,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png",
            },
          },
          {
            name: "Princess",
            id: 26000026,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png",
            },
          },
          {
            name: "Inferno Tower",
            id: 27000003,
            level: 10,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png",
            },
          },
          {
            name: "The Log",
            id: 28000011,
            level: 6,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png",
            },
          },
          {
            name: "Rocket",
            id: 28000003,
            level: 12,
            starLevel: 3,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Ie07nQNK9CjhKOa4-arFAewi4EroqaA-86Xo7r5tx94.png",
            },
          },
          {
            name: "Electro Giant",
            id: 26000085,
            level: 8,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_uChZkNHAMq6tPb3v6A49xinOe3CnhjstOhG6OZbPYc.png",
            },
          },
          {
            name: "Dark Prince",
            id: 26000027,
            level: 9,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/M7fXlrKXHu2IvpSGpk36kXVstslbR08Bbxcy0jQcln8.png",
            },
          },
          {
            name: "Inferno Dragon",
            id: 26000037,
            level: 6,
            starLevel: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png",
            },
          },
          {
            name: "Mother Witch",
            id: 26000083,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/fO-Xah8XZkYKaSK9SCp3wnzwxtvIhun9NVY-zzte1Ng.png",
            },
          },
          {
            name: "Bomber",
            id: 26000013,
            level: 13,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/12n1CesxKIcqVYntjxcF36EFA-ONw7Z-DoL0_rQrbdo.png",
            },
          },
          {
            name: "Goblin Cage",
            id: 27000012,
            level: 11,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/vD24bBgK4rSq7wx5QEbuqChtPMRFviL_ep76GwQw1yA.png",
            },
          },
          {
            name: "Tornado",
            id: 28000012,
            level: 9,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png",
            },
          },
          {
            name: "Lightning",
            id: 28000007,
            level: 8,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/fpnESbYqe5GyZmaVVYe-SEu7tE0Kxh_HZyVigzvLjks.png",
            },
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
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/CoZdp5PpsTH858l212lAMeJxVJ0zxv9V-f5xC8Bvj5g.png",
                },
              },
              {
                name: "Knight",
                id: 26000000,
                level: 14,
                starLevel: 3,
                maxLevel: 14,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png",
                },
              },
              {
                name: "Ice Spirit",
                id: 26000030,
                level: 14,
                starLevel: 1,
                maxLevel: 14,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png",
                },
              },
              {
                name: "Goblin Gang",
                id: 26000041,
                level: 14,
                maxLevel: 14,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png",
                },
              },
              {
                name: "Princess",
                id: 26000026,
                level: 3,
                maxLevel: 6,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png",
                },
              },
              {
                name: "Inferno Tower",
                id: 27000003,
                level: 10,
                maxLevel: 12,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png",
                },
              },
              {
                name: "The Log",
                id: 28000011,
                level: 6,
                starLevel: 1,
                maxLevel: 6,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png",
                },
              },
              {
                name: "Rocket",
                id: 28000003,
                level: 12,
                starLevel: 3,
                maxLevel: 12,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/Ie07nQNK9CjhKOa4-arFAewi4EroqaA-86Xo7r5tx94.png",
                },
              },
            ],
            elixirLeaked: 0.85,
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
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/_uChZkNHAMq6tPb3v6A49xinOe3CnhjstOhG6OZbPYc.png",
                },
              },
              {
                name: "Dark Prince",
                id: 26000027,
                level: 9,
                maxLevel: 9,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/M7fXlrKXHu2IvpSGpk36kXVstslbR08Bbxcy0jQcln8.png",
                },
              },
              {
                name: "Inferno Dragon",
                id: 26000037,
                level: 6,
                starLevel: 3,
                maxLevel: 6,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png",
                },
              },
              {
                name: "Mother Witch",
                id: 26000083,
                level: 3,
                maxLevel: 6,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/fO-Xah8XZkYKaSK9SCp3wnzwxtvIhun9NVY-zzte1Ng.png",
                },
              },
              {
                name: "Bomber",
                id: 26000013,
                level: 13,
                maxLevel: 14,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/12n1CesxKIcqVYntjxcF36EFA-ONw7Z-DoL0_rQrbdo.png",
                },
              },
              {
                name: "Goblin Cage",
                id: 27000012,
                level: 11,
                maxLevel: 12,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/vD24bBgK4rSq7wx5QEbuqChtPMRFviL_ep76GwQw1yA.png",
                },
              },
              {
                name: "Tornado",
                id: 28000012,
                level: 9,
                starLevel: 1,
                maxLevel: 9,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png",
                },
              },
              {
                name: "Lightning",
                id: 28000007,
                level: 8,
                starLevel: 1,
                maxLevel: 9,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/fpnESbYqe5GyZmaVVYe-SEu7tE0Kxh_HZyVigzvLjks.png",
                },
              },
            ],
            elixirLeaked: 2.78,
          },
        ],
        elixirLeaked: 2.82,
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
          badgeId: 16000139,
        },
        cards: [
          {
            name: "Giant Skeleton",
            id: 26000020,
            level: 9,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/0p0gd0XaVRu1Hb1iSG1hTYbz2AN6aEiZnhaAib5O8Z8.png",
            },
          },
          {
            name: "Arrows",
            id: 28000001,
            level: 14,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png",
            },
          },
          {
            name: "Mother Witch",
            id: 26000083,
            level: 6,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/fO-Xah8XZkYKaSK9SCp3wnzwxtvIhun9NVY-zzte1Ng.png",
            },
          },
          {
            name: "Royal Hogs",
            id: 26000059,
            level: 12,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/ASSQJG_MoVq9e81HZzo4bynMnyLNpNJMfSLb3hqydOw.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 12,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Mirror",
            id: 28000006,
            level: 9,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png",
            },
          },
          {
            name: "Fisherman",
            id: 26000061,
            level: 6,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/U2KZ3g0wyufcuA5P2Xrn3Z3lr1WiJmc5S0IWOZHgizQ.png",
            },
          },
          {
            name: "Dark Prince",
            id: 26000027,
            level: 9,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/M7fXlrKXHu2IvpSGpk36kXVstslbR08Bbxcy0jQcln8.png",
            },
          },
          {
            name: "P.E.K.K.A",
            id: 26000004,
            level: 9,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png",
            },
          },
          {
            name: "Zap",
            id: 28000008,
            level: 14,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png",
            },
          },
          {
            name: "Battle Ram",
            id: 26000036,
            level: 12,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/dyc50V2cplKi4H7pq1B3I36pl_sEH5DQrNHboS_dbbM.png",
            },
          },
          {
            name: "Earthquake",
            id: 28000014,
            level: 12,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/XeQXcrUu59C52DslyZVwCnbi4yamID-WxfVZLShgZmE.png",
            },
          },
          {
            name: "Baby Dragon",
            id: 26000015,
            level: 9,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/cjC9n4AvEZJ3urkVh-rwBkJ-aRSsydIMqSAV48hAih0.png",
            },
          },
          {
            name: "Hunter",
            id: 26000044,
            level: 9,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/VNabB1WKnYtYRSG7X_FZfnZjQDHTBs9A96OGMFmecrA.png",
            },
          },
          {
            name: "Cannon Cart",
            id: 26000054,
            level: 9,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/aqwxRz8HXzqlMCO4WMXNA1txynjXTsLinknqsgZLbok.png",
            },
          },
          {
            name: "Skeletons",
            id: 26000010,
            level: 14,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png",
            },
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
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/0p0gd0XaVRu1Hb1iSG1hTYbz2AN6aEiZnhaAib5O8Z8.png",
                },
              },
              {
                name: "Arrows",
                id: 28000001,
                level: 14,
                maxLevel: 14,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png",
                },
              },
              {
                name: "Mother Witch",
                id: 26000083,
                level: 6,
                maxLevel: 6,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/fO-Xah8XZkYKaSK9SCp3wnzwxtvIhun9NVY-zzte1Ng.png",
                },
              },
              {
                name: "Royal Hogs",
                id: 26000059,
                level: 12,
                maxLevel: 12,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/ASSQJG_MoVq9e81HZzo4bynMnyLNpNJMfSLb3hqydOw.png",
                },
              },
              {
                name: "Zappies",
                id: 26000052,
                level: 12,
                maxLevel: 12,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
                },
              },
              {
                name: "Mirror",
                id: 28000006,
                level: 9,
                maxLevel: 9,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png",
                },
              },
              {
                name: "Fisherman",
                id: 26000061,
                level: 6,
                maxLevel: 6,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/U2KZ3g0wyufcuA5P2Xrn3Z3lr1WiJmc5S0IWOZHgizQ.png",
                },
              },
              {
                name: "Dark Prince",
                id: 26000027,
                level: 9,
                maxLevel: 9,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/M7fXlrKXHu2IvpSGpk36kXVstslbR08Bbxcy0jQcln8.png",
                },
              },
            ],
            elixirLeaked: 5.87,
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
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png",
                },
              },
              {
                name: "Zap",
                id: 28000008,
                level: 14,
                maxLevel: 14,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png",
                },
              },
              {
                name: "Battle Ram",
                id: 26000036,
                level: 12,
                maxLevel: 12,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/dyc50V2cplKi4H7pq1B3I36pl_sEH5DQrNHboS_dbbM.png",
                },
              },
              {
                name: "Earthquake",
                id: 28000014,
                level: 12,
                maxLevel: 12,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/XeQXcrUu59C52DslyZVwCnbi4yamID-WxfVZLShgZmE.png",
                },
              },
              {
                name: "Baby Dragon",
                id: 26000015,
                level: 9,
                maxLevel: 9,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/cjC9n4AvEZJ3urkVh-rwBkJ-aRSsydIMqSAV48hAih0.png",
                },
              },
              {
                name: "Hunter",
                id: 26000044,
                level: 9,
                maxLevel: 9,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/VNabB1WKnYtYRSG7X_FZfnZjQDHTBs9A96OGMFmecrA.png",
                },
              },
              {
                name: "Cannon Cart",
                id: 26000054,
                level: 9,
                maxLevel: 9,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/aqwxRz8HXzqlMCO4WMXNA1txynjXTsLinknqsgZLbok.png",
                },
              },
              {
                name: "Skeletons",
                id: 26000010,
                level: 14,
                maxLevel: 14,
                used: true,
                iconUrls: {
                  medium:
                    "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png",
                },
              },
            ],
            elixirLeaked: 5.28,
          },
        ],
        elixirLeaked: 5.28,
      },
    ],
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T012609.000Z",
    challengeId: 73006412,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 0.0,
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
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Royal Ghost",
            id: 26000050,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png",
            },
          },
          {
            name: "Lumberjack",
            id: 26000035,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/E6RWrnCuk13xMX5OE1EQtLEKTZQV6B78d00y8PlXt6Q.png",
            },
          },
          {
            name: "Princess",
            id: 26000026,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png",
            },
          },
          {
            name: "Freeze",
            id: 28000005,
            level: 6,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/I1M20_Zs_p_BS1NaNIVQjuMJkYI_1-ePtwYZahn0JXQ.png",
            },
          },
          {
            name: "Bats",
            id: 26000049,
            level: 11,
            starLevel: 2,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png",
            },
          },
          {
            name: "Goblin Gang",
            id: 26000041,
            level: 11,
            starLevel: 3,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png",
            },
          },
        ],
        elixirLeaked: 0.32,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #2",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T012259.000Z",
    challengeId: 73006412,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 9.41,
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
          badgeId: 16000024,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "The Log",
            id: 28000011,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png",
            },
          },
          {
            name: "Sparky",
            id: 26000033,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2GKMkBrArZXgQxf2ygFjDs4VvGYPbx8F6Lj_68iVhIM.png",
            },
          },
          {
            name: "Skeleton Barrel",
            id: 26000056,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png",
            },
          },
          {
            name: "Electro Spirit",
            id: 26000084,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/WKd4-IAFsgPpMo7dDi9sujmYjRhOMEWiE07OUJpvD9g.png",
            },
          },
          {
            name: "Tesla",
            id: 27000006,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/OiwnGrxFMNiHetYEerE-UZt0L_uYNzFY7qV_CA_OxR4.png",
            },
          },
          {
            name: "Giant Skeleton",
            id: 26000020,
            level: 6,
            starLevel: 2,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/0p0gd0XaVRu1Hb1iSG1hTYbz2AN6aEiZnhaAib5O8Z8.png",
            },
          },
          {
            name: "Three Musketeers",
            id: 26000028,
            level: 9,
            starLevel: 1,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_J2GhbkX3vswaFk1wG-dopwiHyNc_YiPhwroiKF3Mek.png",
            },
          },
        ],
        elixirLeaked: 3.75,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #2",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T011947.000Z",
    challengeId: 73006412,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 0.36,
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
          badgeId: 16000029,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Electro Dragon",
            id: 26000063,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/tN9h6lnMNPCNsx0LMFmvpHgznbDZ1fBRkx-C7UfNmfY.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Wizard",
            id: 26000017,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Mej7vnv4H_3p_8qPs_N6_GKahy6HDr7pU7i9eTHS84U.png",
            },
          },
          {
            name: "Elixir Golem",
            id: 26000067,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/puhMsZjCIqy21HW3hYxjrk_xt8NIPyFqjRy-BeLKZwo.png",
            },
          },
          {
            name: "Battle Healer",
            id: 26000068,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/KdwXcoigS2Kg-cgA7BJJIANbUJG6SNgjetRQ-MegZ08.png",
            },
          },
          {
            name: "Tornado",
            id: 28000012,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png",
            },
          },
          {
            name: "Rage",
            id: 28000002,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/bGP21OOmcpHMJ5ZA79bHVV2D-NzPtDkvBskCNJb7pg0.png",
            },
          },
        ],
        elixirLeaked: 0.13,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #2",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T011801.000Z",
    challengeId: 73006412,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 0.08,
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
          badgeId: 16000121,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            starLevel: 3,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Cannon",
            id: 27000000,
            level: 11,
            starLevel: 3,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/nZK1y-beLxO5vnlyUhK6-2zH2NzXJwqykcosqQ1cmZ8.png",
            },
          },
          {
            name: "Minions",
            id: 26000005,
            level: 11,
            starLevel: 3,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/yHGpoEnmUWPGV_hBbhn-Kk-Bs838OjGzWzJJlQpQKQA.png",
            },
          },
          {
            name: "Bats",
            id: 26000049,
            level: 11,
            starLevel: 2,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png",
            },
          },
          {
            name: "Dart Goblin",
            id: 26000040,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png",
            },
          },
          {
            name: "Royal Giant",
            id: 26000024,
            level: 11,
            starLevel: 2,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/mnlRaNtmfpQx2e6mp70sLd0ND-pKPF70Cf87_agEKg4.png",
            },
          },
          {
            name: "The Log",
            id: 28000011,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png",
            },
          },
        ],
        elixirLeaked: 1.1,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #2",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T011600.000Z",
    challengeId: 73006412,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 2.53,
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
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "The Log",
            id: 28000011,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png",
            },
          },
          {
            name: "Miner",
            id: 26000032,
            level: 3,
            starLevel: 2,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            starLevel: 3,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Ice Spirit",
            id: 26000030,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png",
            },
          },
          {
            name: "Bomb Tower",
            id: 27000004,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/rirYRyHPc97emRjoH-c1O8uZCBzPVnToaGuNGusF3TQ.png",
            },
          },
        ],
        elixirLeaked: 1.0,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #2",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T011114.000Z",
    challengeId: 73006412,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 1.46,
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
          badgeId: 16000164,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Mirror",
            id: 28000006,
            level: 6,
            starLevel: 3,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png",
            },
          },
          {
            name: "Tornado",
            id: 28000012,
            level: 6,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png",
            },
          },
          {
            name: "Electro Giant",
            id: 26000085,
            level: 6,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_uChZkNHAMq6tPb3v6A49xinOe3CnhjstOhG6OZbPYc.png",
            },
          },
          {
            name: "Baby Dragon",
            id: 26000015,
            level: 6,
            starLevel: 2,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/cjC9n4AvEZJ3urkVh-rwBkJ-aRSsydIMqSAV48hAih0.png",
            },
          },
          {
            name: "Night Witch",
            id: 26000048,
            level: 3,
            starLevel: 2,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/NpCrXDEDBBJgNv9QrBAcJmmMFbS7pe3KCY8xJ5VB18A.png",
            },
          },
          {
            name: "Lightning",
            id: 28000007,
            level: 6,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/fpnESbYqe5GyZmaVVYe-SEu7tE0Kxh_HZyVigzvLjks.png",
            },
          },
        ],
        elixirLeaked: 1.48,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #2",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T010803.000Z",
    challengeId: 73006412,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 0.84,
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
          badgeId: 16000142,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Electro Giant",
            id: 26000085,
            level: 6,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_uChZkNHAMq6tPb3v6A49xinOe3CnhjstOhG6OZbPYc.png",
            },
          },
          {
            name: "Dart Goblin",
            id: 26000040,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png",
            },
          },
          {
            name: "Princess",
            id: 26000026,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png",
            },
          },
          {
            name: "Skeleton Army",
            id: 26000012,
            level: 6,
            starLevel: 3,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png",
            },
          },
          {
            name: "Bats",
            id: 26000049,
            level: 11,
            starLevel: 2,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png",
            },
          },
          {
            name: "Elite Barbarians",
            id: 26000043,
            level: 11,
            starLevel: 2,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/C88C5JH_F3lLZj6K-tLcMo5DPjrFmvzIb1R2M6xCfTE.png",
            },
          },
          {
            name: "Mirror",
            id: 28000006,
            level: 6,
            starLevel: 2,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png",
            },
          },
        ],
        elixirLeaked: 1.53,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #2",
    isHostedMatch: false,
  },
  {
    type: "PvP",
    battleTime: "20221113T010426.000Z",
    isLadderTournament: false,
    arena: {
      id: 54000016,
      name: "Arena 19",
    },
    gameMode: {
      id: 72000044,
      name: "Ladder_GoldRush",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Mortar",
            id: 27000002,
            level: 14,
            starLevel: 2,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png",
            },
          },
          {
            name: "Knight",
            id: 26000000,
            level: 14,
            starLevel: 3,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png",
            },
          },
          {
            name: "Archers",
            id: 26000001,
            level: 14,
            starLevel: 2,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png",
            },
          },
          {
            name: "Ice Spirit",
            id: 26000030,
            level: 14,
            starLevel: 1,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png",
            },
          },
          {
            name: "Skeletons",
            id: 26000010,
            level: 14,
            starLevel: 3,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png",
            },
          },
          {
            name: "The Log",
            id: 28000011,
            level: 6,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png",
            },
          },
          {
            name: "Tornado",
            id: 28000012,
            level: 9,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png",
            },
          },
          {
            name: "Rocket",
            id: 28000003,
            level: 12,
            starLevel: 3,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Ie07nQNK9CjhKOa4-arFAewi4EroqaA-86Xo7r5tx94.png",
            },
          },
        ],
        elixirLeaked: 0.53,
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
              medium:
                "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png",
            },
          },
          {
            name: "Skeletons",
            id: 26000010,
            level: 14,
            starLevel: 1,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png",
            },
          },
          {
            name: "Miner",
            id: 26000032,
            level: 6,
            starLevel: 2,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png",
            },
          },
          {
            name: "The Log",
            id: 28000011,
            level: 6,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 5,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Ice Spirit",
            id: 26000030,
            level: 14,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png",
            },
          },
          {
            name: "Valkyrie",
            id: 26000011,
            level: 12,
            starLevel: 1,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/0lIoYf3Y_plFTzo95zZL93JVxpfb3MMgFDDhgSDGU9A.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 9,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 1.29,
      },
    ],
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T005943.000Z",
    challengeId: 73006412,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 2.77,
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
          badgeId: 16000010,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Mirror",
            id: 28000006,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png",
            },
          },
          {
            name: "Elixir Collector",
            id: 27000007,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/BGLo3Grsp81c72EpxLLk-Sofk3VY56zahnUNOv3JcT0.png",
            },
          },
          {
            name: "The Log",
            id: 28000011,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png",
            },
          },
          {
            name: "Zap",
            id: 28000008,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png",
            },
          },
          {
            name: "Rage",
            id: 28000002,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/bGP21OOmcpHMJ5ZA79bHVV2D-NzPtDkvBskCNJb7pg0.png",
            },
          },
          {
            name: "Archers",
            id: 26000001,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png",
            },
          },
        ],
        elixirLeaked: 5.16,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #2",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T005457.000Z",
    challengeId: 73006412,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 8.41,
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
          badgeId: 16000161,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Valkyrie",
            id: 26000011,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/0lIoYf3Y_plFTzo95zZL93JVxpfb3MMgFDDhgSDGU9A.png",
            },
          },
          {
            name: "Magic Archer",
            id: 26000062,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Avli3W7BxU9HQ2SoLiXnBgGx25FoNXUSFm7OcAk68ek.png",
            },
          },
          {
            name: "Witch",
            id: 26000007,
            level: 6,
            starLevel: 2,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png",
            },
          },
          {
            name: "Balloon",
            id: 26000006,
            level: 6,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/qBipxLo-3hhCnPrApp2Nn3b2NgrSrvwzWytvREev0CY.png",
            },
          },
          {
            name: "Fireball",
            id: 28000000,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png",
            },
          },
          {
            name: "Wizard",
            id: 26000017,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Mej7vnv4H_3p_8qPs_N6_GKahy6HDr7pU7i9eTHS84U.png",
            },
          },
          {
            name: "Electro Giant",
            id: 26000085,
            level: 6,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_uChZkNHAMq6tPb3v6A49xinOe3CnhjstOhG6OZbPYc.png",
            },
          },
        ],
        elixirLeaked: 7.41,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #2",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T005129.000Z",
    challengeId: 73006412,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 3.93,
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
          badgeId: 16000032,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Mirror",
            id: 28000006,
            level: 6,
            starLevel: 3,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png",
            },
          },
          {
            name: "The Log",
            id: 28000011,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
          {
            name: "Bomb Tower",
            id: 27000004,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/rirYRyHPc97emRjoH-c1O8uZCBzPVnToaGuNGusF3TQ.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
        ],
        elixirLeaked: 6.53,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #2",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T004812.000Z",
    challengeId: 73006412,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 6.3,
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
          badgeId: 16000015,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Archers",
            id: 26000001,
            level: 11,
            starLevel: 1,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png",
            },
          },
          {
            name: "Ice Golem",
            id: 26000038,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png",
            },
          },
          {
            name: "Fireball",
            id: 28000000,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png",
            },
          },
          {
            name: "Skeletons",
            id: 26000010,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png",
            },
          },
          {
            name: "The Log",
            id: 28000011,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png",
            },
          },
          {
            name: "X-Bow",
            id: 27000008,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/zVQ9Hme1hlj9Dc6e1ORl9xWwglcSrP7ejow5mAhLUJc.png",
            },
          },
          {
            name: "Tesla",
            id: 27000006,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/OiwnGrxFMNiHetYEerE-UZt0L_uYNzFY7qV_CA_OxR4.png",
            },
          },
        ],
        elixirLeaked: 3.28,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #2",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T004142.000Z",
    challengeId: 73006411,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 4.38,
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
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Electro Wizard",
            id: 26000042,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Dart Goblin",
            id: 26000040,
            level: 9,
            starLevel: 1,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png",
            },
          },
          {
            name: "Bats",
            id: 26000049,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png",
            },
          },
          {
            name: "Magic Archer",
            id: 26000062,
            level: 3,
            starLevel: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Avli3W7BxU9HQ2SoLiXnBgGx25FoNXUSFm7OcAk68ek.png",
            },
          },
          {
            name: "Zap",
            id: 28000008,
            level: 11,
            starLevel: 1,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png",
            },
          },
          {
            name: "P.E.K.K.A",
            id: 26000004,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png",
            },
          },
        ],
        elixirLeaked: 2.03,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #1",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T003749.000Z",
    challengeId: 73006411,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 2.0,
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
          badgeId: 16000058,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Witch",
            id: 26000007,
            level: 6,
            starLevel: 2,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png",
            },
          },
          {
            name: "Mega Knight",
            id: 26000055,
            level: 3,
            starLevel: 2,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/O2NycChSNhn_UK9nqBXUhhC_lILkiANzPuJjtjoz0CE.png",
            },
          },
          {
            name: "Rage",
            id: 28000002,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/bGP21OOmcpHMJ5ZA79bHVV2D-NzPtDkvBskCNJb7pg0.png",
            },
          },
          {
            name: "Wizard",
            id: 26000017,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Mej7vnv4H_3p_8qPs_N6_GKahy6HDr7pU7i9eTHS84U.png",
            },
          },
          {
            name: "Arrows",
            id: 28000001,
            level: 11,
            starLevel: 3,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png",
            },
          },
          {
            name: "Ram Rider",
            id: 26000051,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QaJyerT7f7oMyZ3Fv1glKymtLSvx7YUXisAulxl7zRI.png",
            },
          },
          {
            name: "Mirror",
            id: 28000006,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png",
            },
          },
        ],
        elixirLeaked: 2.63,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #1",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T003517.000Z",
    challengeId: 73006411,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 3.77,
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
          badgeId: 16000175,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Dart Goblin",
            id: 26000040,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png",
            },
          },
          {
            name: "Goblin Barrel",
            id: 28000004,
            level: 6,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/CoZdp5PpsTH858l212lAMeJxVJ0zxv9V-f5xC8Bvj5g.png",
            },
          },
          {
            name: "Cannon",
            id: 27000000,
            level: 11,
            starLevel: 3,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/nZK1y-beLxO5vnlyUhK6-2zH2NzXJwqykcosqQ1cmZ8.png",
            },
          },
          {
            name: "Bomber",
            id: 26000013,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/12n1CesxKIcqVYntjxcF36EFA-ONw7Z-DoL0_rQrbdo.png",
            },
          },
          {
            name: "Goblin Gang",
            id: 26000041,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png",
            },
          },
          {
            name: "Ice Spirit",
            id: 26000030,
            level: 11,
            starLevel: 1,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png",
            },
          },
          {
            name: "Arrows",
            id: 28000001,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png",
            },
          },
        ],
        elixirLeaked: 4.41,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #1",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T003205.000Z",
    challengeId: 73006411,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 1.17,
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
          badgeId: 16000078,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Fireball",
            id: 28000000,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png",
            },
          },
          {
            name: "Elixir Golem",
            id: 26000067,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/puhMsZjCIqy21HW3hYxjrk_xt8NIPyFqjRy-BeLKZwo.png",
            },
          },
          {
            name: "Mirror",
            id: 28000006,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png",
            },
          },
          {
            name: "Goblin Gang",
            id: 26000041,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png",
            },
          },
          {
            name: "Battle Healer",
            id: 26000068,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/KdwXcoigS2Kg-cgA7BJJIANbUJG6SNgjetRQ-MegZ08.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Magic Archer",
            id: 26000062,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Avli3W7BxU9HQ2SoLiXnBgGx25FoNXUSFm7OcAk68ek.png",
            },
          },
        ],
        elixirLeaked: 6.66,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #1",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T002956.000Z",
    challengeId: 73006411,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 0.82,
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
          badgeId: 16000139,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Witch",
            id: 26000007,
            level: 6,
            starLevel: 2,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png",
            },
          },
          {
            name: "Miner",
            id: 26000032,
            level: 3,
            starLevel: 2,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png",
            },
          },
          {
            name: "Barbarian Hut",
            id: 27000005,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/ho0nOG2y3Ch86elHHcocQs8Fv_QNe0cFJ2CijsxABZA.png",
            },
          },
          {
            name: "Rage",
            id: 28000002,
            level: 6,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/bGP21OOmcpHMJ5ZA79bHVV2D-NzPtDkvBskCNJb7pg0.png",
            },
          },
          {
            name: "Mother Witch",
            id: 26000083,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/fO-Xah8XZkYKaSK9SCp3wnzwxtvIhun9NVY-zzte1Ng.png",
            },
          },
          {
            name: "Mega Knight",
            id: 26000055,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/O2NycChSNhn_UK9nqBXUhhC_lILkiANzPuJjtjoz0CE.png",
            },
          },
          {
            name: "Royal Giant",
            id: 26000024,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/mnlRaNtmfpQx2e6mp70sLd0ND-pKPF70Cf87_agEKg4.png",
            },
          },
        ],
        elixirLeaked: 0.0,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #1",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T002820.000Z",
    challengeId: 73006411,
    isLadderTournament: false,
    arena: {
      id: 54000066,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000325,
      name: "Event_Monk_Tease",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
        ],
        elixirLeaked: 2.64,
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
          badgeId: 16000126,
        },
        cards: [
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
          {
            name: "Skeletons",
            id: 26000010,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png",
            },
          },
          {
            name: "Tombstone",
            id: 27000009,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
            },
          },
          {
            name: "Graveyard",
            id: 28000010,
            level: 3,
            starLevel: 2,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Zappies",
            id: 26000052,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png",
            },
          },
          {
            name: "Barbarian Barrel",
            id: 28000015,
            level: 6,
            starLevel: 1,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Gb0G1yNy0i5cIGUHin8uoFWxqntNtRPhY_jeMXg7HnA.png",
            },
          },
        ],
        elixirLeaked: 2.38,
      },
    ],
    challengeTitle: "Monk Launch Party Chain #1",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T002021.000Z",
    isLadderTournament: true,
    arena: {
      id: 54000036,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000291,
      name: "Challenge_AllCards_EventDeck",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Skeleton King",
            id: 26000069,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/dCd69_wN9f8DxwuqOGtR4QgWhHIPIaTNxZ1e23RzAAc.png",
            },
          },
          {
            name: "Miner",
            id: 26000032,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png",
            },
          },
          {
            name: "Mortar",
            id: 27000002,
            level: 11,
            starLevel: 2,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Skeleton Army",
            id: 26000012,
            level: 6,
            starLevel: 3,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png",
            },
          },
          {
            name: "Dart Goblin",
            id: 26000040,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png",
            },
          },
          {
            name: "Goblin Gang",
            id: 26000041,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png",
            },
          },
          {
            name: "Fireball",
            id: 28000000,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png",
            },
          },
        ],
        elixirLeaked: 7.69,
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
          badgeId: 16000145,
        },
        cards: [
          {
            name: "Musketeer",
            id: 26000014,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Tex1C48UTq9FKtAX-3tzG0FJmc9jzncUZG3bb5Vf-Ds.png",
            },
          },
          {
            name: "Fireball",
            id: 28000000,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png",
            },
          },
          {
            name: "The Log",
            id: 28000011,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png",
            },
          },
          {
            name: "Cannon",
            id: 27000000,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/nZK1y-beLxO5vnlyUhK6-2zH2NzXJwqykcosqQ1cmZ8.png",
            },
          },
          {
            name: "Ice Spirit",
            id: 26000030,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png",
            },
          },
          {
            name: "Skeletons",
            id: 26000010,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png",
            },
          },
          {
            name: "Ice Golem",
            id: 26000038,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png",
            },
          },
          {
            name: "Hog Rider",
            id: 26000021,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Ubu0oUl8tZkusnkZf8Xv9Vno5IO29Y-jbZ4fhoNJ5oc.png",
            },
          },
        ],
        elixirLeaked: 8.69,
      },
    ],
    challengeTitle: "Royal Tournament",
    isHostedMatch: false,
  },
  {
    type: "challenge",
    battleTime: "20221113T001554.000Z",
    isLadderTournament: true,
    arena: {
      id: 54000036,
      name: "Legendary Arena",
    },
    gameMode: {
      id: 72000291,
      name: "Challenge_AllCards_EventDeck",
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
          badgeId: 16000124,
        },
        cards: [
          {
            name: "Skeleton King",
            id: 26000069,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/dCd69_wN9f8DxwuqOGtR4QgWhHIPIaTNxZ1e23RzAAc.png",
            },
          },
          {
            name: "Miner",
            id: 26000032,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png",
            },
          },
          {
            name: "Mortar",
            id: 27000002,
            level: 11,
            starLevel: 2,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Skeleton Army",
            id: 26000012,
            level: 6,
            starLevel: 3,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png",
            },
          },
          {
            name: "Dart Goblin",
            id: 26000040,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png",
            },
          },
          {
            name: "Goblin Gang",
            id: 26000041,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png",
            },
          },
          {
            name: "Fireball",
            id: 28000000,
            level: 9,
            starLevel: 2,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png",
            },
          },
        ],
        elixirLeaked: 0.64,
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
          badgeId: 16000155,
        },
        cards: [
          {
            name: "The Log",
            id: 28000011,
            level: 3,
            starLevel: 1,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png",
            },
          },
          {
            name: "Poison",
            id: 28000009,
            level: 6,
            maxLevel: 9,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png",
            },
          },
          {
            name: "Goblins",
            id: 26000002,
            level: 11,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png",
            },
          },
          {
            name: "Bomb Tower",
            id: 27000004,
            level: 9,
            maxLevel: 12,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/rirYRyHPc97emRjoH-c1O8uZCBzPVnToaGuNGusF3TQ.png",
            },
          },
          {
            name: "Miner",
            id: 26000032,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png",
            },
          },
          {
            name: "Phoenix",
            id: 26000087,
            level: 3,
            maxLevel: 6,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/i0RoY1fs6ay7VAxyFEfZGIPnD002nAKcne9FtJsWBHM.png",
            },
          },
          {
            name: "Ice Spirit",
            id: 26000030,
            level: 11,
            starLevel: 1,
            maxLevel: 14,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png",
            },
          },
          {
            name: "Monk",
            id: 26000077,
            level: 1,
            maxLevel: 4,
            iconUrls: {
              medium:
                "https://api-assets.clashroyale.com/cards/300/2onG4t4-CxqwFVZAn6zpWxFz3_mG2ksSj4Q7zldo1SM.png",
            },
          },
        ],
        elixirLeaked: 9.41,
      },
    ],
    challengeTitle: "Royal Tournament",
    isHostedMatch: false,
  },
];
