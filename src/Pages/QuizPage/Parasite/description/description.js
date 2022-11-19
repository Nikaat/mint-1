import React from "react";

import classes from "./description.module.css";

const description = (props) => {
  return (
    <div className={classes.Element}>
      <div
        className={classes.Description}
        style={{
          textAlign:
            props.inputs.textAlign !== "" ? props.inputs.textAlign : "right",
          fontSize:
            props.inputs.textSize === "big"
              ? "26px"
              : props.inputs.textSize === "small"
              ? "14px"
              : "20px",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: props.inputs.text }} />
      </div>
    </div>
  );
};

export default description;
