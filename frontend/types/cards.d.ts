interface Card {
  id: string;
  name: string;
  cost: number;
  rarity: number;
}

interface Cards {
  [key: string]: Card;
}
