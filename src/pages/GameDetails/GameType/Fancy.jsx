import { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { detectPriceChanges } from "../../../utils/detectPriceChanges";

const Fancy = ({ normal }) => {
  const [previousData, setPreviousData] = useState(normal);
  const [changedPrices, setChangedPrices] = useState({});
  const [toggleAccordion, setToggleAccordion] = useState(false);

  useEffect(() => {
    detectPriceChanges(normal, previousData, setPreviousData, setChangedPrices);
  }, [normal, previousData]);

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
                    <div
                      className="bt6596 bt12703"
                      data-editor-id="tableOutcomePlateName"
                    >
                      <span className="bt6598">{games?.name}</span>
                    </div>
                  </div>
                </div>

                <div
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
                      paddingTop: "5px",
                    }}
                  >
                    <span
                      className={`mdc-button__label ${
                        changedPrices[`back-${games?.runners?.[0]?.id}-${i}`]
                          ? "blink"
                          : ""
                      }`}
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
                      paddingTop: "5px",
                    }}
                  >
                    <span
                      className={`mdc-button__label ${
                        changedPrices[`lay-${games?.runners?.[0].id}-${i}`]
                          ? "blink"
                          : ""
                      }`}
                    >
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
