import { useState } from "react";
// import logo from "../../../src/assets/img//logo_small_w.webp";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import handleRandomToken from "../../utils/handleRandomToken";
import handleEncryptData from "../../utils/handleEncryptData";
import { API, Settings } from "../../api";
import handleDepositMethod from "../../utils/handleDepositMethod";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useContextState from "../../hooks/useContextState";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [disable, setDisable] = useState(false);
  const { handleSubmit, register } = useForm({
    // defaultValues: {
    //   username: "8888884000",
    //   password: "avinya123",
    // },
  });
  const navigate = useNavigate();
  const { setGetToken } = useContextState();

  /* handle login */
  const onSubmit = async ({ username, password }) => {
    setDisable(true);
    const generatedToken = handleRandomToken();
    const loginData = {
      username: username,
      password: password,
      token: generatedToken,
      site: Settings.siteUrl,
      b2c: true,
    };
    const encryptedData = handleEncryptData(loginData);
    const res = await fetch(API.login, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(encryptedData),
    });
    const data = await res.json();
    if (data.success) {
      setDisable(false);
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
      if (Settings.referral) {
        const referralCode = data.result.referralCode;
        localStorage.setItem(
          "referralCode",
          referralCode == null ? "show" : referralCode
        );
      }
      /* if in locale storage token and login name available and  data?.result?.changePassword === false */
      setGetToken((prev) => !prev);
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("loginName") &&
        data?.result?.changePassword === false
      ) {
        toast.success("Login Successful");
        navigate("/");
      }
      if (data?.result?.changePassword) {
        navigate("/change-password");
      }
    } else {
      /* Show error message during login failed */
      setDisable(false);
      toast.error(data?.error);
    }
  };

  /* handle login demo user */
  const loginWithDemo = () => {
    setDisable(true);
    /* Random token generator */
    const generatedToken = handleRandomToken();
    /* Encrypted the post data */
    const loginData = handleEncryptData({
      username: "demo",
      password: "",
      token: generatedToken,
      site: Settings.siteUrl,
      b2c: true,
    });
    fetch(API.login, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        setDisable(false);
        /* Set token to localeStorage */
        localStorage.setItem("token", data.result.token);
        /* Set login name to locale storage */
        /* Set bonus token in locale storage */
        localStorage.setItem("bonusToken", data?.result?.bonusToken);
        localStorage.setItem("loginName", data.result.loginName);
        /* set button value to locale storage */
        const buttonValue = JSON.stringify(data.result.buttonValue.game);
        localStorage.setItem("buttonValue", buttonValue);
        /* if in locale storage token and login name available and  data?.result?.changePassword === false */
        if (
          localStorage.getItem("token") &&
          localStorage.getItem("loginName") &&
          data?.result?.changePassword === false
        ) {
          /* get current token from locale storage */
          setGetToken((prev) => !prev);
          navigate("/");
          toast.success("Login Successful");
        } else {
          /* Show error message during login failed */
          setDisable(false);
          toast.error(data?.error);
        }
      });
  };
  return (
    <div className="e-p-body-bc">
      <div className="login-page-abc">
        <div>
          <div className="login-page">
            <div className="login-box">
              <div className="login-card">
                {/* <div className="login-card-header">
                <span>Log in</span>
                <div className="login-text">
                  <p>Welcome</p>
                  <img
                    loading="lazy"
                    src={logo}
                    alt="waving-hand"
                    style={{ height: "24px", width: "24px" }}
                  />
                </div>
              </div> */}

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ width: "100%" }}
                  className="animateSignInFormUserId ng-dirty ng-touched ng-invalid"
                  data-gtm-form-interact-id="2"
                >
                  <div className="whatsup-login-box">
                    <div className="mobile-input">
                      <span>User ID / Mobile Number*</span>
                      <div className="input-box">
                        <div className=""></div>
                        <input
                          {...register("username", {
                            required: true,
                          })}
                          type="text"
                          placeholder="Enter User ID / Mobile Number"
                          className="ng-dirty ng-touched ng-invalid"
                          data-gtm-form-interact-field-id="4"
                        />
                      </div>

                      <div className="password-input password-input-1">
                        <span>Password*</span>
                        <input
                          {...register("password", {
                            required: true,
                          })}
                          placeholder="Enter your password"
                          type={`${showPassword ? "text" : "password"}`}
                          className="ng-dirty ng-touched ng-invalid"
                          data-gtm-form-interact-field-id="5"
                        />
                        <span className="showPass">
                          <div className=""></div>
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
                      {Settings.register && (
                        <div
                          onClick={() => {
                            navigate("/forgot-password");
                          }}
                          style={{
                            display: "flex",
                            alignItems: "flex-end",
                            width: "100%",
                            justifyContent: "flex-end",
                            cursor: "pointer",
                          }}
                          className="forgot"
                        >
                          <span>Forgot Password?</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    disabled={disable}
                    type="submit"
                    className="login-btn"
                  >
                    <span>Log in</span>
                  </button>
                  <div className="login-with">
                    <div className="line"></div>
                    <span>OR </span>
                    <div className="line"></div>
                  </div>
                  <div className="login-box1">
                    <div
                      style={{ border: "none" }}
                      onClick={loginWithDemo}
                      id="buttonDiv"
                      className="google-login"
                    >
                      <span>Demo Login</span>
                    </div>
                    <div
                      onClick={() => {
                        navigate("/register");
                      }}
                      className="google-login"
                      style={{ cursor: "pointer", border: "none" }}
                    >
                      <span>Register</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
