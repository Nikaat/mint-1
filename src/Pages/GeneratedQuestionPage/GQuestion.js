import React, { Component } from "react";

import { Questions } from "./Questions";
import classes from "./GQuestion.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Quiz from "./Quiz/Quiz";

class GQuestion extends Component {
  state = {
    questionNum: 0,
  };

  answerHandler = () => {
    setTimeout(
      () =>
        this.setState((prevState) => ({
          ...prevState,
          questionNum: prevState.questionNum + 1,
        })),
      1000
    );
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
              className={classes.Image}
              {...Questions[this.state.questionNum].image}
              alt=""
            />
          </div>
          <div className={classes.ContentContainer}>
            <Quiz
              questionNum={this.state.questionNum}
              onAnswer={this.answerHandler}
            />
          </div>
        </div>
      </Auxiliary>
    );
  }
}

export default GQuestion;
