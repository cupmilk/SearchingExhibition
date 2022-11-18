import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import QustionCommentBtn from "../components/QustionCommentBtn";

// 점수를 리턴해서 배열에 넣어서 마지막 배열에 값에 따라 결과값(result page의 결과) 다르게 도출

const Question = (props) => {
  const { handleInterest, navigate, nextURL, interest } = props;

  const [searchPage, setSearchPage] = useSearchParams();
  const page = Number(searchPage.get("page"));

  useEffect(() => {
    //페이지와 흥미배열이 일정하도록 유지 -> 차후 넘칠경우를 생각해봐야할듯
    if (page !== interest.length + 1) {
      handleInterest((prev) => [...prev].slice(0, page - 1));
    }
  });

  const handleStore = (e) => {
    handleInterest((prev) => [...prev, e.target.value]);
    navigate(nextURL);
  };

  return (
    <div>
      <h6>앱이름</h6>
      <h1>질문</h1>
      <h4> 어떤 성향에 대한 질문 </h4>
      <ul>
        {/* <QustionCommentBtn handleStore={handleStore} value={1} /> */}
        <li>
          <button onClick={handleStore} id="exhibition" value={1}>
            문화교양/강좌 질문
          </button>
        </li>
        <li>
          <button onClick={handleStore} id="consert" value={2}>
            전시/미술 질문
          </button>
        </li>
        <li>
          <button onClick={handleStore} id="exhibition" value={3}>
            전시 질문
          </button>
        </li>
        <li>
          <button onClick={handleStore} id="consert" value={4}>
            뮤지컬/오페라 질문
          </button>
        </li>
        <li>
          <button onClick={handleStore} id="exhibition" value={3}>
            콘서트 질문
          </button>
        </li>
        <li>
          <button onClick={handleStore} id="exhibition" value={3}>
            클래식 질문
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Question;
