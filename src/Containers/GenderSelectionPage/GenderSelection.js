import React from "react";

import classes from "./GenderSelection.module.css";
import HelpButton from "../../Components/UI/HelpButton/HelpButton";

const GenderSelection = (props) => {
  return (
    <main className={classes.GenderSelection}>
      <div className={classes.Main}>
        <p className={classes.quizLabel}>TAKE 1-MINUTE QUIZ</p>
        <h1 className={classes.title}>
          PERSONAL PLAN <br /> <small>according to your age and BMI</small>
        </h1>
        <small className={classes.caption}>Select your gender</small>
        <section className={classes.buttonSection}>
          <button className={classes.button}>
            <span className={classes.buttonInner}>
              <img
                src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_male_cqrt5z"
                srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_male_cqrt5z 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_male_cqrt5z 2x"
                className={classes.ButtonImage}
                alt=""
              />
              <span className={classes.buttonTextContainer}>
                <div className={classes.buttonText}>
                  <span className={classes.Checkmark}>
                    <svg
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      className={classes.checkmarkIcon}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.906 6.374a1.193 1.193 0 0 1 1.735 0c.479.499.479 1.307 0 1.806l-8.107 8.446a1.2 1.2 0 0 1-.867.374 1.2 1.2 0 0 1-.868-.374l-3.44-3.557a1.314 1.314 0 0 1 0-1.806 1.193 1.193 0 0 1 1.735 0l2.573 2.654 7.239-7.543Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  Male
                </div>
              </span>
            </span>
          </button>
          <button className={classes.button}>
            <span className={classes.buttonInner}>
              <img
                src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_female_sxkuf7"
                srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_female_sxkuf7 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_230/v1/affiliates/Image_female_sxkuf7 2x"
                className={classes.ButtonImage}
                alt=""
              />
              <span className={classes.buttonTextContainer}>
                <div className={classes.buttonText}>
                  <span className={classes.Checkmark}>
                    <svg
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      className={classes.checkmarkIcon}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.906 6.374a1.193 1.193 0 0 1 1.735 0c.479.499.479 1.307 0 1.806l-8.107 8.446a1.2 1.2 0 0 1-.867.374 1.2 1.2 0 0 1-.868-.374l-3.44-3.557a1.314 1.314 0 0 1 0-1.806 1.193 1.193 0 0 1 1.735 0l2.573 2.654 7.239-7.543Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  Female
                </div>
              </span>
            </span>
          </button>
        </section>
      </div>
      <div className={classes.Copyright}>
        <div className={classes.copyright}>
          <span className={classes.copyrightRow}>
            2022 © All Rights Reserved. By continuing you agree to our
          </span>
          <span className={classes.copyrightRow}>
            <span>
              <a>Terms of Service</a>
            </span>{" "}
            |{" "}
            <span>
              <a>Privacy Policy</a>
            </span>{" "}
            |{" "}
            <span>
              <a>Subscription Policy</a>
            </span>
          </span>
        </div>
      </div>
      <HelpButton />
    </main>
  );
};

export default GenderSelection;
