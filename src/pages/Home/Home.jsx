import { useEffect } from "react";
import Banner from "../../components/ui/Home/Banner";
import Casino from "../../components/ui/Home/Casino";
import LiveSports from "../../components/ui/Home/LiveSports/LiveSports";
import Slider from "../../components/ui/Slider/Slider";
import useBannerImage from "../../hooks/home/useBannerImage";
import useContextState from "../../hooks/useContextState";
import useSportsBook from "../../hooks/home/useSportsBook";
import Sports from "../../components/ui/Home/Sports/Sports";
import { Settings } from "../../api";
import useBalance from "../../hooks/useBalance";

const Home = () => {
  const { sportsType, tokenLoading } = useContextState();
  const { bannerImage } = useBannerImage();
  const { refetchSports, sports } = useSportsBook(sportsType);
  const { refetchBalance } = useBalance();

  useEffect(() => {
    refetchSports();
  }, [refetchSports, sportsType]);

  
  useEffect(() => {
    if (!tokenLoading && !Settings.balanceApiLoop) {
      refetchBalance();
    }
  }, []);

  return (
    <>
      {!sportsType && (
        <>
          {bannerImage?.banner?.length > 0 && (
            <Banner bannerImage={bannerImage?.banner} />
          )}
          {bannerImage?.card?.length > 0 && <Slider card={bannerImage?.card} />}
          {sports && Object.values(sports).length > 0 && (
            <LiveSports liveSports={sports} />
          )}

          <Casino />
        </>
      )}
      {sportsType ? <Sports sports={sports} /> : null}
    </>
  );
};

export default Home;
