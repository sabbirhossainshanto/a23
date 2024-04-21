import Banner from "../ui/Banner/Banner";
import Casino from "../ui/Casino/Casino";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";
import LiveSports from "../ui/LiveSports/LiveSports";
import Slider from "../ui/Slider/Slider";

const MainLayout = () => {
  return (
    <div className="centered-div">
      <Header />
      <Banner />
      <Slider />
      <LiveSports />
      <Casino />
      <Footer />
    </div>
  );
};

export default MainLayout;
