async function getBattlelog(playerTag: string): Promise<BattleDetail[]> {
  playerTag = playerTag.replace("#", "%23");

  const response = await fetch(
    `${CR_API_BASE_URL}/players/${playerTag}/battlelog`
  );
  const data = await response.json();
  return data;
}

async function getReplay(replayTag: string): Promise<Replay> {
  replayTag = replayTag.replace("#", "%23");

  const response = await fetch(`${CR_API_BASE_URL}/replays/${replayTag}`);
  const data = await response.json();
  return data;
}
