import React from "react";
import { connect } from "react-redux";

import classes from "./GenderSelectionCard.module.css";

const genderSelectioncard = (props) => {
  let selected = props.answerIndex === props.idx ? "white" : "var(--light-red)";

  return (
    <button
      className={classes.Button}
      onClick={() => props.onAnswer(props.idx, props.aid, props.code)}
    >
      <span className={classes.ButtonInner}>
        <img src={props.image} className={classes.ButtonImage} alt="" />
        <span className={classes.ButtonTextContainer}>
          <div className={classes.ButtonText}>
            <span
              className={classes.Checkmark}
              style={{
                backgroundColor: selected,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                className={classes.CheckmarkIcon}
              >
                <path
                  fillRule="evenodd"
                  d="M16.906 6.374a1.193 1.193 0 0 1 1.735 0c.479.499.479 1.307 0 1.806l-8.107 8.446a1.2 1.2 0 0 1-.867.374 1.2 1.2 0 0 1-.868-.374l-3.44-3.557a1.314 1.314 0 0 1 0-1.806 1.193 1.193 0 0 1 1.735 0l2.573 2.654 7.239-7.543Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            {props.text}
          </div>
        </span>
      </span>
    </button>
  );
};

const mapStateToProps = (state) => ({
  answerIndex: state.quiz.answerIndex,
  code: state.quiz.code,
});

export default connect(mapStateToProps)(genderSelectioncard);
