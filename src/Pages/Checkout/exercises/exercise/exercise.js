import React from "react";

import classes from "./exercise.module.css";

const exercise = (props) => {
  return (
    <div className={classes.ContentRow}>
      <img
        className={classes.ContentImage}
        srcSet={props.img.srcSet}
        src={props.img.src}
        alt=""
      />
      <div className={classes.ContentText}>
        <div className={classes.ContentTitle}>{props.contentTitle}</div>
        <div className={classes.TimeAndCaloriesInfo}>
          <span className={classes.Time}>
            <img
              className={classes.Icon}
              srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 2x"
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr"
              alt=""
            />
            {props.time}
          </span>
          <span className={classes.AdditionalInfo}>
            <img
              className={classes.Icon}
              srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 2x"
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz"
              alt=""
            />
            {props.additionalInfo}
          </span>
        </div>
      </div>
    </div>
  );
};

export default exercise;
