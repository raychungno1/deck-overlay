/* @ts-ignore */ // Object to interact with primere
const cs = new CSInterface();

// Battle overlay
const battleForm = document.getElementById("player-form");
loadBattles("#L008PR8C");
battleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = <HTMLInputElement>document.getElementById("playerId");
  loadBattles(input.value);
});

// Getting battle log from playerId
async function loadBattles(playerId) {
  try {
    const log = await getBattlelog(playerId);
    displayDecks(log);
  } catch (e) {
    displayError(e);
  }
}

// Displays battle log from clash royale API
function displayDecks(battlelog) {
  if (!battlelog || !battlelog.length)
    return displayError("Error: No Battles Found");

  const battlesEl = document.getElementById("battles");
  clearElement(battlesEl);

  const numBattles = battlelog.length;
  for (let i = 0; i < numBattles; i++) {
    const battle = battlelog[i];
    const battleEl = createElement("div", { class: "battle__container" });
    const detailsEl = createElement("div", { class: "details__container" });
    battleEl.appendChild(detailsEl);

    const blueEl = createElement("div", { class: "blue__container" });
    const blueTitleEl = createElement("p", { class: "title" });
    blueTitleEl.textContent = `${battle.team[0].name}`;
    const blueSubtitleEl = createElement("p", { class: "subtitle" });
    blueSubtitleEl.textContent = battle.team[0].clan
      ? `${battle.team[0].clan.name}`
      : "-";

    const blueDeckEl = createElement("div", { class: "deck" });
    detailsEl.appendChild(blueEl);
    blueEl.appendChild(blueTitleEl);
    blueEl.appendChild(blueSubtitleEl);
    blueEl.appendChild(blueDeckEl);

    const redEl = createElement("div", { class: "red__container" });
    const redTitleEl = createElement("p", { class: "title" });
    redTitleEl.textContent = `${battle.opponent[0].name}`;
    const redSubtitleEl = createElement("p", { class: "subtitle" });
    redSubtitleEl.textContent = battle.opponent[0].clan
      ? `${battle.opponent[0].clan.name}`
      : "-";

    const redDeckEl = createElement("div", { class: "deck" });
    detailsEl.appendChild(redEl);
    redEl.appendChild(redTitleEl);
    redEl.appendChild(redSubtitleEl);
    redEl.appendChild(redDeckEl);

    let blueDeckLink = "https://link.clashroyale.com/deck/en?deck=";
    let redDeckLink = "https://link.clashroyale.com/deck/en?deck=";
    for (let j = 0; j < 8; j++) {
      const blueCard = battle.team[0].cards[j];
      const blueCardEl = createElement("img", { class: "deck__card" });
      blueCardEl.src = `../cards/${CARDS[blueCard.id].name}.png`;
      blueCardEl.alt = blueCard.name;
      blueDeckEl.appendChild(blueCardEl);
      blueDeckLink += blueCard.id;
      if (j < 7) blueDeckLink += ";";

      const redCard = battle.opponent[0].cards[j];
      const redCardEl = createElement("img", { class: "deck__card" });
      redCardEl.src = `../cards/${CARDS[redCard.id].name}.png`;
      redCardEl.alt = redCard.name;
      redDeckEl.appendChild(redCardEl);
      redDeckLink += redCard.id;
      if (j < 7) redDeckLink += ";";
    }

    const deckActionsEl = createElement("div", {
      class: "deck-actions__container",
    });
    battleEl.appendChild(deckActionsEl);

    const blueDeckActionsEl = createElement("div", { class: "deck-actions" });
    deckActionsEl.appendChild(blueDeckActionsEl);

    const blueStatBtnEl = createElement("button", { class: "battle__action" });
    blueStatBtnEl.onclick = () => setStatLink(blueDeckLink);
    blueStatBtnEl.innerHTML = '<i class="fa-solid fa-chart-simple"></i> Stats';
    blueDeckActionsEl.appendChild(blueStatBtnEl);

    const blueTipsBtnEl = createElement("button", { class: "battle__action" });
    blueTipsBtnEl.onclick = () => setTipsLink(blueDeckLink);
    blueTipsBtnEl.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Tips';
    blueDeckActionsEl.appendChild(blueTipsBtnEl);

    if (battle.replayTag) {
      const btnEl = createElement("button", {
        class: "battle__action deck-actions",
      });
      btnEl.onclick = () =>
        battleOverlay(battle.replayTag, battle.team[0].name);
      btnEl.innerHTML = '<i class="fa-solid fa-shield-halved"></i> Overlay';
      deckActionsEl.appendChild(btnEl);
    }

    const redDeckActionsEl = createElement("div", { class: "deck-actions" });
    deckActionsEl.appendChild(redDeckActionsEl);

    const redStatBtnEl = createElement("button", { class: "battle__action" });
    redStatBtnEl.onclick = () => setStatLink(redDeckLink);
    redStatBtnEl.innerHTML = '<i class="fa-solid fa-chart-simple"></i> Stats';
    redDeckActionsEl.appendChild(redStatBtnEl);

    const redTipsBtnEl = createElement("button", { class: "battle__action" });
    redTipsBtnEl.onclick = () => setTipsLink(redDeckLink);
    redTipsBtnEl.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Tips';
    redDeckActionsEl.appendChild(redTipsBtnEl);

    battlesEl.appendChild(battleEl);
  }
}

// Displays error if API is non-responsive
function displayError(error) {
  const battlesEl = document.getElementById("battles");
  clearElement(battlesEl);

  const errorEl = createElement("div", { class: "error_container" });
  const errorIconEl = createElement("i", {
    class: "fa-solid fa-triangle-exclamation error__icon",
  });
  const errorMsgEl = createElement("p", { class: "error__msg" });
  errorMsgEl.textContent = error;

  errorEl.appendChild(errorIconEl);
  errorEl.appendChild(errorMsgEl);
  battlesEl.appendChild(errorEl);
}

// Calculates average elixir of a deck
function averageElixir(deck: Cards | Card[]) {
  let total = 0;
  for (let key in deck) {
    total += deck[key]?.cost;
  }
  return Math.round((total * 10) / 8);
}

// Generating battle overlay
async function battleOverlay(replayTag = "", playerName = "") {
  try {
    const replay = await getReplay(replayTag);
    const battle = replay.replayData.battle;
    const battleLength = replay.replayData.endTick / 20;
    const flip = battle.avatar0.name !== playerName;

    // Parsing Deck Cards
    const blueDeck: Cards = {};
    const redDeck: Cards = {};
    const offset = flip ? 1 : 0;
    for (let i = 0; i < 8; i++) {
      const blueId = battle[`deck${offset}`][i].d;
      const redId = battle[`deck${1 - offset}`][i].d;
      blueDeck[blueId] = CARDS[blueId];
      redDeck[redId] = CARDS[redId];
    }
    const blueAvgElixir = averageElixir(blueDeck);
    const redAvgElixir = averageElixir(redDeck);

    // Parsing First Time Each Red Card Was Played
    const redInit = {};
    const redPlayerId = battle[`avatar${1 - offset}`]["accountID.hi"];
    const commands = replay.replayData.cmd;
    for (let i = 0; i < commands.length; i++) {
      const {
        c: { t2: time, gid: id, idHi: playerId },
      } = commands[i];

      if (playerId == redPlayerId && id in redDeck && !(id in redInit)) {
        redInit[id] = time / 20;
      }
    }

    cs.evalScript(`var battleLength = ${JSON.stringify(battleLength)}`);
    cs.evalScript(`var blueDeck = ${JSON.stringify(blueDeck)}`);
    cs.evalScript(`var blueAvgElixir = ${JSON.stringify(blueAvgElixir)}`);
    cs.evalScript(`var redDeck = ${JSON.stringify(redDeck)}`);
    cs.evalScript(`var redAvgElixir = ${JSON.stringify(redAvgElixir)}`);
    cs.evalScript(`var redInit = ${JSON.stringify(redInit)}`);
    cs.evalScript(`$.deckOverlay.battleOverlay()`);
  } catch (e) {}
}
