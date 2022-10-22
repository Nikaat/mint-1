import React, { Component } from "react";

import { Questions } from "./Questions";
import classes from "./GQuestion.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Quiz from "./Quiz/Quiz";
import { Navigate } from "react-router";
import { connect } from "react-redux";

class GQuestion extends Component {
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
            <Quiz questionNum={this.props.qNum} />
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
});

export default connect(mapStateToProps)(GQuestion);
