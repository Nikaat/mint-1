import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./GenderSelection.module.css";
import HelpButton from "../../Components/UI/HelpButton/HelpButton";
import GenderSelectioncard from "../../Pages/GenderSelectionPage/GenderSelectionCard/GenderSelectionCard";
import Copyright from "../../Components/Copyright/Copyright";

const GenderSelection = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
    navigate.push("/generated-questionary");
  };

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
            onClick={handleClick}
            src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_male_cqrt5z"
            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_male_cqrt5z 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_male_cqrt5z 2x"
          />
          <GenderSelectioncard
            onClick={handleClick}
            src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_female_sxkuf7"
            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_female_sxkuf7 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_female_sxkuf7 2x"
          />
        </section>
      </div>
      <Copyright />
      <HelpButton />
    </main>
  );
};

export default GenderSelection;
