import { useQuery } from "@tanstack/react-query";
import { API, Settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import useContextState from "./useContextState";

const useGetNotification = () => {
  const { token } = useContextState();
  const {
    data: notification = "",
    refetch: refetchNotification,
    isFetching: isFetchingNotification,
    isFetched,
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      try {
        const generatedToken = handleRandomToken();
        const encryptedData = handleEncryptData({
          token: generatedToken,
          site: Settings.siteUrl,
        });
        const response = await fetch(`${API.notification}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(encryptedData),
        });

        const data = await response.json();
        if (data.success) {
          return data?.result?.[0];
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    gcTime: 0,
    refetchInterval: 60000,
  });

  return {
    notification,
    refetchNotification,
    isFetchingNotification,
    isFetched,
  };
};

export default useGetNotification;
