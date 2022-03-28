import styled from "styled-components";
import { Line } from "react-chartjs-2";

export const LineChartWrapper = styled.div`
  background-color: #fff;
  padding: 15px 20px;
  border-radius: 1em;
  border: 1px solid #d1d1d1;
  box-shadow: 0px 0px 20px -10px;
  grid-column: 1 / 3;
  grid-row: 4;
  max-height: 400px;
  min-width: 200px;

  @media screen and (max-width: 1375px) {
    grid-row: 5;
    grid-column: 1;
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

    @media screen and (max-width: 680px) {
    font-size: 20px;
  }
  }
`;

export const LineGraph = styled(Line)`
  max-height: 360px;
`;
