import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, Settings } from "../api";

/* get single game details data */
const useEventDetails = (eventTypeId, eventId) => {
  const { data: eventsData, refetch: refetchEventsData } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axios.post(
        `${API.eventDetails}/${eventTypeId}/${eventId}`
      );
      const data = res.data;
      return data;
    },
    /* refetching after 2 second */
    refetchInterval: Settings.interval,
    gcTime:0
  });

  return { eventsData, refetchEventsData };
};

export default useEventDetails;
