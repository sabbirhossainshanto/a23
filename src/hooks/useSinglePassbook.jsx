import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";
import useContextState from "./useContextState";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
/* single passbook */
const useSinglePassbook = (marketId) => {
  const { token, tokenLoading } = useContextState();
  const { data: singlePassbook } = useQuery({
    queryKey: ["singlePassbook"],
    /* enable when token available */
    enabled: !tokenLoading,
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData(generatedToken);
      const res = await axios.post(
        `${API.settledBets}/${marketId}`,
        encryptedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      if (data?.success) {
        return data?.result;
      }
    },
    gcTime: 0,
  });

  return { singlePassbook };
};

export default useSinglePassbook;
