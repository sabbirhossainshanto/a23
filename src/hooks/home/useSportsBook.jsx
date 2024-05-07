import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../../api";

/* get sports book */
const useSportsBook = (sportsType) => {
  const { data: sports, refetch: refetchSports } = useQuery({
    queryKey: ["sports"],
    queryFn: async () => {
      
      const res = await axios.post(`${API.groupSportsBook}/${sportsType || 0}`);
      const data = res.data;
      return data;
    },
    refetchInterval: 2000,
  });

  return { sports, refetchSports };
};

export default useSportsBook;
