import React from "react";
import "./Hero.css";
import BaseImage from "./Asserts/Image Base.png";
import IconButton from "../Button";
import { FaSearch, FaBiking, FaShoppingBag } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Hero = (props) => {
   return (
      <div className=" hero">
         <div className="heroMain container">
            <div className="heroMainLeft">
               <div className="heroMainLeftTitle">
                  <h1 title="Hero Heading">Are you starving?</h1>
                  <p title="Hero Para">
                     Within a few clicks, find meals that are accessible near
                     you
                  </p>
               </div>
               <div className="heroMainLeftForm">
                  <div className="formButton">
                     <IconButton
                        label="Delivery"
                        icon={<FaBiking size={23} />}
                        color="btnDelivery"
                     />
                     <IconButton
                        label="Pickup"
                        icon={<FaShoppingBag size={20} />}
                        color="btnPickup"
                     />
                  </div>
                  <hr />
                  <div className="formAddress">
                     <input
                        type="text"
                        id="address"
                        name="userAddress"
                        placeholder="Enter Your Address"
                     />
                     <IoLocationSharp className="search-icon" size={25} />
                     <IconButton
                        label="Find Food"
                        icon={<FaSearch />}
                        color="btnColor"
                     />
                  </div>
               </div>
            </div>
            <div className="heroMainRight">
               <div className="banner">
                  <img src={BaseImage} alt="" width={450} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
