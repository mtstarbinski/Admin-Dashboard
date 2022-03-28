import BarChart from "../../components/Bar-Chart/BarChart";
import StatCards from "../../components/Stat-Cards/StatCards";
import { OverviewContainer, StatCardContainer, RetentionContainer } from "./Overview.style";
import RetentionChart from "../../components/Retention-Chart/RetentionChart";
import YearlyTable from "../../components/Yearly-Table/YearlyTable";
import LineChart from "../../components/Line-Chart/LineChart";
import { activeUsers, retentionRate, avgGain } from "../../data/data.utils";

const Overview = () => {
  return (
    <OverviewContainer>
      <h1>Overview</h1>
      <RetentionContainer>
        <RetentionChart />
        <StatCardContainer>
          <StatCards
            heading="Active Users"
            stat={activeUsers.toLocaleString("en-US")}
          />
          <StatCards heading="Retention Rate" stat={retentionRate + "%"} gain />
          <StatCards
            heading="Avg. Yearly Change"
            stat={"+" + avgGain.toLocaleString("en-US")}
            gain
          />
        </StatCardContainer>
      </RetentionContainer>
      <BarChart />
      <YearlyTable />
      <LineChart />
    </OverviewContainer>
  );
};

export default Overview;
