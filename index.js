var cs = new CSInterface();

async function battleOverlay(replayTag = "", playerName = "") {
  replayTag = replayTag.replace("#", "%23");

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${CR_API_KEY}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  await fetch(
    `https://api.clashroyale.com/v1/replays/${replayTag}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      cs.evalScript(`var replay = ${result}`);
      cs.evalScript(
        `var flip = ${
          JSON.parse(result).replayData.battle.avatar0.name !== playerName
        }`
      );
      cs.evalScript(`$.deckOverlay.battle()`);
    })
    .catch((error) => alert(error));
}

getBattles("%23L008PR8C");

const form = document.getElementById("player-form");
form.addEventListener("submit", submitForm);

async function submitForm(e) {
  e.preventDefault();
  const input = document.getElementById("playerId");
  const playerId = input.value.replace("#", "%23");

  getBattles(playerId);
}

async function getBattles(playerId) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${CR_API_KEY}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  await fetch(
    `https://api.clashroyale.com/v1/players/${playerId}/battlelog`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => displayDecks(result))
    .catch((error) => displayError(error));
}

function elementWithClass(type, className) {
  const element = document.createElement(type);
  element.className = className;
  return element;
}

function displayDecks(battlelog) {
  if (!battlelog || !battlelog.length)
    return displayError("Error: No Battles Found");

  const battlesEl = document.getElementById("battles");
  while (battlesEl.firstChild) {
    battlesEl.removeChild(battlesEl.firstChild);
  }

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
      blueCardEl.src = `cards/${cards[blueCard.id].name}.png`;
      blueCardEl.alt = blueCard.name;
      blueDeckEl.appendChild(blueCardEl);

      const redCard = battle.opponent[0].cards[j];
      const redCardEl = elementWithClass("img", "deck__card");
      redCardEl.src = `cards/${cards[redCard.id].name}.png`;
      redCardEl.alt = redCard.name;
      redDeckEl.appendChild(redCardEl);
    }
    battlesEl.appendChild(battleEl);
  }
}

function displayError(error) {
  const battlesEl = document.getElementById("battles");
  while (battlesEl.firstChild) {
    battlesEl.removeChild(battlesEl.firstChild);
  }
  battlesEl.innerHTML = `
    <div class="error_container">
      <i class="fa-solid fa-triangle-exclamation error__icon"></i>
      <p class="error__msg">${error}</p>
    </div>`;
}
