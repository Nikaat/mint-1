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
              props.onInputChange(event.target.value, props.scale, props.qNum)
            }
          />
          <span className={classes.Postfix}>{props.scale}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    qNum: state.quiz.questionNum,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (value, scale, qNum) =>
      dispatch({
        type: actionTypes.ON_INPUT_CHANGE,
        value: value,
        scale: scale,
        qNum: qNum,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(input);
