import styled from "styled-components";
import { Bar } from "react-chartjs-2";

export const BarChartWrapper = styled.div`
  background-color: #fff;
  padding: 15px 20px;
  border-radius: 1em;
  border: 1px solid #d1d1d1;
  box-shadow: 0px 0px 20px -10px;
  grid-column: 2 / end;
  grid-row: 2 / 4;
  max-height: 447px;

  @media screen and (max-width: 1375px) {
    grid-row: 3;
    grid-column: 1;
    min-width: 100px;
  }

  hr {
    border: none;
    background-color: #b3b3b3;
    height: 1px;
    position: relative;
    margin: 0 -20px;
  }

  h2 {
    margin: 0 0 15px 0;
    font-size: 24px;
    font-weight: 400;
  }
`;

export const BarGraph = styled(Bar)`
  max-height: 415px;
`;
