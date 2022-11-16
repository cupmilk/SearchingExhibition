import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./../pages/Main";
import ResultPage from "./../pages/ResultPage";
import RecommandPage from "../pages/RecommandPage";
import Question1 from "../pages/Question1";
import Question2 from "../pages/Question2";

const Router = () => {
  //[exhibition,exhibition, exhibition, consert ] => exhibition
  //[1,2,3].length랑 비교해서 pop 으로 지우기
  const [interest, SetInterest] = useState([]);

  const handleInterest = (e) => {
    SetInterest(e);
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.log(interest);
  }, [interest]);

  const pageJs = (any) => {
    <any></any>;
  };

  const QuestionPage = (url, pagejs) => {
    <Route path={url} element={pagejs}></Route>;
  };

  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route
        path="/Question/1"
        element={
          <Question1 handleInterest={handleInterest} navigate={navigate} />
        }
      ></Route>
      <Route
        path="/Question/2"
        element={
          <Question2 handleInterest={handleInterest} navigate={navigate} />
        }
      ></Route>
      <Route
        path="/ResultPage"
        element={<ResultPage interest={interest} />}
      ></Route>
      <Route path="/recommand" element={<RecommandPage />}></Route>
    </Routes>
  );
};

export default Router;
