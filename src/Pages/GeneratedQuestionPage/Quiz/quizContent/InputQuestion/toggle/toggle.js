import React from "react";

import classes from "./toggle.module.css";

const toggle = (props) => {
  let option;
  props.scale[0] === "FT"
    ? (option = [classes.Active, classes.Disable])
    : (option = [classes.Disable, classes.Active]);

  props.scale[1] === "LBS"
    ? (option = [classes.Active, classes.Disable])
    : (option = [classes.Disable, classes.Active]);

  return (
    <div className={classes.Container}>
      <button
        className={option[0]}
        type="button"
        onClick={() => props.onScaleChange()}
      >
        {props.param === "height" ? "FT" : "LBS"}
      </button>
      <button
        className={option[1]}
        type="button"
        onClick={() => props.onScaleChange()}
      >
        {props.param === "height" ? "CM" : "KG"}
      </button>
    </div>
  );
};

export default toggle;
