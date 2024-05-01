import { useQuery } from "@tanstack/react-query";
import useContextState from "./useContextState";
import axios from "axios";
import { API } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";

const useGetSlots = () => {
  const { token } = useContextState();
  const { data: slots = [], refetch: refetchSlots } = useQuery({
    queryKey: ["slots"],

    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData(generatedToken);
      const res = await axios.post(`${API.slots}`, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      if (data.status === "success") {
        return data.data;
      }
    },
  });
  return { slots, refetchSlots };
};

export default useGetSlots;
