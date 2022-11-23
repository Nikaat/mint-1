import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import { connect } from "react-redux";

import classes from "./CountDownComp.module.css";

const Completionist = () => {
  return <span>00:00</span>;
};

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <span>
        <span>{zeroPad(minutes)}</span>
        <span className={classes.TimeDivider}>:</span>
        <span>{zeroPad(seconds)}</span>
      </span>
    );
  }
};

const countdown = (props) => {
  return <Countdown date={props.date + 600000} renderer={renderer} />;
};

const mapStateToProps = (state) => {
  return {
    discount: state.checkout.discount,
  };
};

export default connect(mapStateToProps)(countdown);
