import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { BarChartWrapper, BarGraph } from "./BarChart.style.js";
import {data} from "../../data/data";

const BarChart = () => {
  const config = {
    labels: data.map((data) => data.year),
    datasets: [
      {
        label: "New Subscriptions",
        data: data.map((data) => data.newUsers),
        backgroundColor: "#2fa5ff83",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#054678ab",
      },
      {
        label: "Unsubscribed Users",
        data: data.map((data) => data.unsubscribedUsers),
        backgroundColor: "#2f5b7cab",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#013a66ab",
      },
    ],
  };

  return (
    <BarChartWrapper>
      <h2>Growth by Year</h2>
      <hr />
      <BarGraph data={config} />
    </BarChartWrapper>
  );
};

export default BarChart;
