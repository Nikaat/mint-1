import React from "react";

import classes from "./image.module.css";

const image = (props) => {
  return (
    <div key="image" className={classes.Element}>
      <img
        src={props.inputs.link}
        className={classes.Image}
        style={{ float: props.inputs.textAlign }}
        alt=""
      />
    </div>
  );
};

export default image;
