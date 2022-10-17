import React from "react";

import classes from "./quizCard.module.css";
import redCheckmark from "../../../../../assets/images/Red-checkmark.PNG";

const quizCard = (props) => {
  return (
    <div className={classes.QuizCardContainer}>
      <article
        className={classes.QuizCard}
        onClick={() => props.onAnswer(props.idx)}
      >
        <div className={classes.QuizCardContent}>
          <div className={classes.QuizCardHeader}>{props.cardHeader}</div>
          <div className={classes.QuizCardDescription}>{props.description}</div>
        </div>
        {props.isAnswered === props.idx ? (
          <img src={redCheckmark} alt="" className={classes.RedCheckmark} />
        ) : null}
      </article>
    </div>
  );
};

export default quizCard;
