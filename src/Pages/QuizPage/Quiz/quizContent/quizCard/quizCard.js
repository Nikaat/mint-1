import React from "react";
import { connect } from "react-redux";

import classes from "./quizCard.module.css";
import redCheckmark from "../../../../../assets/images/Red-checkmark.PNG";

const quizCard = (props) => {
  let cardStyle;
  cardStyle =
    props.answerIndex === props.idx
      ? [classes.QuizCardContainer, classes.Answer].join(" ")
      : [classes.QuizCardContainer];

  return (
    <div className={cardStyle}>
      <article
        className={classes.QuizCard}
        onClick={() => props.onAnswer(props.idx, props.qNum)}
      >
        <div className={classes.QuizCardContent}>
          <div className={classes.QuizCardHeader}>{props.cardHeader}</div>
          <div className={classes.QuizCardDescription}>{props.description}</div>
        </div>
        {props.answerIndex === props.idx ? (
          <img src={redCheckmark} alt="" className={classes.RedCheckmark} />
        ) : null}
      </article>
    </div>
  );
};

const mapStateToProps = (state) => ({
  qNum: state.quiz.questionNum,
  answerIndex: state.quiz.answerIndex,
});

export default connect(mapStateToProps)(quizCard);
