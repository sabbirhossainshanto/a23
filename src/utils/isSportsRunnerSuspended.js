export const isSportsRunnerSuspended = (column) =>
  column?.IsActive === 2 || !column?.IsActive;
