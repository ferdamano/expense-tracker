import React from 'react';
import { format, endOfWeek, eachWeekOfInterval } from 'date-fns';
import './ExpenseStats.css';

const ExpenseStats = ({ totalExpenses, showWeeklyStats, setShowWeeklyStats, expenses }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getWeeklyStats = () => {
    const today = new Date();
    const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    const yearEnd = new Date();
    
    const weeks = eachWeekOfInterval({ start: oneYearAgo, end: yearEnd });
    return weeks.map(weekStart => {
      const weekEnd = endOfWeek(weekStart);
      const weekExpenses = expenses.filter(expense => {
        const expenseDate = new Date(expense.date);
        return expenseDate >= weekStart && expenseDate <= weekEnd;
      });
        console.log(weekExpenses);
      
      const weekTotal = weekExpenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
      
      return {
        weekStart,
        weekEnd,
        total: weekTotal,
        count: weekExpenses.length
      };
    });
  };

  const weeklyStats = getWeeklyStats();

  return (
    <div className="expense-stats">
      <h2>Expense Statistics</h2>
      
      <div className="total-section">
        <div className="total-card">
          <div className="total-icon">💰</div>
          <div className="total-content">
            <h3>Total Expenses</h3>
            <p className="total-amount">{formatCurrency(totalExpenses)}</p>
            <span className="total-count">{expenses.length} expense{expenses.length !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </div>

      <div className="weekly-toggle">
        <button
          className={`toggle-btn ${showWeeklyStats ? 'active' : ''}`}
          onClick={() => setShowWeeklyStats(!showWeeklyStats)}
        >
          <span>{showWeeklyStats ? 'Hide' : 'Show'} Weekly Breakdown</span>
          <svg 
            className={`toggle-icon ${showWeeklyStats ? 'rotated' : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <polyline points="6,9 12,15 18,9"/>
          </svg>
        </button>
      </div>

      {showWeeklyStats && (
        <div className="weekly-stats">
          <h3>Weekly Breakdown - Last 12 Months</h3>
          <div className="weekly-grid">
            {weeklyStats.map((week, index) => (
              <div key={index} className={`week-card ${week.total > 0 ? 'has-expenses' : 'no-expenses'}`}>
                <div className="week-header">
                  <span className="week-number">Week {index + 1}</span>
                  <span className="week-dates">
                    {format(week.weekStart, 'MMM d')} - {format(week.weekEnd, 'MMM d')}
                  </span>
                </div>
                <div className="week-amount">
                  {formatCurrency(week.total)}
                </div>
                <div className="week-count">
                  {week.count} expense{week.count !== 1 ? 's' : ''}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseStats;