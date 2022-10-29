import React, { Component } from "react";

import { Questions } from "./Questions";
import classes from "./QuizPage.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Quiz from "./Quiz/Quiz";
import { Navigate } from "react-router";
import { connect } from "react-redux";
import { fetchData } from "../../redux/actions";

class QuizPage extends Component {
  componentDidMount = () => {
    this.props.fetchData();
  };

  render() {
    return (
      <Auxiliary>
        <div className={classes.Container}>
          <div
            className={classes.ImageContainer}
            style={{
              background:
                "linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.25))",
            }}
          >
            <img
              className={classes.LeftImage}
              {...Questions[this.props.qNum].leftImage}
              alt=""
            />
          </div>
          <div className={classes.ContentContainer}>
            <Quiz result={this.props.result} />
            <img
              className={classes.RightImage}
              {...Questions[this.props.qNum].rightImage}
              alt=""
            />
          </div>
        </div>
        {this.props.isGenderSelected === false ? <Navigate to="/" /> : null}
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => ({
  qNum: state.quiz.questionNum,
  isGenderSelected: state.genderSel.isAnswered,
  code: state.quiz.code,
  aid: state.quiz.aid,
  result: state.quiz.result,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
