import axios from "axios";
import { API, Settings } from "../api";
import handleRandomToken from "./handleRandomToken";
/* handle deposit api */
const handleDepositMethod = (token) => {
  const handleDeposit = async () => {
    const generatedToken = handleRandomToken();
    const bankData = {
      type: "depositMethods",
      token: generatedToken,
      site:Settings.siteUrl
    };
    //   const encryptedData = UseEncryptData(bankData);
    const res = await axios.post(API.bankAccount, bankData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = res?.data;
    if (result?.success) {
      return result;
    }
  };
  return handleDeposit;
};

export default handleDepositMethod;
