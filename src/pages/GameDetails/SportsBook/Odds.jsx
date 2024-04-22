import { useEffect, useState } from "react";
import ColumnThree from "./ColumnThree";
import ColumnTwo from "./ColumnTwo";
import ColumnOne from "./ColumnOne";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
const Odds = ({ sportsBook,eventTypeId }) => {
  const sports = sportsBook?.MarketGroups?.filter(
    (group) =>
      group?.Name !== "Bet Builder" &&
      group?.Name !== "Fast Markets" &&
      group?.Name !== "Player Specials"
  );

  const itemsLengthArray = sports?.map((group) => group?.Items?.length) || [];
  const [openItems, setOpenItems] = useState(
    new Array(itemsLengthArray[0] || 0).fill(false).map((_, index) => index < 5)
  );

  const toggleItem = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  useEffect(() => {
    setOpenItems(
      new Array(itemsLengthArray[0] || 0)
        .fill(false)
        .map((_, index) => index < 5)
    );
  }, [eventTypeId]);


  return (
    <div className="bt12498">
      <div className="bt12671">
        {/* Tabs */}
        {sports?.map((group) =>
          group?.Items?.map((item, iIdx) => {
            const isOpen = openItems[iIdx];
            return (
              <div key={iIdx} className="bt12687">
                <div onClick={() => toggleItem(iIdx)} className="bt12695">
                  <div className="bt12689" data-editor-id="marketTitle">
                    {item?.Name}
                    <div
                      className="bt6471 bt12696 bt12690"
                      style={{ width: "16px", height: "16px" }}
                    >
                      {isOpen ? <TiArrowSortedUp /> : <TiArrowSortedDown />}

                      {/* <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                      </svg> */}
                    </div>
                  </div>
                </div>

                {item?.MColumnCount === 3 && (
                  <ColumnThree
                    item={item}
                    isOpen={isOpen}
                    sportsBook={sportsBook}
                  />
                )}
                {item?.MColumnCount === 2 && (
                  <ColumnTwo
                    item={item}
                    isOpen={isOpen}
                    sportsBook={sportsBook}
                  />
                )}
                {item?.MColumnCount === 1 && (
                  <ColumnOne
                    item={item}
                    isOpen={isOpen}
                    sportsBook={sportsBook}
                  />
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Odds;
