import React from "react";
import "./Button.css";

function IconButton({ label, color, onClick, icon, iconPostion = "start" }) {
   return (
      <button className={`iconBtn ${color}`} onClick={onClick}>
         {icon && iconPostion === "start" && (
            <span className="icon">{icon}</span>
         )}

         {label}
         {icon && iconPostion === "end" && (
            <span className="icon iconEnd">{icon}</span>
         )}
      </button>
   );
}

export default IconButton;
