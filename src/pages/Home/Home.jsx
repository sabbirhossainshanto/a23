import { useEffect } from "react";
import Banner from "../../components/ui/Home/Banner";
import Casino from "../../components/ui/Home/Casino";
import LiveSports from "../../components/ui/Home/LiveSports/LiveSports";
import Slider from "../../components/ui/Slider/Slider";
import useBannerImage from "../../hooks/home/useBannerImage";
import useContextState from "../../hooks/useContextState";
import useSportsBook from "../../hooks/home/useSportsBook";
import Sports from "../../components/ui/Home/Sports/Sports";

const Home = () => {
  const { sportsType } = useContextState();
  const { bannerImage } = useBannerImage();
  const { refetchSports, sports } = useSportsBook(sportsType);

  useEffect(() => {
    refetchSports();
  }, [refetchSports, sportsType]);

  return (
    <>
      {!sportsType && (
        <>
          {bannerImage?.banner?.length > 0 && (
            <Banner bannerImage={bannerImage?.banner} />
          )}
          {bannerImage?.card?.length > 0 && <Slider card={bannerImage?.card} />}
          <LiveSports liveSports={sports} />
          <Casino />
        </>
      )}
      {sportsType && <Sports sports={sports} />}
    </>
  );
};

export default Home;
