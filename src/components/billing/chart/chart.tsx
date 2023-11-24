import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: Array(10000)
        .fill(0)
        .map(() => Math.random() * 10),
      borderColor: "#7549FF",
      backgroundColor: "white",
      showLine: true,
      fill: {
        target: "origin",
        below: "#7549FF",
      },
      tension: 0.5,
      borderJoinStyle: "round",
    },
  ],
};

function LineChart() {
  return <Line options={options} data={data as any} />;
}

export default LineChart;
