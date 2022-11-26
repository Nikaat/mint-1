import React from "react";

import classes from "./header.module.css";
import BurgerButton from "../../../Components/UI/BurgerButton/BurgerButton";
import Logo from "../../../assets/images/logo.png";

const header = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.DefaultMobileHeader}>
        <span>
          <img className={classes.Logo} src={Logo} alt="" />
        </span>
        <BurgerButton />
      </div>
    </div>
  );
};

export default header;
