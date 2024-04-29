import { useQuery } from "@tanstack/react-query";
import useContextState from "./useContextState";
import axios from "axios";
import { API } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

/* exposure api */
const useIndianCasino = () => {
  const { token, tokenLoading } = useContextState();
  const { data: indianCasino = [], refetch: refetchIndianCasino } = useQuery({
    queryKey: ["indian-casino"],
    enabled: !tokenLoading,
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData(generatedToken);
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
