import { useParams } from "react-router-dom";
import MatchTrackerTab from "./MatchTrackerTab";
import Odds from "./SportsBook/Odds";
import ScoreBoardCard from "./ScoreBoardCard";
import ScoreCardSlider from "./ScoreCardSlider";
import useEventDetails from "../../hooks/useEventDetails";
import { useEffect } from "react";

const GameDetails = () => {
  const { eventTypeId, eventId } = useParams();
  const { eventsData, refetchEventsData } = useEventDetails(
    eventTypeId,
    eventId
  );
  useEffect(() => {
    refetchEventsData();
  }, [refetchEventsData, eventTypeId]);
  return (
    <>
      <ScoreCardSlider />
      <ScoreBoardCard />
      <MatchTrackerTab />
      <Odds eventTypeId={eventTypeId} sportsBook={eventsData?.sportsbook?.Result} />
    </>
  );
};

export default GameDetails;
