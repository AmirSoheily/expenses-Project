/* eslint-disable */

import React, { useState, useContext } from "react";
import ExpenseDate from "../ExpensesDate/ExpenseDate";
import "./ExpenseItem.css";
import Card from "../Card/Card";
import { ExpenseContext } from "../Expenses/Expenses";
export default function ExpenseItem({ date, amount, title }) {
  const [titles, settitle] = useState(title);
  const changeTitle = () => {
    debugger;
    settitle("Damged");
    console.log(titles);
  };

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className="expense-item__description ">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={() => changeTitle()}>change</button>
    </Card>
  );
}
