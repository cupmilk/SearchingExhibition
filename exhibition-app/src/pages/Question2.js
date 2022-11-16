import React from "react";
import { Link } from "react-router-dom";

const Question2 = (props) => {
  const { handleInterest, navigate } = props;
  const handleStore = (e) => {
    handleInterest((prev) => [...prev, e.target.value]);
    // navigate("/ResultPage");
  };
  const nav = () => {
    navigate("/ResultPage");
  };

  // const customBtn = (id, value, comment) => {
  //   <button id={id} onClick={handleStore} value={value}>
  //     {comment}
  //   </button>;
  // };

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
        <li>
          <button onClick={handleStore} id="other" value={3}>
            콘서트 질문
          </button>
        </li>
        <button onClick={nav}>다음</button>
      </ul>
    </div>
  );
};

export default Question2;
