import React from "react";
import "./SearchByFood.css";
import ArrowButton from "src/components/ArrowButton";
import RightArrow from "src/Assets/Images/Icons/IconRightArrow.svg";
import LeftArrow from "src/Assets/Images/Icons/IconLeftArraow.svg";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import SectionHeader from "../SectionHeader";

function SearchByFood() {
  return (
    <div className=" border searchByFoodHead">
      <div className="container">
        <div className="searchByFoodMain">
          <SectionHeader Text="Search By Food" />

          <div className="searchView">
            <p>
              View All <FaAngleRight />
            </p>
            <div className="arrowView">
              <ArrowButton img={LeftArrow} customClass="sliderButton" />
              <ArrowButton img={RightArrow} customClass="sliderButton" />
            </div>
          </div>
        </div>
        <div className="searchFooter">
          <div>
            <img
              src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg"
              alt=""
            />
            <p>pizza</p>
          </div>
          <div>
            <img
              src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg"
              alt=""
            />
            <p>pizza</p>
          </div>
          <div>
            <img
              src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg"
              alt=""
            />
            <p>pizza</p>
          </div>
          <div>
            <img
              src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg"
              alt=""
            />
            <p>pizza</p>
          </div>
          <div>
            <img
              src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg"
              alt=""
            />
            <p>pizza</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchByFood;
