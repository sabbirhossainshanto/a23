import { createContext, useEffect, useState } from "react";
import { API, Settings } from "../api";
export const StateContext = createContext(null);

const StateProvider = ({ children }) => {
  /* Global state this states we are using in full project */
  const [logo, setLogo] = useState("");
  const [navTabs, setNavTabs] = useState("live");
  const [token, setToken] = useState("");
  const [getToken, setGetToken] = useState(false);
  const [tokenLoading, setTokenLoading] = useState(true);
  const [sportsType, setSportsType] = useState(0);
  const [placeBetValues, setPlaceBetValues] = useState({});
  const [openBetSlip, setOpenBetSlip] = useState(false);
  const [addBank, setAddBank] = useState(false);

  /* Get token from locale storage */
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
    if (token && getToken === token) {
      /* handle loading for save crash website and set authorization token in header all api` */
      setTokenLoading(false);
    }
  }, [token, getToken]);

  useEffect(() => {
    /* Get site logo */
    const logo = `${API.assets}/${Settings.siteUrl}/logo.png`;
    setLogo(logo);

    /* Dynamically append  favicon  */
    const FavIconLink = document.createElement("link");
    FavIconLink.rel = "icon";
    FavIconLink.type = "image/png";
    FavIconLink.href = `${API.assets}/${Settings.siteUrl}/favicon.png`;
    document.head.appendChild(FavIconLink);
    /* Site title */
    document.title = Settings.siteTitle;
  }, []);

  const stateInfo = {
    token,
    setToken,
    tokenLoading,
    setTokenLoading,
    logo,
    setLogo,
    navTabs,
    setNavTabs,
    sportsType,
    setSportsType,
    getToken,
    setGetToken,
    placeBetValues,
    setPlaceBetValues,
    openBetSlip,
    setOpenBetSlip,
    addBank,
    setAddBank,
  };
  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
