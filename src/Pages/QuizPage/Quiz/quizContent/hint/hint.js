import React from "react";

import classes from "./hint.module.css";

const hint = (props) => {
  return (
    <div className={classes.HintContainer}>
      <div className={classes.HintTitle}>
        <h1>{props.title}</h1>
      </div>
      <hr className={classes.HR} />
      <div className={classes.HintCaption}>
        <p>{props.caption}</p>
      </div>
    </div>
  );
};

export default hint;
