import axios from "axios";
import indFlag from "../../../src/assets/img/ind-flag-icon.svg";
import { API, Settings } from "../../api";
import handleEncryptData from "../../utils/handleEncryptData";
import handleRandomToken from "../../utils/handleRandomToken";
import toast from "react-hot-toast";
const GetForgotOTP = ({ setShowOtp, mobileNo, setMobileNo }) => {
  const getOtp = async (e) => {
    e.preventDefault();
    /* Get Otp based on settings*/
    if (Settings.otp) {
      const generatedToken = handleRandomToken();
      const otpData = {
        mobile: mobileNo,
        token: generatedToken,
        site: Settings?.siteUrl,
      };
      const encryptedData = handleEncryptData(otpData);
      const res = await axios.post(API.otp, encryptedData);
      const data = res.data;
      if (data?.success) {
        toast.success(data?.result?.message);
        setShowOtp(true);
      } else {
        toast.error(data?.error?.errorMessage);
      }
    } else {
      setShowOtp(true);
    }
  };

  const handleMobileNo = (e) => {
    if (e.target.value.length <= 10) {
      setMobileNo(e.target.value);
    }
  };
  return (
    <div className="e-p-body-bc" style={{ backdropFilter: "blur(1px)" }}>
      <div className="login-page-abc">
        <div>
          <div className="register-box">
            <div className="register-card">
              <div className="register-card-header">
                <div className="register-text">
                  <p>Forgot Password</p>
                </div>
              </div>
              <form
                onSubmit={getOtp}
                className="ng-untouched ng-pristine ng-invalid"
              >
                <div className="mobile-input">
                  <span>Mobile Number*</span>
                  <div className="input-box">
                    <span className="drp-btn">+91</span>
                    <img
                      loading="lazy"
                      src={indFlag}
                      alt=""
                      className="india-flag"
                    />
                    <div className="str-line">
                      <img
                        loading="lazy"
                        src="assets/img/straight-line1.svg"
                        alt=""
                      />
                    </div>
                    <input
                      onChange={(e) => handleMobileNo(e)}
                      value={mobileNo}
                      type="tel"
                      className="mobile-input ng-untouched ng-pristine ng-invalid"
                      placeholder="Enter your Phone Number"
                    />
                  </div>
                </div>

                <button
                  disabled={Settings.otp && mobileNo?.length < 10}
                  type="submit"
                  className="otp-btn"
                >
                  <span>Get OTP</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetForgotOTP;
