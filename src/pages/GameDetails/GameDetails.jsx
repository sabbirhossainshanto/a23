import MatchTrackerTab from "./MatchTrackerTab";
import Odds from "./Odds";
import ScoreBoardCard from "./ScoreBoardCard";
import ScoreCardSlider from "./ScoreCardSlider";

const GameDetails = () => {
  return (
    <>
      <ScoreCardSlider />
      <ScoreBoardCard />
      <MatchTrackerTab />
      <Odds />
    </>
  );
};

export default GameDetails;
