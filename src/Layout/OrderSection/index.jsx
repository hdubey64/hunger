import React from "react";
import "./orderSection.css";
import IconButton from "src/components/Button";
import { RightArrowIcon } from "src/components/icons";

const OrderSection = () => {
   return (
      <div className="orderSection">
         <div className="container orderSectionMain">
            <h1>Are you ready to order with the best deals?</h1>
            <IconButton
               label="PROCEED TO ORDER"
               icon={<RightArrowIcon />}
               iconPostion="end"
               color="orderSectionBtn"
            />
         </div>
      </div>
   );
};

export default OrderSection;
