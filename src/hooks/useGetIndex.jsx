import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, Settings } from "../api";
import useContextState from "./useContextState";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

const useGetIndex = () => {
  const { token } = useContextState();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["index"],

    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedPostData = handleEncryptData({
        site: Settings.siteUrl,
        token: generatedToken,
        type: "get_referral_code",
      });

      const res = await axios.post(API.index, encryptedPostData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = res?.data;
      if (result?.success) {
        return result?.result;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetch, isLoading };
};

export default useGetIndex;
