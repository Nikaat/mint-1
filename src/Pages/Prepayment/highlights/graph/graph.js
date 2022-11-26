import React from "react";

import classes from "./graph.module.css";

const graph = (props) => {
  return (
    <div className={classes.ContainerAnimated}>
      <div className={classes.Content}>
        <div className={classes.Lines}>
          <div className={classes.Line}></div>
          <div className={classes.Line}></div>
          <div className={classes.Line}></div>
          <div className={classes.Line}></div>
        </div>
        <div className={classes.GraphContainer}>
          <div className={classes.GraphContent}>
            <svg
              className={classes.GraphCurveMobile}
              viewBox="0 0 230 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0C6.03939 24.6667 7.54924 37 108.709 50C172.123 58.1493 170.613 72 230 77"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              className={classes.GraphCurveDesktop}
              viewBox="0 0 542 185"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0C14.2319 58.3211 17.79 87.4816 256.175 118.218C405.611 137.486 402.053 170.235 542 182.056"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              className={classes.GraphCurveShadow}
              viewBox="0 0 230 106"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M108 50C6.84027 37 6.03939 24.6667 0 0V106H230V77C170.613 72 171.414 58.1493 108 50Z"
                fill="url(#paint0_linear)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="-19.7458"
                  y1="10.3922"
                  x2="-20.2791"
                  y2="106"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-opacity="0.8"></stop>
                  <stop offset="0.475239" stop-opacity="0.24"></stop>
                  <stop offset="1" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className={classes.DashedLineLoseLeft}>
              <p className={classes.Date}>NOV</p>
            </div>
            <div className={classes.DashedLineLoseMiddle}>
              <p className={classes.Date}>DEC 2022</p>
            </div>
            <div className={classes.DashedLineLoseRight}>
              <p className={classes.DateTarget}>
                BY <b>JAN 2023</b>
              </p>
            </div>
            <div className={classes.StartCircleLoseContainer}>
              <div className={classes.StartCircle}>
                <div className={classes.StartCircleText}>
                  <b>65</b>kg
                </div>
              </div>
            </div>
            <div className={classes.EndCircleLoseContainer}>
              <div className={classes.EndCircle}>
                60 <span>kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default graph;
