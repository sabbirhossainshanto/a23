import { useEffect } from "react";

const ColumnTwo = ({
  item,
  isOpen,
  sportsBook,
  priceClasses,
  setPriceClasses,
  prevPrices,
  setPrevPrices,
}) => {
  useEffect(() => {
    if (item?.Items) {
      const newPrevPrices = {};
   
      item.Items.forEach((column, i) => {
        newPrevPrices[i] = column.Price;
     
      });
      setPrevPrices(newPrevPrices);
      const timer = setTimeout(() => {
        setPriceClasses({});
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [item?.Items]);

  useEffect(() => {
    item?.Items?.forEach((column, i) => {
      handlePriceChange(column.Price, i);
    });
  }, [item?.Items]);

  const handlePriceChange = (newPrice, columnIndex) => {
    if (prevPrices[columnIndex] !== undefined) {
      if (newPrice > prevPrices[columnIndex]) {
        setPriceClasses((prev) => ({ ...prev, [columnIndex]: "green_blink" }));
      } else if (newPrice < prevPrices[columnIndex]) {
        setPriceClasses((prev) => ({ ...prev, [columnIndex]: "red_blink" }));
      }
    }
  };

  return (
    <>
      {isOpen && (
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
              {item?.Items?.map((column, i) => {
                // console.log(priceClasses[i]);
                return (
                  <div
                    key={i}
                    data-editor-id="tableOutcomePlate"
                    className="bt6588 bt12698 bt6590"
                  >
                    <div className="bt6592 bt12699">
                      <div accessKey="" className="bt1570">
                        <span className={priceClasses[i]}></span>
                      </div>
                      <div
                        className="bt6596 bt12703"
                        data-editor-id="tableOutcomePlateName"
                      >
                        <span className="bt6598"> {column?.Name}</span>
                      </div>
                      <div className="bt6564 bt6599">
                        <span className="bt6566">
                          {column?.Price?.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ColumnTwo;
