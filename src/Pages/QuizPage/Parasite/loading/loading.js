import React from "react";

import classes from "./loading.module.css";
import CircularStatic from "../../../../Components/Progressbar/circular/circularProgressbar";
import LinearProgressbar from "../../../../Components/Progressbar/linear/linearProgressbar";

const loading = (props) => {
  if (props.inputs.type === "circleFade") {
    return (
      <div key="circleFade" className={classes.Element}>
        <CircularStatic
          color={props.inputs.color}
          maxValue={props.inputs.maxValue}
          texts={props.inputs.texts}
          loadingtime={props.inputs.time}
          aid={props.parasite.aid}
          // nextByButton="true"
        />
        {props.inputs.text !== "" ? (
          <div key={"description" + Math.random()} className={classes.Element}>
            <div
              className={classes.Description}
              style={{ textAlign: props.inputs.textAlign }}
            >
              {props.inputs.text}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
  if (props.inputs.type === "circle") {
    return (
      <div key="circleloading" className={classes.Element}>
        <CircularStatic
          color={props.inputs.color}
          maxValue={props.inputs.maxValue}
          loadingtime={props.inputs.time}
          aid={props.parasite.aid}
          // nextByButton="true"
        />
        {props.inputs.text !== "" ? (
          <div key={"description" + Math.random()} className={classes.Element}>
            <div
              className={classes.Description}
              style={{ float: props.inputs.textAlign }}
            >
              {props.inputs.text}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
  if (props.inputs.type === "linear") {
    return (
      <div key={"linearloading" + Math.random()} className={classes.Element}>
        <LinearProgressbar
          loadingtime={props.inputs.time}
          color={props.inputs.color}
          maxValue={props.inputs.maxValue}
          text={props.inputs.text}
          aid={props.parasite.aid}
          // nextByButton="true"
        />
        {props.inputs.text !== "" ? (
          <div key={"description" + Math.random} className={classes.Element}>
            <div
              className={classes.Description}
              style={{ float: props.inputs.textAlign }}
            >
              {props.inputs.text}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
};

export default loading;
