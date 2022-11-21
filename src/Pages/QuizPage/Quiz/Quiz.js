import React, { useEffect } from "react";

import classes from "./Quiz.module.css";
import QuizIndicator from "./quizIndicator/quizIndicator";
import ProgressContainer from "./progressContainer/progressContainer";
import QuizContent from "./quizContent/quizContent";

const Quiz = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.QuizContainer}>
      <div className={classes.Indicator}>
        <QuizIndicator result={props.result} />
      </div>
      <ProgressContainer result={props.result} currentProgress />
      <QuizContent result={props.result} />
    </div>
  );
};

export default Quiz;
