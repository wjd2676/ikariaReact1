import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Main from "./pages/Main/Main";
import CreateReport from "./pages/CreateReport/CreateReport";
import Result from "./pages/Result/Result";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/CreateReport" element={<CreateReport />} />
        <Route path="/Result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
