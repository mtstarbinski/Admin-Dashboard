import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { LineChartWrapper, LineGraph } from "./LineChart.style.js";
import {data} from "../../data/data";
import { Next5Years } from "../../data/data.utils.js";

const LineChart = () => {
  const config = {
    labels: data.map((data) => data.year + 5),
    datasets: [
      {
        label: "Active Users",
        data: Next5Years().map((data) => data),
        backgroundColor: "#2fa5ff83",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#054678ab",
        fill: true
      },
    ],
  };

  return (
    <LineChartWrapper>
      <h2>Projected Growth (5 years) </h2>
      <hr />
      <LineGraph data={config} />
    </LineChartWrapper>
  );
};

export default LineChart;
