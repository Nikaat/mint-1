import React from "react";

import classes from "./progressContainer.module.css";

const progressContainer = (props) => {
  return (
    <div className={classes.ProgressContainer}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={classes.ArrowBack}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.414 10.657L3.071 11 2 12.071l1.414 1.414 6.364 6.364a1 1 0 101.414-1.414L5.757 13h14.314a1 1 0 100-2H5.9l5.293-5.293a1 1 0 00-1.414-1.414l-6.364 6.364z"
        ></path>
      </svg>
      <span className={classes.Progress}>
        <span className={classes.CurrentProgress}>1</span>
        <span>/</span>17
      </span>
    </div>
  );
};

export default progressContainer;
