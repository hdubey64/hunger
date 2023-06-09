import React from "react";
import "./sectionHead.css";

const SectionHeader = ({ Text, className }) => {
   return (
      <div className={`container sectionTag ${className}`}>
         <h1 className=" fw-bold fs-1">{Text}</h1>
      </div>
   );
};

export default SectionHeader;
