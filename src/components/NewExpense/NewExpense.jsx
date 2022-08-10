import React from "react";
import { ExpenseForm } from "../NewExpenseForm/ExpenseForm";
import "./NewExpense.css";

export const NewExpense = ({ addExpenseHandller }) => {
  debugger;
  const saveExpenseData = (enterExpenseData) => {
    const expensdata = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    addExpenseHandller(expensdata);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpense={saveExpenseData} />
    </div>
  );
};
