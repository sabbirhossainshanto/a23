import { useQuery } from "@tanstack/react-query";
import useContextState from "./useContextState";
import axios from "axios";
import { API } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

/* get international casino */
const useInterNationalCasino = () => {
  const { token} = useContextState();
  const { data: intCasino = [], refetch: refetchIntCasino } = useQuery({
    queryKey: ["int-casino"],
  
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData(generatedToken);
      const res = await axios.post(
        `${API.internationalCasino}`,
        encryptedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      if (data.status === "success") {
        return data.data;
      }
    },
  });
  return { intCasino, refetchIntCasino };
};

export default useInterNationalCasino;
