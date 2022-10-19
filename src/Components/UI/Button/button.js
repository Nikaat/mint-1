import React from "react";

import classes from "./button.module.css";

const button = (props) => {
  const go = (e) => {
    e.preventDefault();
    props.onAnswer();
  };

  return (
    <button className={classes.Button} onClick={go}>
      {props.text}
    </button>
  );
};

export default button;
