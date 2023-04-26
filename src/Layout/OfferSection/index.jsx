import React from "react";
import OfferCard from "../../components/Offer_Card";
import "./style.css";

import PicOne from "src/Assets/Images/Image-15.png";
import PicTwo from "src/Assets/Images/Image-10.png";
import PicThree from "src/Assets/Images/Image-25.png";
import PicFour from "src/Assets/Images/Image-20.png";

const cardData = [
   {
      offer: "15",
      img: {
         png: PicOne,
      },
      cardHead: "Greys Vage",
      offerRemainingTime: "6 Days Remaining",
   },
   {
      offer: "10",
      img: {
         png: PicTwo,
      },
      cardHead: "Greys Vage",
      offerRemainingTime: "6 Days Remaining",
   },
   {
      offer: "25",
      img: {
         png: PicThree,
      },
      cardHead: "Greys Vage",
      offerRemainingTime: "7 Days Remaining",
   },
   {
      offer: "20",
      img: {
         png: PicFour,
      },
      cardHead: "Greys Vage",
      offerRemainingTime: "8 Days Remaining",
   },
];

const OfferSection = () => {
   return (
      <div>
         <div className="main container">
            {cardData.map((item) => (
               <OfferCard
                  key={item.offer}
                  offer={item.offer}
                  img={item.img.png}
                  cardHead={item.cardHead}
                  offerRemainingTime={item.offerRemainingTime}
               />
            ))}
         </div>
      </div>
   );
};

export default OfferSection;
