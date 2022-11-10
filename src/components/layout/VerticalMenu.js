/* eslint-disable */
import React, { useState } from "react";
import Iconify from "../Iconify/Iconify";
import { Link } from "react-router-dom";
const VerticalMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <input type="checkbox" id="active" checked={isOpen} />
      <label
        for="active"
        className="menu-btn"
        onClick={() => setIsOpen((pervious) => !pervious)}
      >
        <Iconify icon={"line-md:menu-fold-left"} />
      </label>
      <div className="wrapper">
        <ul>
          <li>
            <Link to={"/"} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/Expenses"} onClick={() => setIsOpen(false)}>
              Expenses
            </Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default VerticalMenu;
