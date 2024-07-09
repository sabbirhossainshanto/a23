import { useNavigate } from "react-router-dom";
import { handleNavigateEventPage } from "../../../../utils/handleNavigateEventPage";

const Card = ({ liveSports, keys, sportsType }) => {
  const navigate = useNavigate();
  console.log(liveSports);
  return (
    <>
      {liveSports?.[keys]?.visible &&
      // <div
      //   onClick={() => handleNavigateEventPage(liveSports, keys, navigate)}
      //   className="live-banner-item"
      //   style={{fontSize:"12px"}}
      // >
      //   <div className="b-top">
      //     <div className="b-top-icon">
      //       <div className="liveSports-icon-wrap">
      //         <img src={eventTypeImg[liveSports[keys]?.eventTypeId]} alt="" />
      //       </div>
      //       <p className="name">{liveSports[keys]?.seriesName}</p>
      //     </div>
      //     <div className="t-right">
      //       <p className="status">{liveSports?.[keys]?.timeStatus}</p>
      //       {/* <div className="live ttu">Live</div> */}
      //     </div>
      //   </div>
      //   <div className="b-match">
      //     <div className="c-left match-item">
      //       <div className="c-img">
      //         <div className="match-icon-wrap">
      //           <img alt="icon" src={liveSports?.[keys]?.image1} />
      //         </div>
      //       </div>
      //       <p className="c-name">{liveSports[keys]?.player1}</p>
      //     </div>
      //     <div className="c-center">
      //       <p>
      //         {liveSports[keys]?.score?.total_1} :{" "}
      //         {liveSports[keys]?.score?.total_2}
      //       </p>
      //     </div>
      //     <div className="c-right match-item">
      //       <div className="c-img">
      //         <div className="liveSports-icon-wrap">
      //           <img src={liveSports[keys]?.image2} alt="" />
      //         </div>
      //       </div>
      //       <p className="c-name">{liveSports[keys]?.player2}</p>
      //     </div>
      //   </div>
      //   <div className="b-markets">
      //     {liveSports?.[keys]?.[0]?.ex?.availableToBack?.[0]?.price && (
      //       <div className="market-item">
      //         <span>1</span>
      //         <span>
      //           {liveSports?.[keys]?.[0]?.ex?.availableToBack?.[0]?.price}
      //         </span>
      //       </div>
      //     )}

      //     {liveSports?.[keys]?.[2]?.ex?.availableToBack?.[0]?.price && (
      //       <div className="market-item">
      //         <span>draw </span>
      //         <span>
      //           {" "}
      //           {liveSports?.[keys]?.[2]?.ex?.availableToBack?.[0]?.price}
      //         </span>
      //       </div>
      //     )}
      //     {liveSports?.[keys]?.[1]?.ex?.availableToBack?.[0]?.price && (
      //       <div className="market-item">
      //         <span>2</span>
      //         <span>
      //           {" "}
      //           {liveSports?.[keys]?.[1]?.ex?.availableToBack?.[0]?.price}
      //         </span>
      //       </div>
      //     )}
      //   </div>
      // </div>
      sportsType == 4 ? (
        <div
          onClick={() => {
            handleNavigateEventPage(liveSports, keys, navigate);
          }}
          style={{ cursor: "pointer" }}
          className="bt12577 bt12497"
          data-editor-id="scoreBoardCard"
        >
          {/* <div className="bt12580 bt12579">
            <div className="bt12581">
              <div className="bt6522" data-editor-id="scoreBoardCategory">
                {liveSports?.[keys]?.time && (
                  <div className="bt6523 bt12585 bt12583">
                    <span className="bt6526 bt12586">
                      {liveSports?.[keys]?.time}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div> */}
          <div
            className="bt12590 bt12591"
            data-editor-id="scoreBoardContent"
            style={{ position: "relative" }}
          >
            <div className="bt12592">
              <div className="bt12593">
                <div className="bt12600">
                  <div className="bt12602">
                    <div
                      className="bt6474"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <img
                        data-savepage-src="https://static.sptpub.com/competitors/images/normal/medium/17.png"
                        src={liveSports?.[keys]?.image1}
                        alt=""
                        style={{ height: "30px" }}
                        className="bt6475"
                      />
                    </div>
                  </div>
                  <div style={{ fontSize: "10px" }} className="bt12603">
                    {liveSports?.[keys]?.player1}
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      data-editor-id="tableOutcomePlate"
                      className="bt6588  "
                      style={{ width: "50px", paddingLeft: "0px" }}
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
                          <p
                            style={{ fontSize: "10px" }}
                            className="odds_volume"
                          >
                            {
                              liveSports?.[
                                keys
                              ]?.[0]?.ex?.availableToBack?.[0]?.size?.split(
                                "."
                              )?.[0]
                            }
                          </p>
                        </span>
                      </div>
                    </div>
                    <div
                      data-editor-id="tableOutcomePlate"
                      className="bt6588  "
                      style={{ width: "50px" }}
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
                          <p
                            style={{ fontSize: "10px" }}
                            className="odds_volume"
                          >
                            {
                              liveSports?.[
                                keys
                              ]?.[0]?.ex?.availableToLay?.[0]?.size?.split(
                                "."
                              )?.[0]
                            }
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="bt12593">
                <div className="bt12613">
                  <svg
                    className="bt12614"
                    data-cy="ic-live-simple"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#FF4E4E"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      fill: "rgb(255, 78, 78)",
                      color: "rgb(255, 78, 78)",
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
                  <div
                    style={{ fontSize: "10px" }}
                    className="bt6541 bt12616"
                    data-editor-id="eventCardStatusLabel"
                  >
                    {liveSports?.[keys]?.timeStatus}
                  </div>
                </div>
                <div className="bt12617 bt12594">
                  {liveSports?.[keys]?.team1Score && (
                    <div
                      style={{ fontSize: "10px" }}
                      className="bt12618 bt12619"
                      data-editor-id="scoreBoardScore"
                    >
                      {liveSports?.[keys]?.team1Score}
                    </div>
                  )}

                  {liveSports?.[keys]?.team1Score && (
                    <div className="bt12620" style={{ fontSize: "10px" }}>
                      :
                    </div>
                  )}

                  {liveSports?.[keys]?.team2Score && (
                    <div
                      style={{ fontSize: "10px" }}
                      className="bt12618 bt12619"
                      data-editor-id="scoreBoardScore"
                    >
                      {liveSports?.[keys]?.team2Score}
                    </div>
                  )}
                </div>
              </div> */}
              <div className="bt12593">
                <div className="bt12600 bt12601">
                  <div className="bt12602">
                    <div
                      className="bt6474"
                      style={{
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <img
                        data-savepage-src="https://static.sptpub.com/competitors/images/normal/medium/72.png"
                        src={liveSports?.[keys]?.image2}
                        alt=""
                        style={{ height: "30px" }}
                        className="bt6475"
                      />
                    </div>
                  </div>
                  <div style={{ fontSize: "10px" }} className="bt12603">
                    {liveSports?.[keys]?.player2}
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      data-editor-id="tableOutcomePlate"
                      className="bt6588  "
                      style={{ width: "50px" }}
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
                          <p
                            style={{ fontSize: "10px" }}
                            className="odds_volume"
                          >
                            {
                              liveSports?.[
                                keys
                              ]?.[1]?.ex?.availableToBack?.[0]?.size?.split(
                                "."
                              )?.[0]
                            }
                          </p>
                        </span>
                      </div>
                    </div>
                    <div
                      data-editor-id="tableOutcomePlate"
                      className="bt6588  "
                      style={{ width: "50px", paddingRight: "0px" }}
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
                          <p
                            style={{ fontSize: "10px" }}
                            className="odds_volume"
                          >
                            {
                              liveSports?.[
                                keys
                              ]?.[1]?.ex?.availableToLay?.[0]?.size?.split(
                                "."
                              )?.[0]
                            }
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bt12593"
              style={{ position: "absolute", top: "50px" }}
            >
              <div className="bt12613">
                {liveSports?.[keys]?.inPlay == 1 && (
                  <svg
                    className="bt12614"
                    data-cy="ic-live-simple"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#FF4E4E"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      fill: "rgb(255, 78, 78)",
                      color: "rgb(255, 78, 78)",
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
                )}

                <div
                  style={{ fontSize: "10px" }}
                  className="bt6541 bt12616"
                  data-editor-id="eventCardStatusLabel"
                >
                  {liveSports?.[keys]?.timeStatus}
                </div>
              </div>
              <div className="bt12617 bt12594">
                {liveSports?.[keys]?.team1Score && (
                  <div
                    style={{ fontSize: "10px" }}
                    className="bt12618 bt12619"
                    data-editor-id="scoreBoardScore"
                  >
                    {liveSports?.[keys]?.team1Score}
                  </div>
                )}

                {liveSports?.[keys]?.team1Score && (
                  <div className="bt12620" style={{ fontSize: "10px" }}>
                    :
                  </div>
                )}

                {liveSports?.[keys]?.team2Score && (
                  <div
                    style={{ fontSize: "10px" }}
                    className="bt12618 bt12619"
                    data-editor-id="scoreBoardScore"
                  >
                    {liveSports?.[keys]?.team2Score}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            handleNavigateEventPage(liveSports, keys, navigate);
          }}
          className="bt228"
        >
          <div className="bt231">
            <div className="bt233" data-editor-id="eventCard">
              <div className="bt240">
                <div className="bt244">
                  <div className="bt251" data-editor-id="eventCardCategory">
                    <div className="bt252 bt257 bt243">
                      <span className="bt253">
                        {liveSports[keys]?.eventTypeId == 2 && (
                          <svg
                            className="bt1336"
                            data-cy="sport-tennis"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              fill: "currentcolor",
                              color: "inherit",
                              width: "auto",
                              height: "16px",
                            }}
                          >
                            <path d="M21.8897 15.3026L23.9308 13.2615L21.8897 11.2204L19.8485 13.2615L21.8897 15.3026ZM22.5192 15.9321L23.9299 17.3429C24.6067 16.573 25.0965 15.6738 25.4018 14.7325L24.5603 13.891L22.5192 15.9321ZM25.7285 11.4638C25.5929 10.3641 25.1999 9.34598 24.5537 8.5563L22.5192 10.5909L24.5603 12.632L25.7285 11.4638ZM25.7747 12.6765L25.1898 13.2615L25.6555 13.7273C25.7196 13.3772 25.7593 13.0255 25.7747 12.6765ZM21.2602 15.9321L19.2191 13.891L17.1779 15.9321L19.2191 17.9732L21.2602 15.9321ZM21.8897 16.5616L19.8485 18.6027L20.7138 19.468C21.641 19.1545 22.5294 18.6564 23.3011 17.973L21.8897 16.5616ZM17.3862 19.8062L18.5896 18.6027L16.5485 16.5616L14.5127 18.5973C15.3081 19.2573 16.3093 19.6607 17.3862 19.8062ZM18.5889 19.8624C18.9638 19.848 19.342 19.8044 19.7184 19.7315L19.2191 19.2322L18.5889 19.8624ZM17.1779 10.5909L19.2191 12.632L21.2602 10.5909L19.2191 8.54975L17.1779 10.5909ZM16.5485 9.96142L18.5896 7.92028L17.7481 7.07878C16.8068 7.38406 15.9076 7.87383 15.1377 8.55063L16.5485 9.96142ZM21.0168 6.75205L19.8485 7.92028L21.8897 9.96142L23.9243 7.92683C23.1346 7.28069 22.1165 6.88768 21.0168 6.75205ZM19.804 6.70585C19.4551 6.72125 19.1034 6.76093 18.7533 6.82503L19.2191 7.29081L19.804 6.70585ZM16.5485 11.2204L14.5073 13.2615L16.5485 15.3026L18.5896 13.2615L16.5485 11.2204ZM15.919 10.5909L14.5076 9.17949C13.8242 9.95113 13.3261 10.8396 13.0126 11.7668L13.8779 12.632L15.919 10.5909ZM12.6744 15.0944C12.8199 16.1713 13.2233 17.1724 13.8833 17.9678L15.919 15.9321L13.8779 13.891L12.6744 15.0944ZM12.6182 13.8917L13.2484 13.2615L12.7491 12.7622C12.6762 13.1386 12.6326 13.5168 12.6182 13.8917ZM11.5416 17.5497C10.3354 20.8379 9.3621 22.9333 8.57894 23.8951L8.51812 23.9625L6.62971 25.8509L8.55126 23.931C9.06029 23.4717 9.9673 22.9723 11.2494 22.399C11.8005 22.1526 12.414 21.8964 13.0795 21.6328C13.6732 21.3977 14.2911 21.1633 14.9188 20.9334C14.1808 20.5952 13.5046 20.1364 12.9244 19.5562C12.341 18.9728 11.8804 18.2923 11.5416 17.5497ZM10.8332 14.2046C10.824 11.8619 11.7368 9.41336 13.5539 7.59628C16.8991 4.25104 22.5875 4.04055 25.5138 6.96681C28.44 9.89307 28.2295 15.5815 24.8843 18.9267C23.0672 20.7438 20.6187 21.6565 18.276 21.6474C18.2631 21.6523 18.2499 21.6569 18.2366 21.6613C18.1679 21.6837 18.037 21.7271 17.8529 21.7891C17.5449 21.8928 17.2014 22.0105 16.8313 22.14C15.7748 22.5096 14.7186 22.8986 13.7351 23.2881C13.0921 23.5428 12.5018 23.7893 11.9762 24.0244C10.8594 24.5237 10.0709 24.9579 9.77705 25.2214L7.25918 27.7393C6.91153 28.0869 6.34789 28.0869 6.00024 27.7393L4.74131 26.4803C4.39366 26.1327 4.39366 25.569 4.74131 25.2214L7.22486 22.7378C8.02223 21.7288 9.2488 18.8563 10.8228 14.2335C10.8261 14.2238 10.8295 14.2141 10.8332 14.2046ZM6.45596 9.2418C6.61841 8.5513 6.9692 7.91364 7.4847 7.39814C7.97349 6.90935 8.57222 6.56847 9.22226 6.39597C8.98426 5.6992 8.41028 5.15812 7.69353 4.96595C7.51693 5.59635 7.1812 6.1765 6.70531 6.65238C6.21375 7.14394 5.61098 7.48593 4.95661 7.65749C5.14523 8.41158 5.71856 9.01323 6.45596 9.2418ZM7.35253 9.32876C8.41333 9.21656 9.2518 8.35908 9.33451 7.28974C8.87953 7.43057 8.46138 7.6804 8.11417 8.02761C7.74637 8.3954 7.48795 8.84276 7.35253 9.32876ZM4.92189 6.73937C5.35117 6.59531 5.7456 6.35316 6.07584 6.02292C6.39399 5.70477 6.63039 5.32707 6.77609 4.91595C5.83118 5.06064 5.08195 5.79961 4.92189 6.73937ZM7.11571 10.2314C5.39495 10.2314 4 8.83647 4 7.11571C4 5.39495 5.39495 4 7.11571 4C8.83647 4 10.2314 5.39495 10.2314 7.11571C10.2314 8.83647 8.83647 10.2314 7.11571 10.2314Z"></path>
                          </svg>
                        )}
                        {liveSports[keys]?.eventTypeId == 1 && (
                          <svg
                            className="bt254"
                            data-cy="sport-soccer"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              fill: "currentcolor",
                              color: "inherit",
                              width: "auto",
                              height: "16px",
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.04 21.3793C12.368 22.0323 13.8288 22.393 15.3425 22.4261L17.8734 19.5272C17.9026 17.8165 17.5076 16.1267 16.7246 14.6139L11.7195 13.4485C10.675 14.4949 9.86495 15.7551 9.35078 17.1439L11.04 21.3793ZM10.7764 22.204L9.08458 23.6141C10.9111 25.274 13.3374 26.2857 16 26.2857C16.511 26.2857 17.0133 26.2485 17.5043 26.1765L15.3359 23.2833C13.7356 23.25 12.1884 22.8783 10.7764 22.204ZM5.7343 16.6469H8.62297C9.20019 15.1755 10.086 13.8441 11.2164 12.7406V9.62205C10.2129 9.37945 9.1786 9.29054 8.14698 9.35692C6.6294 11.1491 5.71429 13.4677 5.71429 16C5.71429 16.2173 5.72102 16.433 5.7343 16.6469ZM22.9116 19.3483C23.8049 18.4384 24.5225 17.3714 25.0254 16.2017L23.6597 11.542C22.5016 10.9523 21.2395 10.587 19.9272 10.4698L17.6048 14.4567C18.3 15.8824 18.6825 17.4437 18.7275 19.033L22.9116 19.3483ZM23.4088 20.0636V23.1348C25.0358 21.4457 26.0906 19.2017 26.2613 16.7145L25.7741 16.6293C25.2096 17.9111 24.4065 19.0765 23.4088 20.0636ZM23.9985 9.53268C22.4866 7.66509 20.3338 6.33759 17.8747 5.88473C17.5281 6.28981 17.2149 6.71981 16.9371 7.17124L19.7454 9.596C21.1338 9.68779 22.4749 10.0354 23.7142 10.6149L23.9985 9.53268ZM16.0845 6.92604C16.3235 6.51838 16.5885 6.12608 16.8785 5.75128C16.5889 5.72678 16.2959 5.71429 16 5.71429C13.2876 5.71429 10.8204 6.76421 8.98261 8.47983C9.78915 8.49238 10.5923 8.59246 11.3784 8.77945C11.4114 8.75319 11.4487 8.73155 11.4894 8.71569L16.0845 6.92604ZM16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z"
                            ></path>
                          </svg>
                        )}
                        {liveSports[keys]?.eventTypeId == 4 && (
                          <svg
                            className="bt2310"
                            data-cy="sport-cricket"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              fill: "currentcolor",
                              color: "inherit",
                              width: "auto",
                              height: "16px",
                            }}
                          >
                            <path d="M11.8967 18.8639L13.1361 20.1033L13.1724 20.067C13.9726 19.2668 15.1951 19.0684 16.2073 19.5745L16.4262 19.684C16.7636 19.8527 17.1711 19.7866 17.4378 19.5198L25.2204 11.7372C26.5895 10.3682 26.5895 8.14859 25.2204 6.77956C23.8514 5.41054 21.6318 5.41054 20.2628 6.77956L12.4802 14.5622C12.2134 14.8289 12.1473 15.2364 12.316 15.5738L12.4255 15.7927C12.9316 16.8049 12.7332 18.0274 11.933 18.8276L11.8967 18.8639ZM11.277 19.4836L9.80088 20.9597C9.14153 21.6191 8.16624 21.8493 7.28162 21.5544C7.02684 21.4695 6.74595 21.5358 6.55605 21.7257L6.00949 22.2723C5.66724 22.6145 5.66724 23.1694 6.00949 23.5117L8.48832 25.9905C8.83058 26.3328 9.38548 26.3328 9.72774 25.9905L10.2743 25.4439C10.4642 25.254 10.5305 24.9732 10.4456 24.7184C10.1507 23.8338 10.3809 22.8585 11.0403 22.1991L12.5164 20.723L11.277 19.4836ZM7.47068 10.5069C5.7766 10.5069 4.40328 9.13361 4.40328 7.43954C4.40328 5.74546 5.7766 4.37214 7.47068 4.37214C9.16475 4.37214 10.5381 5.74546 10.5381 7.43954C10.5381 9.13361 9.16475 10.5069 7.47068 10.5069ZM7.47068 9.63053C8.68073 9.63053 9.66168 8.64959 9.66168 7.43954C9.66168 6.22948 8.68073 5.24854 7.47068 5.24854C6.26062 5.24854 5.27968 6.22948 5.27968 7.43954C5.27968 8.64959 6.26062 9.63053 7.47068 9.63053ZM26.4599 5.54015C28.5134 7.59368 28.5134 10.9231 26.4599 12.9766L18.6773 20.7592C17.877 21.5595 16.6545 21.7578 15.6423 21.2517L15.4234 21.1423C15.086 20.9736 14.6785 21.0397 14.4118 21.3065L12.2797 23.4385C12.0898 23.6284 12.0235 23.9093 12.1084 24.1641C12.4033 25.0487 12.1731 26.024 11.5137 26.6834L10.9672 27.2299C9.94039 28.2567 8.27567 28.2567 7.24891 27.2299L4.77007 24.7511C3.74331 23.7243 3.74331 22.0596 4.77007 21.0328L5.31664 20.4863C5.97599 19.8269 6.95128 19.5967 7.8359 19.8916C8.09068 19.9765 8.37157 19.9102 8.56147 19.7203L10.6935 17.5882C10.9603 17.3215 11.0264 16.914 10.8577 16.5766L10.7483 16.3577C10.2422 15.3455 10.4405 14.123 11.2408 13.3227L19.0234 5.54015C21.0769 3.48662 24.4063 3.48662 26.4599 5.54015Z"></path>
                          </svg>
                        )}
                      </span>
                      <span className="bt255 bt258">
                        {liveSports[keys]?.seriesName}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bt244">
                  <div className="bt242">
                    <span className="bt261 bt245 bt247" role="button">
                      <svg
                        className="bt262"
                        data-cy="stat"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          fill: "currentcolor",
                          color: " rgb(49, 55, 61)",
                          width: "auto",
                          height: "16px",
                        }}
                      >
                        <g>
                          <g opacity="1">
                            <rect
                              x="3"
                              y="7"
                              width="2"
                              height="5"
                              rx="1"
                            ></rect>
                            <rect
                              x="7"
                              y="3"
                              width="2"
                              height="9"
                              rx="1"
                            ></rect>
                            <rect
                              x="11"
                              y="5"
                              width="2"
                              height="7"
                              rx="1"
                            ></rect>
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <a className="bt248" data-editor-id="eventCardContent">
                <div className="bt235">
                  <div className="bt236">
                    <div
                      className="bt273 bt276"
                      data-editor-id="eventCardStatusLabel"
                    >
                      {liveSports?.[keys]?.timeStatus}
                    </div>
                  </div>
                  <div className="bt237"></div>
                  <div className="bt238 bt239">
                    {liveSports?.[keys]?.inPlay && (
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
                    )}
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
                          }}
                        >
                          {liveSports[keys]?.player1}
                        </div>
                      </div>
                    </div>
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
                            src={liveSports?.[keys]?.image2}
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
                          }}
                        >
                          {liveSports[keys]?.player2}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bt285">
                    {liveSports?.[keys]?.eventTypeId == 2 ? (
                      <div data-editor-id="widgetScore" className="bt1379">
                        <div>{liveSports[keys]?.score?.games_1}</div>
                        <div>{liveSports[keys]?.score?.games_2}</div>
                        <div className="bt1381">
                          {liveSports[keys]?.score?.total_1}
                        </div>
                        <div className="bt1381">
                          {liveSports[keys]?.score?.total_2}
                        </div>
                        <div
                          className={`${
                            liveSports?.[keys]?.service == 1 ? "bt1382" : ""
                          }`}
                        ></div>
                        <div
                          className={`${
                            liveSports?.[keys]?.service == 2 ? "bt1382" : ""
                          }`}
                        ></div>
                        {liveSports[keys]?.score?.total_1 && (
                          <div className="bt1384 bt1380 bt1493">
                            <span className="bt1386">
                              {liveSports[keys]?.score?.total_1}
                            </span>
                          </div>
                        )}
                        {liveSports[keys]?.score?.total_2 && (
                          <div className="bt1384 bt1380 bt1493">
                            <span className="bt1386">
                              {" "}
                              {liveSports[keys]?.score?.total_2}
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div data-editor-id="widgetScore" className="bt294">
                        {liveSports[keys]?.score?.total_1 && (
                          <div className="bt299 bt295 bt298">
                            <span className="bt301">
                              {liveSports[keys]?.score?.total_1}
                            </span>
                          </div>
                        )}

                        {liveSports[keys]?.score?.total_2 && (
                          <div className="bt299 bt295 bt298">
                            <span className="bt301">
                              {liveSports[keys]?.score?.total_2}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </a>
              <div>
                <div
                  className="bt315 bt316 bt311"
                  data-editor-id="simpleMarketTitle"
                  style={{ width: "auto" }}
                >
                  <div className="bt317">Winner</div>
                </div>
                <div className="bt312">
                  <div className="bt319">
                    <div className="bt321">
                      <div
                        data-editor-id="outcomePlate"
                        className={`${
                          liveSports?.[keys]?.eventTypeId === 1
                            ? "bt323 bt326"
                            : "bt1408 bt1410"
                        } `}
                      >
                        <div className="bt327 bt308">
                          <div className="bt342"></div>
                          <div
                            className="bt331"
                            data-editor-id="outcomePlateName"
                          >
                            <span className="bt333">1</span>
                          </div>
                          <div className="bt299 bt334 bt300">
                            <span className="bt301">
                              {
                                liveSports?.[keys]?.[0]?.ex
                                  ?.availableToBack?.[0]?.price
                              }
                            </span>
                          </div>
                        </div>
                      </div>

                      {liveSports?.[keys]?.[2] && (
                        <div
                          data-editor-id="outcomePlate"
                          className="bt323 bt326"
                        >
                          <div className="bt327 bt308">
                            <div className="bt342"></div>
                            <div
                              className="bt331"
                              data-editor-id="outcomePlateName"
                            >
                              <span className="bt333">draw</span>
                            </div>
                            <div className="bt299 bt334">
                              <span className="bt301">
                                {
                                  liveSports?.[keys]?.[2]?.ex
                                    ?.availableToBack?.[0]?.price
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      <div
                        data-editor-id="outcomePlate"
                        className={`${
                          liveSports?.[keys]?.eventTypeId === 1
                            ? "bt323 bt326"
                            : "bt1408 bt1410"
                        } `}
                      >
                        <div className="bt327 bt308">
                          <div className="bt342"></div>
                          <div
                            className="bt331"
                            data-editor-id="outcomePlateName"
                          >
                            <span className="bt333">2</span>
                          </div>
                          <div className="bt299 bt334">
                            <span className="bt301">
                              {
                                liveSports?.[keys]?.[1]?.ex
                                  ?.availableToBack?.[0]?.price
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
