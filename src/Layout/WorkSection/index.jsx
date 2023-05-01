import React from "react";
import WorkCard from "src/components/Work/WorkCard";
import Location from "../../Assets/Images/WorkImage/Location.svg";
import Order from "../../Assets/Images/WorkImage/Order.svg";
import Pay from "../../Assets/Images/WorkImage/Bill_Slip.svg";
import Meal from "../../Assets/Images/WorkImage/Donut.svg";
import "./WorkSection.css";
import SectionHeader from "src/components/SectionHeader";
const WorkCards = [
   {
      img: {
         png: Location,
      },
      title: "Select Location",
      content: "Choose the location where your food will be delivered",
   },
   {
      img: {
         png: Order,
      },
      title: "Choose order",
      content: "Check over hunderds of menus to pick your favorite food",
   },
   {
      img: {
         png: Pay,
      },
      title: "Pay advanced",
      content:
         "It's quick , safe and simple. Select several methods of payment",
   },
   {
      img: {
         png: Meal,
      },
      title: "Enjoy meals",
      content: "Food is made and delivered directly to your home",
   },
];

function WorkSection() {
   return (
      <div className=" workSectionContainer">
         <header>
            <SectionHeader
               Text="How does it's work"
               className="workSectionHead"
            />
         </header>
         <div className="container workSection">
            {WorkCards.map((item) => (
               <WorkCard
                  key={item.work}
                  img={item.img.png}
                  tittle={item.title}
                  content={item.content}
                  size={item.size}
               />
            ))}
         </div>
      </div>
   );
}

export default WorkSection;
