import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";
import useContextState from "../../hooks/useContextState";
import { Settings } from "../../api";
import { useEffect } from "react";
import disableDevtool from "disable-devtool";
import { handleLogOut } from "../../utils/handleLogOut";

const MainLayout = () => {
  const location = useLocation();
  const { addBank, setTokenLoading } = useContextState();
  const disabledDevtool = Settings.disabledDevtool;
  const navigate = useNavigate();
  useEffect(() => {
    if (disabledDevtool) {
      disableDevtool({
        ondevtoolopen: (type) => {
          const info = "devtool opened!; type =" + type;
          if (info) {
            handleLogOut();
            setTokenLoading(true);
            navigate("/");
          }
        },
      });
    }
  }, [navigate, disabledDevtool]);

  const isFooterShown = () => {
    if (
      !location.pathname.includes("/casino") &&
      !addBank &&
      !location.pathname.includes("/game-details")
    ) {
      return true;
    } else {
      false;
    }
  };
  return (
    <div
      className="centered-div"
      style={{
        paddingBottom: `${location.pathname.includes("/casino") ? "0px" : ""}`,
      }}
    >
      <Header />
      <div
        style={{
          minHeight: `calc(100vh - ${isFooterShown() ? "268px" : "210px"})`,
        }}
      >
        <Outlet />
      </div>
      {!location.pathname.includes("/casino") &&
      !addBank &&
      !location.pathname.includes("/game-details") ? (
        <Footer />
      ) : null}

    
    </div>
  );
};

export default MainLayout;
