import { useNavigate } from "react-router-dom";
import usePassbook from "../../hooks/usePassbook";
import useContextState from "../../hooks/useContextState";

const BettingProfitLoss = () => {
  const { passbook } = usePassbook();
  const navigate = useNavigate();
  const { token } = useContextState();
  const handleNavigateSinglePassbook = (item) => {
    if (item?.plDetails) {
      navigate(`/betting-profit-loss/${item?.marketId}`);
    }
  };

  return (
    <div className="mat-accordion bet-history-accordion ">
      {token ? (
        passbook?.map((item, i) => {
          return (
            <div
              onClick={() => handleNavigateSinglePassbook(item)}
              key={i}
              style={{ marginBottom: "3px" }}
              className="mat-expansion-panel   mat-expanded mat-expansion-panel-spacing"
            >
              <div className="mat-expansion-panel-header mat-focus-indicator   mat-expansion-toggle-indicator-after  mat-expanded">
                <span className="mat-content  mat-content-hide-toggle">
                  <div className="mat-expansion-panel-header-title ">
                    <h3>{item?.narration}</h3>
                    <p> {item?.settledTime}</p>
                  </div>
                  <div className="mat-expansion-panel-header-description ">
                    <span className={`${item?.memberWin > 0 ? "Won" : "Lost"}`}>
                      {" "}
                      {item?.memberWin}
                    </span>
                  </div>
                </span>
              </div>
              <div
                role="region"
                className="mat-expansion-panel-content  ng-trigger ng-trigger-bodyExpansion"
                id="cdk-accordion-child-8"
                aria-labelledby="mat-expansion-panel-header-8"
              ></div>
            </div>
          );
        })
      ) : (
        <div className="no-data ng-star-inserted">
          <p>Please login to view your passbook entries</p>
        </div>
      )}
    </div>
  );
};

export default BettingProfitLoss;