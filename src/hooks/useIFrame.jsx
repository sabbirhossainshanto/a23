import { useQuery } from "@tanstack/react-query";
import useContextState from "./useContextState";
import axios from "axios";

import { API } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
/* Iframe  api  */
const useIFrame = (eventTypeId, eventId, hasVideo) => {
  const { token } = useContextState();
  const { data: iFrameUrl } = useQuery({
    queryKey: ["iframeVideo"],
    /* match odds hasvideo = true then enable */
    enabled: hasVideo,
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedVideoData = handleEncryptData({
        eventTypeId: eventTypeId,
        eventId: eventId,
        type: "video",
        token: generatedToken,
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
  });
  return { iFrameUrl };
};

export default useIFrame;
