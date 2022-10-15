import React from "react";

import classes from "./Quiz.module.css";
import QuizIndicator from "./quizIndicator/quizIndicator";
import ProgressContainer from "./progressContainer/progressContainer";
import QuizContent from "./quizContent/quizContent";
import { Questions } from "../Questions";

const quiz = (props) => {
  let questionNum = props.questionNum;

  return (
    <div className={classes.QuizContainer}>
      <div className={classes.Indicator}>
        <QuizIndicator barFilled={Questions[questionNum].barFilled} />
      </div>
      <ProgressContainer
        onArrow={props.onArrow}
        currentProgress={Questions[questionNum].currentProgress}
      />
      <QuizContent
        isAnswered={props.isAnswered}
        onAnswer={props.onAnswer}
        questionType={Questions[questionNum].questionType}
        header={Questions[questionNum].header}
        dataCard={Questions[questionNum].dataCard}
      />
    </div>
  );
};

export default quiz;
