import Banner from "../../components/ui/Banner/Banner";
import Casino from "../../components/ui/Casino/Casino";
import LiveSports from "../../components/ui/LiveSports/LiveSports";
import Slider from "../../components/ui/Slider/Slider";
import useBannerImage from "../../hooks/home/useBannerImage";

const Home = () => {
  const { bannerImage } = useBannerImage();
  return (
    <>
      {bannerImage?.banner?.length > 0 && (
        <Banner bannerImage={bannerImage?.banner} />
      )}
      {bannerImage?.card?.length > 0 && <Slider card={bannerImage?.card} />}
      <LiveSports />
      <Casino />
    </>
  );
};

export default Home;
