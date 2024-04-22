import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";

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
    refetchInterval: 2000,
  });

  return { eventsData, refetchEventsData };
};

export default useEventDetails;
