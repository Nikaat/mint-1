import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { clickedonGenderCard } from "../../redux/actions";

import classes from "./GenderSelection.module.css";
// import HelpButton from "../../Components/UI/HelpButton/HelpButton";
import GenderSelectioncard from "../../Pages/GenderSelectionPage/GenderSelectionCard/GenderSelectionCard";
import Copyright from "../../Components/Copyright/Copyright";

class GenderSelection extends Component {
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
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_male_cqrt5z"
              srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_male_cqrt5z 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_male_cqrt5z 2x"
            />
            <GenderSelectioncard
              selected={this.props.isFemale}
              onAnswer={() => this.props.onGenderSelection("Female")}
              gender="Female"
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_female_sxkuf7"
              srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_female_sxkuf7 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_female_sxkuf7 2x"
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenderSelection);
