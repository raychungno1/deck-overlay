/**
 * Creates the HTML element specified by type, with certain attributes
 * @param type        the type of HTML element
 * @param attributes  a dictionary of attribute-value pairs
 * @returns           the HTMLElement object
 */
function createElement(
  type: string,
  attributes: { [key: string]: string }
): any {
  const el = document.createElement(type);
  Object.keys(attributes).forEach((attr) =>
    el.setAttribute(attr, attributes[attr])
  );
  return el;
}

/**
 * Clears all children from an HTML element
 * @param el an HTMLElement object
 */
function clearElement(el: HTMLElement) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

/**
 * Gets an HTML element by reference or id
 * @param idOrEl either the select element or its id
 * @returns an HTMLElement object
 */
function getElement(idOrEl: string | HTMLElement) {
  return typeof idOrEl === "string"
    ? (document.getElementById(idOrEl) as HTMLInputElement)
    : idOrEl;
}

/**
 * Links a range slider with a label to display its current value. Slider and label must be in the DOM with an id.
 * @param sliderId  the id of the slider element
 * @param labelId   the label of the slider element
 * @param end       a string to append at the end of the label
 */
function sliderWithLabel(
  sliderId: string,
  labelId: string,
  end?: string
): HTMLInputElement {
  const slider = <HTMLInputElement>document.getElementById(sliderId);
  const label = document.getElementById(labelId);
  label.textContent = slider.value + (end || "");
  slider.oninput = (e: Event) => {
    label.textContent = (e.target as HTMLInputElement).value + (end || "");
  };
  return slider;
}

/**
 * Transforms a camel case string to capetalized title text
 * @param text a camel case formatted string
 * @returns a capitalized formatted string
 */
function camelCaseToCapitalized(text: string): string {
  const result = text.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

/**
 * Fills a select element with cards in alphabetical order
 * @param selectOrId either the select element or its id
 */
function selectCardsAlphabetic(idOrSelect: string | HTMLInputElement) {
  const select = getElement(idOrSelect) as HTMLInputElement;
  const cardsArray = Object.keys(CARDS).map((id) => ({ id, ...CARDS[id] }));
  cardsArray.sort((a, b) => (a.name > b.name ? 1 : -1));
  cardsArray.forEach(({ id, name }) => {
    const option = document.createElement("option");
    option.setAttribute("value", id);
    option.setAttribute("label", camelCaseToCapitalized(name));
    select.appendChild(option);
  });
  return select;
}

function deckPreview(
  idOrInput: string | HTMLElement,
  idOrPreview: string | HTMLElement
) {
  const inputEl = getElement(idOrInput) as HTMLInputElement;
  const previewEl = getElement(idOrPreview);
  clearElement(previewEl);

  const cardIds = inputEl.value.match(/(\d{8})/g);
  if (cardIds && cardIds.length === 8 && cardIds.every((id) => id in CARDS)) {
    cardIds.forEach((id) => {
      const previewCardEl = createElement("img", {
        class: "preview__card",
      }) as HTMLImageElement;
      previewCardEl.src = `../cards/${CARDS[id].name}.png`;
      previewCardEl.alt = CARDS[id].name;
      previewEl.appendChild(previewCardEl);
    });
    const checkEl = createElement("div", { class: "check" });
    checkEl.innerHTML = '<i class="fa-solid fa-check"></i>';
    previewEl.appendChild(checkEl);
  }
}
