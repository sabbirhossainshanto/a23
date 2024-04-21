import { createContext, useEffect, useState } from "react";
import { API, Settings } from "../api";
export const StateContext = createContext(null);

const StateProvider = ({ children }) => {
  /* Global state this states we are using in full project */
  const [navTabs, setNavTabs] = useState('live')
  const [token, setToken] = useState("");
  const [getToken, setGetToken] = useState(true);
  const [tokenLoading, setTokenLoading] = useState(true);
  const [logo, setLogo] = useState("");


  /* Get token from locale storage */
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      setToken(getToken);
      setTokenLoading(false);
    }
  }, []);

  useEffect(() => {
    const logo = `${API.assets}/${Settings.siteUrl}/logo.webp`;
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
    getToken,
    setGetToken,
    navTabs, setNavTabs
  };
  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
