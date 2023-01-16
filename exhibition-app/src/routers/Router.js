import React, { useState, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./../pages/Main";
import ResultPage from "./../pages/ResultPage";
import RecommandPage from "../pages/RecommandPage";
import Question from "../pages/Question";

import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  //[exhibition,exhibition, exhibition, consert ] => exhibition
  //[1,2,3].length랑 비교해서 pop 으로 지우기

  // useConText를 이용해서 intereset값 관리하기
  const [interest, SetInterest] = useState([]);

  const handleInterest = useCallback((e) => {
    SetInterest(e);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>

      <Route
        path="/Question"
        element={
          <Question handleInterest={handleInterest} interest={interest} />
        }
      ></Route>
      <Route
        path="/ResultPage"
        element={<ResultPage interest={interest} />}
      ></Route>
      <Route path="/recommand" element={<RecommandPage />}></Route>
      <Route path="/error" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default Router;
