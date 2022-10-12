import React, { Component } from "react";
import { Navigate } from "react-router-dom";

import classes from "./GenderSelection.module.css";
import HelpButton from "../../Components/UI/HelpButton/HelpButton";
import GenderSelectioncard from "../../Pages/GenderSelectionPage/GenderSelectionCard/GenderSelectionCard";
import Copyright from "../../Components/Copyright/Copyright";

class GenderSelection extends Component {
  state = {
    isAnsweredM: false,
    isAnsweredF: false,
    changePage: null,
  };

  handleClick = (gender) => {
    if (gender === "Male") {
      this.setState({ isAnsweredM: true });
    } else {
      this.setState({ isAnsweredF: true });
    }
    setTimeout(() => {
      this.setState({ changePage: <Navigate to="/generated-questionary" /> });
    }, 1000);
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
              isAnswered={this.state.isAnsweredM}
              onAnswer={this.handleClick}
              gender="Male"
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_male_cqrt5z"
              srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_male_cqrt5z 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_male_cqrt5z 2x"
            />
            <GenderSelectioncard
              isAnswered={this.state.isAnsweredF}
              onAnswer={this.handleClick}
              gender="Female"
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_female_sxkuf7"
              srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_female_sxkuf7 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_female_sxkuf7 2x"
            />
          </section>
        </div>
        <Copyright />
        <HelpButton />
        {this.state.changePage}
      </main>
    );
  }
}

export default GenderSelection;
