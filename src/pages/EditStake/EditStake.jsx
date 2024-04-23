const EditStake = () => {
  return (
    <div className="login-page-abc">
      <div>
        <div className="login-page">
          <div className="login-box">
            <div className="login-card">
              <div className="login-card-header">
                <span>Edit Stake</span>
              </div>

              <form
                style={{ width: "100%" }}
                className="animateSignInFormUserId ng-dirty ng-touched ng-invalid"
                data-gtm-form-interact-id="2"
              >
                <div className="edit-stakes-input-section">
                  <input
                    type="text"
                    className="edit-stakes-input ng-untouched ng-pristine ng-valid ng-star-inserted"
                    pattern="\d*"
                  />

                  <input
                    type="text"
                    className="edit-stakes-input ng-untouched ng-pristine ng-valid ng-star-inserted"
                    pattern="\d*"
                  />

                  <input
                    type="text"
                    className="edit-stakes-input ng-untouched ng-pristine ng-valid ng-star-inserted"
                    pattern="\d*"
                  />

                  <input
                    type="text"
                    className="edit-stakes-input ng-untouched ng-pristine ng-valid ng-star-inserted"
                    pattern="\d*"
                  />
                </div>

                <div className="edit-stakes-input-section">
                  <input
                    type="text"
                    className="edit-stakes-input ng-untouched ng-pristine ng-valid ng-star-inserted"
                    pattern="\d*"
                  />

                  <input
                    type="text"
                    className="edit-stakes-input ng-untouched ng-pristine ng-valid ng-star-inserted"
                    pattern="\d*"
                  />

                  <input
                    type="text"
                    className="edit-stakes-input ng-untouched ng-pristine ng-valid ng-star-inserted"
                    pattern="\d*"
                  />

                  <input
                    type="text"
                    className="edit-stakes-input ng-untouched ng-pristine ng-valid ng-star-inserted"
                    pattern="\d*"
                  />
                </div>

                <button type="submit" className="login-btn">
                  <span>Update</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStake;
