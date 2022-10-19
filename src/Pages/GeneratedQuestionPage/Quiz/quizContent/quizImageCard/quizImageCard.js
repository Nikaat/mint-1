import React from "react";

import classes from "./quizImageCard.module.css";
import redCheckmark from "../../../../../assets/images/Red-checkmark.PNG";

const quizImageCard = (props) => {
  let cardStyle;
  cardStyle =
    props.isAnswered === props.idx
      ? [classes.QuizCardContainer, classes.Answer].join(" ")
      : [classes.QuizCardContainer];

  return (
    <div className={cardStyle}>
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

export default quizImageCard;
