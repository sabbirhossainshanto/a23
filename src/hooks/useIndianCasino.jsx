import { useQuery } from "@tanstack/react-query";
import useContextState from "./useContextState";
import axios from "axios";
import { API } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

const useIndianCasino = () => {
  const { token} = useContextState();
  const { data: indianCasino = [], refetch: refetchIndianCasino } = useQuery({
    queryKey: ["indian-casino"],

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
