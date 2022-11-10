import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter.jsx/ExpensesFIlter";
import { Button } from "@mui/material";
import { TotalAmount } from "../TotalAmount/TotalAmount";
import ExpensesChart from "../Chart/ExpensesChart";
export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("All");
  const [open, setOpen] = useState(false);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (filteredYear.toLowerCase?.() === "all") {
      return expense;
    }
    expense.date = new Date(expense?.date);
    return expense.date?.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">





        <div>
          <TotalAmount />
        </div>
        <div>
<ExpensesChart expenses={filteredExpenses}/>


</div>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
          open={open}
          setOpen={setOpen}
        />
        {filteredExpenses.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="info"
              onClick={() => setOpen(true)}
            >
              no expnses found
            </Button>
          </div>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))
        )}
      </Card>
    </div>
  );
}
