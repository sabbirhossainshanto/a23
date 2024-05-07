import { useQuery } from "@tanstack/react-query";
import useContextState from "./useContextState";
import axios from "axios";
import { API, Settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
/* get indian casino */
const useIndianCasino = () => {
  const { token} = useContextState();
  const { data: indianCasino = [], refetch: refetchIndianCasino } = useQuery({
    queryKey: ["indian-casino"],

    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        token:generatedToken,
        site:Settings.siteUrl
      });
      const res = await axios.post(`${API.indiaCardGames}`, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      if (data.status === "success") {
        return data.data;
      }
    },
  });
  return { indianCasino, refetchIndianCasino };
};

export default useIndianCasino;
