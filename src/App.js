import React, { useState, useEffect } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);
  const generateSampleExpenses = () => {
    const sampleExpenses = [
      {
        id: "1703123456789",
        description: "Lunch meeting with client",
        amount: "45.50",
        date: "2024-01-15",
      },
      {
        id: "1703123456790",
        description: "Office supplies - printer paper",
        amount: "23.99",
        date: "2024-01-16",
      },
      {
        id: "1703123456791",
        description: "Uber ride to airport",
        amount: "67.25",
        date: "2024-01-17",
      },
      {
        id: "1703123456792",
        description: "Coffee for team meeting",
        amount: "18.75",
        date: "2024-01-18",
      },
      {
        id: "1703123456793",
        description: "Software subscription - Adobe Creative Suite",
        amount: "52.99",
        date: "2024-01-19",
      },
      {
        id: "1703123456794",
        description: "Dinner with potential investor",
        amount: "89.45",
        date: "2024-01-20",
      },
      {
        id: "1703123456795",
        description: "Parking at downtown office",
        amount: "12.00",
        date: "2024-01-21",
      },
      {
        id: "1703123456796",
        description: "Team building activity - escape room",
        amount: "35.00",
        date: "2024-01-22",
      },
      {
        id: "1703123456797",
        description: "Business cards printing",
        amount: "28.50",
        date: "2024-01-23",
      },
      {
        id: "1703123456798",
        description: "Conference registration fee",
        amount: "299.00",
        date: "2024-01-24",
      },
      {
        id: "1703123456799",
        description: "Hotel accommodation for conference",
        amount: "189.99",
        date: "2024-01-25",
      },
      {
        id: "1703123456800",
        description: "Airport parking - 3 days",
        amount: "45.00",
        date: "2024-01-26",
      },
      {
        id: "1703123456801",
        description: "Meals during conference",
        amount: "156.80",
        date: "2024-01-27",
      },
      {
        id: "1703123456802",
        description: "Taxi from airport",
        amount: "42.50",
        date: "2024-01-28",
      },
      {
        id: "1703123456803",
        description: "Office cleaning service",
        amount: "75.00",
        date: "2024-01-29",
      },
      {
        id: "1703123456804",
        description: "Internet upgrade for office",
        amount: "89.99",
        date: "2024-01-30",
      },
      {
        id: "1703123456805",
        description: "Marketing materials - brochures",
        amount: "234.75",
        date: "2024-02-01",
      },
      {
        id: "1703123456806",
        description: "Client dinner - Italian restaurant",
        amount: "127.30",
        date: "2024-02-02",
      },
      {
        id: "1703123456807",
        description: "Office furniture - ergonomic chair",
        amount: "299.99",
        date: "2024-02-03",
      },
      {
        id: "1703123456808",
        description: "Coffee machine for office",
        amount: "189.50",
        date: "2024-02-04",
      },
      {
        id: "1703123456809",
        description: "Team lunch - pizza delivery",
        amount: "67.45",
        date: "2024-02-05",
      },
      {
        id: "1703123456810",
        description: "Business magazine subscription",
        amount: "24.99",
        date: "2024-02-06",
      },
      {
        id: "1703123456811",
        description: "Office plants and decorations",
        amount: "89.25",
        date: "2024-02-07",
      },
      {
        id: "1703123456812",
        description: "Client gift - wine bottle",
        amount: "45.00",
        date: "2024-02-08",
      },
      {
        id: "1703123456813",
        description: "Parking ticket (oops!)",
        amount: "35.00",
        date: "2024-02-09",
      },
      {
        id: "1703123456814",
        description: "Office security system",
        amount: "199.99",
        date: "2024-02-10",
      },
      {
        id: "1703123456815",
        description: "Team breakfast - bagels and coffee",
        amount: "34.20",
        date: "2024-02-11",
      },
      {
        id: "1703123456816",
        description: "Business book - leadership guide",
        amount: "19.99",
        date: "2024-02-12",
      },
      {
        id: "1703123456817",
        description: "Office supplies - whiteboard markers",
        amount: "15.75",
        date: "2024-02-13",
      },
      {
        id: "1703123456818",
        description: "Client meeting - coffee shop",
        amount: "8.50",
        date: "2024-02-14",
      },
      {
        id: "1703123456819",
        description: "Valentine's Day team treats",
        amount: "42.80",
        date: "2024-02-14",
      },
      {
        id: "1703123456820",
        description: "Office maintenance - HVAC service",
        amount: "125.00",
        date: "2024-02-15",
      },
    ];
    return sampleExpenses;
  };

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
  const handleGenerateData = () => {
    const sampleExpenses = generateSampleExpenses();
    localStorage.setItem("expenses", JSON.stringify(sampleExpenses));

    // update the expenses state
    handleDataGenerated(sampleExpenses);

    // Show success message
    alert(
      `Generated ${
        sampleExpenses.length
      } sample expenses!\n\nTotal: $${sampleExpenses
        .reduce((sum, exp) => sum + parseFloat(exp.amount), 0)
        .toFixed(2)}\n\nRefresh the page to see all features in action!`
    );
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
              <button className="btn-generate" onClick={handleGenerateData}>
                Generate Sample Data
              </button>
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
