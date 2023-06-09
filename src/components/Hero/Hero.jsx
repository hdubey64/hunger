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
            <div
               className="heroMainLeft"
               data-aos="fade-right"
               data-aos-anchor="#example-anchor"
               data-aos-offset="500"
               data-aos-duration="1000"
            >
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
                  <img
                     src={BaseImage}
                     alt="Hero Banner"
                     data-aos="fade-left"
                     data-aos-anchor="#example-anchor"
                     data-aos-offset="500"
                     data-aos-duration="1000"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
