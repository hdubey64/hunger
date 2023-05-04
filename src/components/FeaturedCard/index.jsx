import React from "react";
import "./featuredCard.css";
import {
   Sell as SellIcon,
   WatchLater as WatchLaterIcon,
   Star as StarIcon,
} from "@mui/icons-material";
import PropTypes from "prop-types";

const FeaturedCard = ({ data }) => {
   const { offer, img, imgIcon, tittle, rating, isOpen, storeStatus } = data;
   return (
      <div className="featuredCardMain">
         <div className="featuredMainImg">
            <div className="offerPrice">
               <p className="sellTag">
                  <SellIcon sx={{ fontSize: 20 }} /> {offer}
               </p>
               <p className="timmerTag">
                  {" "}
                  <WatchLaterIcon sx={{ fontSize: 20 }} /> Fast
               </p>
            </div>
            <img src={img} className="banner" alt="" />
            <div className="featuredTitle">
               <div className="featuredTitleHead">
                  <img src={imgIcon} width={50} alt="Card Icon" />
                  <div>
                     <p className="featuredTitleHeadContent">{tittle}</p>
                     <p className="star">
                        <span>
                           {" "}
                           <StarIcon sx={{ fontSize: 20 }} />
                        </span>
                        {rating}
                     </p>
                  </div>
               </div>{" "}
               <p className={`${isOpen ? "open" : "closed"}`}>
                  {isOpen ? "Open Now" : "Opens Tomarrow"}
               </p>
            </div>
         </div>
      </div>
   );

   return "";
};

FeaturedCard.propTypes = {
   data: PropTypes.shape({
      offer: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      imgIcon: PropTypes.string.isRequired,
      tittle: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      isOpen: PropTypes.bool.isRequired,
   }).isRequired,
};

export default FeaturedCard;
