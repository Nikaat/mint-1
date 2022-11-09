import React from "react";

import classes from "./BurgerButton.module.css";

const burgerButton = (props) => (
  <button className={classes.BurgerbuttonContainer} data-button="burger-menu">
    <span className={classes.BurgerbuttonDash}></span>
    <span className={classes.BurgerbuttonDash}></span>
    <span className={classes.BurgerbuttonDash}></span>
  </button>
);

export default burgerButton;
