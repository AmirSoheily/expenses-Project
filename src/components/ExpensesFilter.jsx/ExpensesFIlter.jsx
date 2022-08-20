import { Dialog, DialogContent, Typography } from "@mui/material";
import React from "react";
import Iconify from "../Iconify/Iconify";
import { NewExpense } from "../NewExpense/NewExpense";
import "./ExpensesFIlter.css";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ExpensesFilter = ({ open, setOpen, onChangeFilter, selected }) => {
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };
  function handleClose() {
    setOpen(false);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              display: "block",
              ":hover": { color: "#8FE3CF", transition: "0.3ms" },
            }}
            variant="subtitle2"
            onClick={() => setOpen(true)}
          >
            <div>
              <Iconify
                icon={"ant-design:dollar-outlined"}
                onClick={() => setOpen(true)}
                sx={{
                  display: "block",
                  color: "#fff",
                  ":hover": { color: "#8FE3CF", transition: "0.3ms" },
                }}
                width={40}
                height={40}
              />
              <span>add</span>
            </div>
          </Typography>

          <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <DialogContent
              sx={{ backgroundColor: "#1A1A2E", borderRadius: "2px" }}
            >
              <NewExpense handleClose={handleClose} />
            </DialogContent>
          </Dialog>
        </div>
        <div style={{ textAlign: "center" }}>
          <label style={{ display: "block" }}>Filter by year</label>
          <select
            style={{ height: "35px" }}
            value={selected}
            onChange={dropdownChangeHandler}
          >
            <option value="ALL">ALL</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;
