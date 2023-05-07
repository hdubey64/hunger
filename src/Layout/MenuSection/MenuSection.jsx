import React from "react";
import "./MenuSection.css";
import pizza from "../../Assets/Images/MenuImage/pizza.png";
import IconButton from "src/components/Button";
import { MenuSectionData } from "src/data";

const MenuSection = () => {
   return (
      <div className="menu-main container">

         <div className="menuSectionMain">

            {MenuSectionData.map((item) => (
               <div className="menu-sub">
                  <div className="menu-left">
                     <div className="menu-left-content">
                        <h1>
                           {item.header}
                           <span className="content-head">
                              {item.header2}
                           </span>{" "}
                        </h1>
                        <p>{item.para}</p>
                     </div>
                     <div className="menu-left-button">
                        <IconButton
                           label="proceed to order"
                           color="order-btn"
                        />
                     </div>
                  </div>

                  <div className="menu-right">
                     <img src={item.img} alt="" />
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default MenuSection;
