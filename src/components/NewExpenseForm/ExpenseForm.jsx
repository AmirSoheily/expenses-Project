import React, { useState } from "react";
import "./ExpenseForm.css";
export const ExpenseForm = ({ onExpense }) => {
  const [enterTitle, setenttertitle] = useState("");
  const [enterDate, setenterDate] = useState("");
  const [enterAmount, setenterAmount] = useState("");

  //   const [userInput, Setuserinput] = useState({
  //     enterTitle: "",
  //     enterAmount: "",
  //     enterDate: "",
  //   });

  const EnterChangeHandller = (event) => {
    setenttertitle(event.target.value);
  };

  const AmountChangeHandller = (event) => {
    setenterAmount(event.target.value);
  };

  const DateChangeHandller = (event) => {
    setenterDate(event.target.value);
  };

  const sumbitHandller = (event) => {
    event.preventDefault();

    const ExpenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    onExpense(ExpenseData);
    setenttertitle("");
    setenterDate("");
    setenterAmount("");
  };

  return (
    <form onSubmit={sumbitHandller} className="test">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterTitle}
            onChange={EnterChangeHandller}
          />
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            value={enterAmount}
            onChange={AmountChangeHandller}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input type="date" value={enterDate} onChange={DateChangeHandller} />
        </div>
        <button type="submit" className="new-expense__actions">
          Add New Expense
        </button>
      </div>
    </form>
  );
};
