import { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { detectPriceChanges } from "../../../utils/detectPriceChanges";
import useContextState from "../../../hooks/useContextState";
import { useNavigate } from "react-router-dom";

const Fancy = ({ normal, setOpenBetSlip, setPlaceBetValues, exposer }) => {
  const [previousData, setPreviousData] = useState(normal);
  const [changedPrices, setChangedPrices] = useState({});
  const [toggleAccordion, setToggleAccordion] = useState(false);
  const { token } = useContextState();
  const navigate = useNavigate();

  useEffect(() => {
    detectPriceChanges(normal, previousData, setPreviousData, setChangedPrices);
  }, [normal, previousData]);

  const handlePlaceBet = (item, runner, betType) => {
    if (token) {
      setOpenBetSlip(true);
      setPlaceBetValues({});
      setPlaceBetValues({
        price: betType === "back" ? runner?.back[0].line : runner?.lay[0].line,
        side: betType === "back" ? 0 : 1,
        selectionId: runner?.id,
        btype: item?.btype,
        eventTypeId: item?.eventTypeId,
        betDelay: item?.betDelay,
        marketId: item?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: item.runners.map((runner) => runner.name),
        runnerId: item.runners.map((runner) => runner.id),
        isWeak: item?.isWeak,
        maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
        isBettable: item?.isBettable,
        maxLiabilityPerBet: item?.maxLiabilityPerBet,
        eventId: item?.eventId,
      });
    } else {
      navigate("/login");
    }
  };
  /* exposure */
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  return (
    <div className="bt12687">
      <div className="bt12695">
        <div className="bt12689" data-editor-id="marketTitle">
          {normal[0]?.btype == "FANCY" ? "FANCY" : normal[0]?.name}
          <div
            onClick={() => setToggleAccordion((prev) => !prev)}
            className="bt6471 bt12696 bt12690"
            style={{ width: "16px", height: "16px" }}
          >
            {toggleAccordion ? (
              <IoMdArrowDropdown size={20} />
            ) : (
              <IoMdArrowDropup size={20} />
            )}
          </div>
        </div>
      </div>

      {normal?.map((games, i) => {
        const pnl =
          pnlBySelection?.filter((pnl) => pnl?.MarketId === games?.id) || [];
        return (
          <div
            key={i}
            className=""
            style={{
              height: "auto",
              overflow: "visible",
              transition: "height 0.25s ease 0s",
              display: `${toggleAccordion ? "none" : ""}`,
            }}
          >
            <div style={{ overflow: "visible" }}>
              <div className="bt12683">
                <div
                  data-editor-id="tableOutcomePlate"
                  className="bt6588  "
                  style={{ flex: "1" }}
                >
                  <div className="bt6592 bt12699" style={{ margin: "4px 0" }}>
                    {/* <div
                      className="bt6596 bt12703"
                      data-editor-id="tableOutcomePlateName"
                    >
                      <span className="bt6598">{games?.name}</span>
                    </div> */}
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
                              {games?.name}
                            </span>

                            <span
                              // onClick={() => handleLader(MarketId)}

                              className={`bt6598 ${
                                pnl > 0 ? "exposure_green" : "exposure_red"
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
                        <span className="bt6598" style={{ margin: "4px 0" }}>
                          {games?.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  onClick={() =>
                    handlePlaceBet(games, games?.runners[0], "lay")
                  }
                  data-editor-id="tableOutcomePlate"
                  className="bt6588  "
                  style={{ flexBasis: "20%" }}
                >
                  <div
                    className={`bt6592 bt12699 ${
                      changedPrices[`back-${games?.runners?.[0]?.id}-${i}`]
                        ? "blink"
                        : ""
                    }`}
                    style={{
                      backgroundColor: "#fdc9d4",
                      minHeight: "40px",
                      margin: "auto ",
                      paddingTop: "5px",
                    }}
                  >
                    <span
                      className={`mdc-button__label `}
                      style={{ verticalAlign: "middle", width: "100%" }}
                    >
                      <h4>{games?.runners?.[0]?.lay?.[0]?.line}</h4>
                      <p className="odds_volume">
                        {games?.runners?.[0]?.lay?.[0]?.price}
                      </p>
                    </span>
                  </div>
                </div>

                <div
                  onClick={() =>
                    handlePlaceBet(games, games?.runners[0], "back")
                  }
                  data-editor-id="tableOutcomePlate"
                  className="bt6588  "
                  style={{ flexBasis: "20%" }}
                >
                  <div
                    className={`bt6592 bt12699 ${
                      changedPrices[`lay-${games?.runners?.[0].id}-${i}`]
                        ? "blink"
                        : ""
                    }`}
                    style={{
                      backgroundColor: "#a0d8fb",
                      minHeight: "40px",
                      margin: "auto ",
                      paddingTop: "5px",
                    }}
                  >
                    <span className={`mdc-button__label `}>
                      <h4> {games?.runners?.[0]?.back?.[0]?.line}</h4>
                      <p className="odds_volume">
                        {" "}
                        {games?.runners?.[0]?.back[0]?.price}
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
};

export default Fancy;