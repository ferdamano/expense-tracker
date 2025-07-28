# 💰 Expense Tracker

A responsive expense tracking application built with React that allows employees to easily report and track their expenses.

## ✨ Features

- **Add New Expenses**: Simple form to add expenses with date, description, and amount
- **Expense History**: View all past expenses in a clean, sortable table
- **Search & Filter**: Search expenses by description with real-time filtering
- **Total Statistics**: View total expenses and expense count
- **Weekly Breakdown**: Toggle to see expenses broken down by week for the entire year
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Data Persistence**: Uses localStorage to save expenses locally
- **Modern UI**: Beautiful, clean design with smooth animations and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. The application will automatically reload when you make changes

### Building for Production

To create a production build:

```bash
npm run build
```

## 🛠️ Technology Stack

- **React 18**: Modern React with hooks and functional components
- **CSS3**: Custom CSS with modern design principles
- **date-fns**: Date manipulation and formatting
- **localStorage**: Client-side data persistence
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

## 📱 Features in Detail

### Expense Management
- Add expenses with description, amount, and date
- Automatic date validation and formatting
- Real-time form validation
- Delete expenses with confirmation

### Search & Filter
- Real-time search by expense description
- Clear search functionality
- Expense count display
- Case-insensitive search

### Statistics & Analytics
- Total expenses calculation
- Expense count tracking
- Weekly breakdown for the entire year
- Visual indicators for weeks with/without expenses

### User Experience
- Smooth animations and transitions
- Hover effects and visual feedback
- Loading states and empty states
- Responsive design for all screen sizes
- Modern glassmorphism design elements

## 📊 Data Structure

Expenses are stored in localStorage with the following structure:

```javascript
{
  id: "unique-timestamp",
  description: "Expense description",
  amount: "123.45",
  date: "2024-01-15"
}
```
## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and modern web technologies.