import { useQuery } from "@tanstack/react-query";
import useContextState from "./useContextState";
import axios from "axios";
import { API } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

const useHomeCasino = () => {
  const { token, tokenLoading } = useContextState();
  const { data: homeCasino = [], refetch: refetchHomeCasino } = useQuery({
    queryKey: ["home-casino"],
    enabled: !tokenLoading,
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData(generatedToken);
      const res = await axios.post(`${API.homeCasino}`, encryptedData, {
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
  return { homeCasino, refetchHomeCasino };
};

export default useHomeCasino;
