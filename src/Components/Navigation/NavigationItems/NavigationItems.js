import React from "react";

import DrawerToggle from "../DrawerToggle/DrawerToggle";
import "./NavigationItems.css";

const navigationItems = (props) => {
  return (
    <nav className="Container">
      <h1>
        <span>Better</span>
        <span className="me">Me.</span>
      </h1>
      <DrawerToggle />
    </nav>
  );
};

export default navigationItems;
