import React from "react";
import { connect } from "react-redux";

import classes from "./countdown.module.css";
import CountdownComp from "./countDownComp/CountDownComp";
import * as actionCreators from "../../../redux/actions";

const countdown = (props) => {
  return (
    <div className={classes.Main}>
      <div className={classes.Countdown}>
        <div className={classes.Container}>
          <p className={classes.Text}>اعتبار تخفیف تا:</p>
          <div className={classes.Time}>
            <div className={classes.TimeNumbers}>
              <CountdownComp
                date={props.date}
                noDiscoutnt={props.deleteDiscount}
              />
            </div>
            {/* <div className={classes.TimeUnits}>
              <span className={classes.TimeUnit}>minutes</span>
              <span className={classes.TimeUnit}>seconds</span>
            </div> */}
          </div>
          <div className={classes.CtaContainer}>
            <button
              className={classes.Button}
              data-button="countdown-button"
              onClick={() => props.onButton()}
            >
              دریافت برنامه
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButton: () => dispatch(actionCreators.sendPlanId()),
  };
};

export default connect(null, mapDispatchToProps)(countdown);
