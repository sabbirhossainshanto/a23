import useGetSlots from "../../hooks/useGetSlots";
import CasinoCard from "../../components/ui/CasinoCard/CasinoCard";

const Slots = () => {
  const { slots } = useGetSlots();
  return (
    <>
      <CasinoCard games={slots} title="Slots" />
    </>
  );
};

export default Slots;