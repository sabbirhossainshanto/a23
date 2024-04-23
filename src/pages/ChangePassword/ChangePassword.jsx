const ChangePassword = () => {
  return (
    <div className="login-page-abc">
      <div>
        <div className="login-page">
          <div className="login-box">
            <div className="login-card">
              <div className="login-card-header">
                <span>Change Password</span>
              </div>

              <form
                action=""
                style={{ width: "100%" }}
                className="animateSignInFormUserId ng-dirty ng-touched ng-invalid"
                data-gtm-form-interact-id="2"
              >
                <div className="whatsup-login-box">
                  <div className="mobile-input">
                    <span>Old Password*</span>
                    <div className="input-box">
                      <div className=""></div>
                      <input
                        type="password"
                        required=""
                        placeholder="Enter old password"
                        className="ng-dirty ng-touched ng-invalid"
                        data-gtm-form-interact-field-id="4"
                      />
                    </div>

                    <div className="password-input password-input-1">
                      <span>New Password*</span>
                      <input
                        required=""
                        placeholder="Enter new password"
                        type="password"
                        className="ng-dirty ng-touched ng-invalid"
                        data-gtm-form-interact-field-id="5"
                      />
                      <span className="showPass">
                        <div className=""></div>
                        <img
                          loading="lazy"
                          src="https://11exch.com/assets/images/view_password_eye.svg"
                        />
                      </span>
                    </div>

                    <div className="password-input password-input-1">
                      <span>Confirm Password*</span>
                      <input
                        required=""
                        placeholder="Re-Enter new password"
                        type="password"
                        className="ng-dirty ng-touched ng-invalid"
                        data-gtm-form-interact-field-id="5"
                      />
                      <span className="showPass">
                        <div className=""></div>
                        <img
                          loading="lazy"
                          src="https://11exch.com/assets/images/view_password_eye.svg"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <button type="submit" className="login-btn">
                  <span>Change Password</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
