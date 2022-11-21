import React from "react";

import classes from "./hint.module.css";

const hint = (props) => {
  return (
    <div className={classes.HintContainer}>
      {props.title !== "" ? (
        <div className={classes.HintTitle}>
          <h1>{props.title}</h1>
          <hr className={classes.HR} />
        </div>
      ) : null}
      <div className={classes.HintCaption}>
        <div dangerouslySetInnerHTML={{ __html: props.caption }} />
      </div>
    </div>
  );
};

export default hint;
