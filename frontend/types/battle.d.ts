interface BattleDetail {
  type: string;
  battleTime: string;
  isLadderTournament: boolean;
  arena: Arena;
  gameMode: GameMode;
  replayTag?: string;
  deckSelection: string;
  team: Player[];
  opponent: Player[];
  challengeTitle?: string;
  isHostedMatch: boolean;
  challengeId?: number;
  challengeWinCountBefore?: number;
}

interface Arena {
  id: number;
  name: string;
}

interface GameMode {
  id: number;
  name: string;
}

interface Player {
  tag: string;
  name: string;
  startingTrophies: number;
  crowns: number;
  kingTowerHitPoints: number;
  princessTowersHitPoints: number[];
  clan?: Clan;
  cards: BattleLogCard[];
  elixirLeaked: number;
  rounds?: Round[];
  trophyChange?: number;
}

interface Clan {
  tag: string;
  name: string;
  badgeId: number;
}

interface BattleLogCard {
  name: string;
  id: number;
  level: number;
  maxLevel: number;
  used?: boolean;
  iconUrls: IconUrls;
  starLevel?: number;
}

interface IconUrls {
  medium: string;
}

interface Round {
  crowns: number;
  kingTowerHitPoints: number;
  princessTowersHitPoints: number[];
  cards: BattleLogCard[];
  elixirLeaked: number;
}
