import { useEffect, useRef, useState } from "react";
import handLogo from "../../../src/assets/img/hand-logo.webp";
import indFlag from "../../../src/assets/img/ind-flag-icon.svg";
import { API, Settings } from "../../api";
import GetOTP from "./GetOTP";
import { useForm } from "react-hook-form";
import handleRandomToken from "../../utils/handleRandomToken";
import handleEncryptData from "../../utils/handleEncryptData";
import handleDepositMethod from "../../utils/handleDepositMethod";
import useContextState from "../../hooks/useContextState";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [mobileNo, setMobileNo] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [countDown, setCountDown] = useState(45);
  const { setGetToken } = useContextState();
  const navigate = useNavigate();
  const inputs = useRef([]);
  const [user, setUser] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
  });
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);



  useEffect(() => {
    if (showRegister) {
      if (countDown > 0) {
        setTimeout(() => {
          setCountDown((prev) => prev - 1);
        }, 1000);
      }
    }
  }, [countDown, showRegister]);



  useEffect(() => {
    if (showRegister) {
      if (inputs.current.length > 0) {
        inputs.current[0].focus();
      }
    }
  }, [showRegister]);



  const handleInput = async (index, e) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = e.target.value;
    setOtpValues(newOtpValues);
    if (e.target.value && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const { handleSubmit } = useForm();
  const onSubmit = async () => {
    const generatedToken = handleRandomToken();
    const registerData = {
      username: user?.userName,
      password: user?.password,
      confirmPassword: user?.password,
      mobile: mobileNo,
      site: Settings.siteUrl,
      token: generatedToken,
      otp: otpValues.join(""),
      isOtpAvailable: Settings.otp,
      referralCode: user.referralCode,
    };

    const encryptedData = handleEncryptData(registerData);
    const res = await fetch(API.register, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(encryptedData),
    });

    const data = await res.json();


    if (data?.success) {
      if (Settings.deposit) {
        const handleDeposit = handleDepositMethod(data.result.token);
        const res = await handleDeposit();
        if (res?.success) {
          localStorage.setItem("depositMethod", JSON.stringify(res?.result));
        }
      }

      /* Set token to localeStorage */
      localStorage.setItem("token", data.result.token);
      /* Set bonus token in locale storage */
      localStorage.setItem("bonusToken", data?.result?.bonusToken);
      /* Set login name to locale storage */
      localStorage.setItem("loginName", data.result.loginName);
      const buttonValue = JSON.stringify(data.result.buttonValue.game);
      /* set button value to locale storage */
      localStorage.setItem("buttonValue", buttonValue);

      /* if in locale storage token and login name available and  data?.result?.changePassword === false */
      setGetToken((prev) => !prev);
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("loginName") &&
        data?.result?.changePassword === false
      ) {
        /* Show success message */
        toast.success("User registration successful!");
        /* Close modal */
        navigate("/");
      } else {
        toast.error(data?.error?.description);
      }
    } else {
      toast.error(data?.error?.description);
    }
  };


  return (
    <>
      {Settings.otp && !showRegister ? (
        <GetOTP
          setMobileNo={setMobileNo}
          mobileNo={mobileNo}
          setShowRegister={setShowRegister}
        />
      ) : (
        <div className="e-p-body-bc">
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
                    onSubmit={handleSubmit(onSubmit)}
                    className="ng-invalid ng-submitted ng-untouched ng-pristine"
                    data-gtm-form-interact-id="4"
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
                          type="tel"
                          className="mobile-input ng-dirty ng-touched"
                          placeholder="Enter your Phone Number"
                          value={mobileNo}
                          data-gtm-form-interact-field-id="8"
                        />
                        <img
                          src="assets/img/right-click-check.svg"
                          alt=""
                          style={{
                            position: "absolute",
                            right: "-1rem",
                            marginRight: "1.5rem",
                          }}
                        />
                      </div>
                    </div>
                    <div className="terms">
                      <div className="radio-check">
                        <img
                          src="assets/img/checked.webp"
                          alt=""
                          style={{ height: "1rem" }}
                        />
                      </div>
                      <span>
                        I confirm that I am 18 years old or above and agree to
                        the terms and conditions.
                      </span>
                    </div>
                    <div>
                      <div className="otp-input-box">
                        <span>Enter OTP*</span>
                        <div className="input-boxes">
                          {[...Array(4)].map((_, index) => (
                            <input
                              key={index}
                              ref={(el) => (inputs.current[index] = el)}
                              onChange={(e) => handleInput(index, e)}
                              placeholder="_"
                              id="first"
                              type="text"
                              className="ng-untouched ng-pristine ng-invalid"
                            />
                          ))}
                        </div>
                        {countDown === 0 ? (
                          <span className="resend-otp">Resend</span>
                        ) : (
                          <span className="resend-otp">
                            Resend in 00:{countDown}
                          </span>
                        )}
                      </div>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div className="pwd-box">
                        <span className="pwd-text">Password*</span>
                        <input
                          onChange={(e) => {
                            setUser({
                              ...user,
                              password: e.target.value,
                            });
                          }}
                          placeholder="Enter your password"
                          type={showPassword ? "text" : "password"}
                          className="ng-untouched ng-pristine ng-invalid"
                        />
                        <span className="showPass">
                          {showPassword ? (
                            <FaEye
                              onClick={() => setShowPassword((prev) => !prev)}
                              style={{ cursor: "pointer" }}
                              size={16}
                            />
                          ) : (
                            <FaEyeSlash
                              onClick={() => setShowPassword((prev) => !prev)}
                              style={{ cursor: "pointer" }}
                              size={16}
                            />
                          )}
                        </span>
                      </div>
                      <div className="pwd-box">
                        <span className="pwd-text">Confirm Password*</span>
                        <input
                          onChange={(e) => {
                            setUser({
                              ...user,
                              confirmPassword: e.target.value,
                            });
                          }}
                          placeholder="Enter Confirm password"
                          type={showConfirmPass ? "text" : "password"}
                          className="ng-untouched ng-pristine ng-valid"
                        />
                        <span className="showPass">
                          {showConfirmPass ? (
                            <FaEye
                              onClick={() =>
                                setShowConfirmPass((prev) => !prev)
                              }
                              style={{ cursor: "pointer" }}
                              size={16}
                            />
                          ) : (
                            <FaEyeSlash
                              onClick={() =>
                                setShowConfirmPass((prev) => !prev)
                              }
                              style={{ cursor: "pointer" }}
                              size={16}
                            />
                          )}
                        </span>
                      </div>
                    </div>
                    <button type="submit" className="submit-btn">
                      <span>Submit</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
