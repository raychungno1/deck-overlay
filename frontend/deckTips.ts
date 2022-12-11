// Initializing
const cardsArray = [];
for (const id in cards) {
  cardsArray.push({ id, ...cards[id] });
}
cardsArray.sort((a, b) => (a.name > b.name ? 1 : -1));

function camelCaseToCapitalized(text: string): string {
  const result = text.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

// Card Substitutes
const tipsDeckPreview = document.getElementById("tips-deck-preview");
const tipsDeckLink = <HTMLInputElement>(
  document.getElementById("tips-deck-link")
);
const subsContainer = document.getElementById("subs-container");
const subCardOptions = [];
const subCardSelects = [];
let numCardsSubbed = 0;
const createSubs = () => {
  const cardIds = tipsDeckLink.value.match(/(\d{8})/g);
  clearElement(tipsDeckPreview);
  clearElement(subsContainer);
  if (cardIds && cardIds.length === 8 && cardIds.every((id) => id in cards)) {
    cardIds.forEach((id) => {
      const previewCardEl = elementWithClass("img", "preview__card");
      previewCardEl.src = `../cards/${cards[id].name}.png`;
      previewCardEl.alt = cards[id].name;
      tipsDeckPreview.appendChild(previewCardEl);

      const subContainer = elementWithClass("div", "sub__container");
      subsContainer.appendChild(subContainer);

      const cardEl = elementWithClass("img", "sub__card");
      cardEl.src = `../cards/${cards[id].name}.png`;
      cardEl.alt = cards[id].name;
      subContainer.appendChild(cardEl);

      const subInner = elementWithClass("div", "sub__inner");
      subContainer.appendChild(subInner);

      const subOptions = elementWithClass("div", "sub__options");
      subCardOptions.push(subOptions);
      const selectCard = <HTMLInputElement>(
        elementWithClass("select", "form__select sub__select")
      );
      subCardSelects.push(selectCard);
      cardsArray.forEach(({ id, name }) => {
        const option = document.createElement("option");
        option.setAttribute("value", id);
        option.setAttribute("label", camelCaseToCapitalized(name));
        selectCard.appendChild(option);
      });
      selectCard.addEventListener("input", (e: any) => {
        for (const subOption of subOptions.children) {
          if (subOption.dataset.id === e.target.value) {
            return;
          }
        }

        if (subOptions.children.length === 0) {
          numCardsSubbed += 1;
        }

        const cardEl = elementWithClass("img", "sub__option");
        cardEl.src = `../cards/${cards[e.target.value].name}.png`;
        cardEl.alt = cards[e.target.value].name;
        cardEl.setAttribute("data-id", e.target.value);
        cardEl.addEventListener("click", () => {
          cardEl.remove();
          selectCard.disabled = false;
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
          selectCard.disabled = true;
        }
      });
      subInner.appendChild(selectCard);
      subInner.appendChild(subOptions);
    });
    const checkEl = elementWithClass("div", "check");
    checkEl.innerHTML = '<i class="fa-solid fa-check"></i>';
    tipsDeckPreview.appendChild(checkEl);
  }
};
createSubs();
tipsDeckLink.addEventListener("input", createSubs);

// Initializing matchups form section
const matchups = [];
const sliders = [];
const sliderLabels = [];
for (let i = 1; i <= 4; i++) {
  const matchup = <HTMLInputElement>(
    document.getElementById(`matchup-${i}-list`)
  );
  cardsArray.forEach(({ id, name }) => {
    const option = document.createElement("option");
    option.setAttribute("value", id);
    option.setAttribute("label", camelCaseToCapitalized(name));
    matchup.appendChild(option);
  });
  const slider = <HTMLInputElement>(
    document.getElementById(`matchup-${i}-slider`)
  );
  const label = document.getElementById(`matchup-${i}-lbl`);
  label.textContent = slider.value + "%";
  slider.oninput = function (e: any) {
    label.textContent = e.target.value + "%";
  };
  matchups.push(matchup);
  sliders.push(slider);
  sliderLabels.push(label);
}

const tipsForm = document.getElementById("tips-form");
tipsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit tips");
});
