import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useContextState from "./useContextState";
import { API } from "../api";
import { useEffect } from "react";
import { handleLogOut } from "../utils/handleLogOut";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

const useBonusBalance = () => {
  const { setGetToken, wallet, setTokenLoading } = useContextState();
  const bonusToken = localStorage.getItem("bonusToken");
  /* Bonus balance api */
  const { data: bonusBalanceData, refetch: bonusRefetchBalance } = useQuery({
    queryKey: ["bonusBalance"],
    enabled: wallet === "bonus",
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData(generatedToken);
      const res = await axios.post(API.balance, encryptedData, {
        headers: {
          Authorization: `Bearer ${bonusToken}`,
        },
      });
      /* Logout if success false */
      if (res?.data?.success === false && bonusToken) {
        handleLogOut();
        setTokenLoading(true);
        setGetToken((prev) => !prev);
      } else if (res?.data?.success && bonusToken) {
        const data = res.data?.result;
        return data;
      }
    },
    /* Refetch after 6 second */
    refetchInterval: 6000,
  });

  useEffect(() => {
    if (bonusToken) {
      bonusRefetchBalance();
    }
  }, [bonusToken, bonusRefetchBalance]);

  return { bonusBalanceData, bonusRefetchBalance };
};

export default useBonusBalance;