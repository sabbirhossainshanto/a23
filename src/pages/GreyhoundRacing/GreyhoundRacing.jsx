import HorseGreyhound from "../../components/ui/HorseGreyhound/HorseGreyhound";
import useSportsBook from "../../hooks/home/useSportsBook";

const GreyhoundRacing = () => {
  const { sports } = useSportsBook(4339);
  return <HorseGreyhound data={sports} title="Greyhound Racing" />;
};

export default GreyhoundRacing;
