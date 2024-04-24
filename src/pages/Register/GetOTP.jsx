import axios from "axios";
import handLogo from "../../../src/assets/img/hand-logo.webp";
import indFlag from "../../../src/assets/img/ind-flag-icon.svg";
import { API, Settings } from "../../api";
import handleEncryptData from "../../utils/handleEncryptData";
import handleRandomToken from "../../utils/handleRandomToken";
import toast from "react-hot-toast";
import useGetSocialLink from "../../hooks/useGetSocialLink";
const GetOTP = ({ setMobileNo, mobileNo, setShowRegister }) => {
  const { socialLink } = useGetSocialLink();
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
        setShowRegister(true);
      } else {
        toast.error(data?.error?.errorMessage);
      }
    } else {
      setShowRegister(true);
    }
  };

  const getWhatsAppId = (links) => {
    window.open(links?.link, "_blank");
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
                <span>New Member?</span>
                <div className="register-text">
                  <p>Register Now,</p>
                  <img
                    src={handLogo}
                    alt=""
                    style={{ height: "24px", width: "24px" }}
                  />
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
                        src="https://11exch.com/assets/images/straight-line1.svg"
                        alt=""
                      />
                    </div>
                    <input
                      onChange={(e) => handleMobileNo(e)}
                      type="number"
                      value={mobileNo}
                      className="mobile-input ng-untouched ng-pristine ng-invalid"
                      placeholder="Enter your Phone Number"
                    />
                  </div>
                </div>
                <div className="terms">
                  <div className="radio-check">
                    <img
                      src="https://11exch.com/assets/images/checked.png"
                      alt=""
                      style={{ height: "1rem" }}
                    />
                  </div>
                  <span>
                    I confirm that I am 18 years old or above and agree to the
                    terms and conditions.
                  </span>
                </div>
                <button
                  disabled={Settings.otp && mobileNo?.length < 10}
                  type="submit"
                  className="otp-btn"
                >
                  <span> {Settings.otp ? " Get OTP" : "Proceed"}</span>
                </button>
              </form>
              {socialLink?.link && (
                <div
                  onClick={() => getWhatsAppId(socialLink)}
                  className="whatsup-card"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    loading="lazy"
                    src="https://11exch.com/assets/images/whatsup.svg"
                    alt=""
                  />
                  <span>Get Instant ID on Whatsapp</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetOTP;
