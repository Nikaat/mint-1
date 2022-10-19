import React from "react";

import classes from "./InputQuestion.module.css";
import Button from "../../../../../Components/UI/Button/button";
import Toggle from "./toggle/toggle";
import Input from "./Input/Input";

const InputQuestion = (props) => {
  let inputs;
  if (props.param === "height") {
    inputs =
      props.scale[0] === "CM" ? (
        <Input
          value={props.inputValue.cmvalue}
          param={props.param}
          scale="cm"
          inputValue={props.inputValue}
          onInputChange={props.onInputChange}
        />
      ) : (
        <div className={classes.InputRow}>
          <Input
            value={props.inputValue.ftvalue}
            param={props.param}
            scale="ft"
            inputValue={props.inputValue}
            onInputChange={props.onInputChange}
          />
          <Input
            value={props.inputValue.invalue}
            param={props.param}
            scale="in"
            inputValue={props.inputValue}
            onInputChange={props.onInputChange}
          />
        </div>
      );
  } else {
    inputs =
      props.scale[1] === "KG" ? (
        <Input
          value={props.inputValue.kgvalue}
          param={props.param}
          scale="kg"
          inputValue={props.inputValue}
          onInputChange={props.onInputChange}
        />
      ) : (
        <div className={classes.InputRow}>
          <Input
            value={props.inputValue.lbsvalue}
            param={props.param}
            scale="lbs"
            inputValue={props.inputValue}
            onInputChange={props.onInputChange}
          />
        </div>
      );
  }

  return (
    <div className={classes.QuizContent}>
      <div className={classes.Header}>
        <h1 className={classes.HeaderTitle}>{props.header}</h1>
      </div>
      <form className={classes.Form}>
        <Toggle
          className={classes.Toggle}
          scale={props.scale}
          param={props.param}
          onScaleChange={props.onScaleChange}
        />
        {inputs}

        <div className={classes.FormBtnContainer}>
          <Button text="NEXT STEP" onAnswer={props.onInputAnswer} />
        </div>
      </form>
    </div>
  );
};

export default InputQuestion;
