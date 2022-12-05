import React, { useState, useEffect, useCallback } from "react";

//사용자가 결과값을 임의로 접근할 수 있기 때문에 param을 이용하여 페이지 넘기던 방식을 수정
// map을 이용하여 똑같은 페이지 복사 붙여넣기 방식 수정
// mainpage와 step1일경우 interest 상태 초기화

const Question = (props) => {
  const { handleInterest, navigate, interest } = props;
  const [step, setStep] = useState(1);

  const clickBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      handleInterest((prev) => [...prev].slice(0, step - 2));
    } else {
      navigate("/");
    }
  };

  const myPromise = new Promise((resolve, reject) => {});

  // 여기 숫자 바꾸는것도 변화가 필요하네
  // 여기 길이 비교도 qaData 넣을때 자꾸만 변동해줘야해서 불편한듯?
  // 마지막 질문에 대한 답이 의미가 없어진다 -> interest가 값이 올라가기 전에 네비게이트로 보내기때문에
  // 1. settime 2.promise
  const handleStore = (e) => {
    console.log(interest.length);
    if (interest.length !== 6) {
      handleInterest((prev) => [...prev, e.target.value]);
      setStep((prev) => prev + 1);
      // console.log(interest.length);
    }
  };

  useEffect(() => {
    if (interest.length === 6) {
      navigate("/ResultPage");
    }
  }, [interest.length, navigate]);
  console.log(interest);
  //흠 뭔가 이러헥 하니까 handleStore 없으면 안되가지고 불편한듯?
  // 여기 데이터에 하나하나 추가해주는것도 불편한듯?

  // const handleStore = (e) => {
  //   if (interest.length !== 5) {
  //     handleInterest((prev) => [...prev, e.target.value]);
  //   }

  //   // console.log(interest.length);
  // };

  // useEffect(() => {
  //   console.log(interest.length);
  //   if (interest.length === 5) {
  //     navigate("/ResultPage");
  //   } else {
  //     setStep((prev) => prev + 1);
  //     // console.log(interest.length);
  //   }
  // }, [interest.length, navigate]);

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
          value: 5,
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
