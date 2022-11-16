import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// 점수를 리턴해서 배열에 넣어서 마지막 배열에 값에 따라 결과값(result page의 결과) 다르게 도출

const Question1 = (props) => {
  const { handleInterest, navigate } = props;

  const handleResult = () => {};

  const handleStore = (e) => {
    handleInterest((prev) => [...prev, e.target.value]);
    navigate("/Question/2");
  };

  return (
    <div>
      <h6>앱이름</h6>
      <h1>질문</h1>
      <h4> 어떤 성향에 대한 질문 </h4>
      <ul>
        <li>
          <button onClick={handleStore} id="exhibition" value={1}>
            전시 질문
          </button>
        </li>
        <li>
          <button onClick={handleStore} id="consert" value={2}>
            콘서트 질문
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Question1;
