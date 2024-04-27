import { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { detectPriceChanges } from "../../../utils/detectPriceChanges";
import { handleToggle } from "../../../utils/handleToggle";
import { handlePlaceBet } from "../../../utils/handlePlaceBet";

const Bookmaker = ({
  bookmarker,
  setOpenBetSlip,
  setPlaceBetValues,
  exposer,
}) => {
  const [previousData, setPreviousData] = useState(bookmarker);
  const [changedPrices, setChangedPrices] = useState({});
  const [toggleAccordion, setToggleAccordion] = useState(false);

  useEffect(() => {
    detectPriceChanges(
      bookmarker,
      previousData,
      setPreviousData,
      setChangedPrices
    );
  }, [bookmarker, previousData]);

  let pnlBySelection;
  /* Exposure */
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  return (
    <>
      {bookmarker?.map((games, i) => {
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
                  style={{ width: "16px", height: "16px" }}
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
                          style={{ margin: "4px 0" }}
                        >
                          <div
                            className="bt6596 bt12703"
                            data-editor-id="tableOutcomePlateName"
                          >
                            <span className="bt6598"> {runner?.name}</span>
                          </div>
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
                            pnlBySelection
                          )
                        }
                        data-editor-id="tableOutcomePlate"
                        className="bt6588  "
                        style={{ flexBasis: "12%" }}
                      >
                        <div
                          className="bt6592 bt12699"
                          style={{
                            backgroundColor: "#a0d8fb",
                            minHeight: "40px",
                            margin: "auto ",
                          }}
                        >
                          <span
                            className={`bookmaker_label  ${
                              changedPrices[`back-${runner?.id}-${i}`]
                                ? "blink"
                                : ""
                            }`}
                            style={{ verticalAlign: "middle", width: "100%" }}
                          >
                            <h4> {runner?.back[0]?.price}</h4>
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
                            pnlBySelection
                          )
                        }
                        data-editor-id="tableOutcomePlate"
                        className="bt6588  "
                        style={{ flexBasis: "12%" }}
                      >
                        <div
                          className="bt6592 bt12699"
                          style={{
                            backgroundColor: "#fdc9d4",
                            minHeight: "40px",
                            margin: "auto ",
                          }}
                        >
                          <span
                            className={`bookmaker_label  ${
                              changedPrices[`lay-${runner?.id}-${i}`]
                                ? "blink"
                                : ""
                            }`}
                          >
                            <h4> {runner?.lay[0]?.price}</h4>
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

export default Bookmaker;
