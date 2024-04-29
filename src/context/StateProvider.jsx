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
  const [isCheckedBonusToken, setIsCheckedBonusToken] = useState(false);
  const [sportsType, setSportsType] = useState(0);
  const [placeBetValues, setPlaceBetValues] = useState({});
  const [openBetSlip, setOpenBetSlip] = useState(false);
  const [addBank, setAddBank] = useState(false);

  /* Get token from locale storage */
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    const getBonusToken = localStorage.getItem("bonusToken");
    const getCheckedBonusToken = localStorage.getItem("checkedBonusToken");
    /* If check box true of bonus token and bonus token available then using bonus token in authorization headers */
    if (getCheckedBonusToken && getBonusToken) {
      /* Set bonus token */
      setToken(getBonusToken);
      /* Check box true of bonus */
      setIsCheckedBonusToken(true);
    } else {
      /* Set default token */
      setToken(getToken);
      /* Checkbox box false */
      setIsCheckedBonusToken(false);
    }

    if (token && (getToken === token || getBonusToken === token)) {
      /* handle loading for save crash website` */
      setTokenLoading(false);
    }
  }, [token, getToken]);

  useEffect(() => {
    const logo = `${API.assets}/${Settings.siteUrl}/logo.png`;
    setLogo(logo);
    console.log(logo);
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
    isCheckedBonusToken,
    setIsCheckedBonusToken,
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
