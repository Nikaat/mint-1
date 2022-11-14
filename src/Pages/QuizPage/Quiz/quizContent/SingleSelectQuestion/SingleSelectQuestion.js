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
      {props.image !== "" ? (
        <img className={classes.Image} src={props.image} alt=" " />
      ) : null}
      {props.video ? <Video src={props.video.src} /> : null}
      <div className={classes.Header}>
        <h1 className={classes.HeaderTitle}>{props.header}</h1>
      </div>
      <section className={classes.QuestionsSection}>
        {dataCard.map((opt, index) =>
          opt.image !== "" ? (
            <QuizImageCard
              {...opt}
              idx={index}
              key={opt.aid}
              image={opt.image}
              onAnswer={props.onSingleAnswer}
            />
          ) : (
            <QuizCard
              {...opt}
              idx={index}
              key={opt.aid}
              onAnswer={props.onSingleAnswer}
            />
          )
        )}
        {props.hint ? <Hint caption={props.hint} /> : null}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  qNum: state.quiz.questionNum,
});

const mapDispatchToProps = (dispatch) => ({
  onSingleAnswer: (index, aid, code) =>
    dispatch(clickedonQuizCard(index, aid, code)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleSelectQuestion);
