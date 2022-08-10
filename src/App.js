/* eslint-disable */
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

export default function App() {
  const [expenses, setExpenses] = useState(DynmicExpenses);

  const addExpenseHandller = (expense) => {
    debugger;
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <>
      <NewExpense addExpenseHandller={addExpenseHandller} />
      <Expenses expenses={expenses} />;
    </>
  );
}
const DynmicExpenses = [
  {
    id: "e1",
    title: "toilet paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: " New Tv",
    amount: 799.42,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Instuction",
    amount: 94.12,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Des (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
