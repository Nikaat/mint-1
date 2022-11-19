import React from "react";

import classes from "./title.module.css";

const title = (props) => {
  return (
    <div
      className={classes.Element}
      style={{
        textAlign:
          props.inputs.textAlign !== "" ? props.inputs.textAlign : "right",
      }}
    >
      <h3
        className={classes.Title}
        style={{
          float:
            props.inputs.textAlign !== "" ? props.inputs.textAlign : "right",
          fontSize:
            props.inputs.textSize === "big"
              ? "32px"
              : props.inputs.textSize === "small"
              ? "22px"
              : "28px",
        }}
      >
        {props.inputs.text}
      </h3>
    </div>
  );
};

export default title;
