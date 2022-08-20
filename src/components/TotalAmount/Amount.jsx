import React, { useState } from "react";
import "./TotalAmount.css";

export const Amount = ({ value }) => {
  // const[Newvalue,setNewvalue]=useState()

  return <div className="expense-item__amount">${value}</div>;
};
