import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./../pages/Main";
import ResultPage from "./../pages/ResultPage";
import RecommandPage from "../pages/RecommandPage";
import Question from "../pages/Question";
import LastQuestion from "../pages/LastQuestion";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  //[exhibition,exhibition, exhibition, consert ] => exhibition
  //[1,2,3].length랑 비교해서 pop 으로 지우기
  const [interest, SetInterest] = useState([]);

  const QURL = "/Question";

  const handleInterest = (e) => {
    SetInterest(e);
  };

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(interest);
  // }, [interest]);

  // const QuestionPage = {
  //   q1: {
  //     path: `${QURL}1`,
  //     nav: `${QURL}2?page=2`,
  //   },
  //   q2: {
  //     path: `${QURL}2`,
  //     nav: `${QURL}3?page=3`,
  //   },
  //   q3: {
  //     path: `${QURL}3`,
  //     nav: `${QURL}4?page=4`,
  //   },
  //   q4: {
  //     path: `${QURL}4`,
  //     nav: `${QURL}5?page=5`,
  //   },
  // };

  return (
    <Routes>
      <Route
        path="/"
        element={<Main handleInterest={handleInterest} />}
      ></Route>
      <Route
        path="/Question"
        element={
          <Question
            handleInterest={handleInterest}
            navigate={navigate}
            interest={interest}
          />
        }
      ></Route>
      <Route
        path="/ResultPage"
        element={<ResultPage interest={interest} navigate={navigate} />}
      ></Route>
      <Route path="/recommand" element={<RecommandPage />}></Route>
      <Route path="/error" element={<ErrorPage navigate={navigate} />}></Route>
    </Routes>
  );
};

export default Router;
