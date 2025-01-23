import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";
import useContextState from "../../hooks/useContextState";
import { Settings } from "../../api";
import { useEffect } from "react";
import disableDevtool from "disable-devtool";
import { handleLogOut } from "../../utils/handleLogOut";
import handleDecryptData from "../../utils/handleDecryptData";

const MainLayout = () => {
  const location = useLocation();
  const { addBank, setTokenLoading } = useContextState();
  const disabledDevtool = Settings.disabledDevtool;
  const navigate = useNavigate();

  useEffect(() => {
    const encryption = async () => {
      const encryptedData = {
        ct: "tjYBZM4vIQTporsepkVitUfoR5m6fGtEVbSbs5qnY0FaJXFQcW/IsWGUbQeVmp5vLA/tbA7aqmFENHPgXUoFojLiTwZUwOkBLZ6X8XwgN2WC0GcJGfT+//mYduzlt0MpgZyyQPqL5dkAvdXbMpVOzrZdZwHpYjmlLihKgkvgklvBsi9w0WgTv8XqDGdzABeCoPWzFlgoQVV5Oo4vkdXBz1s7FzKK+2CJX4GvbiT6M2KKRmC/2mEz0+egGSpeIIw3BtHhYFj/fYmYHFaMXi+VnSIExuK0wgb3w1A/KWlRNFo1imCthMvF8lDixglNvQ9+/N/qExaeMpsrEmJQs1te7EDmQ/AnS2ZLzXxjr4OnAfJOmLGuMlUCL4qMV+WmeTnF+Yoz3sarWr644ZhH5bwyMAWLa1NnwUnwYWFOpjMQNJsBdtjn/RcCJZHtM0Jj2ER4jdWQJZg/nqEI1SP72Lf8xQ==",
        iv: "09a74d9096600dc5dbc2c30e647b0533",
        s: "1ae93330947714ab",
      };
      const decryptedData = handleDecryptData(JSON.stringify(encryptedData));

      console.log(decryptedData);
    };
    encryption();
  }, []);

  /* Disable devtool */
  useEffect(() => {
    /* If disable devtool true in notice.json then logout the user */
    if (disabledDevtool) {
      disableDevtool({
        ondevtoolopen: (type) => {
          const info = "devtool opened!; type =" + type;
          if (info) {
            handleLogOut();
            setTokenLoading(true);
            window.location.href = "https://www.google.com/";
          }
        },
      });
    }
  }, [navigate, disabledDevtool]);

  /* handling main content height */
  const handleMainContainerHeight = () => {
    if (
      !location.pathname.includes("/casino") &&
      !addBank &&
      !location.pathname.includes("/1") &&
      !location.pathname.includes("/2") &&
      !location.pathname.includes("/4")
    ) {
      return true;
    } else {
      return false;
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
          minHeight: `calc(100vh - ${
            handleMainContainerHeight() ? "268px" : "210px"
          })`,
        }}
      >
        <Outlet />
      </div>
      {!location.pathname.includes("/casino") &&
      !addBank &&
      !location.pathname.includes("/1") &&
      !location.pathname.includes("/2") &&
      !location.pathname.includes("/4") ? (
        <Footer />
      ) : null}
    </div>
  );
};

export default MainLayout;
