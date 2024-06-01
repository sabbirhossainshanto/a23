import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, Settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

const useCasinoGames = () => {
  const { data: casinoGames = [], refetch: refetchCasinoGames } = useQuery({
    queryKey: ["casino-games"],
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        token:generatedToken,
        site:Settings.siteUrl
      });
      const res = await axios.post(`${API.casinoGames}`, encryptedData);
      const data = res.data;
      if (data.status === "success") {
        return data.data;
      }
    },
  });
  return { casinoGames,refetchCasinoGames };
};

export default useCasinoGames;
