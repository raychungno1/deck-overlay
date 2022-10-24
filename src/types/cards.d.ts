interface Card {
  name: string;
  cost: number;
  rarity: number;
  dsName: string;
}

interface Cards {
  [key: string]: Card;
}
