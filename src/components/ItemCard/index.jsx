import React from "react";
import burger from "src/Assets/Images/PopulerItems/Cheese_Burger.png";
import "./itemCard.css";
import IconButton from "src/components/Button";

function ItemCard({ img = "", name = "", restaurentName = "", price = "" }) {
   return (
      <div className="container">
         <div className="mainItems">
            <div className="content">
               <img src={img} alt="" />
               <h5>{name}</h5>

               <p>
                  {" "}
                  <span className="restaurent">{restaurentName}</span>
                  <br />
                  <span className="price">{price}</span>
               </p>

               <IconButton label="Order Now" color="btnColor" />
            </div>
         </div>
      </div>
   );
}

export default ItemCard;
