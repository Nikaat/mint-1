import React from "react";

import classes from "./SingleSelectQuestion.module.css";
import QuizCard from "../quizCard/quizCard";
import QuizImageCard from "../quizImageCard/quizImageCard";
import { connect } from "react-redux";
import { clickedonQuizCard } from "../../../../../redux/actions";
import Hint from "../hint/hint";

const SingleSelectQuestion = (props) => {
  let dataCard = props.dataCard;

  return (
    <div className={classes.QuizContent}>
      {props.image !== "" ? (
        <img className={classes.Image} src={props.image} alt=" " />
      ) : null}
      {props.video ? (
        <video src={props.video} className={classes.Video} controls autoPlay />
      ) : null}
      <div className={classes.Header}>
        <h1 className={classes.HeaderTitle}>{props.header}</h1>
        {props.description !== "" ? (
          <h3 className={classes.HeaderDescription}>{props.description}</h3>
        ) : null}
      </div>
      <section className={classes.QuestionsSection}>
        {dataCard.map((opt, index) =>
          opt.image !== "" ? (
            <QuizImageCard
              {...opt}
              idx={index}
              key={opt.aid + index}
              image={opt.image}
              onAnswer={props.onSingleAnswer}
            />
          ) : (
            <QuizCard
              {...opt}
              idx={index}
              key={opt.aid + index}
              backgroundImg={props.borderImage}
              onAnswer={props.onSingleAnswer}
            />
          )
        )}
        {props.hint.caption !== "" ? (
          <Hint title={props.hint.title} caption={props.hint.caption} />
        ) : null}
      </section>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSingleAnswer: (index, aid, code) =>
    dispatch(clickedonQuizCard(index, aid, code)),
});

export default connect(null, mapDispatchToProps)(SingleSelectQuestion);
