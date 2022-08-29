//import ExpenseItem from "./components/ExpenseItem";
import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

//function App() {
  const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  


// cheching if new data made it to the App 
  const addExpenseHandler = expense => {
    // using spread operator, adding new expense and spreading previouse expenses
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
    console.log('in App.js');
    console.log(expense);
  };

  // passing addExpenseHandler to NewExpense to see if freshly added data made it to App
  return (
    <div>
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}
        />
      </div>
    </div>
  );
}

export default App;
