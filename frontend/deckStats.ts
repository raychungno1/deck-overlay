const stats = ["attack", "defense", "vers", "synergy"];
for (const stat of stats) {
  const slider = <HTMLInputElement>document.getElementById(`stat-${stat}`);
  const label = document.getElementById(`stat-${stat}-lbl`);
  label.textContent = slider.value;
  slider.oninput = function (e: any) {
    label.textContent = e.target.value;
  };
}

const statDeckPreview = document.getElementById("stat-deck-preview");
const statDeckLink = <HTMLInputElement>(
  document.getElementById("stat-deck-link")
);
const previewDeck = () => {
  const cardIds = statDeckLink.value.match(/(\d{8})/g);
  clearElement(statDeckPreview);
  if (cardIds && cardIds.length === 8 && cardIds.every((id) => id in cards)) {
    cardIds.forEach((id) => {
      const previewCardEl = elementWithClass("img", "preview__card");
      previewCardEl.src = `../cards/${cards[id].name}.png`;
      previewCardEl.alt = cards[id].name;
      statDeckPreview.appendChild(previewCardEl);
    });
    const checkEl = elementWithClass("div", "check");
    checkEl.innerHTML = '<i class="fa-solid fa-check"></i>';
    statDeckPreview.appendChild(checkEl);
  }
};
previewDeck();
statDeckLink.addEventListener("input", previewDeck);

const statForm = document.getElementById("stat-form");
statForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit stats");
});
