/* eslint-disable */

import React, { useState, useContext } from "react";
import ExpenseDate from "../ExpensesDate/ExpenseDate";
import "./ExpenseItem.css";
import Card from "../Card/Card";
import { ExpenseContext } from "../Expenses/Expenses";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { NewExpense } from "../NewExpense/NewExpense";
import { ExpensesContext } from "../../App";
import { ExpensesItems } from "../../Constant/Constant";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Iconify from "../Iconify/Iconify";
import Slide from "@mui/material/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ExpenseItem({ expense }) {
  const { setExpenses, expenses } = useContext(ExpensesContext);

  const { date, amount, title } = expense;
  const [open, setOpen] = useState(false);

  const changeTitle = () => {
    setOpen((pervious) => !pervious);
  };
  const deleteItem = (id) => {
    const PerviousItems = JSON.parse(localStorage.getItem(ExpensesItems));
    const newData = PerviousItems.filter((item) => {
      return item.id !== id;
    });
    setExpenses(newData);
    localStorage.setItem(ExpensesItems, JSON.stringify(newData));
  };
  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Card className="expense-item">
        <div>
          <ExpenseDate date={date} />
        </div>
        <div className="expense-item__description ">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
        <Iconify
          icon={"line-md:edit-twotone"}
          onClick={() => changeTitle()}
          sx={{
            color: "#8fe3cf98",
            m: 1,
            ":hover": { color: "#8FE3CF", transition: "0.3ms" },
          }}
          width={25}
          height={25}
        />
        <Iconify
          icon={"ic:baseline-delete"}
          onClick={() => deleteItem(expense?.id)}
          sx={{
            color: "#8fe3cf98",
            m: 1,
            ":hover": { color: "#8FE3CF", transition: "0.3ms" },
          }}
          width={25}
          height={25}
        />
        {/* <Button onClick={() => deleteItem(expense?.id)}>Delete</Button> */}
        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <DialogContent sx={{ backgroundColor: "#1A1A2E" }}>
            <NewExpense Data={expense} handleClose={handleClose} />
          </DialogContent>
        </Dialog>
      </Card>
    </>
  );
}
