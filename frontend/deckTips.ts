// Deck link preview (tips page)
const playstyleEl = document.getElementById("playstyle") as HTMLInputElement;
const tipsDeckLink = document.getElementById(
  "tips-deck-link"
) as HTMLInputElement;

// Matchups section
const matchups: HTMLInputElement[] = [];
const sliders: HTMLInputElement[] = [];
for (let i = 1; i <= 4; i++) {
  matchups.push(selectCardsAlphabetic(`matchup-${i}-list`));
  sliders.push(sliderWithLabel(`matchup-${i}-slider`, `matchup-${i}-lbl`, "%"));
}

// Card substitutes
const subCards: HTMLImageElement[] = [];
const subCardOptions: HTMLDivElement[] = [];
const subCardSelects = [];
let numCardsSubbed = 0;
const deckSubs = () => {
  const subsContainer = document.getElementById("subs-container");
  clearElement(subsContainer);
  subCards.length = 0;
  subCardOptions.length = 0;
  subCardSelects.length = 0;
  numCardsSubbed = 0;

  const cardIds = tipsDeckLink.value.match(/(\d{8})/g);
  if (cardIds && cardIds.length === 8 && cardIds.every((id) => id in CARDS)) {
    cardIds.forEach((id) => {
      const subContainer = createElement("div", { class: "sub__container" });
      subsContainer.appendChild(subContainer);

      const cardEl = createElement("img", { class: "sub__card" });
      cardEl.src = `../cards/${CARDS[id].name}.png`;
      cardEl.alt = CARDS[id].name;
      cardEl.setAttribute("data-id", id);
      subContainer.appendChild(cardEl);
      subCards.push(cardEl);

      const subInner = createElement("div", { class: "sub__inner" });
      subContainer.appendChild(subInner);

      const subOptions = createElement("div", { class: "sub__options" });
      subCardOptions.push(subOptions);

      const selector = createElement("select", {
        class: "form__select sub__select",
        id: `sub-options-${id}`,
      }) as HTMLInputElement;
      selectCardsAlphabetic(selector);
      subCardSelects.push(selector);
      subInner.appendChild(selector);
      subInner.appendChild(subOptions);

      selector.addEventListener("input", (e: any) => {
        // Check if card is already selected as a sub
        for (const subOption of subOptions.children) {
          if (subOption.dataset.id === e.target.value) {
            return;
          }
        }

        // Increase # of cards w/ subs (max 3)
        if (subOptions.children.length === 0) {
          numCardsSubbed += 1;
        }

        // Creating card image
        const cardEl = createElement("img", { class: "sub__option" });
        cardEl.src = `../cards/${CARDS[e.target.value].name}.png`;
        cardEl.alt = CARDS[e.target.value].name;
        cardEl.setAttribute("data-id", e.target.value);
        subOptions.appendChild(cardEl);

        // Add listener to remove card on click
        cardEl.addEventListener("click", () => {
          cardEl.remove();
          selector.disabled = false;

          // Decrease # of cards w/ subs
          if (subOptions.children.length === 0) {
            numCardsSubbed -= 1;
            for (let i = 0; i < 8; i++) {
              if (subCardOptions[i].children.length !== 3) {
                subCardSelects[i].disabled = false;
              }
            }
          }
        });

        // If max # of subs reached, disable all unused cards
        if (numCardsSubbed === 3) {
          for (let i = 0; i < 8; i++) {
            if (subCardOptions[i].children.length === 0) {
              subCardSelects[i].disabled = true;
            }
          }
        }

        // Disable a card with 3 subs
        if (subOptions.children.length >= 3) {
          selector.disabled = true;
        }
      });
    });
  }
};

// Update functions
function initTips() {
  deckPreview(tipsDeckLink, "tips-deck-preview");
  deckSubs();
}

function setTipsLink(link: string) {
  tipsDeckLink.value = link;
  initTips();
  selectPage(Page.DECK_TIPS);
}

initTips();
tipsDeckLink.addEventListener("input", initTips);

// Submit tips
const tipsForm = document.getElementById("tips-form");
tipsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Parsing matchups
  const deckMatchups = [];
  for (let i = 0; i < 4; i++) {
    deckMatchups.push({ id: matchups[i].value, percent: sliders[i].value });
  }

  // Parsing subs
  const deckSubs = [];
  for (let i = 0; i < 8; i++) {
    const cardSubs = { id: subCards[i].dataset.id, subs: [] };
    for (const card of subCardOptions[i].children as any) {
      cardSubs.subs.push(card.dataset.id);
    }
    deckSubs.push(cardSubs);
  }

  const cardIds = tipsDeckLink.value.match(/(\d{8})/g);
  const tempCards = cardIds.map((id) => CARDS[id]);
  const deckTips = {
    cards: tempCards.slice(),
    playstyle: playstyleEl.value,
    matchups: deckMatchups,
    subs: deckSubs,
  };
  deckTips["averageElixir"] = averageElixir(deckTips.cards);
  tempCards.sort((c1, c2) => (c1.cost > c2.cost ? 1 : -1));
  deckTips["cycleCards"] = tempCards
    .filter(({ name }) => name !== "mirror")
    .slice(0, 4);
  deckTips["cycleCost"] = deckTips["cycleCards"].reduce(
    (prev, { cost }) => prev + cost,
    0
  );

  console.log(deckTips);
});
