import { useParams } from "react-router-dom";
import useSinglePassbook from "../../hooks/useSinglePassbook";
import moment from "moment";

const SingleProfitLoss = () => {
  const { marketId } = useParams();
  const { singlePassbook } = useSinglePassbook(marketId);

  if (!singlePassbook) {
    return;
  }
  let total = 0;
  for (const item of singlePassbook) {
    total = total + item.win;
  }

  return (
    <>
      {/* <div className="back-nav-bc" style={{ margin: "10px" }}>
        <img
          loading="lazy"
          src="/src/assets/img/back-arrow.svg"
          alt=""
          className=""
        />
        <span className="back-nav-title-bc">Back to Betting PNL</span>
      </div> */}

      <div className="mat-accordion bet-history-accordion">
        <div className="mat-expansion-panel mat-expanded mat-expansion-panel-spacing">
          <div className="mat-expansion-panel-header mat-focus-indicator mat-expansion-toggle-indicator-after mat-expanded">
            <span className="mat-content mat-content-hide-toggle">
              <div className="mat-expansion-panel-header-title">
                <h3> {singlePassbook?.[0]?.eventName}</h3>
                <p> {singlePassbook?.[0]?.placeDate}</p>
              </div>
              <div className="mat-expansion-panel-header-description">
                <span className={` ${total > 0 ? "Win" : "Lost"}`}>
                  {total}
                </span>
              </div>
            </span>
          </div>

          <div
            className="mat-expansion-panel-header mat-focus-indicator mat-expansion-toggle-indicator-after mat-expanded"
            id="mat-expansion-panel-header-10"
            style={{ marginTop: "10px" }}
          >
            <span className="mat-content mat-content-hide-toggle">
              <div className="mat-expansion-panel-header-title">
                <p className="win-team">
                  <label>Result:</label>
                  <span> {singlePassbook[0]?.winner}</span>
                </p>
              </div>
              <div className="mat-expansion-panel-header-description"></div>
            </span>
          </div>

          <div className="mat-expansion-panel-content ng-trigger ng-trigger-bodyExpansion">
            <div className="mat-expansion-panel-body">
              <div className="allbet-datawrap">
                <div className="allbet-header">
                  <div className="allbet-title">
                    <h3>Selection</h3>
                  </div>
                  <div className="allbet-headcol">
                    <h3>Odds</h3>
                    <h3>Stake</h3>
                    <h3>Amt</h3>
                    <h3>P/L</h3>
                  </div>
                </div>
                {singlePassbook?.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={`allbet-datalist ${
                        item?.betType === "Back" ? "forback" : "forlay"
                      } `}
                    >
                      <div className="allbet-gameinfo">
                        <div className="allbet-content">
                          <h3> {item?.nation}</h3>
                          <p>
                            {item?.betType} |{" "}
                            {moment(item?.placeDate).format("LT")} |{" "}
                            <span
                              className={` ${item?.win > 0 ? "WON" : "LOSS"}`}
                            >
                              {" "}
                              {item?.win > 0 ? "  WON" : "  LOSS"}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="allbet-odds-stake-wrap">
                        <h3> {item?.userRate}</h3>
                        <h3>{item?.amount}</h3>
                        <h3> {item?.amount}</h3>
                        <h3 className={` ${item?.win > 0 ? "Won " : "Lost"}`}>
                          {item?.win}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProfitLoss;
