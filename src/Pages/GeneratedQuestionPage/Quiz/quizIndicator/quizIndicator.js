import React from "react";

import classes from "./quizIndicator.module.css";

const quizIndicator = (props) => (
  <div className={classes.Container}>
    <div className={classes.Bar}>
      <div
        className={classes.BarFilled}
        style={{ width: props.barFilled }}
      ></div>
    </div>
  </div>
);

export default quizIndicator;
