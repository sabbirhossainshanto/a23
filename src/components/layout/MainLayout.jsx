import { Outlet, useLocation } from "react-router-dom";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";
import useContextState from "../../hooks/useContextState";

const MainLayout = () => {
  const location = useLocation();
  const { addBank } = useContextState();
  return (
    <div
      className="centered-div"
      style={{
        paddingBottom: `${location.pathname.includes("/aviator") ? "0px" : ""}`,
      }}
    >
      <Header />
      <div style={{ minHeight: "calc(100vh - 268px)" }}>
        <Outlet />
      </div>
      {!location.pathname.includes("/aviator") && !addBank ? <Footer /> : null}
    </div>
  );
};

export default MainLayout;
