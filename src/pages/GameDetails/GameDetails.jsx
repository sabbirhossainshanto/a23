import { useParams } from "react-router-dom";
import MatchTrackerTab from "./MatchTrackerTab";
import Odds from "./SportsBook/Odds";
import ScoreBoardCard from "./ScoreBoardCard";
import ScoreCardSlider from "./ScoreCardSlider";
import useEventDetails from "../../hooks/useEventDetails";
import { useEffect, useState } from "react";
import { Settings } from "../../api";
import useContextState from "../../hooks/useContextState";
import useBalance from "../../hooks/useBalance";

const GameDetails = () => {
  const { tokenLoading } = useContextState();
  const { refetchBalance } = useBalance();
  const { eventTypeId, eventId } = useParams();
  const [priceClasses, setPriceClasses] = useState({});
  const [prevPrices, setPrevPrices] = useState({});
  const { eventsData, refetchEventsData } = useEventDetails(
    eventTypeId,
    eventId
  );
  useEffect(() => {
    refetchEventsData();
  }, [refetchEventsData, eventTypeId]);

  useEffect(() => {
    setPrevPrices({});
    setPriceClasses({});
  }, [eventId, eventTypeId]);

  useEffect(() => {
    if (!tokenLoading && !Settings.balanceApiLoop) {
      refetchBalance();
    }
  }, []);



  return (
    <>
      <ScoreCardSlider />
      {eventsData?.score && (
        <ScoreBoardCard eventTypeId={eventTypeId} score={eventsData?.score} />
      )}
      <MatchTrackerTab tracker={eventsData?.score?.tracker} />
      {eventsData?.sportsbook?.Result && (
        <Odds
          data={eventsData?.result}
          eventTypeId={eventTypeId}
          sportsBook={eventsData?.sportsbook?.Result}
          priceClasses={priceClasses}
          setPriceClasses={setPriceClasses}
          prevPrices={prevPrices}
          setPrevPrices={setPrevPrices}
        />
      )}
    </>
  );
};

export default GameDetails;
