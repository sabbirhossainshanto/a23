import { Outlet, useLocation } from "react-router-dom";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div
      className="centered-div"
      style={{
        paddingBottom: `${location.pathname.includes("/aviator") ? "0px" : ""}`,
      }}
    >
      <Header />
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      {!location.pathname.includes("/aviator") && <Footer />}
    </div>
  );
};

export default MainLayout;
