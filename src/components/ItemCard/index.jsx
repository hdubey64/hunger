import React from "react";

function ItemCard({ img = "", name = "", resturentName = "" }) {
   return (
      <div>
         <div className="container">
            <div className="main">
               <img src={img} alt="" />
            </div>
         </div>
      </div>
   );
}

export default ItemCard;
