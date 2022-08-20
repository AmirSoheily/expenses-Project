import React, { useState, useEffect } from "react";
import { Amount } from "./Amount";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
const Local_Storage_key = "Amount.Total";
export const TotalAmount = () => {
  const [values, setvalue] = useState("");
  const [amount, setAmount] = useState();
  useEffect(() => {
    const TotalValue = localStorage.getItem(Local_Storage_key);
    if (TotalValue) {
      setvalue(JSON.parse(TotalValue));
      setAmount(JSON.parse(TotalValue));
    }
  }, []);
  useEffect(() => {
    if (values) {
      localStorage.setItem(Local_Storage_key, JSON.parse(values));
    }
  }, [values]);

  const GetAmount = () => {
    let val = values;
    let precvalues = amount;
    const valcal = parseInt(val) + parseInt(precvalues);

    if (values) {
      setAmount(valcal);
      localStorage.setItem(Local_Storage_key, JSON.stringify(valcal));
    }
  };

  return (
    <>
      <Amount value={amount} />{" "}
      <div>
        <div>TotalAmount</div>
        <button onClick={GetAmount}>Add Amount</button>
      </div>
      <div>
        {" "}
        <input
          type="number"
          onChange={(e) => setvalue(e.target.value)}
          value={values === amount ? 0 : values}
        />
      </div>
    </>
  );
};
// const amountTO = [
//   {
//     amount: "",
//   },
// ];
