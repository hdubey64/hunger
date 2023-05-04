import React from "react";
import OfferCard from "../../components/OfferCard";
import "./style.css";
import { offerSectionData } from "src/data";

const OfferSection = () => {
   return (
      <div className="main container mt-5">
         {offerSectionData.map((item) => (
            <OfferCard data={item} key={item.offer} />
         ))}
      </div>
   );
};

export default OfferSection;
