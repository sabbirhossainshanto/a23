import useInterNationalCasino from "../../hooks/useInterNationalCasino";
import CasinoCard from "../../components/ui/CasinoCard/CasinoCard";

const InterNationalCasino = () => {
  /* get international casino */
  const { intCasino } = useInterNationalCasino();
  return (
    <>
      <CasinoCard games={intCasino} title="International" />
    </>
  );
};

export default InterNationalCasino;
