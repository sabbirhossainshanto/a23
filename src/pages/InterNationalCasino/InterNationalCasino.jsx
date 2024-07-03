/* eslint-disable react/no-unknown-property */
// import useInterNationalCasino from "../../hooks/useInterNationalCasino";
// import CasinoCard from "../../components/ui/CasinoCard/CasinoCard";
import { HiUsers } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useContextState from "../../hooks/useContextState";
import axios from "axios";
import { API, Settings } from "../../api";
import Warning from "../../components/modal/Warning";
import Dropdown from "./Dropdown";
import AEDRules from "../../components/modal/AEDRules";

const InterNationalCasino = () => {
  /* get international casino */
  // const { intCasino } = useInterNationalCasino();
  const [showLeftDropdown, setShowLeftDropdown] = useState(false);
  const [showRightDropdown, setShowRightDropdown] = useState(false);
  const [gameList, setGameList] = useState("All");
  const [product, setProduct] = useState("All");
  const [gameInfo, setGameInfo] = useState({
    provider_name: "",
    game_id: "",
    base: "",
  });
  const { token, wallet } = useContextState();
  const [data, setData] = useState({});
  const [warnMessage, setWarnMessage] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const getGames = async () => {
      const res = await axios.post(API.liveCasinoWolf, {
        gameList,
        product,
        isHome: false,
      });
      if (res?.status === 200) {
        const result = res?.data;
        setData(result);
      }
    };
    getGames();
  }, [gameList, product, token]);

  useEffect(() => {
    setGameList("All");
    setProduct("All");
  }, []);

  const handleLiveSlotCasino = (id, name) => {
    if (token) {
      if (wallet === "bonus") {
        return setWarnMessage("Bonus wallet is available only on sports.");
      }
      if (Settings.casinoCurrency !== "AED") {
        navigate(`/casino/${name.replace(/ /g, "")}/${id}`);
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({
          provider_name: name.replace(/ /g, ""),
          game_id: id,
          base: "casino",
        });
        setShowWarning(true);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      {/* <CasinoCard games={intCasino} title="International" /> */}
      <div _ngcontent-ng-c1965075897="" className="page-body">
        {/* Warning message for bonus wallet */}
        {warnMessage && <Warning setShowModal={setWarnMessage} />}
        {showWarning && (
          <AEDRules setShowModal={setShowWarning} casinoInfo={gameInfo} />
        )}

        <div _ngcontent-ng-c1965075897="" className="filter-wrapper">
          <Dropdown
            showLeftDropdown={showLeftDropdown}
            setShowLeftDropdown={setShowLeftDropdown}
            data={data}
            showRightDropdown={showRightDropdown}
            setShowRightDropdown={setShowRightDropdown}
            setProduct={setProduct}
            setGameList={setGameList}
            product={product}
            gameList={gameList}
          />
        </div>

        {data &&
          data?.gameList &&
          Object?.values(data?.gameList !== null) &&
          data?.gameList !== null &&
          data?.gameList !== undefined &&
          Object.keys(data.gameList)
            .filter((key) => data.gameList[key] !== null)
            ?.map((title, i) => {
              return (
                <div
                  key={i}
                  _ngcontent-ng-c1965075897=""
                  className="casino-section live-casino game-play mt-2 mb-3 ng-star-inserted"
                >
                  <div
                    _ngcontent-ng-c1965075897=""
                    className="game-play-heading"
                  >
                    <h2 _ngcontent-ng-c1965075897="">{title}</h2>
                  </div>
                  <div
                    _ngcontent-ng-c1965075897=""
                    className="game-type-list ng-star-inserted"
                  >
                    <ul _ngcontent-ng-c1965075897="">
                      {Array.isArray(data.gameList[title])
                        ? data?.gameList[title]?.map((item, i) => {
                            return (
                              <>
                                <li
                                  onClick={() =>
                                    handleLiveSlotCasino(
                                      item?.game_id,
                                      item?.game_name
                                    )
                                  }
                                  key={i}
                                  _ngcontent-ng-c1965075897=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c1965075897=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c1965075897=""
                                      alt=""
                                      src={item?.url_thumb}
                                    />
                                  </a>
                                  <p
                                    style={{ zIndex: 99 }}
                                    _ngcontent-ng-c1965075897=""
                                    className="total-players"
                                  >
                                    {" "}
                                    <HiUsers size={15} />
                                    {item?.active_players}
                                  </p>
                                  <div
                                    _ngcontent-ng-c1965075897=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c1965075897=""
                                      className="company-type"
                                    >
                                      {item?.product}
                                    </p>
                                    <p
                                      _ngcontent-ng-c1965075897=""
                                      className="game-name"
                                    >
                                      {item?.game_name}
                                    </p>
                                    <p
                                      _ngcontent-ng-c1965075897=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      {item?.text}
                                    </p>
                                  </div>
                                </li>
                              </>
                            );
                          })
                        : Object?.values(data?.gameList[title])?.map(
                            (item, i) => {
                              return (
                                <li
                                  onClick={() =>
                                    handleLiveSlotCasino(
                                      item?.game_id,
                                      item?.game_name
                                    )
                                  }
                                  key={i}
                                  _ngcontent-ng-c1965075897=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c1965075897=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c1965075897=""
                                      alt=""
                                      src={item?.url_thumb}
                                    />
                                  </a>
                                  <p
                                    style={{ zIndex: 99 }}
                                    _ngcontent-ng-c1965075897=""
                                    className="total-players"
                                  >
                                    {" "}
                                    <HiUsers size={15} />
                                    {item?.active_players}
                                  </p>
                                  <div
                                    _ngcontent-ng-c1965075897=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c1965075897=""
                                      className="company-type"
                                    >
                                      {item?.product}
                                    </p>
                                    <p
                                      _ngcontent-ng-c1965075897=""
                                      className="game-name"
                                    >
                                      {item?.game_name}
                                    </p>
                                    <p
                                      _ngcontent-ng-c1965075897=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      {item?.text}
                                    </p>
                                  </div>
                                </li>
                              );
                            }
                          )}
                    </ul>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default InterNationalCasino;
