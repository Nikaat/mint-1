import React from "react";
import { connect } from "react-redux";

import classes from "./Input.module.css";
import * as actionTypes from "../../../../../../redux/actions/actionTypes";

const input = (props) => {
  return (
    <div className={classes.Inputs}>
      <div className={classes.MetricalInput}>
        <div className={classes.Root}>
          <input
            className={classes.Input}
            type="number"
            inputMode="numeric"
            value={props.value}
            onChange={(event) =>
              props.onInputChange(event.target.value, props.scale, props.HorW)
            }
          />
          <span className={classes.Postfix}>{props.scale}</span>
        </div>
      </div>

      <div
        className={classes.ErrorContainer}
        style={{ display: props.inputError === false ? "none" : "block" }}
      >
        <span className={classes.ErrorText}>
          <svg
            viewBox="0 0 12 12"
            width="1em"
            height="1em"
            className={classes.ErrorIcon}
          >
            <path d="M6 3c.33 0 .6.27.6.6V6c0 .33-.27.6-.6.6-.33 0-.6-.27-.6-.6V3.6c0-.33.27-.6.6-.6Zm-.006-3A5.997 5.997 0 0 0 0 6c0 3.312 2.682 6 5.994 6A6.003 6.003 0 0 0 12 6c0-3.312-2.688-6-6.006-6ZM6 10.8A4.799 4.799 0 0 1 1.2 6c0-2.652 2.148-4.8 4.8-4.8 2.652 0 4.8 2.148 4.8 4.8 0 2.652-2.148 4.8-4.8 4.8ZM6.6 9H5.4V7.8h1.2V9Z"></path>
          </svg>
          لطفا مقدار صحیح را وارد کنید.
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    inputError: state.quiz.inputError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (value, scale, HorW) =>
      dispatch({
        type: actionTypes.ON_INPUT_CHANGE,
        value: value,
        scale: scale,
        HorW: HorW,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(input);
