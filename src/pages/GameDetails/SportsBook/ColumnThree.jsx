const ColumnThree = ({ item, isOpen, sportsBook }) => {
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
           return (
             <div key={i}
             data-editor-id="tableOutcomePlate"
             className="bt6588 bt12698 bt6591"
           >
             <div className="bt6592 bt12699">
               <div className="bt6607"></div>
               <div
                 className="bt6596 bt12703"
                 data-editor-id="tableOutcomePlateName"
               >
                 <span className="bt6598"> {column?.Name}</span>
               </div>
               <div className="bt6564 bt6599">
                 <span className="bt6566">{column?.Price?.toFixed(2)}</span>
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

export default ColumnThree;
