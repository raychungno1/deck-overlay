enum Page {
  BATTLE_OVERLAY = 0,
  DECK_STATS = 1,
  DECK_TIPS = 2,
}

/**
 * Controls the active page on the navbar
 * @param target The page to switch to
 */
const selectPage = (() => {
  // Load nav links add onclick listeners
  const links = ["battle-nav", "stats-nav", "tips-nav"].map((id, i) => {
    const link = document.getElementById(id);
    link.onclick = () => selectPage(i);
    return link;
  });

  // Load page containers
  const pages = ["battle-page", "stats-page", "tips-page"].map((id) => {
    return document.getElementById(id);
  });

  // Function definition
  const selectPage = (target: Page) => {
    for (let i = 0; i < 3; i++) {
      if (i === target) {
        links[i].classList.add("selected");
        pages[i].classList.remove("page__hidden");
      } else {
        links[i].classList.remove("selected");
        pages[i].classList.add("page__hidden");
      }
    }
  };

  return selectPage;
})();
