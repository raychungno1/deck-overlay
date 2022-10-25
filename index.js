var cs = new CSInterface();

function battleOverlay() {
  cs.evalScript("$.deckOverlay.battle()");
}

const form = document.getElementById("player-form");
form.addEventListener("submit", submitForm);

async function submitForm(e) {
  e.preventDefault();

  const playerId = e.target[0].value.replace("#", "%23");

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
    .catch((error) => {
      alert("Error Fetching Battles: " + error);
      displayDecks(sampleBattleLog);
    });
}

function displayDecks(battlelog) {
  alert(`${battlelog[0].team[0].name} v.s. ${battlelog[0].opponent[0].name}`);
  // for (let i = 0; i < numBattles; i++) {
  // const battle = battlelog[i];
  // }
}
