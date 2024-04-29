import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";
import useContextState from "./useContextState";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

/* withdraw api */
const useWithdrawStatement = () => {
  /* from date 7 days earlier */
  const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];
  /* current date */
  const toDate = new Date().toISOString().split("T")[0];
  const { token, tokenLoading } = useContextState();

  const { data: withdrawStatement = [] } = useQuery({
    queryKey: ["withdraw-statement"],
    /* enable when token available */
    enabled: !tokenLoading,
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      /* Encrypt post data */
      const encryptedData = handleEncryptData({
        from: fromDate,
        to: toDate,
        type: "WITHDRAW",
        status: "ALL",
        token: generatedToken,
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
    gcTime:0
  });
  return { withdrawStatement };
};

export default useWithdrawStatement;
