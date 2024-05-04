import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import useContextState from "./useContextState";
import { API, Settings } from "../api";
import { handleLogOut } from "../utils/handleLogOut";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { useNavigate } from "react-router-dom";
/* Balance api */
const useBalance = () => {
  const { token, tokenLoading, setTokenLoading } = useContextState();
  const navigate = useNavigate();
  const { data: balanceData = {}, refetch: refetchBalance } = useQuery({
    queryKey: ["balance"],
    enabled: !tokenLoading,
    queryFn: async () => {
      if (!token) {
        return;
      }
      /* handle random token  */
      const generatedToken = handleRandomToken();
      /* handle encrypt data */
      const encryptedData = handleEncryptData(generatedToken);
      const res = await axios.post(API.balance, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res?.data?.success === false && token) {
        /* Logout if success false  */
        handleLogOut();
        setTokenLoading(true);
        navigate("/login");
      }
      if (res?.data?.success && token) {
        const data = res.data?.result;
        return data;
      }
    },
    /* Refetch based on balanceApiLoop in notice.json */
    refetchInterval: Settings?.balanceApiLoop ? 6000 : null,
  });

  return { balanceData, refetchBalance };
};

export default useBalance;
