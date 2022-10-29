import React from "react";

import classes from "./Quiz.module.css";
import QuizIndicator from "./quizIndicator/quizIndicator";
import ProgressContainer from "./progressContainer/progressContainer";
import QuizContent from "./quizContent/quizContent";
import { Questions } from "../Questions";

const quiz = (props) => {
  let qNum = props.questionNum;

  return (
    <div className={classes.QuizContainer}>
      <div className={classes.Indicator}>
        <QuizIndicator barFilled={Questions[qNum].barFilled} />
      </div>
      <ProgressContainer currentProgress={Questions[qNum].currentProgress} />
      <QuizContent
        result={props.result}
        questionType={Questions[qNum].questionType}
        header={Questions[qNum].header}
        dataCard={Questions[qNum].dataCard}
        optionwithimage={Questions[qNum].optionwithImage}
        hint={Questions[qNum].hint}
        video={Questions[qNum].video}
      />
    </div>
  );
};

export default quiz;