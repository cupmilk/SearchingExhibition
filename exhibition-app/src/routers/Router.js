import React, { useState, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./../pages/Main";
import ResultPage from "./../pages/ResultPage";
import RecommandPage from "../pages/RecommandPage";
import Question from "../pages/Question";

import ErrorPage from "../pages/ErrorPage";
import Header from "../components/Header";
import theme from "./../styles/theme";
import AllResultPage from "./../pages/AllResultPage";
const Router = () => {
  //[exhibition,exhibition, exhibition, consert ] => exhibition
  //[1,2,3].length랑 비교해서 pop 으로 지우기

  // useConText를 이용해서 intereset값 관리하기
  const [interest, SetInterest] = useState([]);
  const [headerColor, SetHeaderColor] = useState(theme.palette.deepGreen);
  const handleInterest = useCallback((e) => {
    SetInterest(e);
  }, []);

  const handleHeaderColor = useCallback((color) => {
    SetHeaderColor(color);
  }, []);

  return (
    <>
      <Header color={headerColor} />
      <Routes>
        <Route
          path="/"
          element={<Main handleHeaderColor={handleHeaderColor} />}
        ></Route>
        <Route
          path="/question"
          element={
            <Question handleInterest={handleInterest} interest={interest} />
          }
        ></Route>
        <Route
          path="/resultPage"
          element={<ResultPage interest={interest} />}
        ></Route>
        <Route path="/resultPage/all" element={<AllResultPage />}></Route>
        <Route
          path="/recommand"
          element={<RecommandPage handleHeaderColor={handleHeaderColor} />}
        ></Route>

        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
};

export default Router;
