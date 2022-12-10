/* @ts-ignore */
const cs = new CSInterface();
loadBattles("#L008PR8C");

const form = document.getElementById("player-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = <HTMLInputElement>document.getElementById("playerId");
  loadBattles(input.value);
});

async function loadBattles(playerId) {
  try {
    const log = await getBattlelog(playerId);
    displayDecks(log);
  } catch (e) {
    displayError(e);
  }
}

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
      blueDeck[blueId] = cards[blueId];
      redDeck[redId] = cards[redId];
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
    cs.evalScript(`$.deckOverlay.battle()`);
  } catch (e) {}
}

function averageElixir(deck: Cards) {
  let total = 0;
  for (let key in deck) {
    total += deck[key].cost;
  }
  return Math.round((total * 10) / 8);
}

function elementWithClass(type, className) {
  const element = document.createElement(type);
  element.className = className;
  return element;
}

function clearElement(el: HTMLElement) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function displayDecks(battlelog) {
  if (!battlelog || !battlelog.length)
    return displayError("Error: No Battles Found");

  const battlesEl = document.getElementById("battles");
  clearElement(battlesEl);

  const numBattles = battlelog.length;
  for (let i = 0; i < numBattles; i++) {
    const battle = battlelog[i];
    const battleEl = elementWithClass("div", "battle__container");
    const detailsEl = elementWithClass("div", "details__container");
    battleEl.appendChild(detailsEl);

    const blueEl = elementWithClass("div", "blue__container");
    const blueTitleEl = elementWithClass("p", "title");
    blueTitleEl.textContent = `${battle.team[0].name}`;
    const blueSubtitleEl = elementWithClass("p", "subtitle");
    blueSubtitleEl.textContent = battle.team[0].clan
      ? `${battle.team[0].clan.name}`
      : "-";

    const blueDeckEl = elementWithClass("div", "deck");
    detailsEl.appendChild(blueEl);
    blueEl.appendChild(blueTitleEl);
    blueEl.appendChild(blueSubtitleEl);
    blueEl.appendChild(blueDeckEl);

    const redEl = elementWithClass("div", "red__container");
    const redTitleEl = elementWithClass("p", "title");
    redTitleEl.textContent = `${battle.opponent[0].name}`;
    const redSubtitleEl = elementWithClass("p", "subtitle");
    redSubtitleEl.textContent = battle.opponent[0].clan
      ? `${battle.opponent[0].clan.name}`
      : "-";

    const redDeckEl = elementWithClass("div", "deck");
    detailsEl.appendChild(redEl);
    redEl.appendChild(redTitleEl);
    redEl.appendChild(redSubtitleEl);
    redEl.appendChild(redDeckEl);

    const btnEl = elementWithClass("button", "battle__action");
    btnEl.onclick = () => battleOverlay(battle.replayTag, battle.team[0].name);
    btnEl.innerHTML = '<i class="fa-solid fa-shield-halved"></i> Overlay';
    battleEl.appendChild(btnEl);

    for (let j = 0; j < 8; j++) {
      const blueCard = battle.team[0].cards[j];
      const blueCardEl = elementWithClass("img", "deck__card");
      blueCardEl.src = `../cards/${cards[blueCard.id].name}.png`;
      blueCardEl.alt = blueCard.name;
      blueDeckEl.appendChild(blueCardEl);

      const redCard = battle.opponent[0].cards[j];
      const redCardEl = elementWithClass("img", "deck__card");
      redCardEl.src = `../cards/${cards[redCard.id].name}.png`;
      redCardEl.alt = redCard.name;
      redDeckEl.appendChild(redCardEl);
    }
    battlesEl.appendChild(battleEl);
  }
}

function displayError(error) {
  const battlesEl = document.getElementById("battles");
  clearElement(battlesEl);

  const errorEl = elementWithClass("div", "error_container");
  const errorIconEl = elementWithClass(
    "i",
    "fa-solid fa-triangle-exclamation error__icon"
  );
  const errorMsgEl = elementWithClass("p", "error__msg");
  errorMsgEl.textContent = error;

  errorEl.appendChild(errorIconEl);
  errorEl.appendChild(errorMsgEl);
  battlesEl.appendChild(errorEl);
}
