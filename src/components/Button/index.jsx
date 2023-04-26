import React from "react";
import "./Button.css";

function IconButton(props) {
  return (
    <button className="icon-button" onClick={props.onClick}>
      <span className="icon">
        <img src={props.icon} />
      </span>

      {props.label}
    </button>
  );
}

export default IconButton;
