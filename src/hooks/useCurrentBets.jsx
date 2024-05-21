import { useQuery } from "@tanstack/react-query";
import { API, Settings } from "../api";
import useContextState from "./useContextState";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

const useCurrentBets = (eventId) => {
  const { token, tokenLoading } = useContextState();
  /* Fetch Current Bets */
  const { data: myBets = [], refetch: refetchCurrentBets } = useQuery({
    queryKey: ["currentBets"],
    /* Enable when  token available */
    enabled: !tokenLoading,
    queryFn: async () => {
      try {
        const generatedToken = handleRandomToken();
        const encryptedData = handleEncryptData({
          token:generatedToken,
          site:Settings.siteUrl
        });
        const response = await fetch(
          `${API.currentBets}/${eventId || "sports"}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(encryptedData),
          }
        );

        const data = await response.json();
        if (data.success) {
          return data.result;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    gcTime:0
  });
  return { myBets, refetchCurrentBets };
};

export default useCurrentBets;
