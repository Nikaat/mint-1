import React from "react";

import classes from "./icon.module.css";

const icon = (props) => {
  return (
    <div
      key="image"
      className={classes.Element}
      style={{
        justifyContent:
          props.inputs.textAlign !== "" ? props.inputs.textAlign : "right",
      }}
    >
      <img src={props.inputs.link} className={classes.Icon} alt="" />
    </div>
  );
};

export default icon;
