import React from "react";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import IconButton from "src/components/Button";
import FeaturedCard from "src/components/FeaturedCard";
import "./featuredSection.css";
import SectionHeader from "src/components/SectionHeader";

const FeaturedSection = () => {
   return (
      <div className="featuredMain container">
         <header>
            {" "}
            <SectionHeader Text="Featured Restaurants" />
         </header>

         <div className="featuredContent">
            <FeaturedCard />
         </div>
         <footer>
            <IconButton
               label="View All"
               color="featuredBtn "
               icon={<FaAngleRight />}
               iconPostion="end"
            />
         </footer>
      </div>
   );
};

export default FeaturedSection;
