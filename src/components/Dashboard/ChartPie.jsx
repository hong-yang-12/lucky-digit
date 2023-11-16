import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
// import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);
// const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        // color: "#14b8a6", // White
        color: "#eab308",
      },
      // labels: {
      //   color: (theme) => {
      //     if (theme=== "dark") {
      //       return "#ffffff"; // White for dark theme
      //     } else {
      //       return "#000000"; // Black for light theme
      //     }
      //   },
      // },
    },
  },
};

export const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const ChartPie = () => {
  // const is_dark_mode = useSelector(state => state.stateSlice.is_dark_mode)

  return <Pie data={data} options={options} />;
};

export default ChartPie;
