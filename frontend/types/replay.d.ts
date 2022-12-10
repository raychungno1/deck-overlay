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
  cmd: Cmd[];
  evt: Evt[];
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
  deck0: ReplayCard[];
  deck1: ReplayCard[];
  avatar0: Avatar;
  avatar1: Avatar;
  location: number;
  arena: number;
  event: ReplayEvent;
  hbd: Hbd[];
}

interface ReplayCard {
  d: number;
  t?: number;
  c?: number;
  l?: number;
  newc?: number;
  rcnt?: number;
  pr?: number;
}

interface Avatar {
  "accountID.hi": number;
  "accountID.lo": number;
  expLevel: number;
  expPoints?: number;
  totalExpPoints: number;
  name: string;
  clan_name: string;
  arena: number;
  badge: number;
  welo: number;
  scr: number;
  spi: number;
  lti: number;
  clan_id_hi: number;
  clan_id_lo: number;
  npc: boolean;
}

interface ReplayEvent {
  id: number;
  version_id: number;
  variant_id: number;
  personally_targeted: boolean;
  name: string;
  category: number;
  start_time: number;
  end_time: number;
  visible_time: number;
  event_name: string;
  json: string;
  event_group_id: number;
  event_top_group_id: number;
  impression_id: number;
  visible_end_time: number;
}

interface Hbd {
  em: Em;
  sa?: number;
  sk: Sk;
  bn: Bn;
}

interface Em {
  oe: number[];
  de: De[];
}

interface De {
  p: number;
  e: number;
}

interface Sk {
  os: number[];
  ss: number[];
  ats: number;
  lss: Lss[];
  rnd: boolean;
}

interface Lss {
  CustomId: number;
  ScFile: ScFile;
  KingTowerDeathFx: string;
  PrincessTowerDeathFx: string;
}

interface ScFile {
  File: string;
  Checksum: string;
}

interface Bn {
  bg: number;
  fg: number;
  bd1?: Bd;
  bd2?: Bd;
  bd3?: Bd;
}

interface Bd {
  b: number;
  1: number;
  2: number;
  c: boolean;
  l: number;
}

interface Cmd {
  ct: number;
  c: C;
}

interface C {
  t: number;
  t2: number;
  idHi: number;
  idLo: number;
  idx: number;
  gid: number;
  px: number;
  py: number;
  sid: number;
  cgid?: number;
}

interface Evt {
  type: number;
  id_hi: number;
  id_lo: number;
  ticks: number[];
  params: number[];
}

interface Version {
  major: number;
  build: number;
  content: number;
}
