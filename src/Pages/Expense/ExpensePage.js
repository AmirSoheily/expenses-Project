/* eslint-disable */
import React, { useState, useEffect } from "react";
import Expenses from "../../components/Expenses/Expenses";
import { ExpensesItems } from "../../Constant/Constant";

export const ExpensesContext = React.createContext();

export default function ExpensePage() {
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
    <>
      <ExpensesContext.Provider value={{ setExpenses, expenses }}>
        <Expenses expenses={expenses} />
      </ExpensesContext.Provider>
    </>
  );
}
