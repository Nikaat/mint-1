import React from "react";

import classes from "./SingleSelectQuestion.module.css";
import QuizCard from "../quizCard/quizCard";

const SingleSelectQuestion = (props) => {
  let dataCard = props.dataCard;

  return (
    <div className={classes.QuizContent}>
      <div className={classes.Header}>
        <h1 className={classes.HeaderTitle}>{props.header}</h1>
      </div>
      <section className={classes.QuestionsSection}>
        {dataCard.map((opt) => (
          <QuizCard {...opt} key={opt.dataCardId} onAnswer={props.onAnswer} />
        ))}
      </section>
    </div>
  );
};

export default SingleSelectQuestion;
