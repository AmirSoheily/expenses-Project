import React from "react";
import ExpensePage from "../../Pages/Expense/ExpensePage";
import Footer from "../Footer/Footer";
import VerticalMenu from "./VerticalMenu";
import { Routes, Route } from "react-router-dom";
import {Home} from "../../Pages/Home/Home";
const Layout = () => {
  return (
    <>
      <main>
        <header className="header">
          <VerticalMenu />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Expenses" element={<ExpensePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
