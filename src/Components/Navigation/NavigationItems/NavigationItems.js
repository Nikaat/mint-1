import React from "react";

import DrawerToggle from "../DrawerToggle/DrawerToggle";
import classes from "./NavigationItems.module.css";
import Logoimg from "../../../assets/images/logo.png";

const navigationItems = () => {
  return (
    <nav className={classes.Container}>
      <span className={classes.Logo}>
        <a href="/">
          <img className={classes.Logo} src={Logoimg} alt="" />
        </a>
      </span>
      <DrawerToggle />
    </nav>
  );
};

export default navigationItems;
