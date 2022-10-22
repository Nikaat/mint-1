import React from "react";
import { connect } from "react-redux";

import classes from "./toggle.module.css";
import * as actionTypes from "../../../../../../redux/actions/actionTypes";

const toggle = (props) => {
  let option;
  props.heightScale === "FT"
    ? (option = [classes.Active, classes.Disable])
    : (option = [classes.Disable, classes.Active]);

  props.weightScale === "LBS"
    ? (option = [classes.Active, classes.Disable])
    : (option = [classes.Disable, classes.Active]);

  return (
    <div className={classes.Container}>
      <button
        className={option[0]}
        type="button"
        onClick={() => props.onScaleChange()}
      >
        {props.qNum === 2 ? "FT" : "LBS"}
      </button>
      <button
        className={option[1]}
        type="button"
        onClick={() => props.onScaleChange()}
      >
        {props.qNum === 2 ? "CM" : "KG"}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    qNum: state.quiz.questionNum,
    heightScale: state.quiz.heightScale,
    weightScale: state.quiz.weightScale,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onScaleChange: () => dispatch({ type: actionTypes.ON_SCALE_CHANGE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(toggle);
