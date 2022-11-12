import React, { useState } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

function LineChart(props) {
  // eslint-disable-next-line
  const [data, setData] = useState({
    labels: props.labels,
    datasets: [
      {
        label: "Line",
        data: props.datasets,
        backgroundColor: "#FFAFCC",
        borderColor: "#FFAFCC",
      },
    ],
  });

  return (
    <div>
      <Line
        data={data}
        options={{
          responsive: "true",
          maintainAspectRatio: "true",
          scales: {
            y: {
              ticks: {
                color: "black",
                font: {
                  size: "14px",
                  family: "Dana",
                },
              },
            },
            x: {
              ticks: {
                color: "black",
                font: {
                  size: "14px",
                  family: "Dana",
                },
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      ></Line>
    </div>
  );
}

export default LineChart;
