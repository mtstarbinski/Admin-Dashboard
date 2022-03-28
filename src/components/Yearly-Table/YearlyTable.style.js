import styled from "styled-components";

export const TableContainer = styled.div`
  background-color: #fff;
  padding: 15px 20px;
  border-radius: 1em;
  border: 1px solid #d1d1d1;
  box-shadow: 0px 0px 20px -10px;
  grid-column: 3 / end;
    grid-row: 4;

  @media screen and (max-width: 1375px) {
    grid-row: 4;
    grid-column: 1;
    min-width: 100px;
  }

  @media screen and (max-width: 680px) {
    font-size: small;
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
    display: flex;
    justify-content: space-between;
  }

  svg {
    align-self: center;
    color: grey;
    cursor: pointer;
  }

  table {
    width: 100%;

    th:first-of-type {
      text-align: left;
    }

    td:first-of-type {
      text-align: left;
    }

    th {
      color: grey;
      text-align: center;
      font-weight: 400;
      padding-bottom: 5px;
    }

    td {
      text-align: center;
      font-weight: 600;
    }
  }
`;

export const PlusMinus = styled.td`
  background-color: #00dd0026;
  padding: 3px 5px;
  border-radius: 0.3em;
  width: 35px;
  color: #006000;
`;