import React, { Component } from "react";

import { Questions } from "./Questions";
import classes from "./GQuestion.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Quiz from "./Quiz/Quiz";
import { Navigate } from "react-router";
import { connect } from "react-redux";
import { fetchData } from "../../redux/actions";

class GQuestion extends Component {
  componentDidMount = () => {
    this.props.fetchData(this.props.code, this.props.aid);
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
  code: state.quiz.code,
  aid: state.quiz.aid,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (code, aid) => dispatch(fetchData(code, aid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GQuestion);
