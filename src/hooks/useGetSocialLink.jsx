import { useQuery } from "@tanstack/react-query";
import { API, Settings } from "../api";
import axios from "axios";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

const useGetSocialLink = () => {
  const token = localStorage.getItem("token");

  // console.log(token);
  /* get whats app link */
  const { data: socialLink = {} } = useQuery({
    queryKey: ["whatsApp"],

    queryFn: async () => {
      /* random token function */
      const generatedToken = handleRandomToken();
      /* Encryption post data */
      const encryptedData = handleEncryptData({
        site: Settings.siteUrl,
        token: generatedToken,
      });
      const res = await axios.post(API.whatsApp, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      console.log(res);
      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { socialLink };
};

export default useGetSocialLink;
