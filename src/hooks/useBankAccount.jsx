import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, Settings } from "../api";
import useContextState from "./useContextState";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

const useBankAccount = (payload) => {
  const { token, tokenLoading } = useContextState();
  const {
    data: bankData,
    refetch: refetchBankData,
    isFetched,
  } = useQuery({
    queryKey: ["bankAccount"],
    enabled: !tokenLoading,
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const bankData = {
        ...payload,
        site: Settings.siteUrl,
        token: generatedToken,
      };
      const encryptedData = handleEncryptData(bankData);
      const res = await axios.post(API.bankAccount, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;

      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { bankData, refetchBankData, isFetched };
};

export default useBankAccount;
