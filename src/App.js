/* eslint-disable */
import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { ExpensesItems } from "./Constant/Constant";

export const ExpensesContext = React.createContext();

export default function App() {
  const [expenses, setExpenses] = useState();

  useEffect(() => {
    const localExpensesItems = localStorage.getItem(ExpensesItems);
    if (!localExpensesItems) {
      localStorage.setItem(ExpensesItems, JSON.stringify([]));
    }
    setExpenses(JSON.parse(localStorage.getItem(ExpensesItems)));
  }, []);

  if (!expenses) {
    return <>Loading ...</>;
  }
  return (
    <ExpensesContext.Provider value={{ setExpenses, expenses }}>
      {/* <NewExpense setExpenses={setExpenses} /> */}
      <Expenses expenses={expenses} />;
    </ExpensesContext.Provider>
  );
}
// const DynmicExpenses = [
//   {
//     id: "e1",
//     title: "toilet paper",
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   {
//     id: "e2",
//     title: " New Tv",
//     amount: 799.42,
//     date: new Date(2021, 2, 12),
//   },
//   {
//     id: "e3",
//     title: "Car Instuction",
//     amount: 94.12,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Des (Wooden)",
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];
