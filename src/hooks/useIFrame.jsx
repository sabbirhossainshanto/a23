import { useQuery } from "@tanstack/react-query";
import useContextState from "./useContextState";
import axios from "axios";

import { API, Settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
/* Iframe  api  */
const useIFrame = (eventTypeId, eventId) => {
  const { token } = useContextState();
  const { data: iFrameUrl,refetch:refetchIFrameUrl } = useQuery({
    queryKey: ["iframeVideo"],
    /* match odds hasvideo = true then enable */

    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedVideoData = handleEncryptData({
        eventTypeId: eventTypeId,
        eventId: eventId,
        type: "video",
        token: generatedToken,
        site:Settings.siteUrl
      });
      const res = await axios.post(API.accessToken, encryptedVideoData, {
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
  return { iFrameUrl,refetchIFrameUrl };
};

export default useIFrame;
