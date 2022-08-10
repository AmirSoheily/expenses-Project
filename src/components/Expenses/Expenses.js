import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter.jsx/ExpensesFIlter";
export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("All");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    debugger;
    if (filteredYear.toLowerCase?.() === "all") {
      return expense;
    }
    expense.date = new Date(expense?.date);
    return expense.date?.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length === 0 ? (
          <p>no expnses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))
        )}
      </Card>
    </div>
  );
}
