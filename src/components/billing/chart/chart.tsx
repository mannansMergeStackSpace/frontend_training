import React, { FC, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Request } from "state/ducks/user/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
  Filler
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

const getLastSixHours = () => {
  return Array(6)
    .fill(0)
    .map((v, index) => {
      const currentDate = new Date();
      return new Date(
        currentDate.setHours(currentDate.getHours() - index)
      ).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    })
    .reverse();
};

const labels = getLastSixHours();

const getGradientFill = () => {
  const ctx = document
    .createElement("canvas")
    .getContext("2d") as CanvasRenderingContext2D;
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0.5, "rgba(243, 240, 255, 1)");
  gradient.addColorStop(0.9, "rgba(241, 237, 255, 0)");
  return gradient;
};

interface AllProps {
  requests: Request[];
}

const LineChart: FC<AllProps> = ({ requests }: AllProps) => {
  const data = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: Array(10000) // logic for requests, group by at time
            .fill(0)
            .map(() => Math.random() * 10),
          borderColor: "#7549FF",
          tension: 0.5,
          fill: true,
          backgroundColor: getGradientFill(),
        },
      ],
    };
  }, []);

  return <Line options={options} data={data} />;
};

export default LineChart;
