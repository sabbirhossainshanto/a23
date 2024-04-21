import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, Settings } from "../../api";
import handleRandomToken from "../../utils/handleRandomToken";
import handleEncryptData from "../../utils/handleEncryptData";
import useContextState from "../useContextState";
/* Get casino */
const useBannerImage = () => {
  const { token } = useContextState();
  const { data: bannerImage } = useQuery({
    queryKey: ["bannerImage"],
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const postData = {
        site: Settings.siteUrl,
        token: generatedToken,
      };
      const encryptedData = handleEncryptData(postData);
      const res = await axios.post(API.banner, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;
      if (data?.success) {
        return data?.result?.homepage;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { bannerImage };
};

export default useBannerImage;
