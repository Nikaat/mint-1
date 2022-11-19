import React from "react";

import classes from "./diagram.module.css";
import LineChart from "../../../../Components/Chart/lineChart";
import PieChart from "../../../../Components/Chart/pieChart";
import BarChart from "../../../../Components/Chart/barChart";

const diagram = (props) => {
  if (props.type === "line") {
    return (
      <div key="line" className={classes.ChartContainer}>
        <LineChart
          color={props.inputs.color}
          labels={props.inputs.labels}
          datasets={props.inputs.datasets}
        />
      </div>
    );
  }
  if (props.type === "pie") {
    return (
      <div key="pie" className={classes.ChartContainer}>
        <PieChart
          color={props.inputs.color}
          labels={props.inputs.labels}
          datasets={props.inputs.datasets}
        />
      </div>
    );
  }
  if (props.type === "bar") {
    return (
      <div key="bar" className={classes.ChartContainer}>
        <BarChart
          color={props.inputs.color}
          labels={props.inputs.labels}
          datasets={props.inputs.datasets}
        />
      </div>
    );
  }
};

export default diagram;
