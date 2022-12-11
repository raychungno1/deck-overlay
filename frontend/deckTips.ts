function setTipsLink(link: string) {
  tipsDeckLink.value = link;
  deckPreview(tipsDeckLink, "tips-deck-preview");
  createSubs();
  selectPage(Page.DECK_TIPS);
}

// Deck link preview (tips page)
const tipsDeckLink = document.getElementById(
  "tips-deck-link"
) as HTMLInputElement;
deckPreview(tipsDeckLink, "tips-deck-preview");
tipsDeckLink.addEventListener("input", () =>
  deckPreview(tipsDeckLink, "tips-deck-preview")
);

// Card Substitutes
const subsContainer = document.getElementById("subs-container");
const subCardOptions = [];
const subCardSelects = [];
let numCardsSubbed = 0;
const createSubs = () => {
  const cardIds = tipsDeckLink.value.match(/(\d{8})/g);
  clearElement(subsContainer);
  if (cardIds && cardIds.length === 8 && cardIds.every((id) => id in CARDS)) {
    cardIds.forEach((id) => {
      const subContainer = createElement("div", { class: "sub__container" });
      subsContainer.appendChild(subContainer);

      const cardEl = createElement("img", { class: "sub__card" });
      cardEl.src = `../cards/${CARDS[id].name}.png`;
      cardEl.alt = CARDS[id].name;
      subContainer.appendChild(cardEl);

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

      selector.addEventListener("input", (e: any) => {
        for (const subOption of subOptions.children) {
          if (subOption.dataset.id === e.target.value) {
            return;
          }
        }

        if (subOptions.children.length === 0) {
          numCardsSubbed += 1;
        }

        const cardEl = createElement("img", { class: "sub__option" });
        cardEl.src = `../cards/${CARDS[e.target.value].name}.png`;
        cardEl.alt = CARDS[e.target.value].name;
        cardEl.setAttribute("data-id", e.target.value);
        cardEl.addEventListener("click", () => {
          cardEl.remove();
          selector.disabled = false;
          if (subOptions.children.length === 0) {
            numCardsSubbed -= 1;
            for (let i = 0; i < 8; i++) {
              if (subCardOptions[i].children.length !== 3) {
                subCardSelects[i].disabled = false;
              }
            }
          }
        });
        subOptions.appendChild(cardEl);

        if (numCardsSubbed === 3) {
          for (let i = 0; i < 8; i++) {
            if (subCardOptions[i].children.length === 0) {
              subCardSelects[i].disabled = true;
            }
          }
        }
        if (subOptions.children.length >= 3) {
          selector.disabled = true;
        }
      });
      subInner.appendChild(selector);
      subInner.appendChild(subOptions);
    });
  }
};
createSubs();
tipsDeckLink.addEventListener("input", createSubs);

// Matchups section
const matchups = [];
const sliders = [];
for (let i = 1; i <= 4; i++) {
  matchups.push(selectCardsAlphabetic(`matchup-${i}-list`));
  sliders.push(sliderWithLabel(`matchup-${i}-slider`, `matchup-${i}-lbl`, "%"));
}

// Submit tips
const tipsForm = document.getElementById("tips-form");
tipsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit tips");
});
