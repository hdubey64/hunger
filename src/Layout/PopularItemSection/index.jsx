import React, { useRef } from "react";
import ItemCard from "src/components/ItemCard";
import burger from "src/Assets/Images/PopulerItems/Cheese_Burger.png";
import sandwich from "src/Assets/Images/PopulerItems/Crispy_Sandwitch.png";
import dancake from "src/Assets/Images/PopulerItems/DanCake.png";
import soup from "src/Assets/Images/PopulerItems/Thai _Soup.png";
import toffe from "src/Assets/Images/PopulerItems/Toffe's_cake.png";
import "./popularItemSection.css";
import ArrowButton from "src/components/ArrowButton";
import LeftArrow from "src/Assets/Images/Icons/IconLeftArraow.svg";
import RightArrow from "src/Assets/Images/Icons/IconRightArrow.svg";
import SectionHeader from "src/components/SectionHeader";

const PopularItemSection = () => {
   const scrollContainerRef = useRef(null);
   const handleLeftButtonClick = () => {
      scrollContainerRef.current.scrollLeft -= 250;
   };
   const handleRightButtonClick = () => {
      scrollContainerRef.current.scrollLeft += 250;
   };

   const moneyData = [
      {
         img: {
            png: burger,
         },
         name: "Cheese Burger",
         restaurentName: "Burger Arena",
         price: "$3.88",
      },
      {
         img: {
            png: toffe,
         },
         name: "Toffe's cake",
         restaurentName: "Top Sticks",
         price: "$3.88",
      },

      {
         img: {
            png: dancake,
         },
         name: "Dancake",
         restaurentName: "Cake World",
         price: "$1.99",
      },
      {
         img: {
            png: sandwich,
         },
         name: "Crispy Sandwitch",
         restaurentName: "FastFood Dine",
         price: "$3.00",
      },
      {
         img: {
            png: soup,
         },
         name: "Thai Soup",
         restaurentName: "Foody Man",
         price: "$2.79",
      },
   ];

   return (
      <div className="popularItemSectionContent container">
         <SectionHeader className="center" Text="Popular Items" />
         <div className="scroll-container" ref={scrollContainerRef}>
            <div className="scroll-content">
               {moneyData.map((item) => (
                  <ItemCard
                     key={item.img}
                     img={item.img.png}
                     name={item.name}
                     restaurentName={item.restaurentName}
                     price={item.price}
                  />
               ))}
            </div>
         </div>

         <ArrowButton
            img={LeftArrow}
            customClass="leftButton"
            onClick={handleLeftButtonClick}
         />

         <ArrowButton
            img={RightArrow}
            customClass="rightButton"
            onClick={handleRightButtonClick}
         />
      </div>
   );
};

export default PopularItemSection;
