import React from "react";

import classes from "./Input.module.css";

const input = (props) => {
  let inputValue;
  switch (props.scale) {
    case "ft":
      inputValue = props.inputValue.ftvalue;
      break;
    case "in":
      inputValue = props.inputValue.invalue;
      break;
    case "cm":
      inputValue = props.inputValue.cmvalue;
      break;
    default:
      break;
  }
  return (
    <div className={classes.HeightInputs}>
      <div className={classes.HeightMetricalInput}>
        <div className={classes.Root}>
          <input
            className={classes.Input}
            type="number"
            inputMode="numeric"
            value={inputValue}
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
