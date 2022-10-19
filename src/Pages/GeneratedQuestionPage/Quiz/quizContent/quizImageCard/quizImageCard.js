import React from "react";

import classes from "./quizImageCard.module.css";
import redCheckmark from "../../../../../assets/images/Red-checkmark.PNG";

const quizImageCard = (props) => {
  let cardStyle =
    props.isAnswered === props.idx
      ? [classes.QuizCardContainer, classes.Answer].join(" ")
      : [classes.QuizCardContainer];

  return (
    <article className={cardStyle} onClick={() => props.onAnswer(props.idx)}>
      <div className={classes.QuizCardContent}>
        <img
          className={classes.Image}
          src={props.optionImage.src}
          srcSet={props.optionImage.srcSet}
          alt=""
        />
        <div className={classes.TextContainer}>
          <div className={classes.QuizCardHeader}>{props.cardHeader}</div>
          <div className={classes.QuizCardDescription}>{props.description}</div>
        </div>
      </div>
      {props.isAnswered === props.idx ? (
        <img src={redCheckmark} alt="" className={classes.RedCheckmark} />
      ) : null}
    </article>
  );
};

export default quizImageCard;
