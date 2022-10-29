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
      {props.video ? <Video src={props.video.src} /> : null}
      <section className={classes.QuestionsSection}>
        {/* {!props.optionwithimage */}
        {props.dataCard
          ? dataCard.map((opt, index) => (
              <QuizCard
                {...opt}
                idx={index}
                key={opt.aid}
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
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  qNum: state.quiz.questionNum,
});

const mapDispatchToProps = (dispatch) => ({
  onSingleAnswer: (aid, index, code) =>
    dispatch(clickedonQuizCard(aid, index, code)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleSelectQuestion);
