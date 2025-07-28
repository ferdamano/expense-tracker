import React, { useState, useEffect } from "react";
import "./App.css";
import DataGenerator from "./components/DataGenerator";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseStats from "./components/ExpenseStats";
import SearchFilter from "./components/SearchFilter";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showWeeklyStats, setShowWeeklyStats] = useState(false);

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
    const newExpense = {
      ...expense,
      date: expense.date || new Date().toISOString().split("T")[0],
    };
    setExpenses([newExpense, ...expenses]);
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Expense state updater
  const handleDataGenerated = (newExpenses) => {
    setExpenses(newExpenses);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + parseFloat(expense.amount),
    0
  );

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
            <div className="stats-section">
              <ExpenseStats
                totalExpenses={totalExpenses}
                showWeeklyStats={showWeeklyStats}
                setShowWeeklyStats={setShowWeeklyStats}
                expenses={expenses}
              />
            </div>
          </div>
          {expenses.length === 0 && (
            <DataGenerator onDataGenerated={handleDataGenerated} />
          )}
          <div className="list-section">
            <SearchFilter
              expenseCount={filteredExpenses.length}
              onSearchChange={setSearchTerm}
              searchTerm={searchTerm} />
            <ExpenseList
              expenses={filteredExpenses}
              onDeleteExpense={deleteExpense}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
