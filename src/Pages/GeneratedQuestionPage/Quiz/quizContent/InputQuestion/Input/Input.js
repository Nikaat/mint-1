import React from "react";

import classes from "./Input.module.css";

const input = (props) => {
  return (
    <div className={classes.HeightInputs}>
      <div className={classes.HeightMetricalInput}>
        <div className={classes.Root}>
          <input
            className={classes.Input}
            type="number"
            inputMode="numeric"
            value={props.value}
            onChange={(event) =>
              props.onInputChange(event.target.value, props.scale)
            }
          />
          <span className={classes.Postfix}>{props.scale}</span>
        </div>
      </div>
    </div>
  );
};

export default input;
