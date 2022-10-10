import React from "react";

import classes from "./GQuestion.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Quiz from "./Quiz/Quiz";

const GQuestion = (props) => {
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
            src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_1000/kqvwksizewzrgn4vfzyy"
            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_1000/kqvwksizewzrgn4vfzyy 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_1000/kqvwksizewzrgn4vfzyy 2x"
            alt=""
          />
        </div>
        <div className={classes.ContentContainer}>
          <Quiz />
        </div>
      </div>
    </Auxiliary>
  );
};

export default GQuestion;
