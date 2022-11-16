import React from "react";

import classes from "./progressContainer.module.css";
import Arrow from "./Arrow/arrow";
import Logoimg from "../../../../assets/images/logo.png";

const progressContainer = (props) => {
  return (
    <div className={classes.ProgressContainer}>
      <Arrow preAid={props.result.preAid} />
      <img className={classes.Logo} src={Logoimg} alt="" />
      {/* <span className={classes.Progress}>
        <span className={classes.CurrentProgress}>{props.currentProgress}</span>
        <span>/</span>17
      </span> */}
    </div>
  );
};

export default progressContainer;
