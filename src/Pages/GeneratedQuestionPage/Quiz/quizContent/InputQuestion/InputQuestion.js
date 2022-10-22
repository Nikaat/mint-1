import React from "react";

import classes from "./InputQuestion.module.css";
import Button from "../../../../../Components/UI/Button/button";
import Toggle from "./toggle/toggle";
import Input from "./Input/Input";
import { clickedonNextButton } from "../../../../../redux/actions";
import { connect } from "react-redux";

const InputQuestion = (props) => {
  let inputs;

  inputs =
    props.qNum === 2 ? (
      props.heightScale === "CM" ? (
        <Input value={props.inputValue.height_cm} scale="cm" />
      ) : (
        <div className={classes.InputRow}>
          <Input value={props.inputValue.height_ft} scale="ft" />
          <Input value={props.inputValue.height_in} scale="in" />
        </div>
      )
    ) : props.qNum === 3 || 4 ? (
      props.weightScale === "KG" ? (
        <Input
          value={
            props.qNum === 3
              ? props.inputValue.weight_current_kg
              : props.inputValue.weight_goal_kg
          }
          scale="kg"
        />
      ) : (
        <div className={classes.InputRow}>
          <Input
            value={
              props.qNum === 3
                ? props.inputValue.weight_current_lbs
                : props.inputValue.weight_goal_lbs
            }
            scale="lbs"
          />
        </div>
      )
    ) : null;

  return (
    <div className={classes.QuizContent}>
      <div className={classes.Header}>
        <h1 className={classes.HeaderTitle}>{props.header}</h1>
      </div>
      <form className={classes.Form}>
        <Toggle className={classes.Toggle} />
        {inputs}

        <div className={classes.FormBtnContainer}>
          <Button
            text="NEXT STEP"
            onAnswer={() => props.clickedonButton(props.qNum)}
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    qNum: state.quiz.questionNum,
    heightScale: state.quiz.heightScale,
    weightScale: state.quiz.weightScale,
    inputValue: state.quiz.inputValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickedonButton: (qNum) => dispatch(clickedonNextButton(qNum)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputQuestion);
