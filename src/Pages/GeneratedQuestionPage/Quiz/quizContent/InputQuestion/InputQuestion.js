import React from "react";

import classes from "./InputQuestion.module.css";
import Button from "../../../../../Components/UI/Button/button";
import Toggle from "./toggle/toggle";
import Input from "./Input/Input";

const InputQuestion = (props) => {
  return (
    <div className={classes.QuizContent}>
      <div className={classes.Header}>
        <h1 className={classes.HeaderTitle}>{props.header}</h1>
      </div>
      <form className={classes.Form}>
        <Toggle
          className={classes.Toggle}
          scale={props.scale}
          onScaleChange={props.onScaleChange}
        />
        {props.scale === "CM" ? (
          <Input
            param={props.param}
            scale="cm"
            inputValue={props.inputValue}
            onInputChange={props.onInputChange}
          />
        ) : (
          <div className={classes.InputRow}>
            <Input
              param={props.param}
              scale="ft"
              inputValue={props.inputValue}
              onInputChange={props.onInputChange}
            />
            <Input
              param={props.param}
              scale="in"
              inputValue={props.inputValue}
              onInputChange={props.onInputChange}
            />
          </div>
        )}

        <div className={classes.FormBtnContainer}>
          <Button text="NEXT STEP" onAnswer={props.onInputAnswer} />
        </div>
      </form>
    </div>
  );
};

export default InputQuestion;
