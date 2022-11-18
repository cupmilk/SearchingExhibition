import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./../pages/Main";
import ResultPage from "./../pages/ResultPage";
import RecommandPage from "../pages/RecommandPage";
import Question from "../pages/Question";
import LastQuestion from "../pages/LastQuestion";

const Router = () => {
  //[exhibition,exhibition, exhibition, consert ] => exhibition
  //[1,2,3].length랑 비교해서 pop 으로 지우기
  const [interest, SetInterest] = useState([]);

  const QURL = "/Question";

  const handleInterest = (e) => {
    SetInterest(e);
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.log(interest);
  }, [interest]);

  const QuestionPage = {
    q1: {
      path: `${QURL}1`,
      nav: `${QURL}2?page=2`,
    },
    q2: {
      path: `${QURL}2`,
      nav: `${QURL}3?page=3`,
    },
    q3: {
      path: `${QURL}3`,
      nav: `${QURL}4?page=4`,
    },
    q4: {
      path: `${QURL}4`,
      nav: `${QURL}5?page=5`,
    },
  };
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route
        path={QuestionPage.q1.path}
        element={
          <Question
            handleInterest={handleInterest}
            navigate={navigate}
            interest={interest}
            nextURL={QuestionPage.q1.nav}
          />
        }
      ></Route>
      <Route
        path={QuestionPage.q2.path}
        element={
          <Question
            handleInterest={handleInterest}
            navigate={navigate}
            interest={interest}
            nextURL={QuestionPage.q2.nav}
          />
        }
      ></Route>
      <Route
        path={QuestionPage.q3.path}
        element={
          <Question
            handleInterest={handleInterest}
            navigate={navigate}
            interest={interest}
            nextURL={QuestionPage.q3.nav}
          />
        }
      ></Route>
      <Route
        path={QuestionPage.q4.path}
        element={
          <LastQuestion handleInterest={handleInterest} navigate={navigate} />
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
