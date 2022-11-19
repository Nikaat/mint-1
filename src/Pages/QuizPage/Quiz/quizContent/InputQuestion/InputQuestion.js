import React from "react";

import classes from "./InputQuestion.module.css";
import Button from "../../../../../Components/UI/Button/button";
import Hint from "../hint/hint";
import Toggle from "./toggle/toggle";
import Input from "./Input/Input";
import * as actionCreators from "../../../../../redux/actions";
import { connect } from "react-redux";

const InputQuestion = (props) => {
  let inputs;
  let name = "";

  if (props.HorW === "height") {
    if (props.heightScale === "CM") {
      inputs = (
        <Input
          HorW={props.HorW}
          value={props.inputValue.height_cm}
          scale="cm"
        />
      );
      name = "height_cm";
    } else {
      inputs = (
        <div className={classes.InputRow}>
          <Input
            HorW={props.HorW}
            value={props.inputValue.height_ft}
            scale="ft"
          />
          <Input
            HorW={props.HorW}
            value={props.inputValue.height_in}
            scale="in"
          />
        </div>
      );
      name = "height_ft,height_in";
    }
  } else {
    if (props.weightScale === "KG") {
      inputs = <Input value={props.inputValue.weight_kg} scale="kg" />;
      name = "weight_kg";
    } else {
      inputs = (
        <div className={classes.InputRow}>
          <Input value={props.inputValue.weight_lbs} scale="lbs" />
        </div>
      );
      name = "weight_lbs";
    }
  }

  return (
    <div className={classes.QuizContent}>
      <div className={classes.Header}>
        <h1 className={classes.HeaderTitle}>{props.header}</h1>
      </div>
      <form className={classes.Form}>
        <Toggle className={classes.Toggle} HorW={props.HorW} />
        {inputs}

        <div className={classes.FormBtnContainer}>
          <Button
            text="ادامه"
            onAnswer={() => props.clickedonButton(props.aid, props.code, name)}
          />
        </div>

        {props.hint ? (
          <Hint title={props.hint.title} caption={props.hint.caption} />
        ) : null}
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
    code: state.quiz.code,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickedonButton: (aid, code, name) =>
      dispatch(actionCreators.sendInput(aid, code, name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputQuestion);
