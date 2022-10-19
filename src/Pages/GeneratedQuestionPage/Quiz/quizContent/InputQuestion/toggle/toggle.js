import React from "react";

import classes from "./toggle.module.css";

const toggle = (props) => {
  let option;
  props.scale === "FT"
    ? (option = [classes.Active, classes.Disable])
    : (option = [classes.Disable, classes.Active]);

  return (
    <div className={classes.Container}>
      <button
        className={option[0]}
        type="button"
        onClick={() => props.onScaleChange()}
      >
        FT
      </button>
      <button
        className={option[1]}
        type="button"
        onClick={() => props.onScaleChange()}
      >
        CM
      </button>
    </div>
  );
};

export default toggle;
