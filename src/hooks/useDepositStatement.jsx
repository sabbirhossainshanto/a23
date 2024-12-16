import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, Settings } from "../api";
import useContextState from "./useContextState";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
/*  deposit statement api */
const useDepositStatement = () => {
  /* from date seven days earlier */
  const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];
  /* current date */
  const toDate = new Date().toISOString().split("T")[0];
  const { token, tokenLoading } = useContextState();

  const { data: accountStatement = [] } = useQuery({
    queryKey: ["deposit-statement"],
    enabled: !tokenLoading,
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      /* Encrypt post data */
      const encryptedData = handleEncryptData({
        from: fromDate,
        to: toDate,
        type: "DEPOSIT",
        status: "ALL",
        token: generatedToken,
        site: Settings.siteUrl,
      });
      const res = await axios.post(API.accountStatement, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;

      if (data?.success) {
        return data?.result;
      }
    },
    gcTime: 0,
  });
  return { accountStatement };
};

export default useDepositStatement;
