import React from "react";
import { connect } from "react-redux";

import classes from "./quizImageCard.module.css";
import redCheckmark from "../../../../../assets/images/Red-checkmark.PNG";

const quizImageCard = (props) => {
  let cardStyle;
  let cardStyles = [null, null, null, null, null, null, null];

  if (props.multiSelect === "true") {
    for (let i = 0; i < 7; i++) {
      cardStyles[i] =
        props.answerIndexes[i] !== null
          ? [classes.Answer]
          : [classes.QuizCardContainer];
    }
  } else if (props.multiSelect !== "true") {
    cardStyle =
      props.answerIndex === props.idx
        ? [classes.QuizCardContainer, classes.Answer].join(" ")
        : [classes.QuizCardContainer];
  }

  return (
    <article
      className={
        props.multiSelect === "true" ? cardStyles[props.idx] : cardStyle
      }
      onClick={() => props.onAnswer(props.idx, props.qNum)}
    >
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
      {props.multiSelect ? (
        props.answerIndexes[props.idx] !== null ? (
          <img src={redCheckmark} alt="" className={classes.RedCheckmark} />
        ) : null
      ) : props.answerIndex === props.idx ? (
        <img src={redCheckmark} alt="" className={classes.RedCheckmark} />
      ) : null}
    </article>
  );
};

const mapStateToProps = (state) => ({
  qNum: state.quiz.questionNum,
  answerIndex: state.quiz.answerIndex,
  answerIndexes: state.quiz.answerIndexes,
});

export default connect(mapStateToProps)(quizImageCard);
