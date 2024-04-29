import { useEffect, useState } from "react";
import handleRandomToken from "../../utils/handleRandomToken";
import handleEncryptData from "../../utils/handleEncryptData";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../api";
import useContextState from "../../hooks/useContextState";
import Loader from "../../components/ui/Loader/Loader";

const Aviator = () => {
  const [loading, setLoading] = useState(false);
  const [iFrame, setIFrame] = useState("");
  const { gameId } = useParams();
  const { token } = useContextState();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getCasinoVideo = async () => {
      setLoading(true);
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        gameId: gameId,
        token: generatedToken,
        isHome: false,
        mobileOnly: true,
      });

      try {
        const res = await axios.post(API.liveCasinoIFrame, encryptedData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = res?.data;
        setIFrame(data?.gameUrl);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error opening casino game:", error);
      }
    };
    getCasinoVideo();
  }, [token, gameId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <iframe
      allow="fullscreen;"
      src={iFrame}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        margin: "0px",
        padding: "0px",
        overflow: "hidden",
        zIndex: "999999",
      }}
    ></iframe>
  );
};

export default Aviator;
