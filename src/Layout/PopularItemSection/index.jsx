import React from "react";
import ItemCard from "src/components/ItemCard";

const PopularItemSection = () => {
   return (
      <div>
         <div className="container">
            <div className="headTag">
               <h1>Popular items</h1>
            </div>
            <ItemCard />
         </div>
      </div>
   );
};

export default PopularItemSection;
