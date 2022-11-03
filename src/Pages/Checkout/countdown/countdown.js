import React from "react";

import classes from "./countdown.module.css";

const countdown = (peops) => {
  return (
    <div className={classes.Main}>
      <div className={classes.Countdown}>
        <div className={classes.Container}>
          <p className={classes.Text}>Reserved price for:</p>
          <div className={classes.Time}>
            <div className={classes.TimeNumbers}>
              <span>04</span>
              <span className={classes.TimeDivider}>:</span>
              <span>46</span>
            </div>
            <div className={classes.TimeUnits}>
              <span className={classes.TimeUnit}>minutes</span>
              <span className={classes.TimeUnit}>seconds</span>
            </div>
          </div>
          <div className={classes.CtaContainer}>
            <button className={classes.Button} data-button="countdown-button">
              GET MY PLAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default countdown;
