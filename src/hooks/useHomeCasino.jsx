import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, Settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

const useHomeCasino = () => {
  const { data: homeCasino = [], refetch: refetchHomeCasino } = useQuery({
    queryKey: ["home-casino"],
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        token: generatedToken,
        site: Settings.siteUrl,
      });
     
      const res = await axios.post(`${API.homeCasino}`, encryptedData);
      const data = res.data;
      if (data.status === "success") {
        return data.data;
      }
    },
  });
  return { homeCasino, refetchHomeCasino };
};

export default useHomeCasino;
