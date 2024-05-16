export const isRunnerSuspended = (games, runner) => {

    if (games?.status !== "OPEN" || runner?.status !== "OPEN") {
      return "odds_suspended";
    }
  };