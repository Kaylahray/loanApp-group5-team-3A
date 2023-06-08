import { Line } from "react-chartjs-2";

import {
  CategoryScale,
  Chart as ChartJs,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
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
        label: "one",
        data: [0, 20, 20, 30, 25, 45, 40, 55, 50, 57],
        // background: "none",
        borderWidth: 1,
        // borderColor: "blue",
        id: 1,
        pointStyle: false,
        tension: 0.1,
      },
      {
        label: "one",
        data: [0, 14, 25, 35, 40, 48, 25, 43, 55, 70],

        // backgroundColor: "red",
        borderWidth: 1,
        borderColor: "green",
        pointStyle: "line",

        id: 2,
      },
      {
        label: "one",
        data: [0, 30, 30, 40, 47, 50, 55, 30, 45, 40],
        backgroundColor: "red",
        borderWidth: 1,
        pointStyle: "line",

        borderColor: "darkRed",
        id: 2,
      },
      {
        label: "one",
        data: [0, 20, 30, 40, 50, 55, 60, 50, 57, 64],
        backgroundColor: "red",
        borderWidth: 1,
        borderColor: "red",
        pointStyle: "line",

        id: 2,
      },
    ],
  };

  const options = {
    plugins: {
      Legend: {
        position: "left",
        align: "left",

        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  return (
    <div>
      <Line data={state} options={options} />

      <p>line chart</p>
    </div>
  );
};

export default DashChart;
