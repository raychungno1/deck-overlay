// Deck link preview (stats page)
const statDeckLink = document.getElementById(
  "stat-deck-link"
) as HTMLInputElement;
const dtEnabled = document.getElementById("tips-toggle") as HTMLInputElement;
const dtEl = document.getElementById("deck-tips-container");
dtEnabled.addEventListener("change", (e: any) => {
  console.log(e.target.checked);
  if (e.target.checked) {
    dtEl.classList.remove("hidden");
  } else {
    dtEl.classList.add("hidden");
  }
});

const playstyleEl = document.getElementById("playstyle") as HTMLInputElement;

// Initialize sliders
const STATS = ["attack", "defense", "vers", "synergy"];
const statSelects = STATS.map((stat) =>
  sliderWithLabel(`stat-${stat}`, `stat-${stat}-lbl`)
);

// Matchups section
const deckMatchups = [];
for (let i = 0; i < 4; i++) {
  deckMatchups.push({ name: "archer", percent: `${70 - 10 * i}` });
}

function updateMatchups(e) {
  const index = +e.target.id.charAt(8) - 1;
  deckMatchups[index].name = CARDS[e.target.value].name;
}

function updateSliders(e) {
  const index = +e.target.id.charAt(8) - 1;
  deckMatchups[index].percent = e.target.value;
}

const dsMatchups: HTMLInputElement[] = [];
const dsSliders: HTMLInputElement[] = [];
for (let i = 1; i <= 4; i++) {
  dsMatchups.push(selectCardsAlphabetic(`matchup-${i}-list-ds`));
  dsMatchups[i - 1].addEventListener("change", updateMatchups);
  dsSliders.push(
    sliderWithLabel(`matchup-${i}-slider-ds`, `matchup-${i}-lbl-ds`, "%")
  );
  dsSliders[i - 1].addEventListener("change", updateSliders);
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

  const cardIds = statDeckLink.value.match(/(\d{8})/g);
  if (cardIds && cardIds.length === 8 && cardIds.every((id) => id in CARDS)) {
    cardIds.forEach((id) => {
      const subContainer = createElement("div", { class: "sub__container" });
      subsContainer.appendChild(subContainer);

      const cardEl = createElement("img", { class: "sub__card" });
      cardEl.src = `../cards/${CARDS[id].name}.png`;
      cardEl.alt = CARDS[id].name;
      cardEl.setAttribute("data-id", id);
      cardEl.setAttribute("data-name", CARDS[id].name);
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
        cardEl.setAttribute("data-name", CARDS[e.target.value].name);
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
function initStats() {
  deckPreview(statDeckLink, "stat-deck-preview");
  deckSubs();
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

  // Stat info
  const cardIds = statDeckLink.value.match(/(\d{8})/g);
  const statsInfo = {
    cards: cardIds.map((id) => CARDS[id]),
    matchups: deckMatchups,
    title: (document.getElementById("stat-deck-title") as HTMLInputElement)
      .value,
  };
  statsInfo["averageElixir"] = averageElixir(statsInfo.cards).toFixed(1);
  STATS.forEach((stat, i) => (statsInfo[stat] = +statSelects[i].value));
  statsInfo["f2p"] = statsInfo.cards.reduce(
    (prev, card) => prev + card.rarity / 8,
    0
  );

  // Tips info
  statsInfo["tipsEnabled"] = dtEnabled.checked;
  statsInfo["playstyle"] = playstyleEl.value;

  // Parsing subs
  const deckSubs = [];
  for (let i = 0; i < 8; i++) {
    const cardSubs = { name: subCards[i].dataset.name, subs: [] };
    for (const card of subCardOptions[i].children as any) {
      cardSubs.subs.push(card.dataset.name);
    }
    if (cardSubs.subs.length) deckSubs.push(cardSubs);
  }
  statsInfo["subs"] = deckSubs;

  // Fastest Cycle
  statsInfo["cycleCards"] = cardIds
    .map((id) => CARDS[id])
    .sort((c1, c2) => (c1.cost > c2.cost ? 1 : -1))
    .filter(({ name }) => name !== "mirror")
    .slice(0, 4);
  statsInfo["cycleCost"] = statsInfo["cycleCards"].reduce(
    (prev, { cost }) => prev + cost,
    0
  );

  console.log(statsInfo);
  cs.evalScript(`var statsInfo = ${JSON.stringify(statsInfo)}`);
  cs.evalScript(`$.deckOverlay.deckStats()`);
});
