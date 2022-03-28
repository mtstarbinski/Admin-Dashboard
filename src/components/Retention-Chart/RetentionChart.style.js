import styled from "styled-components";
import { Pie } from "react-chartjs-2";

export const ChartWrapper = styled.div`
  background-color: #fff;
  padding: 15px 20px;
  border-radius: 1em;
  border: 1px solid #d1d1d1;
  box-shadow: 0px 0px 20px -10px;
  max-width: 515px;

  @media screen and (max-width: 680px) {
    width: 300px;
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

export const PieChart = styled(Pie)`
  max-height: 300px;
`;
