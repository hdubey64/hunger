import React from "react";
import "./featuredCard.css";
import {
   Sell as SellIcon,
   WatchLater as WatchLaterIcon,
   Star as StarIcon,
   Star,
} from "@mui/icons-material";

import Foodworld from "src/Assets/Images/FeaturedImages/FoodWorld.svg";
import FoodworldIcon from "src/Assets/Images/FeaturedImages/FoodWorldIcon.svg";

const FeaturedCard = ({ offer = "" }) => {
   return (
      <div className="container">
         <div className="featuredMain">
            <div className="offerPrice">
               <p className="sellTag">
                  <SellIcon /> 20%off
               </p>
               <p className="timmerTag">
                  {" "}
                  <WatchLaterIcon /> Fast
               </p>
            </div>
            <img src={Foodworld} alt="" />
         </div>
         <div className="featuredTitle">
            <img src="" alt="" />
            <div className="featuredTitleHead">
               <img src={FoodworldIcon} alt="Card Icon" />
               <h5>Food World</h5>
               <div className="star">
                  <Star />
                  <p>46</p>
               </div>
            </div>
            <p>Opens Tomarrow</p>
         </div>
      </div>
   );
};

export default FeaturedCard;
