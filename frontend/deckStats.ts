function setStatLink(link: string) {
  statDeckLink.value = link;
  deckPreview(statDeckLink, "stat-deck-preview");
  selectPage(Page.DECK_STATS);
}

// Deck link preview (stats page)
const statDeckLink = document.getElementById(
  "stat-deck-link"
) as HTMLInputElement;
deckPreview(statDeckLink, "stat-deck-preview");
statDeckLink.addEventListener("input", () =>
  deckPreview(statDeckLink, "stat-deck-preview")
);

// Initialize sliders
["attack", "defense", "vers", "synergy"].forEach((stat) => {
  sliderWithLabel(`stat-${stat}`, `stat-${stat}-lbl`);
});

// Submit stat
const statForm = document.getElementById("stat-form");
statForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit stats");
});
