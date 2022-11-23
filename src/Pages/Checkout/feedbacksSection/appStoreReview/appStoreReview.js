import React from "react";

import classes from "./appStoreReview.module.css";

const appStoreReview = (props) => {
  return (
    <div className={classes.AppStoreReview}>
      <div className={classes.Title}>
        <div className={classes.TitleGroup}>
          <h3 className={classes.TitleText}>{props.titleText}</h3>
          <span className={classes.DateNameText}>{props.dateText}</span>
        </div>
        <div className={classes.TitleGroup}>
          <div>
            <img
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
              alt=""
            />
          </div>
          <span className={classes.DateNameText}>{props.nameText}</span>
        </div>
      </div>
      <div className={classes.ReviewExpandable}>
        <p>
          {props.comment}
          <br></br>
        </p>
        <button
          className={classes.ExpandButton}
          onClick={() =>
            props.openModal(
              props.titleText,
              props.dateText,
              props.nameText,
              props.comment
            )
          }
        >
          more
        </button>
      </div>
    </div>
  );
};

export default appStoreReview;
