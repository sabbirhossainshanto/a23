import { useQuery } from "@tanstack/react-query";
import useContextState from "./useContextState";
import axios from "axios";
import { API, Settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

const useWithdrawBreakdown = () => {
  const { token, tokenLoading } = useContextState();
  const { data: withdrawBreakdown = {} } = useQuery({
    queryKey: ["withdraw-breakdown"],
    enabled: !tokenLoading,
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        token: generatedToken,
        site: Settings.siteTitle,
      });
      const res = await axios.post(`${API.withdrawBreakdown}`, encryptedData, {
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
  return { withdrawBreakdown };
};

export default useWithdrawBreakdown;
