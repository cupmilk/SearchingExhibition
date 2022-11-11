import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./../pages/Main";
import List1 from "./../pages/List1";
import ResultPage from "./../pages/ResultPage";
import RecommandPage from "../pages/RecommandPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/List1" element={<List1 />}></Route>
      <Route path="/ResultPage" element={<ResultPage />}></Route>
      <Route path="/recommand" element={<RecommandPage />}></Route>
    </Routes>
  );
};

export default Router;
