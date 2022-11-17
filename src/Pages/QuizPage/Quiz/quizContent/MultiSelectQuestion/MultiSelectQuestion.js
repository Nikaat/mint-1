import React from "react";

import classes from "./MultiSelectQuestion.module.css";
import QuizCard from "../quizCard/quizCard";
import QuizImageCard from "../quizImageCard/quizImageCard";
import Button from "../../../../../Components/UI/Button/button";
import { connect } from "react-redux";
import { clickedonNextButton } from "../../../../../redux/actions";
import Auxiliary from "../../../../../hoc/Auxiliary/Auxiliary";
import Hint from "../hint/hint";
import * as actionTypes from "../../../../../redux/actions/actionTypes";

const MultiSelectQuestion = (props) => {
  let dataCard = props.dataCard;

  return (
    <Auxiliary>
      <div className={classes.QuizContent}>
        {props.image !== "" ? (
          <img className={classes.Image} src={props.image} alt=" " />
        ) : null}
        {props.video ? (
          <video
            src={props.video}
            className={classes.Video}
            controls
            autoPlay
          />
        ) : null}
        <div className={classes.Header}>
          <h1 className={classes.HeaderTitle}>{props.header}</h1>
          {props.description !== "" ? (
            <h3 className={classes.HeaderDescription}>{props.description}</h3>
          ) : null}
        </div>
        <section className={classes.QuestionsSection}>
          {!props.optionwithimage
            ? dataCard.map((opt, index) => (
                <QuizCard
                  {...opt}
                  idx={index}
                  key={opt.aid}
                  image={opt.image}
                  onAnswer={props.clickedonMultiSelectCard}
                  backgroundImg={props.borderImage}
                  multiSelect="true"
                />
              ))
            : dataCard.map((opt, index) => (
                <QuizImageCard
                  {...opt}
                  idx={index}
                  key={opt.aid}
                  backgroundImg={props.borderImage}
                  onAnswer={props.clickedonMultiSelectCard}
                  multiSelect="true"
                />
              ))}
        </section>
      </div>
      <div className={classes.FixedButtonContainer}>
        <div className={classes.ButtonContainer}>
          <Button
            text="ادامه"
            onAnswer={() =>
              props.clickedonButton(props.code, props.answerIndexes)
            }
          />
        </div>
      </div>
      {props.hint.caption !== "" ? (
        <Hint title={props.hint.title} caption={props.hint.caption} />
      ) : null}
    </Auxiliary>
  );
};

const mapStateToProps = (state) => {
  return {
    qNum: state.quiz.questionNum,
    code: state.quiz.code,
    answerIndexes: state.quiz.answerIndexes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickedonButton: (code, answerIndexes) =>
      dispatch(clickedonNextButton(code, answerIndexes)),
    clickedonMultiSelectCard: (index, aid) =>
      dispatch({ type: actionTypes.ANSWER_QUESTION, index: index, aid: aid }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiSelectQuestion);
