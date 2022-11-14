import React from "react";

import classes from "./Title.module.css";

const title = (props) => {
  return (
    <li className={classes.Li} key={props.text}>
      {props.text}
    </li>
  );
};

export default title;
