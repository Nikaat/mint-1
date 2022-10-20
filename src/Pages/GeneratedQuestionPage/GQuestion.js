import React, { Component } from "react";

import { Questions } from "./Questions";
import classes from "./GQuestion.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Quiz from "./Quiz/Quiz";
// import { Navigate } from "react-router";
import { connect } from "react-redux";

class GQuestion extends Component {
  state = {
    heightscale: "FT",
    weightscale: "LBS",
    inputValue: {
      ftvalue: "",
      invalue: "",
      cmvalue: "",
      lbsvalue: "",
      kgvalue: "",
    },
  };

  scaleHandler = () => {
    if (this.state.heightscale === "FT") {
      this.setState({ heightscale: "CM" });
    } else {
      this.setState({ heightscale: "FT" });
    }
    if (this.state.weightscale === "LBS") {
      this.setState({ weightscale: "KG" });
    } else {
      this.setState({ weightscale: "LBS" });
    }
  };

  inputChangeHandler = (value, scale) => {
    switch (scale) {
      case "ft":
        this.setState((prevState) => ({
          inputValue: {
            ...prevState.inputValue,
            ftvalue: value,
          },
        }));
        break;
      case "in":
        this.setState((prevState) => ({
          inputValue: {
            ...prevState.inputValue,
            invalue: value,
          },
        }));
        break;
      case "cm":
        this.setState((prevState) => ({
          inputValue: {
            ...prevState.inputValue,
            cmvalue: value,
          },
        }));
        break;
      case "lbs":
        this.setState((prevState) => ({
          inputValue: {
            ...prevState.inputValue,
            lbsvalue: value,
          },
        }));
        break;
      case "kg":
        this.setState((prevState) => ({
          inputValue: {
            ...prevState.inputValue,
            kgvalue: value,
          },
        }));
        break;
      default:
        break;
    }
  };

  inputAnswerHandler = () => {
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
              className={classes.LeftImage}
              {...Questions[this.props.qNum].leftImage}
              alt=""
            />
          </div>
          <div className={classes.ContentContainer}>
            <Quiz
              questionNum={this.props.qNum}
              onInputAnswer={this.inputAnswerHandler}
              scale={[this.state.heightscale, this.state.weightscale]}
              onScaleChange={this.scaleHandler}
              inputValue={this.state.inputValue}
              onInputChange={this.inputChangeHandler}
            />
            <img
              className={classes.RightImage}
              {...Questions[this.props.qNum].rightImage}
              alt=""
            />
          </div>
        </div>
        {/* {this.props.arrowRedirectPath !== null ? (
          <Navigate to={this.props.arrowRedirectPath} />
        ) : null} */}
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => ({
  qNum: state.quiz.questionNum,
  arrowRedirectPath: state.quiz.arrowRedirectPath,
});

export default connect(mapStateToProps)(GQuestion);
