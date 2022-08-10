import React from "react";
import Iconify from "../Iconify/Iconify";
import { ExpenseForm } from "../NewExpenseForm/ExpenseForm";
import "./NewExpense.css";

export const NewExpense = ({ setExpenses, Data, handleClose }) => {
  // const saveExpenseData = (enterExpenseData) => {
  //   const expensdata = {
  //     ...enterExpenseData,
  //     id: Math.random().toString(),
  //   };
  //   addExpenseHandller(expensdata);
  // };

  return (
    <div className="new-expense">
      <div style={{ textAlign: "end" }}>
        <Iconify
          icon={"line-md:close-circle"}
          onClick={handleClose}
          sx={{ color: "#fff", m: 1 }}
          width={25}
          height={25}
        />
      </div>
      <ExpenseForm
        setExpenses={setExpenses}
        Data={Data}
        handleClose={handleClose}
      />
    </div>
  );
};
