import React from "react";
import "./Hero.css";
import BaseImage from "./Asserts/Image Base.png";
import delivery from "./Asserts/delivery.png";
import pickup from "./Asserts/pickup.png";
import location from "./Asserts/location.png";
import search from "./Asserts/search.png";
import IconButton from "../Button";
import { FaSearch } from "react-icons/fa";

const Hero = (props) => {
  return (
    <div className="hero container-fluid">
      <div className="hero-left">
        <h1 className="hero-head">Are you Starving?</h1>
        <p className="hero-para">
          Within a few Clicks, find meals that are accessible near you
        </p>
        <div className="hero-sub">
          <div className="hero-sub-sub">
            <span>
              <IconButton label="Home" icon={delivery} color="warning" />
            </span>

            <span>
              <IconButton label="Pickup" icon={pickup} color="light" />
            </span>
          </div>
          <div className="search">
            <div className="ser">
              <img src={location} height={25} alt="iconlocation" />
              <input
                className="inp"
                type="text"
                placeholder="Enter Your Address"
                size={60}
              />
            </div>

            <div className="inputSearch">
              <IconButton label="Find Food" color="danger" icon={search} />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img className="baseImg" src={BaseImage} />
      </div>
    </div>
  );
};

export default Hero;
