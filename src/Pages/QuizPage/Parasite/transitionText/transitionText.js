import React from "react";

import classes from "./transitionText.module.css";

const transitionText = (props) => {
  return (
    <div
      key="transitionText"
      className={classes.Element}
      style={{ position: "relative" }}
    >
      <div className={classes.TransitionText}>
        <h3 className={classes.TransitionText1}>{props.inputs.texts[0]}</h3>
        <h3 className={classes.TransitionText2}>{props.inputs.texts[1]}</h3>
      </div>
    </div>
  );
};

export default transitionText;
