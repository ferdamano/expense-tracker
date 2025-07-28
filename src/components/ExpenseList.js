import React from "react";
import "./ExpenseList.css";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <div className="table-container">
        <table className="expense-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index} className="expense-row">
                <td className="date-cell">
                  <span className="date-text">{formatDate(expense.date)}</span>
                </td>
                <td className="description-cell">
                  <span className="description-text">
                    {expense.description}
                  </span>
                </td>
                <td className="amount-cell">
                  <span className="amount-text">
                    {formatAmount(expense.amount)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
