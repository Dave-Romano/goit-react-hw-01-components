import React from "react";
import PropTypes from "prop-types";
import { TransactionHistoryStyled } from "./TransactionHistoryStyled";

const TransactionHistory = ({ dataTransactions }) => {
  return (
    <TransactionHistoryStyled>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {dataTransactions.map((el) => {
          const { id, type, amount, currency } = el;
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </TransactionHistoryStyled>
  );
};

TransactionHistory.propTypes = {
  dataTransactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
