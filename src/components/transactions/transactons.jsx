import React from "react";
import styles from"./transactions.module.css";
import PropTypes from "prop-types";
const TransactionHistory = ({transactions}) => {
  return (
    <>
      <section className={styles.transactions}>
        <table className={styles.transaction__history}>
          <thead>
            <tr > 
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
TransactionHistory.PropTypes = {
    transactions : PropTypes.object.isRequired,
}
export default TransactionHistory;
