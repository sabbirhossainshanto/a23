import { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { detectPriceChanges } from "../../../utils/detectPriceChanges";
import { handleToggle } from "../../../utils/handleToggle";

const MatchOdds = ({ match_odds }) => {
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
                          <div
                            //   exposure (class)
                            className="bt6596 bt12703 "
                            data-editor-id="tableOutcomePlateName"
                          >
                            <span
                              className="bt6598"
                              style={{ margin: "4px 0" }}
                            >
                              {runner?.name}
                            </span>
                            {/* <span className="bt6598 exposure_green">-100</span> */}
                            {/* <!-- exposure_red --> */}
                          </div>
                        </div>
                      </div>

                      <div
                        data-editor-id="tableOutcomePlate"
                        className="bt6588  "
                        style={{ flexBasis: "12%" }}
                      >
                        <div className="bt6592 bt12699 odds_back">
                          <span
                            className={`mdc-button__label  ${
                              changedPrices[`back-${runner?.id}-${i}`]
                                ? "blink"
                                : ""
                            }`}
                            style={{ verticalAlign: "middle", width: "100%" }}
                          >
                            <h4> {runner?.back[0]?.price}</h4>
                            <p className="odds_volume">
                              {runner?.back[0]?.size}
                            </p>
                          </span>
                        </div>
                      </div>

                      <div
                        data-editor-id="tableOutcomePlate"
                        className="bt6588  "
                        style={{ flexBasis: "12%" }}
                      >
                        <div className="bt6592 bt12699 odds_lay">
                          <span
                            className={`mdc-button__label ${
                              changedPrices[`lay-${runner.id}-${i}`]
                                ? "blink"
                                : ""
                            }`}
                          >
                            <h4> {runner?.lay[0]?.price}</h4>
                            <p className="odds_volume">
                              {" "}
                              {runner?.lay[0]?.size}
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* 
            <div
              className=""
              style={{
                height: "auto",
                overflow: "visible",
                transition: "height 0.25s ease 0s",
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
                      <div
                        className="bt6596 bt12703"
                        data-editor-id="tableOutcomePlateName"
                      >
                        <span className="bt6598">Team 2</span>
                      </div>
                    </div>
                  </div>

                  <div
                    data-editor-id="tableOutcomePlate"
                    className="bt6588  "
                    style={{ flexBasis: "12%" }}
                  >
                    <div className="bt6592 bt12699 odds_back">
                      <span
                        className="mdc-button__label"
                        style={{ verticalAlign: "middle" }}
                      >
                        <h4>6.2</h4>
                        <p className="odds_volume">11.69</p>
                      </span>
                    </div>
                  </div>

                  <div
                    data-editor-id="tableOutcomePlate"
                    className="bt6588  "
                    style={{ flexBasis: "12%" }}
                  >
                    <div className="bt6592 bt12699 odds_lay">
                      <span className="mdc-button__label">
                        <h4>6.2</h4>
                        <p className="odds_volume">11.69</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className=""
              style={{
                height: "auto",
                overflow: "visible",
                transition: "height 0.25s ease 0s",
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
                      <div
                        className="bt6596 bt12703"
                        data-editor-id="tableOutcomePlateName"
                      >
                        <span className="bt6598">Team 3</span>
                      </div>
                    </div>
                  </div>

                  <div
                    data-editor-id="tableOutcomePlate"
                    className="bt6588  "
                    style={{ flexBasis: "12%" }}
                  >
                    <div className="bt6592 bt12699 odds_back">
                      <span
                        className="mdc-button__label"
                        style={{ verticalAlign: "middle" }}
                      >
                        <h4>6.2</h4>
                        <p className="odds_volume">11.69</p>
                      </span>
                    </div>
                  </div>

                  <div
                    data-editor-id="tableOutcomePlate"
                    className="bt6588  "
                    style={{ flexBasis: "12%" }}
                  >
                    <div className="bt6592 bt12699 odds_lay odds_suspended">
                      <span className="mdc-button__label">
                        <h4>6.2</h4>
                        <p className="odds_volume">11.69</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        );
      })}
    </>
  );
};

export default MatchOdds;
