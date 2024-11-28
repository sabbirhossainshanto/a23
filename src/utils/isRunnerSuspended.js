export const isRunnerSuspended = (games, runner) => {
  if (games?.status !== "OPEN" || runner?.status !== "OPEN") {
    return "odds_suspended";
  }
};

export const isHorseGreyhoundRunnerSuspended = (game, runner) => {
  if (game?.status !== "OPEN" || runner?.status !== "ACTIVE") {
    return "odds_suspended";
  }
};
