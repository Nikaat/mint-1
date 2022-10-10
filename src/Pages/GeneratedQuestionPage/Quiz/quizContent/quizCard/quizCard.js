import React from "react";

import classes from "./quizCard.module.css";

const quizCard = (props) => {
  return (
    <div
      data-card-id="1802"
      data-card-idx="0"
      className={classes.QuizCardContainer}
    >
      <article className={classes.QuizCard}>
        <div className={classes.QuizCardContent}>
          <div className={classes.QuizCardHeader}>{props.cardHeader}</div>
          <div className={classes.QuizCardDescription}>{props.description}</div>
        </div>
        <span className={classes.IsTransparent}>
          <input
            className={classes.Checkbox}
            readOnly=""
            type="checkbox"
            data-checkbox="generated-single-select-question"
          />
        </span>
      </article>
    </div>
  );
};

export default quizCard;
