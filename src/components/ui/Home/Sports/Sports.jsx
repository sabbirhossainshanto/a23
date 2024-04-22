const Sports = ({ sports }) => {

  
  return (
    <>
      {sports && Object.values(sports).length > 0
        ? Object.keys(sports)
            ?.filter((key) => {
              return sports?.[key]?.visible === true;
            })
            .sort((keyA, keyB) => sports[keyA].sort - sports[keyB].sort)
            .map((key, index) => {
              return (
                <div key={index} className="bt228">
                  <div className="bt231">
                    <div className="bt233" data-editor-id="eventCard">
                      <div className="bt240">
                        <div className="bt244">
                          <div
                            className="bt251"
                            data-editor-id="eventCardCategory"
                          >
                            <div className="bt252 bt257 bt243">
                              <span className="bt253">
                                {sports[key]?.eventTypeId == 2 && (
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
                                {sports[key]?.eventTypeId == 1 && (
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
                                {sports[key]?.eventTypeId == 4 && (
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
                                {/* Serbia */}
                                {/* <svg
                                  className="bt256"
                                  data-cy="ic-rounded-arrow"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{
                                    fill: "currentcolor",
                                    color: "inherit",
                                    width: "auto",
                                    height: "8px",
                                  }}
                                >
                                  <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                                </svg> */}
                                {sports[key]?.seriesName}
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
                      <a
                        className="bt248"
                        data-editor-id="eventCardContent"
                        href="/soccer/serbia/serbian-cup/fk-radnicki-1923-kragujevac-fk-novi-pazar-2389418595890368534"
                      >
                        <div className="bt235">
                          <div className="bt236">
                            <div
                              className="bt273 bt276"
                              data-editor-id="eventCardStatusLabel"
                            >
                              {sports?.[key]?.timeStatus}
                            </div>
                          </div>
                          <div className="bt237"></div>
                          <div className="bt238 bt239">
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
                          </div>
                        </div>
                        <div className="bt280 bt234">
                          <div className="bt281">
                            <div
                              className="bt282"
                              style={{ marginBottom: "8px" }}
                            >
                              <div className="bt286 bt283">
                                <div
                                  className="bt289 bt288"
                                  style={{ width: "24px", height: "24px" }}
                                >
                                  <img
                                    src={sports?.[key]?.image1}
                                    alt=""
                                    height="24"
                                    width="24"
                                    className="bt290"
                                  />
                                </div>
                                <div
                                  className="bt287"
                                  style={{ height: "24px", lineHeight: "24px" }}
                                >
                                  {sports[key]?.player1}
                                </div>
                              </div>
                            </div>
                            <div
                              className="bt282"
                              style={{ marginBottom: "0px" }}
                            >
                              <div className="bt286 bt283">
                                <div
                                  className="bt289 bt288"
                                  style={{ height: "24px", lineHeight: "24px" }}
                                >
                                  <img
                                    src={sports?.[key]?.image2}
                                    alt=""
                                    height="24"
                                    width="24"
                                    className="bt290"
                                  />
                                </div>
                                <div
                                  className="bt287"
                                  style={{ height: "24px", lineHeight: "24px" }}
                                >
                                  {sports[key]?.player2}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bt285">
                            {sports?.[key]?.eventTypeId == 2 ? (
                              <div
                                data-editor-id="widgetScore"
                                className="bt1379"
                              >
                                <div>{sports[key]?.score?.games_1}</div>
                                <div>{sports[key]?.score?.games_2}</div>
                                <div className="bt1381">
                                  {sports[key]?.score?.total_1}
                                </div>
                                <div className="bt1381">
                                  {sports[key]?.score?.total_2}
                                </div>
                                <div
                                  className={`${
                                    sports?.[key]?.service == 1 ? "bt1382" : ""
                                  }`}
                                ></div>
                                <div
                                  className={`${
                                    sports?.[key]?.service == 2 ? "bt1382" : ""
                                  }`}
                                ></div>
                                <div className="bt1384 bt1380 bt1493">
                                  <span className="bt1386">
                                    {sports[key]?.score?.total_1}
                                  </span>
                                </div>
                                <div className="bt1384 bt1380 bt1493">
                                  <span className="bt1386">
                                    {" "}
                                    {sports[key]?.score?.total_2}
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <div
                                data-editor-id="widgetScore"
                                className="bt294"
                              >
                                <div className="bt299 bt295 bt298">
                                  <span className="bt301">
                                    {sports[key]?.score?.total_1}
                                  </span>
                                </div>
                                <div className="bt299 bt295 bt298">
                                  <span className="bt301">
                                    {sports[key]?.score?.total_2}
                                  </span>
                                </div>
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
                              {sports?.[key]?.[0]?.ex?.availableToBack?.[0]
                                ?.price && (
                                <div
                                  data-editor-id="outcomePlate"
                                  className={`${
                                    sports?.[key]?.eventTypeId === 1
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
                                          sports?.[key]?.[0]?.ex
                                            ?.availableToBack?.[0]?.price
                                        }
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {sports?.[key]?.[2]?.ex?.availableToBack?.[0]
                                ?.price && (
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
                                          sports?.[key]?.[2]?.ex
                                            ?.availableToBack?.[0]?.price
                                        }
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {sports?.[key]?.[1]?.ex?.availableToBack?.[0]
                                ?.price && (
                                <div
                                  data-editor-id="outcomePlate"
                                  className={`${
                                    sports?.[key]?.eventTypeId === 1
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
                                          sports?.[key]?.[1]?.ex
                                            ?.availableToBack?.[0]?.price
                                        }
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        {/* <div className="bt348">
                          <div data-simplebar="init" className="bt359 bt310">
                            <div
                              className="simplebar-wrapper"
                              style={{ margin: "0px" }}
                            >
                              <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer"></div>
                              </div>
                              <div className="simplebar-mask">
                                <div
                                  className="simplebar-offset"
                                  style={{ right: "0px", bottom: "0px" }}
                                >
                                  <div
                                    className="simplebar-content-wrapper"
                                    role="region"
                                    aria-label="scrollable content"
                                    style={{
                                      height: "auto",
                                      overflow: "hidden",
                                    }}
                                  >
                                    <div
                                      className="simplebar-content"
                                      style={{ padding: "0px" }}
                                    >
                                      <div
                                        className="bt309"
                                        style={{
                                          height: "0px",
                                          overflow: "hidden",
                                          display: "none",
                                          transition: "height 0.3s linear 0s",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="simplebar-placeholder"
                                style={{ width: "396px", height: "0px" }}
                              ></div>
                            </div>
                            <div
                              className="simplebar-track simplebar-horizontal"
                              style={{ visibility: "hidden" }}
                            >
                              <div
                                className="simplebar-scrollbar"
                                style={{ width: "0px", display: "none" }}
                              ></div>
                            </div>
                            <div
                              className="simplebar-track simplebar-vertical"
                              style={{ visibility: "hidden" }}
                            >
                              <div
                                className="simplebar-scrollbar"
                                style={{ height: "0px", display: "none" }}
                              ></div>
                            </div>
                          </div>
                          <div className="bt349 bt355 bt353"></div>
                          <div className="bt350 bt356 bt353"></div>
                          <div className="bt351 bt357 bt354"></div>
                          <div className="bt352 bt358 bt354"></div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
        : null}
    </>
  );
};

export default Sports;
