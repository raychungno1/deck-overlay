interface Replay {
  tag: string;
  battleTime: string;
  viewCount: number;
  shareCount: number;
  replayData: ReplayData;
  version: Version;
}

interface ReplayData {
  battle: Battle;
  endTick: number;
  cmd: BattleCmd[];
  evt: any[];
  rndSeed: number;
  time: number;
}

interface Battle {
  gmt: number;
  plt: number;
  t1s: number;
  t2s: number;
  gamemode: number;
  hm: boolean;
  deck0: DeckCard[];
  deck1: DeckCard[];
  avatar0: any;
  avatar1: any;
  location: number;
  arena: number;
  event: any;
  hbd: any;
}

interface DeckCard {
  d: number;
  t?: number;
  l?: number;
  pr?: number;
  rcnt?: number;
}

interface BattleCmd {
  ct: number;
  c: {
    t: number;
    t2: number;
    idHi: number;
    idLo: number;
    idx: number;
    gid: number;
    px: number;
    py: number;
    sid: number;
  };
}

interface Version {
  major: number;
  build: number;
  content: number;
}
