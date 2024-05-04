import { useQuery } from "@tanstack/react-query";
import useContextState from "./useContextState";
import axios from "axios";
import { API, Settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

/* get deposit breakdown */
const useDepositBreakDown = (amount) => {
  const { token, tokenLoading } = useContextState();
  const { data: depositBreakdown = {} } = useQuery({
    queryKey: ["deposit-breakdown"],
    enabled: !tokenLoading,
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        token: generatedToken,
        amount,
        site: Settings.siteTitle,
      });
      const res = await axios.post(`${API.depositBreakdown}`, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;

      if (data.success) {
        return data.result;
      }
    },
    gcTime: 0,
  });
  return { depositBreakdown };
};

export default useDepositBreakDown;
