export const isSportsRunnerSuspended = (column, item) => {
  if (item?.status === 2 || !item?.status) {
    return true;
  } else if (column?.IsActive === 2 || !column?.IsActive) {
    return true;
  } else {
    return false;
  }
};
