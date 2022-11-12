import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      // title: {
      //   display: true,
      //   text: "Chart.js Bar Chart",
      // },
    },
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
  };

  const labels = props.labels;

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: props.datasets,
        backgroundColor: props.color,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default BarChart;
