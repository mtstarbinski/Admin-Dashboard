import React from "react";
import { TableContainer, PlusMinus } from "./YearlyTable.style";
import { BsThreeDots } from 'react-icons/bs'
import {data} from "../../data/data";

const YearlyTable = () => {

  // Grabs the month by month stats of 2021
  const year = data[4].months;

  return (
    <TableContainer>
      {/* The Three Dots Icon could pull up a dropdown to select other years */}
      <h2>Yearly Breakdown (2021)<BsThreeDots /></h2>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>New Subscriptions</th>
            <th>Users Unsubscribed</th>
            <th>+/-</th>
          </tr>
        </thead>
        <tbody>
          {year.map((month) => (
            <tr key={month.monthId}>
              <td>{month.name.toLocaleString("en-US")}</td>
              <td>{month.usersGained.toLocaleString("en-US")}</td>
              <td>{month.usersLost.toLocaleString("en-US")}</td>
              <PlusMinus>{"+" + (month.usersGained - month.usersLost).toLocaleString("en-US")}</PlusMinus>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default YearlyTable;
