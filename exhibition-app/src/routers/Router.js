import React from "react";
import { Route, Routes } from "react-router-dom";
import ResultPage from "../pages/ResultPage";
import Main from "./../pages/Main";
import List2 from "./../pages/List2";
import List1 from "./../pages/List1";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/List1" element={<List1 />}></Route>
      <Route path="/List2" element={<List2 />}></Route>
      <Route path="/result" element={<ResultPage />}></Route>
    </Routes>
  );
};

export default Router;
