import React from "react";

import classes from "./modal.module.css";

const modal = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Content}>
        <div className={classes.ScrollableContent}>
          <div className={classes.Title}>
            <div className={classes.TitleGroup}>
              <h3 className={classes.TitleText}>{props.title}</h3>
              <span className={classes.DateNameText}>{props.date}</span>
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
              <span className={classes.DateNameText}>{props.name}</span>
            </div>
          </div>
          <div className={classes.Review}>
            <p>
              {props.text}
              <br></br>
            </p>
          </div>
        </div>
        <button className={classes.CloseButton} onClick={() => props.clicked()}>
          <svg
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            className={classes.CloseIcon}
          >
            <path d="M5.70696 5.70717C6.09748 5.31664 6.73064 5.31664 7.12117 5.70717L18.4351 17.0211C18.8256 17.4116 18.8256 18.0447 18.4351 18.4353C18.0445 18.8258 17.4114 18.8258 17.0208 18.4353L5.70696 7.12138C5.31643 6.73086 5.31643 6.09769 5.70696 5.70717Z"></path>
            <path d="M6.12117 18.7071C5.73064 18.3166 5.73064 17.6834 6.12117 17.2929L17.4351 5.979C17.8256 5.58848 18.4588 5.58848 18.8493 5.979C19.2398 6.36952 19.2398 7.00269 18.8493 7.39321L7.53538 18.7071C7.14486 19.0976 6.51169 19.0976 6.12117 18.7071Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default modal;
