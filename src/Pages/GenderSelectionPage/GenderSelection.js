import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { clickedonGenderCard } from "../../redux/actions";

import classes from "./GenderSelection.module.css";
// import HelpButton from "../../Components/UI/HelpButton/HelpButton";
import GenderSelectioncard from "../../Pages/GenderSelectionPage/GenderSelectionCard/GenderSelectionCard";
import Copyright from "../../Components/Copyright/Copyright";
import * as actionCreators from "../../redux/actions";

class GenderSelection extends Component {
  componentDidMount = () => {
    const params = new URLSearchParams(window.location.search); // id=123
    let type = params.get("type");

    this.props.onSaveType(type);
    console.log(type);
  };

  render() {
    return (
      <main className={classes.GenderSelection}>
        <div className={classes.Main}>
          <p className={classes.quizLabel}>TAKE 1-MINUTE QUIZ</p>
          <h1 className={classes.title}>
            PERSONAL PLAN <br /> <small>according to your age and BMI</small>
          </h1>
          <small className={classes.caption}>Select your gender</small>
          <section className={classes.buttonSection}>
            <GenderSelectioncard
              selected={this.props.isMale}
              onAnswer={() => this.props.onGenderSelection("Male")}
              gender="Male"
              src="https://mintdoctor.app/wp-content/uploads/2022/11/boy.png"
            />
            <GenderSelectioncard
              selected={this.props.isFemale}
              onAnswer={() => this.props.onGenderSelection("Female")}
              gender="Female"
              src="https://mintdoctor.app/wp-content/uploads/2022/11/girl.png"
            />
          </section>
        </div>
        <Copyright />
        {/* <HelpButton /> */}
        {this.props.isAnswered === true ? (
          <Navigate to={this.props.nextPage} />
        ) : null}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isMale: state.genderSel.isMale,
    isFemale: state.genderSel.isFemale,
    isAnswered: state.genderSel.isAnswered,
    nextPage: state.genderSel.nextPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGenderSelection: (gendertype) =>
      dispatch(clickedonGenderCard(gendertype)),
    onSaveType: (linkType) => dispatch(actionCreators.saveType(linkType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenderSelection);
