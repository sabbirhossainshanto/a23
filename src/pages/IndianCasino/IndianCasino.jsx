import useIndianCasino from "../../hooks/useIndianCasino";
import CasinoCard from "../../components/ui/CasinoCard/CasinoCard";

const IndianCasino = () => {
  const { indianCasino } = useIndianCasino();

  return (
    <>
      <CasinoCard games={indianCasino} title="Indian" />
    </>
  );
};

export default IndianCasino;
