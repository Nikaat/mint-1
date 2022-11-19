import React from "react";
import { connect } from "react-redux";

import classes from "./button.module.css";

const button = (props) => {
  return (
    <div className={classes.Element}>
      <button
        className={classes.ParasiteButton}
        onClick={() => props.goNext(props.parasite.aid, props.code)}
        // onClick={() => props.goToCheckout()}
      >
        <div
          className={classes.ButtonText}
          style={{
            backgroundColor: props.inputs.bgColor,
            color: props.inputs.textColor,
          }}
        >
          {" "}
          {props.inputs.text}{" "}
        </div>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  code: state.quiz.code,
});

export default connect(mapStateToProps)(button);
