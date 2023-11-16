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
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    y: {
      ticks: {
        // display: false,
        color: "#eab308",
        font: {
          size: 14,
        },
      },
    },
    x: {
      ticks: {
        color: "#eab308",
        font: {
          size: 14,
        },
      },
    },
  },
  plugins: {
    legend: {
      //   display: false,
      position: "bottom",
      labels: {
        // color: "#14b8a6", // White
        color: "#eab308",
      },
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"];
export const data = {
  labels,
  datasets: [
    // {
    //   label: "Dataset 1",
    //   data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
    //   backgroundColor: "rgba(255, 99, 132, 0.5)",
    // },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const ChartSmallOne = () => {
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default ChartSmallOne;
