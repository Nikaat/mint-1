import React from "react";

import classes from "./quizCard.module.css";
import redCheckmark from "../../../../../assets/images/Red-checkmark.PNG";

const quizCard = (props) => {
  return (
    <div
      data-card-id="1802"
      data-card-idx="0"
      className={classes.QuizCardContainer}
    >
      <article className={classes.QuizCard} onClick={() => props.onAnswer()}>
        <div className={classes.QuizCardContent}>
          <div className={classes.QuizCardHeader}>{props.cardHeader}</div>
          <div className={classes.QuizCardDescription}>{props.description}</div>
        </div>
        {props.isAnswered ? (
          <img src={redCheckmark} alt="" className={classes.RedCheckmark} />
        ) : null}
      </article>
    </div>
  );
};

export default quizCard;
