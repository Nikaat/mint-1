import React from "react";

import classes from "./countdown.module.css";
import CountdownComp from "./countDownComp/CountDownComp";

const countdown = (props) => {
  return (
    <div className={classes.Main}>
      <div className={classes.Countdown}>
        <div className={classes.Container}>
          <p className={classes.Text}>Reserved price for:</p>
          <div className={classes.Time}>
            <div className={classes.TimeNumbers}>
              <CountdownComp date={props.date} />
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
