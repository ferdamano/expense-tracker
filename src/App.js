import React, {useState, useEffect} from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';

function App() {
    const [expenses, setExpenses] = useState([]);

    // use LocalStorage to store expenses
    // 1 time only
    useEffect(() => {
        const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
        if (storedExpenses) {
            setExpenses(storedExpenses);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    // Add expense
    const addExpense = (expense) => {
        const newExpenses = [...expenses, expense];
    }

    return(
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
                        </div>
                        <div className="stats-section"></div>
                    </div>
                    <div className="list-section">
                        <ExpenseList expenses={expenses} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;