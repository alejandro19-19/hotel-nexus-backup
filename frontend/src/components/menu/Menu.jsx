import { useState } from "react";
import "./menu.scss";
import { Settings } from "../settings/Settings";

const Menu = () => {

  return (
    <div className="Menu">
      <div className="container__menu">
        <Settings />
      </div>
    </div>
  );
};

export default Menu;
