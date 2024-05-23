import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, Settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import useContextState from "./useContextState";

const useGetVersion = () => {
  const { noticeLoaded } = useContextState();
  const { data: version, refetch: refetchVersion } = useQuery({
    queryKey: ["version"],
    enabled: noticeLoaded,
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const postData = {
        site: Settings.siteUrl,
        token: generatedToken,
      };
      const encryptedData = handleEncryptData(postData);
      const res = await axios.post(API.siteSettings, encryptedData);
      const data = res?.data;
      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { version, refetchVersion };
};

export default useGetVersion;
