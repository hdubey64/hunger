import React from "react";
import "./Hero.css";
import BaseImage from "./Asserts/Image Base.png";
import delivery from "./Asserts/delivery.png";
import pickup from "./Asserts/pickup.png";
import location from "./Asserts/location.png";
import search from "./Asserts/search.png";
import IconButton from "../Button";

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
              <img src={location} />
              <input
                className="inp"
                type="text"
                placeholder="Enter Your Address"
                size={60}
              />
            </div>

            <IconButton label="Find Food" icon={search} color="danger" />
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
