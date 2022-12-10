const requestOptions = (): RequestInit => {
  return {
    method: "GET",
    headers: new Headers({ Authorization: `Bearer ${CR_API_KEY}` }),
    redirect: "follow",
  };
};

const getBattlelog = async (playerId: string): Promise<BattleDetail[]> => {
  playerId = playerId.replace("#", "%23");

  try {
    const response = await fetch(
      `https://api.clashroyale.com/v1/players/${playerId}/battlelog`,
      requestOptions()
    );

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    return sampleBattlelog;
  }
};

const getReplay = async (replayTag: string): Promise<Replay> => {
  replayTag = replayTag.replace("#", "%23");

  try {
    const response = await fetch(
      `https://api.clashroyale.com/v1/replays/${replayTag}`,
      requestOptions()
    );

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    return sampleReplay;
  }
};
