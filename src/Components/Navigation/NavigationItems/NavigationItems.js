import React from "react";

import DrawerToggle from "../DrawerToggle/DrawerToggle";
import classes from "./NavigationItems.module.css";

const navigationItems = () => {
  return (
    <nav className={classes.Container}>
      <span className={classes.Logo}>
        <a href="/">
          <img
            className={classes.Logo}
            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,q_auto:eco/ks5dfptxqjo4x8iguaba"
            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,q_auto:eco/ks5dfptxqjo4x8iguaba 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,q_auto:eco/ks5dfptxqjo4x8iguaba 2x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_3.0,q_auto:eco/ks5dfptxqjo4x8iguaba 3x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_4.0,q_auto:eco/ks5dfptxqjo4x8iguaba 4x"
            alt=""
          />
        </a>
      </span>
      <DrawerToggle />
    </nav>
  );
};

export default navigationItems;
