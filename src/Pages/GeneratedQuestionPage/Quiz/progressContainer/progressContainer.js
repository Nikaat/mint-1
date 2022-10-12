import React from "react";

import classes from "./progressContainer.module.css";
import Arrow from "./Arrow/arrow";

const progressContainer = (props) => {
  return (
    <div className={classes.ProgressContainer}>
      <Arrow onArrow={props.onArrow} />
      <span className={classes.Progress}>
        <span className={classes.CurrentProgress}>{props.currentProgress}</span>
        <span>/</span>17
      </span>
    </div>
  );
};

export default progressContainer;
