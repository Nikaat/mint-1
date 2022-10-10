import React from "react";

import classes from "./quizIndicator.module.css";

const quizIndicator = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Bar}>
        <div className={classes.BarFilled} style={{ width: "5.88235%" }}></div>
      </div>
    </div>
  );
};

export default quizIndicator;
