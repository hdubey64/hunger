import React from "react";
import OfferCard from "../../components/OfferCard";
import "./style.css";
import PicOne from "src/Assets/Images/Image-15.png";
import PicTwo from "src/Assets/Images/Image-10.png";
import PicThree from "src/Assets/Images/Image-25.png";
import PicFour from "src/Assets/Images/Image-20.png";

const cardData = [
   {
      offer: "15",
      img: PicOne,
      cardHead: "Greys Vage",
      offerRemainingTime: "6 Days Remaining",
   },
   {
      offer: "10",
      img: PicTwo,
      cardHead: "Greys Vage",
      offerRemainingTime: "6 Days Remaining",
   },
   {
      offer: "25",
      img: PicThree,
      cardHead: "Greys Vage",
      offerRemainingTime: "7 Days Remaining",
   },
   {
      offer: "20",
      img: PicFour,
      cardHead: "Greys Vage",
      offerRemainingTime: "8 Days Remaining",
   },
];

const OfferSection = () => {
   return (
      <div className="main container mt-5">
         {cardData.map((item) => (
            <OfferCard data={item} key={item.offer} />
         ))}
      </div>
   );
};

export default OfferSection;
