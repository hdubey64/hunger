import React from "react";
import "./Navbar.css";
import Map from "./Assats/map-marker-alt.png";
import Search from "./Assats/Search.png";
import { FaUserAlt } from "react-icons/fa";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        HUN
        <span className="ger">GER</span>
      </div>
      <div className="navbar-mid">
        <span className="del">Deliver to: </span> <img src={Map} /> Current
        Location:
        <span className="location"> Mohammadpur Bus Stand, Dhaka</span>
      </div>
      <div className="navbar-right">
        <span className="sear">
          <img src={Search} /> Search Food
        </span>
        <span>
          <button className="btn">
            <FaUserAlt /> Login
          </button>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
