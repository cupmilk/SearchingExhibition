import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Question = (props) => {
  const { handleInterest, navigate, nextURL, interest } = props;

  const [searchPage, setSearchPage] = useSearchParams();
  const [step, setStep] = useState(1);

  // url로 질문을 통제하는건 잘못됌 -> 새로고침 시 데이터가 저장이안됌
  // step = 1 => 뒤로가기 가능   = 메인페이지로 이동
  // setp > 1 => 뒤로가기가 불가능 = 현재 질문상태니까

  const page = Number(searchPage.get("page"));

  // useEffect(() => {
  //   //페이지와 흥미배열이 일정하도록 유지 -> 차후 넘칠경우를 생각해봐야할듯
  //   if (page !== interest.length + 1) {
  //     handleInterest((prev) => [...prev].slice(0, page - 1));
  //   }
  // }, []);
  // 반복

  const handleStore = (e) => {
    handleInterest((prev) => [...prev, e.target.value]);
    navigate(nextURL);
  };

  const qaData = [
    {
      step: 1,
      title: "q1",
      subtitle: "sq1",
      questionData: [
        {
          questionTitle: "문화교양/강좌 질문",
          id: "cultureLecture",
          event: handleStore,
          value: 1,
        },
      ],
    },
    {
      step: 2,
      title: "q2",
      subtitle: "sq2",
      questionData: [
        {
          questionTitle: "문화교양/강좌 질문",
          id: "cultureLecture",
          event: handleStore,
          value: 1,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>문화성향테스트</h1>
      {qaData.map((data, index) => {
        if (data.step === step) {
          return (
            <div key={index}>
              <h2> 질문 {data.title}</h2>
              <h4> {data.subtitle} </h4>
              <ul>
                {data.questionData.map((data, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={data.event}
                      id={data.id}
                      value={data.value}
                    >
                      {data.questionTitle}
                    </button>
                  </li>
                ))}
              </ul>
              {/* <li>
                    <button onClick={handleStore} id="exhibition" value={2}>
                      전시/미술 질문
                    </button>
                  </li>
                  <li>
                    <button onClick={handleStore} id="musical" value={3}>
                      뮤지컬/오페라
                    </button>
                  </li>
                  <li>
                    <button onClick={handleStore} id="consert" value={4}>
                      콘서트
                    </button>
                  </li>
                  <li>
                    <button onClick={handleStore} id="classic" value={5}>
                      클래식 질문
                    </button>
                  </li> */}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Question;
