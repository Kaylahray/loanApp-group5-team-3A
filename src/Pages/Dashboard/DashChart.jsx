import { Line } from "react-chartjs-2";

import {
  CategoryScale,
  Chart as ChartJs,
  LineElement,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

const DashChart = () => {
  const state = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "sep",
      "oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total",
        data: [0, 20, 20, 30, 25, 45, 40, 55, 50, 57, 44, 60],
        // background: "none",
        borderWidth: 2,
        borderColor: "blue",
        id: 1,
        pointStyle: false,
        tension: 0.1,
      },
      {
        label: "Recovered",
        data: [0, 14, 25, 35, 40, 48, 25, 43, 55, 70, 77, 78],

        // backgroundColor: "red",
        borderWidth: 2,
        borderColor: "green",
        pointStyle: false,

        id: 2,
      },
      {
        label: "Doubtful",
        data: [0, 30, 30, 40, 47, 50, 55, 30, 45, 40, 67, 70],
        backgroundColor: "red",
        borderWidth: 2,
        pointStyle: false,

        borderColor: "darkRed",
        id: 2,
      },
      {
        label: "Lost",
        data: [0, 20, 30, 40, 50, 55, 60, 50, 57, 64, 56, 45],
        backgroundColor: "red",
        borderWidth: 2,
        borderColor: "red",
        pointStyle: false,

        id: 2,
      },
    ],

    options: {
      plugins: {
        legend: {
          display: true,
          position: "top",
          align: "start",

          labels: {
            usePointStyle: true,
            pointStyle: "circle",
            padding: 17,
          },
        },
      },
      // interaction: {
      //   mode: "index",
      //   intersect: false,
      // },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Month",
          },
          ticks: {
            maxRotation: 30,
            minRotation: 30,
          },
        },
        y: {
          display: false,
          title: {
            display: true,
            text: "Value",
          },
        },
      },
    },
  };

  return (
    <div>
      <Line data={state} options={state.options} />
    </div>
  );
};

export default DashChart;
