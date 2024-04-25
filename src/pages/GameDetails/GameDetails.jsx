import { useParams } from "react-router-dom";
import MatchTrackerTab from "./MatchTrackerTab";
import Odds from "./SportsBook/Odds";
import ScoreBoardCard from "./ScoreBoardCard";
import ScoreCardSlider from "./ScoreCardSlider";
import useEventDetails from "../../hooks/useEventDetails";
import { useEffect, useState } from "react";

const GameDetails = () => {
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


  // console.log(eventsData);
  return (
    <>
      <ScoreCardSlider />
      {eventsData?.score && <ScoreBoardCard  eventTypeId={eventTypeId} score={eventsData?.score} />}
      <MatchTrackerTab />
      {eventsData?.sportsbook?.Result && (
        <Odds
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
