import React from "react";
import "./ExpenseList.css";

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };
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
                <td className="actions-cell">
                  <button
                    className="delete-btn"
                    onClick={() => onDeleteExpense(expense.id)}
                    title="Delete expense"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/>
                    </svg>
                  </button>
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
