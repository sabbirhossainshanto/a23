import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";

const MainLayout = () => {
  return (
    <div className="centered-div">
      <Header />
      <div  style={{ minHeight: "calc(100vh - 180px)" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
