import React from "react";
import "./Menu.css";
import IconButton from "../Button";
import { Divider } from "@mui/material";

const Menu = ({ data }) => {
  const { header, header2, para, img } = data;
  return (
    <div className="menu-sub">
      <div className="menu-left col-5">
        <div className="menu-left-content">
          <h1>
            {header}
            <span className="content-head">{header2}</span>
          </h1>
          <p>{para}</p>
        </div>
        <div className="menu-left-button">
          <IconButton label="PROCEED TO ORDER" color="order-btn" />
        </div>
      </div>

      <div className="menu-right col-7">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Menu;
