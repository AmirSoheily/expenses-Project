import React from "react";
import "./ExpenseDate.css";

export default function ExpenseDate({ date }) {
  date = date && new Date(date);
  const year = date && date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__Day">{day}</div>
    </div>
  );
}
