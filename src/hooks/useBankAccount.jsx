import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosInstance } from "../lib/AxiosInstance";

const useBankAccount = (payload) => {
  const {
    data: bankData,
    refetch: refetchBankData,
    isFetched,
  } = useQuery({
    queryKey: ["bankAccount"],

    queryFn: async () => {
      const res = await AxiosInstance.post(API.bankAccount, payload);
      const data = res?.data;

      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { bankData, refetchBankData, isFetched };
};

export default useBankAccount;
