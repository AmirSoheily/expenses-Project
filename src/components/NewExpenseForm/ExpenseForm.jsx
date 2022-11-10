import React, { useContext, useState } from "react";
import { ExpensesItems } from "../../Constant/Constant";
import { ExpensesContext } from "../../Pages/Expense/ExpensePage";
import "./ExpenseForm.css";

export const ExpenseForm = ({ Data, handleClose }) => {
  const { setExpenses, expenses } = useContext(ExpensesContext);
  const [enterTitle, setenttertitle] = useState(Data ? Data.title : "");
  const [enterDate, setenterDate] = useState(Data ? new Date(Data.date) : "");
  const [enterAmount, setenterAmount] = useState(Data ? Data.amount : "");
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

  const sumbitHandller = (event, Data) => {
    if (Data) {
      const SelectedData = expenses.find((expense) => {
        return expense.id === Data.id;
      });
      const edited = {
        id: SelectedData.id,
        title: enterTitle,
        amount: enterAmount,
        date: new Date(enterDate),
      };

      const RestData = expenses.filter((expense) => {
        return expense.id !== Data.id;
      });

      RestData.push(edited);
      localStorage.setItem(ExpensesItems, JSON.stringify(RestData));
      setExpenses(RestData);
    } else {
      event.preventDefault();
      const ExpenseData = {
        id: Math.random().toString(),
        title: enterTitle,
        amount: +enterAmount,
        date: new Date(enterDate),
      };
      const perviousExpenses = JSON.parse?.(
        localStorage.getItem(ExpensesItems)
      );
      const NewExpense = [ExpenseData, ...perviousExpenses];
      localStorage.setItem(ExpensesItems, JSON.stringify(NewExpense));
      setExpenses(NewExpense);

      // setExpenses((pervious) => {
      //   const moz = [ExpenseData, ...pervious];
      //   return moz;
      // });
      setenttertitle("");
      setenterDate("");
      setenterAmount("");

      handleClose?.(false);
    }
  };

  return (
    <form onSubmit={(e) => sumbitHandller(e, Data)} className="test">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            required
            value={enterTitle}
            onChange={EnterChangeHandller}
          />
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            value={enterAmount}
            required
            onChange={AmountChangeHandller}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            required
            defaultValue={enterDate}
            value={enterDate.toISOString?.().substr(0, 10)}
            onChange={DateChangeHandller}
          />
        </div>
        <span style={{ display: "block" }}>
          <button type="submit" className="new-expense__actions">
            {Data ? <> Update Expense </> : <>Add New Expense</>}
          </button>
        </span>
      </div>
    </form>
  );
};
