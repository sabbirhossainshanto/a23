import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosInstance } from "../lib/AxiosInstance";

const useBonusStatement = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["bonus-statement"],
    queryFn: async () => {
      const res = await AxiosInstance.post(API.bonus, {
        type: "viewStatement",
      });
      const result = res?.data;
      if (result?.success) {
        return result?.result;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetch, isLoading };
};

export default useBonusStatement;
