import React from "react";
import "./MenuSection.css";
import Menu from "src/components/Menu/Menu";
import { MenuSectionData } from "src/data";

const MenuSection = () => {
  return (
    <div className="container">
      <div className="MenuSectionMain">
        {MenuSectionData.map((item) => (
          <Menu data={item} key={item.menuItems} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
