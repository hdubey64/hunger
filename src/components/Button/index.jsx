import React from "react";
import "./Button.css";

function IconButton({ label, color, onClick, icon }) {
   return (
      <button className={`iconBtn ${color}`} onClick={onClick}>
         {icon && <span className="icon">{icon}</span>}

         {label}
      </button>
   );
}

export default IconButton;
