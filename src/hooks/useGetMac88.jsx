import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";

const useGetMac88 = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["mac88"],

    queryFn: async () => {
      const res = await axios.post(API.mac88, {
        isHome: false,
      });
      const result = res?.data;
      if (result?.success) {
        return result?.data;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetch, isLoading };
};

export default useGetMac88;
