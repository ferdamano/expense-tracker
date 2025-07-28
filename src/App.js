import React, { useState, useEffect } from "react";
import "./App.css";
import DataGenerator from "./components/DataGenerator";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  // use LocalStorage to store expenses
  // 1 time only
  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses && savedExpenses !== "null" && savedExpenses !== "") {
      try {
        const parsedExpenses = JSON.parse(savedExpenses);
        if (Array.isArray(parsedExpenses)) {
          setExpenses(parsedExpenses);
        }
      } catch (error) {
        console.error("Error parsing expenses from localStorage:", error);
        // Clear invalid data from localStorage
        localStorage.removeItem("expenses");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Add expense
  const addExpense = (expense) => {
    const newExpenses = [...expenses, expense];
  };
  // Expense state updater
  const handleDataGenerated = (newExpenses) => {
    setExpenses(newExpenses);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1>Expense Tracker</h1>
          <p>Track your expenses and stay on top of your finances</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="app-grid">
            <div className="form-section">
              <ExpenseForm onAddExpense={addExpense} />
            </div>
            <div className="stats-section"></div>
          </div>
          {expenses.length === 0 && (
            <DataGenerator onDataGenerated={handleDataGenerated} />
          )}
          <div className="list-section">
            <ExpenseList expenses={expenses} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
