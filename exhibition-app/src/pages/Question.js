import React, { useState, useEffect, useCallback, useRef } from "react";
import Header from "../components/Header";
import Mybutton from "../styles/Mybutton";
import LayOut from "./../styles/LayOut";
import styled from "styled-components";

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
      subtitle:
        "완벽하게 맞는 설명보다 감각적으로 받아들이기를 선호하는 편이다.",
      questionData: [
        {
          questionTitle: "그렇다",
          event: handleStore,
          value: [1],
        },
        {
          questionTitle: "아니다",
          event: handleStore,
          value: [2, 4, 5],
        },
      ],
    },
    {
      step: 2,
      title: "q2",
      subtitle: "주로 가사가 없는 음악을 듣는다 ",
      questionData: [
        {
          questionTitle: "그렇다",
          event: handleStore,
          value: [5],
        },
        {
          questionTitle: "아니다",
          event: handleStore,
          value: [2, 4],
        },
      ],
    },
    {
      step: 3,
      title: "q3",
      subtitle: "활기찬 분위기보단 조용하고 차분한 분위기를 선호한다",
      questionData: [
        {
          questionTitle: "그렇다",
          event: handleStore,
          value: [3],
        },
        {
          questionTitle: "아니다",
          event: handleStore,
          value: [2, 4],
        },
      ],
    },
    {
      step: 4,
      title: "q4",
      subtitle: "트렌드에 민감하여 즉각적으로 반응하는 편이다",
      questionData: [
        {
          questionTitle: "그렇다",
          event: handleStore,
          value: [2],
        },
        {
          questionTitle: "아니다",
          event: handleStore,
          value: [4, 5],
        },
      ],
    },
    {
      step: 5,
      title: "q5",
      subtitle: "???",
      questionData: [
        {
          questionTitle: "그렇다",
          event: handleStore,
          value: [3],
        },
        {
          questionTitle: "아니다",
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
  console.log(interest);
  return (
    <QsLayOut>
      <div className="header">
        <Header />
      </div>

      {qaData.map((data, index) => {
        if (data.step === step) {
          return (
            <div key={index} className="main-content">
              <div className="qs-container">
                <h2> {data.title}</h2>
                <h4> {data.subtitle} </h4>
              </div>

              <ul className="ans-container">
                {data.questionData.map((data, index) => (
                  <li key={index}>
                    {/* <button
                      type="button"
                      onClick={data.event}
                      id={data.id}
                      value={data.value}
                    >
                      {data.questionTitle}
                    </button> */}
                    <Mybutton
                      color="pink"
                      size="large"
                      onClick={data.event}
                      id={data.id}
                      value={data.value}
                    >
                      {data.questionTitle}
                    </Mybutton>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        // return {}
      })}
      <div className="footer">
        <Mybutton
          size="large"
          color="yellow"
          className="back-btn"
          onClick={clickBack}
        >
          뒤로가기
        </Mybutton>
      </div>
    </QsLayOut>
  );
};

const QsLayOut = styled(LayOut)`
  .main-content {
    .qs-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 20px 0;

      & > h2 {
        margin: 30px 0;
      }

      & > h4 {
        width: 100%;
        font-size: 1.75rem;
        border: 0px solid;
        border-radius: 15px;
        background: white;
      }
    }

    .ans-container {
      display: flex;
      flex-direction: row;
      margin-top: 25px;

      & > li {
        margin: 0 30px;
      }
    }
  }
  .back-btn {
    width: 150px;

    border: 0px solid;
  }
`;

export default Question;
