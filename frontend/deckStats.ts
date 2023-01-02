// Deck link preview (stats page)
const statDeckLink = document.getElementById(
  "stat-deck-link"
) as HTMLInputElement;

// Initialize sliders
const STATS = ["attack", "defense", "vers", "synergy"];
const statSelects = STATS.map((stat) =>
  sliderWithLabel(`stat-${stat}`, `stat-${stat}-lbl`)
);

// Update functions
function initStats() {
  deckPreview(statDeckLink, "stat-deck-preview");
}

function setStatLink(link: string) {
  statDeckLink.value = link;
  initStats();
  selectPage(Page.DECK_STATS);
}

initStats();
statDeckLink.addEventListener("input", initStats);

// Submit stat
const statForm = document.getElementById("stat-form");
statForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const cardIds = statDeckLink.value.match(/(\d{8})/g);
  const statsInfo = {
    cards: cardIds.map((id) => CARDS[id]),
  };
  statsInfo["averageElixir"] = averageElixir(statsInfo.cards)

  // Parsing input stats
  STATS.forEach((stat, i) => (statsInfo[stat] = +statSelects[i].value));

  // Calculating f2p score
  statsInfo["f2p"] = statsInfo.cards.reduce(
    (prev, card) => prev + card.rarity / 8,
    0
  );

  console.log(statsInfo);
});
