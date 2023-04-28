import React from "react";
import "./WorkCard.css";

function WorkCard({ img = "", tittle = "", content = "", size = "100px" }) {
  return (
    <div className="workContent">
      <div className="workBanner">
        <img src={img} width={size} alt="" />
      </div>
      <div className="workAbout">
        <p className="workHeadTag">{tittle}</p>
        <p className="workHeadPara">{content}</p>
      </div>
    </div>
  );
}

export default WorkCard;
