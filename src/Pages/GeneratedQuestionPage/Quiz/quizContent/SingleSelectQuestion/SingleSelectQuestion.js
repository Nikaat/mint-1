import React from "react";

import classes from "./SingleSelectQuestion.module.css";
import QuizCard from "../quizCard/quizCard";
import QuizImageCard from "../quizImageCard/quizImageCard";
import { connect } from "react-redux";
import { clickedonQuizCard } from "../../../../../redux/actions";
import Hint from "../hint/hint";
import Video from "../videoComp/video";

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
                onAnswer={props.onSingleAnswer}
              />
            ))
          : dataCard.map((opt) => (
              <QuizImageCard
                {...opt}
                key={opt.dataCardId}
                idx={opt.dataCardIdx}
                onAnswer={props.onSingleAnswer}
              />
            ))}
        {props.hint ? (
          <Hint title={props.hint.title} caption={props.hint.caption} />
        ) : null}
        {props.video ? <Video src={props.video.src} /> : null}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  qNum: state.quiz.questionNum,
});

const mapDispatchToProps = (dispatch) => ({
  onSingleAnswer: (index, qNum) => dispatch(clickedonQuizCard(index, qNum)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleSelectQuestion);
