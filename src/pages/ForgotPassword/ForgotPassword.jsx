import { useEffect, useRef, useState } from "react";
import GetForgotOTP from "./GetForgotOTP";
import indFlag from "../../../src/assets/img/ind-flag-icon.svg";
import { images } from "../../assets";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import handleRandomToken from "../../utils/handleRandomToken";
import { API, Settings } from "../../api";
import handleEncryptData from "../../utils/handleEncryptData";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [mobileNo, setMobileNo] = useState("");
  const [countDown, setCountDown] = useState(45);
  const inputs = useRef([]);
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
  });
  const [orderId, setOrderId] = useState({
    orderId: "",
    otpMethod: "",
  });
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (showOtp) {
      if (countDown > 0) {
        setTimeout(() => {
          setCountDown((prev) => prev - 1);
        }, 1000);
      }
    }
  }, [countDown, showOtp]);

  /* handle focus first input for enter otp */
  useEffect(() => {
    if (showOtp) {
      setTimeout(() => {
        if (inputs?.current?.length > 0) {
          inputs?.current?.[0]?.focus();
        }
      }, 1000);
    }
  }, [showOtp]);

  /* handle focus input element  */
  const handleInput = (index, e) => {
    const newValue = e.target.value.slice(0, 1);
    const newOtpValues = [...otpValues];
    newOtpValues[index] = newValue;
    setOtpValues(newOtpValues);
    if (newValue && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const onSubmit = async () => {
    const generatedToken = handleRandomToken();
    const forgotPasswordData = {
      username: mobileNo,
      password: user?.password,
      confirmPassword: user?.confirmPassword,
      site: Settings.siteUrl,
      token: generatedToken,
      otp: otpValues.join(""),
      orderId: orderId.orderId,
      otpMethod: orderId.otpMethod,
    };
    const encryptedData = handleEncryptData(forgotPasswordData);
    const res = await fetch(API.forgotPassword, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(encryptedData),
    });

    const data = await res.json();
    if (data?.success) {
      toast.success("Password updated successfully");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      toast.error(data?.error?.loginName[0]?.description);
    }
  };

  const getOtp = async () => {
    /* Get Otp based on settings*/

    const generatedToken = handleRandomToken();
    const otpData = {
      mobile: mobileNo,
      token: generatedToken,
      site: Settings?.siteUrl,
    };
    const encryptedData = handleEncryptData(otpData);
    const res = await axios.post(API.otp, encryptedData);
    const data = res.data;
    console.log(data);
    if (data?.success) {
      setCountDown(45);
      toast.success(data?.result?.message);
    } else {
      toast.error(data?.error?.errorMessage);
    }
  };

  return (
    <>
      {!showOtp ? (
        <GetForgotOTP
          setOrderId={setOrderId}
          setShowOtp={setShowOtp}
          mobileNo={mobileNo}
          setMobileNo={setMobileNo}
        />
      ) : (
        <div className="e-p-body-bc">
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
                            src={images.straightLine1}
                            alt=""
                          />
                        </div>
                        <input
                          type="tel"
                          className="mobile-input ng-dirty ng-touched"
                          placeholder="Enter your Phone Number"
                          value={mobileNo}
                          readOnly
                          data-gtm-form-interact-field-id="8"
                          disabled=""
                        />
                        <img
                          src={images.rightClickCheck}
                          alt=""
                          style={{
                            position: "absolute",
                            right: "-1rem",
                            marginRight: "1.5rem",
                          }}
                        />
                      </div>
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
                              type="number"
                              value={otpValues[index]}
                              className="ng-untouched ng-pristine ng-invalid"
                            />
                          ))}
                        </div>
                        {countDown <= 0 ? (
                          <span onClick={getOtp} className="resend-otp">
                            Resend
                          </span>
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
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
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
                    <button className="submit-btn">
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

export default ForgotPassword;
