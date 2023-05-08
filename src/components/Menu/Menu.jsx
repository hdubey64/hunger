import React from "react";
import "./Menu.css";
import IconButton from "../Button";

const Menu = ({ data }) => {
  const { header, header2, para, img } = data;
  return (
    <div className="menu-sub">
      <div className="menu-left">
        <div className="menu-left-content">
          <h1>
            {header}
            <span className="content-head">{header2}</span>
          </h1>
          <p>{para}</p>
        </div>
        <div className="menu-left-button">
          <IconButton label="proceed to order" color="order-btn" />
        </div>
      </div>
      <div className="menu-right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Menu;
