import { useQuery } from "@tanstack/react-query";
import useContextState from "./useContextState";
import axios from "axios";
import { API, Settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
/* get royal casino */
const useRoyalCasino = () => {
  const { token } = useContextState();
  const { data: royalCasino = [], refetch: refetchRoyalCasino } = useQuery({
    queryKey: ["royal-casino"],

    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        token: generatedToken,
        site: Settings.siteUrl,
      });
      const res = await axios.post(`${API.royalCasino}`, encryptedData, {
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
  return { royalCasino, refetchRoyalCasino };
};

export default useRoyalCasino;
