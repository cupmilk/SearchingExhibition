import React, { useState, useEffect, useCallback, useRef } from "react";
import Header from "../components/Header";

//사용자가 결과값을 임의로 접근할 수 있기 때문에 param을 이용하여 페이지 넘기던 방식을 수정
// map을 이용하여 똑같은 페이지 복사 붙여넣기 방식 수정
// mainpage와 step1일경우 interest 상태 초기화

const Question = (props) => {
  const { handleInterest, navigate, interest } = props;
  const [step, setStep] = useState(1);
  const interestPrev = useRef(null);

  const clickBack = () => {
    interestPrev.current = interest;
    console.log(interestPrev);
    if (step > 1) {
      setStep((prev) => prev - 1);
      //뒤로 갈때의 값도 바꿔야함
      // 그 전 값을 저장해두고 뒤로가며 그 전값을 집어 넣어주는 식으로 해야할듯?

      // handleInterest((prev) => [...prev].slice(0, step - 2));
      handleInterest(interestPrev);
    } else {
      navigate("/");
    }
  };

  const handleStore = (e) => {
    if (interest.length !== 6) {
      let value = e.target.value;
      //값이 두개 이상일 경우
      if (value.length > 1) {
        const arr = value.split(",");
        for (const index of arr) {
          handleInterest((prev) => [...prev, index]);
        }
      } else {
        handleInterest((prev) => [...prev, e.target.value]);
      }

      setStep((prev) => prev + 1);
    }
  };

  useEffect(() => {
    console.log(step);
    if (step > 6) {
      navigate("/ResultPage");
    }
  }, [navigate, step]);
  console.log(interest);
  //흠 뭔가 이러헥 하니까 handleStore 없으면 안되가지고 불편한듯?
  // 여기 데이터에 하나하나 추가해주는것도 불편한듯?

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
        {
          questionTitle: "콘서트 질문",
          id: "consert",
          event: handleStore,
          value: 2,
        },
        {
          questionTitle: "전시/미술 ",
          id: "exhibition",
          event: handleStore,
          value: 3,
        },
        {
          questionTitle: "뮤지컬 질문",
          id: "musical",
          event: handleStore,
          value: 4,
        },
        {
          questionTitle: "클래식 질문",
          id: "classic",
          event: handleStore,
          value: [4, 5],
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
        {
          questionTitle: "콘서트 질문",
          id: "consert",
          event: handleStore,
          value: 2,
        },
        {
          questionTitle: "전시/미술 ",
          id: "exhibition",
          event: handleStore,
          value: 3,
        },
        {
          questionTitle: "뮤지컬 질문",
          id: "musical",
          event: handleStore,
          value: 4,
        },
        {
          questionTitle: "클래식 질문",
          id: "classic",
          event: handleStore,
          value: 5,
        },
      ],
    },
    {
      step: 3,
      title: "q3",
      subtitle: "sq3",
      questionData: [
        {
          questionTitle: "문화교양/강좌 질문",
          id: "cultureLecture",
          event: handleStore,
          value: 1,
        },
        {
          questionTitle: "콘서트 질문",
          id: "consert",
          event: handleStore,
          value: 2,
        },
        {
          questionTitle: "전시/미술 ",
          id: "exhibition",
          event: handleStore,
          value: 3,
        },
        {
          questionTitle: "뮤지컬 질문",
          id: "musical",
          event: handleStore,
          value: 4,
        },
        {
          questionTitle: "클래식 질문",
          id: "classic",
          event: handleStore,
          value: 5,
        },
      ],
    },
    {
      step: 4,
      title: "q4",
      subtitle: "sq4",
      questionData: [
        {
          questionTitle: "문화교양/강좌 질문",
          id: "cultureLecture",
          event: handleStore,
          value: 1,
        },
        {
          questionTitle: "콘서트 질문",
          id: "consert",
          event: handleStore,
          value: 2,
        },
        {
          questionTitle: "전시/미술 ",
          id: "exhibition",
          event: handleStore,
          value: 3,
        },
        {
          questionTitle: "뮤지컬 질문",
          id: "musical",
          event: handleStore,
          value: 4,
        },
        {
          questionTitle: "클래식 질문",
          id: "classic",
          event: handleStore,
          value: 5,
        },
      ],
    },
    {
      step: 5,
      title: "q5",
      subtitle: "sq5",
      questionData: [
        {
          questionTitle: "문화교양/강좌 질문",
          id: "cultureLecture",
          event: handleStore,
          value: 1,
        },
        {
          questionTitle: "콘서트 질문",
          id: "consert",
          event: handleStore,
          value: 2,
        },
        {
          questionTitle: "전시/미술 ",
          id: "exhibition",
          event: handleStore,
          value: 3,
        },
        {
          questionTitle: "뮤지컬 질문",
          id: "musical",
          event: handleStore,
          value: 4,
        },
        {
          questionTitle: "클래식 질문",
          id: "classic",
          event: handleStore,
          value: 5,
        },
      ],
    },
    {
      step: 6,
      title: "q6",
      subtitle: "sq6",
      questionData: [
        {
          questionTitle: "문화교양/강좌 질문",
          id: "cultureLecture",
          event: handleStore,
          value: 1,
        },
        {
          questionTitle: "콘서트 질문",
          id: "consert",
          event: handleStore,
          value: 2,
        },
        {
          questionTitle: "전시/미술 ",
          id: "exhibition",
          event: handleStore,
          value: 3,
        },
        {
          questionTitle: "뮤지컬 질문",
          id: "musical",
          event: handleStore,
          value: 4,
        },
        {
          questionTitle: "클래식 질문",
          id: "classic",
          event: handleStore,
          value: 5,
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
