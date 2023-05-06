import React from "react";
import "./SearchByFood.css";
import ArrowButton from "src/components/ArrowButton";
import RightArrow from "src/Assets/Images/Icons/IconRightArrow.svg";
import LeftArrow from "src/Assets/Images/Icons/IconLeftArraow.svg";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import SectionHeader from "../SectionHeader";

function SearchByFood({ data }) {
  const { img, searchItems, cardHead } = data;
  return (
    <div className="  searchByFoodHead">
      <div className="searchFooter">
        <img src={img} alt="" />
        <br />
        <p>{cardHead}</p>
      </div>
    </div>
  );
}

export default SearchByFood;
