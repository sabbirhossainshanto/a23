import toast from "react-hot-toast";
import { API, Settings } from "../api";
import handleEncryptData from "../utils/handleEncryptData";
import handleRandomToken from "../utils/handleRandomToken";
import axios from "axios";

const getOtpOnWhatsapp = async (mobileNo, setOrderId, setShowRegister) => {
  const generatedToken = handleRandomToken();
  const otpData = {
    mobile: mobileNo,
    token: generatedToken,
    site: Settings?.siteUrl,
    type: "otpsend",
  };
  const encryptedData = handleEncryptData(otpData);
  const res = await axios.post(API.otpless, encryptedData);
  const data = res.data;
  if (data?.success) {
    setOrderId({
      orderId: data?.result?.orderId,
      otpMethod: "whatsapp",
    });
    toast.success(data?.result?.message);
    setShowRegister(true);
  } else {
    toast.error(data?.error?.errorMessage);
  }
};

export default getOtpOnWhatsapp;
