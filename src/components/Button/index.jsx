import React from "react";
import "./Button.css";

function IconButton(props) {
  return (
    <button className={`iconBtn ${props.color}`} onClick={props.onClick}>
      <span className="icon">
        <img src={props.icon} alt="iconImg" />
      </span>

      {props.label}
    </button>
  );
}

export default IconButton;
