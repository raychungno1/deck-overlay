interface DeckCard {
  id: string;
  name: string;
  cost: number;
  rarity: number;
}

class Deck {
  cards: DeckCard[];
  averageElixir: number;
  fastestCycle: DeckCard[];

  /**
   * Creates a deck from a deck link
   * @param link  a deck link to parse
   */
  constructor(link: string) {
    const ids = link.match(/(\d{8})/g);
    this.cards = ids.map((id) => ({ id, ...CARDS[id] }));

    this._initDeck();
  }

  private _initDeck() {
    // Sorting cards
    this.cards.sort((a, b) => (a.cost > b.cost ? 1 : -1));

    // Average elixir
    const total = this.cards.reduce((prev, { cost }) => prev + cost, 0);
    this.averageElixir = Math.round((total * 10) / 8);

    // Fastest cycle
    for (const card of this.cards) {
      if (this.fastestCycle.length < 4 && card.name !== "mirror") {
        this.fastestCycle.push(card);
      }
    }
  }

  /**
   * Verifies a deck link
   * @param link  a deck link to parse
   * @returns     true if the deck link is valid, false otherwise
   */
  static deckLinkIsValid(link: string): boolean {
    const ids = link.match(/(\d{8})/g);
    return ids && ids.length === 8 && ids.every((id) => id in CARDS);
  }

  /**
   * Returns an iterables of cards in the deck
   */
  [Symbol.iterator]() {
    return this.cards.values();
  }
}
