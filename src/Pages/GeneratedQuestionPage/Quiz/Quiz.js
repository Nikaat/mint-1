import React from "react";

import classes from "./Quiz.module.css";
import QuizIndicator from "./quizIndicator/quizIndicator";
import ProgressContainer from "./progressContainer/progressContainer";
import QuizContent from "./quizContent/quizContent";

const quiz = (props) => {
  return (
    <div className={classes.QuizContainer}>
      <div className={classes.Indicator}>
        <QuizIndicator />
      </div>
      <ProgressContainer />
      <QuizContent />
    </div>
  );
};

export default quiz;
