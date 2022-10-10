import React from "react";

import classes from "./quizContent.module.css";
import SingleSelectQuestion from "../../SingleSelectQuestion/SingleSelectQuestion";
import QuizCard from "./quizCard/quizCard";

const QuizContent = (props) => {
  return (
    <div className={classes.QuizContent}>
      <SingleSelectQuestion />
      <section className={classes.QuestionsSection}>
        <QuizCard
          cardHeader="Lose weight"
          description="Start torching calories and melting fat"
          data-card-id="1802"
          data-card-idx="0"
        />
        <QuizCard
          cardHeader="Gain muscle"
          description="Force your muscles to grow faster"
          data-card-id="1803"
          data-card-idx="1"
        />
        <QuizCard
          cardHeader="Develop healthy habits"
          description="Say no to food cravings and become a healthy eater"
          data-card-id="1804"
          data-card-idx="2"
        />
      </section>
    </div>
  );
};

export default QuizContent;
