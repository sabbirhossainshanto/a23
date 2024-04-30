import { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { detectPriceChanges } from "../../../utils/detectPriceChanges";
import { handleToggle } from "../../../utils/handleToggle";
import { handlePlaceBet } from "../../../utils/handlePlaceBet";
import useContextState from "../../../hooks/useContextState";
import { useNavigate } from "react-router-dom";
import { isRunnerSuspended } from "../../../utils/isRunnerSuspended";

const MatchOdds = ({
  match_odds,
  setOpenBetSlip,
  setPlaceBetValues,
  exposer,
}) => {
  const { token } = useContextState();
  const navigate = useNavigate();
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }
  const [previousData, setPreviousData] = useState(match_odds);
  const [changedPrices, setChangedPrices] = useState({});
  const [toggleAccordion, setToggleAccordion] = useState(false);

  useEffect(() => {
    detectPriceChanges(
      match_odds,
      previousData,
      setPreviousData,
      setChangedPrices
    );
  }, [match_odds, previousData]);



  return (
    <>
      {match_odds?.map((games, i) => {
        return (
          <div key={i} className="bt12687">
            <div className="bt12695">
              <div className="bt12689" data-editor-id="marketTitle">
                {games?.name}
                <div
                  onClick={() =>
                    handleToggle(i, toggleAccordion, setToggleAccordion)
                  }
                  className="bt6471 bt12696 bt12690"
                  style={{ width: "20px", height: "20px" }}
                >
                  {toggleAccordion[i] ? (
                    <IoMdArrowDropdown size={20} />
                  ) : (
                    <IoMdArrowDropup size={20} />
                  )}
                </div>
              </div>
            </div>
            {games?.runners?.map((runner) => {
              const pnl =
                pnlBySelection?.filter((pnl) => pnl?.RunnerId === runner?.id) ||
                [];

              return (
                <div
                  key={runner?.id}
                  className=""
                  style={{
                    height: "auto",
                    overflow: "visible",
                    transition: "height 0.25s ease 0s",
                    display: `${toggleAccordion[i] ? "none" : ""}`,
                  }}
                >
                  <div style={{ overflow: "visible" }}>
                    <div className="bt12683">
                      <div
                        data-editor-id="tableOutcomePlate"
                        className="bt6588  "
                        style={{ flex: "1" }}
                      >
                        <div
                          className="bt6592 bt12699"
                          style={{ minHeight: "40px" }}
                        >
                          {pnl?.length > 0 ? (
                            pnl.map(({ pnl }, i) => {
                              return (
                                <div
                                  key={i}
                                  className={`bt6596 bt12703 exposure`}
                                  data-editor-id="tableOutcomePlateName"
                                >
                                  <span
                                    className="bt6598"
                                    style={{ margin: "4px 0" }}
                                  >
                                    {runner?.name}
                                  </span>

                                  <span
                                    // onClick={() => handleLader(MarketId)}

                                    className={`bt6598 ${
                                      pnl > 0
                                        ? "exposure_green"
                                        : "exposure_red"
                                    }`}
                                    style={{
                                      cursor: "pointer",
                                    }}
                                  >
                                    {pnl || ""}
                                  </span>
                                </div>
                              );
                            })
                          ) : (
                            <div
                              className={`bt6596 bt12703`}
                              data-editor-id="tableOutcomePlateName"
                            >
                              <span
                                className="bt6598"
                                style={{ margin: "4px 0" }}
                              >
                                {runner?.name}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div
                        onClick={() =>
                          handlePlaceBet(
                            games,
                            runner,
                            "back",
                            setOpenBetSlip,
                            setPlaceBetValues,
                            pnlBySelection,
                            token,
                            navigate
                          )
                        }
                        data-editor-id="tableOutcomePlate"
                        className="bt6588  "
                        style={{ flexBasis: "20%" }}
                      >
                        <div
                          className={`bt6592 bt12699 odds_back ${
                            changedPrices[`back-${runner?.id}-${i}`]
                              ? "blink"
                              : ""
                          } ${isRunnerSuspended(games, runner)} `}
                        >
                          <span
                            className={`mdc-button__label  `}
                            style={{ verticalAlign: "middle", width: "100%" }}
                          >
                            <h4>
                              {" "}
                              {!isRunnerSuspended(games, runner) &&
                                runner?.back[0]?.price}
                            </h4>
                            <p className="odds_volume">
                              {!isRunnerSuspended(games, runner) &&
                                runner?.back[0]?.size}
                            </p>
                          </span>
                        </div>
                      </div>

                      <div
                        onClick={() =>
                          handlePlaceBet(
                            games,
                            runner,
                            "lay",
                            setOpenBetSlip,
                            setPlaceBetValues,
                            pnlBySelection,
                            token,
                            navigate
                          )
                        }
                        data-editor-id="tableOutcomePlate"
                        className={`bt6588 `}
                        style={{ flexBasis: "20%" }}
                      >
                        <div
                          className={`bt6592 bt12699 odds_lay ${
                            changedPrices[`lay-${runner.id}-${i}`]
                              ? "blink"
                              : ""
                          } ${isRunnerSuspended(games, runner)}`}
                        >
                          <span className={`mdc-button__label `}>
                            <h4>
                              {" "}
                              {!isRunnerSuspended(games, runner) &&
                                runner?.lay[0]?.price}
                            </h4>
                            <p className="odds_volume">
                              {" "}
                              {!isRunnerSuspended(games, runner) &&
                                runner?.lay[0]?.size}
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default MatchOdds;
