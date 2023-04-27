import React from "react";
import burger from "src/Assets/Images/PopulerItems/Cheese_Burger.png";
import "./style.css";

const PopularItemSection = () => {
   return (
      <div className="container">
         <div className="headTag text-center">
            <h1>Popular items</h1>
         </div>
         <div className="main">
            <div className="content">
               <img src={burger} alt="" />
               <h4>Cheese Burger</h4>
               <p>Burger Arena</p>
               <p>$3.88</p>
               <button>Order Now</button>
            </div>
         </div>
      </div>
   );
};

export default PopularItemSection;
