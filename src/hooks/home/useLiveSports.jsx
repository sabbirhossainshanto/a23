import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../../api";

const useLiveSports = () => {
  const { data: liveSports } = useQuery({
    queryKey: ["liveSports"],
    queryFn: async () => {
      const res = await axios.post(`${API.groupSportsBook}/0`);
      const data = res.data;
      return data;
    },
  });

  return { liveSports };
};

export default useLiveSports;
