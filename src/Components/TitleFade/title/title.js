import React from "react";

import classes from "./title.module.css";

const title = (props) => {
  console.log(props.delayTime);
  console.log(props.text);
  return (
    <li
      className={classes.Li}
      key={props.text}
      style={{ "--delay-time": props.delayTime }}
    >
      {props.text}
    </li>
  );
};

export default title;
