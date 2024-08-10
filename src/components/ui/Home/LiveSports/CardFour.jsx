import { useNavigate } from "react-router-dom";
import { handleNavigateEventPage } from "../../../../utils/handleNavigateEventPage";

const CardFour = ({ liveSports, keys }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        handleNavigateEventPage(liveSports, keys, navigate);
      }}
      style={{ padding: "0px 0px 10px 0px", cursor: "pointer" }}
      className="bt228"
    >
      <div className="bt231" style={{ height: "115px" }}>
        <div className="bt233" data-editor-id="eventCard">
          <a
            className="bt248"
            data-editor-id="eventCardContent"
            style={{ padding: "8px 0px 0px 0px" }}
          >
            <div className="bt235">
              <div className="bt236">
                <div
                  style={{ fontSize: "12px" }}
                  className="bt273 bt276"
                  data-editor-id="eventCardStatusLabel"
                >
                  {liveSports?.[keys]?.timeStatus}
                </div>
              </div>
              <div className="bt237"></div>
              <div className="bt238 bt239">
                {liveSports?.[keys]?.inPlay ? (
                  <svg
                    data-cy="ic-live-simple"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#FF4E4E"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: "block",
                      fill: "rgb(255, 78, 78)",
                      color: " rgb(255, 78, 78)",
                      width: "auto",
                      height: "16px",
                    }}
                  >
                    <path d="M12.9628 3.20912C12.6766 2.93029 12.2125 2.93029 11.9263 3.20912C11.6401 3.48794 11.6401 3.94001 11.9263 4.21883C12.436 4.71538 12.8404 5.30487 13.1163 5.95365C13.3921 6.60242 13.5341 7.29777 13.5341 8C13.5341 8.70223 13.3921 9.39758 13.1163 10.0464C12.8404 10.6951 12.436 11.2846 11.9263 11.7812C11.6401 12.06 11.6401 12.5121 11.9263 12.7909C12.2125 13.0697 12.6766 13.0697 12.9628 12.7909C13.6087 12.1617 14.121 11.4148 14.4706 10.5928C14.8201 9.77079 15 8.88975 15 8C15 7.11025 14.8201 6.22921 14.4706 5.40719C14.121 4.58517 13.6087 3.83827 12.9628 3.20912Z"></path>
                    <path d="M10.0422 5.11529C10.3284 4.83647 10.7925 4.83647 11.0787 5.11529C11.4708 5.49724 11.7818 5.95068 11.994 6.44972C12.2062 6.94876 12.3155 7.48363 12.3155 8.02379C12.3155 8.56395 12.2062 9.09881 11.994 9.59786C11.7818 10.0969 11.4708 10.5503 11.0787 10.9323C10.7925 11.2111 10.3284 11.2111 10.0422 10.9323C9.75595 10.6535 9.75595 10.2014 10.0422 9.92257C10.2982 9.67322 10.5012 9.37719 10.6397 9.0514C10.7783 8.72561 10.8496 8.37642 10.8496 8.02379C10.8496 7.67115 10.7783 7.32197 10.6397 6.99617C10.5012 6.67038 10.2982 6.37436 10.0422 6.12501C9.75595 5.84618 9.75595 5.39412 10.0422 5.11529Z"></path>
                    <path d="M8.05198 9.51147C8.90891 9.51147 9.60359 8.83477 9.60359 8.00002C9.60359 7.16526 8.90891 6.48856 8.05198 6.48856C7.19504 6.48856 6.50036 7.16526 6.50036 8.00002C6.50036 8.83477 7.19504 9.51147 8.05198 9.51147Z"></path>
                    <path d="M6.05604 5.11529C5.76981 4.83647 5.30574 4.83647 5.0195 5.11529C4.62741 5.49724 4.31638 5.95068 4.10418 6.44972C3.89198 6.94876 3.78276 7.48363 3.78276 8.02379C3.78276 8.56395 3.89198 9.09881 4.10418 9.59786C4.31638 10.0969 4.62741 10.5503 5.0195 10.9323C5.30574 11.2111 5.76981 11.2111 6.05604 10.9323C6.34228 10.6535 6.34228 10.2014 6.05604 9.92257C5.80007 9.67322 5.59702 9.37719 5.45848 9.0514C5.31995 8.72561 5.24865 8.37642 5.24865 8.02379C5.24865 7.67115 5.31995 7.32197 5.45848 6.99617C5.59702 6.67038 5.80007 6.37436 6.05604 6.12501C6.34228 5.84618 6.34228 5.39412 6.05604 5.11529Z"></path>
                    <path d="M3.03717 3.20912C3.3234 2.93029 3.78748 2.93029 4.07371 3.20912C4.35994 3.48794 4.35994 3.94001 4.07371 4.21883C3.56397 4.71538 3.15962 5.30487 2.88375 5.95365C2.60788 6.60242 2.46589 7.29777 2.46589 8C2.46589 8.70223 2.60788 9.39758 2.88375 10.0464C3.15962 10.6951 3.56397 11.2846 4.07371 11.7812C4.35994 12.06 4.35994 12.5121 4.07371 12.7909C3.78748 13.0697 3.3234 13.0697 3.03717 12.7909C2.39131 12.1617 1.87898 11.4148 1.52944 10.5928C1.1799 9.77078 1 8.88975 1 8C1 7.11025 1.1799 6.22921 1.52944 5.40719C1.87898 4.58517 2.39131 3.83827 3.03717 3.20912Z"></path>
                  </svg>
                ) : null}
              </div>
            </div>
            <div className="bt280 bt234">
              <div className="bt281">
                <div className="bt282" style={{ marginBottom: "8px" }}>
                  <div className="bt286 bt283">
                    <div
                      className="bt289 bt288"
                      style={{ width: "24px", height: "24px" }}
                    >
                      <img
                        style={{
                          objectFit: "contain",
                          height: "24px",
                          lineHeight: "24px",
                        }}
                        src={liveSports?.[keys]?.image1}
                        alt=""
                        className="bt290"
                      />
                    </div>
                    <div
                      className="bt287"
                      style={{
                        height: "24px",
                        lineHeight: "24px",
                        textAlign: "start",
                        fontSize: "12px",
                      }}
                    >
                      {liveSports[keys]?.eventName}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* blue and pink box part */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* team 1 */}
              <div
                style={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <div
                  data-editor-id="tableOutcomePlate"
                  className="bt6588  "
                  style={{ width: "100%", padding: "0px 2px" }}
                >
                  <div className={`bt6592 bt12699 odds_back  `}>
                    <span
                      className={`mdc-button__label  `}
                      style={{ verticalAlign: "middle", width: "100%" }}
                    >
                      <h4 style={{ fontSize: "10px" }}>
                        {" "}
                        {
                          liveSports?.[keys]?.[0]?.ex?.availableToBack?.[0]
                            ?.price
                        }
                      </h4>
                      <p style={{ fontSize: "10px" }} className="odds_volume">
                        {liveSports?.[keys]?.[0]?.ex?.availableToBack?.[0]?.size
                          ?.split(".")?.[0]
                          ?.slice(0, 4)}
                      </p>
                    </span>
                  </div>
                </div>
                <div
                  data-editor-id="tableOutcomePlate"
                  className="bt6588  "
                  style={{ width: "100%", padding: "0px 2px" }}
                >
                  <div className={`bt6592 bt12699 odds_lay  `}>
                    <span
                      className={`mdc-button__label  `}
                      style={{ verticalAlign: "middle", width: "100%" }}
                    >
                      <h4 style={{ fontSize: "10px" }}>
                        {" "}
                        {
                          liveSports?.[keys]?.[0]?.ex?.availableToLay?.[0]
                            ?.price
                        }
                      </h4>
                      <p style={{ fontSize: "10px" }} className="odds_volume">
                        {liveSports?.[keys]?.[0]?.ex?.availableToLay?.[0]?.size
                          ?.split(".")?.[0]
                          ?.slice(0, 4)}
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              {/* draw */}
              {
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    opacity: `${
                      liveSports?.[keys]?.[2]?.ex?.availableToBack?.[0]?.price
                        ? 1
                        : 0.5
                    }`,
                  }}
                >
                  <div
                    data-editor-id="tableOutcomePlate"
                    className="bt6588  "
                    style={{ width: "100%", padding: "0px 2px" }}
                  >
                    <div className={`bt6592 bt12699 odds_back  `}>
                      <span
                        className={`mdc-button__label  `}
                        style={{ verticalAlign: "middle", width: "100%" }}
                      >
                        <h4 style={{ fontSize: "10px" }}>
                          {" "}
                          {
                            liveSports?.[keys]?.[2]?.ex?.availableToBack?.[0]
                              ?.price
                          }
                        </h4>
                        <p style={{ fontSize: "10px" }} className="odds_volume">
                          {liveSports?.[
                            keys
                          ]?.[2]?.ex?.availableToBack?.[0]?.size
                            ?.split(".")?.[0]
                            ?.slice(0, 4)}
                        </p>
                      </span>
                    </div>
                  </div>
                  <div
                    data-editor-id="tableOutcomePlate"
                    className="bt6588  "
                    style={{ width: "100%", padding: "0px 2px" }}
                  >
                    <div className={`bt6592 bt12699 odds_lay  `}>
                      <span
                        className={`mdc-button__label  `}
                        style={{ verticalAlign: "middle", width: "100%" }}
                      >
                        <h4 style={{ fontSize: "10px" }}>
                          {" "}
                          {
                            liveSports?.[keys]?.[2]?.ex?.availableToLay?.[0]
                              ?.price
                          }
                        </h4>
                        <p style={{ fontSize: "10px" }} className="odds_volume">
                          {liveSports?.[
                            keys
                          ]?.[2]?.ex?.availableToLay?.[0]?.size
                            ?.split(".")?.[0]
                            ?.slice(0, 4)}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              }
              {/* team 2 */}
              <div
                style={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <div
                  data-editor-id="tableOutcomePlate"
                  className="bt6588  "
                  style={{ width: "100%", padding: "0px 2px" }}
                >
                  <div className={`bt6592 bt12699 odds_back  `}>
                    <span
                      className={`mdc-button__label  `}
                      style={{ verticalAlign: "middle", width: "100%" }}
                    >
                      <h4 style={{ fontSize: "10px" }}>
                        {" "}
                        {
                          liveSports?.[keys]?.[1]?.ex?.availableToBack?.[0]
                            ?.price
                        }
                      </h4>
                      <p style={{ fontSize: "10px" }} className="odds_volume">
                        {liveSports?.[keys]?.[1]?.ex?.availableToBack?.[0]?.size
                          ?.split(".")?.[0]
                          ?.slice(0, 4)}
                      </p>
                    </span>
                  </div>
                </div>
                <div
                  data-editor-id="tableOutcomePlate"
                  className="bt6588  "
                  style={{ width: "100%", padding: "0px 2px" }}
                >
                  <div className={`bt6592 bt12699 odds_lay  `}>
                    <span
                      className={`mdc-button__label  `}
                      style={{ verticalAlign: "middle", width: "100%" }}
                    >
                      <h4 style={{ fontSize: "10px" }}>
                        {" "}
                        {
                          liveSports?.[keys]?.[1]?.ex?.availableToLay?.[0]
                            ?.price
                        }
                      </h4>
                      <p style={{ fontSize: "10px" }} className="odds_volume">
                        {liveSports?.[keys]?.[1]?.ex?.availableToLay?.[0]?.size
                          ?.split(".")?.[0]
                          ?.slice(0, 4)}
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFour;
