import React from 'react';
import { ChartWrapper, PieChart } from './RetentionChart.style';
import { Chart as ChartJS } from "chart.js/auto";
import { activeUsers, unsubedUsers } from "../../data/data.utils";

const RetentionChart = () => {

    const config = {
        labels: ["Active Users", "Unsubscribed Users"],
        datasets: [
          {
            data: [activeUsers, unsubedUsers],
            backgroundColor: ['#00bb35', '#c0c0c0'],
          },
        ],
      };

  return (
    <ChartWrapper>
      <h2>Overall User Retention</h2>
      <hr />
      <PieChart data={config} />
    </ChartWrapper>
  )
}

export default RetentionChart