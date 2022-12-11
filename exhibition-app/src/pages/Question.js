import React, { useState, useEffect, useCallback, useRef } from "react";
import Header from "../components/Header";

//사용자가 결과값을 임의로 접근할 수 있기 때문에 param을 이용하여 페이지 넘기던 방식을 수정
// map을 이용하여 똑같은 페이지 복사 붙여넣기 방식 수정
// mainpage와 step1일경우 interest 상태 초기화

const Question = (props) => {
  const { handleInterest, navigate, interest } = props;
  const [step, setStep] = useState(1);
  // const [preInterest, setPreInterest] = useState([]);

  const clickBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      //뒤로 갈때의 값도 바꿔야함
      // 그 전 값을 저장해두고 뒤로가며 그 전값을 집어 넣어주는 식으로 해야할듯? -> 어케하농;
      handleInterest((prev) => [...prev].slice(0, step - 2));
    } else {
      navigate("/");
    }
  };

  const handleStore = (e) => {
    if (interest.length !== 6) {
      //값이 두개 이상일 경우
      handleInterest((prev) => [...prev, e.target.value]);
      setStep((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (step > 6) {
      navigate("/ResultPage");
    }
  }, [navigate, step]);
  // 여기 데이터에 하나하나 추가해주는것도 불편한듯?

  const qaData = [
    {
      step: 1,
      title: "q1",
      subtitle: "시각 vs 청각",
      questionData: [
        {
          questionTitle: "시각",
          event: handleStore,
          value: [1],
        },
        {
          questionTitle: "청각",
          event: handleStore,
          value: [2, 4, 5],
        },
      ],
    },
    {
      step: 2,
      title: "q2",
      subtitle: "웅장한 vs 경쾌한",
      questionData: [
        {
          questionTitle: "웅장한",
          event: handleStore,
          value: [5],
        },
        {
          questionTitle: "경쾌한",
          event: handleStore,
          value: [2, 4],
        },
      ],
    },
    {
      step: 3,
      title: "q3",
      subtitle: "차분한 vs 흥미진진한",
      questionData: [
        {
          questionTitle: "차분한",
          event: handleStore,
          value: [1, 3, 5],
        },
        {
          questionTitle: "흥미진진한",
          event: handleStore,
          value: [2, 4],
        },
      ],
    },
    {
      step: 4,
      title: "q1",
      subtitle: "트렌디 vs 전통적인",
      questionData: [
        {
          questionTitle: "트렌디",
          event: handleStore,
          value: [2, 4],
        },
        {
          questionTitle: "전통적인",
          event: handleStore,
          value: [5],
        },
      ],
    },
    {
      step: 5,
      title: "q5",
      subtitle: "지식 vs 감각",
      questionData: [
        {
          questionTitle: "지식",
          event: handleStore,
          value: [1],
        },
        {
          questionTitle: "감각",
          event: handleStore,
          value: [2, 3, 4, 5],
        },
      ],
    },
    {
      step: 6,
      title: "q6",
      subtitle: "흠 이건 테스트로 만들어준것",
      questionData: [
        {
          questionTitle: "대충 긴문장을 넣어서 사이즈를 보는게 좋을드함?",
          event: handleStore,
          value: [0],
        },
        {
          questionTitle: "이것도 대충 긴문장을 넣어서 보는것",
          event: handleStore,
          value: [0],
        },
      ],
    },
  ];

  //prorps를 가져오는거라서 넣어줘야하는데 넣으면 한무루프가 되서 쩝..
  const resetValue = useCallback(() => {
    handleInterest([]);
  }, []);

  useEffect(() => {
    resetValue();
  }, [resetValue]);

  //이거 마지막 선택지 작동안함

  return (
    <div>
      <Header navigate={navigate} />
      {qaData.map((data, index) => {
        if (data.step === step) {
          return (
            <div key={index}>
              <h2> {data.title}</h2>
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
            </div>
          );
        }
        // return {}
      })}
      <button onClick={clickBack}>뒤로가기</button>
    </div>
  );
};

export default Question;
