import React from "react";
import "./Navbar.css";
import Map from "./Assats/map-marker-alt.png";
import Search from "./Assats/Search.png";
import { FaUserAlt } from "react-icons/fa";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  // const handleDrawerToggle = () => {
  //   setMobileOpen((prevState) => !prevState);
  // };

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
      <div className="toggle">
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          // onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
