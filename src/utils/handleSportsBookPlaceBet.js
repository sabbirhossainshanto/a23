export const handleSportsBookPlaceBet = (
  column,
  item,
  sportsBook,
  setOpenBetSlip,
  setPlaceBetValues,
  token,
  navigate
) => {
  if (token) {
    if (item?.status === 1 || item?.status) {
      if (column?.IsActive === 1 || column?.IsActive) {
        setOpenBetSlip(true);
        setPlaceBetValues({});
        setPlaceBetValues({
          price: column?.Price?.toFixed(2),
          side: 0,
          selectionId: column?.Id,
          btype: "SPORTSBOOK",
          placeName: column?.Name,
          eventTypeId: sportsBook?.EventTypeId,
          betDelay: sportsBook?.betDelay,
          marketId: item?.Id,
          maxLiabilityPerMarket: sportsBook?.maxLiabilityPerMarket,
          maxLiabilityPerBet: sportsBook?.maxLiabilityPerBet,
          isBettable: sportsBook?.isBettable,
          isWeak: sportsBook?.isWeak,
          marketName: item?.Name,
          eventId: sportsBook?.eventId,
        });
      }
    }
  } else {
    navigate("/login");
  }
};
