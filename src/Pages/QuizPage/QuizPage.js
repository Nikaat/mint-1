import React, { Component } from "react";

import { Navigate } from "react-router";
import { connect } from "react-redux";
import { fetchData } from "../../redux/actions";
import classes from "./QuizPage.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Quiz from "./Quiz/Quiz";
// import Parasite from "./Quiz/Parasite/Parasite";
// import LineChart from "../../Components/Chart/lineChart";

class QuizPage extends Component {
  componentDidMount = () => {
    this.props.fetchData();
  };

  render() {
    return (
      <Auxiliary>
        <div
          className={classes.Container}
          // style={{ backgroundColor: "blue" }}
        >
          <div
            className={classes.ImageContainer}
            style={{
              background:
                "linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.25))",
            }}
          >
            <img
              className={classes.LeftImage}
              src={this.props.result.borderImage}
              alt=""
            />
          </div>
          <div className={classes.ContentContainer}>
            {/* <Parasite /> */}
            {/* <LineChart /> */}
            <Quiz result={this.props.result} />
            <img
              className={classes.RightImage}
              src={this.props.result.borderImage}
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
