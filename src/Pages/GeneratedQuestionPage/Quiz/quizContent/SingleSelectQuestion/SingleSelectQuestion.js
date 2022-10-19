import React from "react";

import classes from "./SingleSelectQuestion.module.css";
import QuizCard from "../quizCard/quizCard";
import QuizImageCard from "../quizImageCard/quizImageCard";

const SingleSelectQuestion = (props) => {
  let dataCard = props.dataCard;

  return (
    <div className={classes.QuizContent}>
      <div className={classes.Header}>
        <h1 className={classes.HeaderTitle}>{props.header}</h1>
      </div>
      <section className={classes.QuestionsSection}>
        {!props.optionwithimage
          ? dataCard.map((opt) => (
              <QuizCard
                {...opt}
                key={opt.dataCardId}
                idx={opt.dataCardIdx}
                onAnswer={props.onAnswer}
                isAnswered={props.isAnswered}
              />
            ))
          : dataCard.map((opt) => (
              <QuizImageCard
                {...opt}
                key={opt.dataCardId}
                idx={opt.dataCardIdx}
                onAnswer={props.onAnswer}
                isAnswered={props.isAnswered}
              />
            ))}
      </section>
    </div>
  );
};

export default SingleSelectQuestion;
