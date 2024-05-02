import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, Settings } from "../../api";

const useSportsBook = (sportsType) => {
  const { data: sports, refetch: refetchSports } = useQuery({
    queryKey: ["sports"],
    queryFn: async () => {
      const res = await axios.post(`${API.groupSportsBook}/${sportsType || 0}`);
      const data = res.data;
      return data;
    },
    refetchInterval: Settings.interval,
  });

  return { sports, refetchSports };
};

export default useSportsBook;
