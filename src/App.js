import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import 'devextreme/dist/css/dx.light.css';
const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
