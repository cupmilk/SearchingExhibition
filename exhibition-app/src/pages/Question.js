import React, { useState, useEffect, useCallback } from "react";
import Mybutton from "../styles/Mybutton";
import LayOut from "./../styles/LayOut";
import styled from "styled-components";
import theme from "../styles/theme";
import { css } from "styled-components";
import qaData from "./../utils/qaData";
import { useNavigate } from "react-router-dom";
import Header from "./../components/Header";

// 진행도파악
const persentCalculator = (numerator, denominator) => {
  return Math.floor((numerator / denominator) * 100);
};

const Question = (props) => {
  const { handleInterest, interest } = props;
  const [step, setStep] = useState(1); //몇번째 질문
  const navigate = useNavigate();

  // 이전 페이지로 갈 경우 해당 페이지에 들어가야할 값 순서까지 삭제
  const clickBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      handleInterest((prev) => [...prev].slice(0, step - 2));
    } else {
      navigate("/");
    }
  };
  // 버튼을 눌렀을 경우 inetreset 값추가, step증가
  const handleStore = (e) => {
    if (interest.length !== qaData.length) {
      handleInterest((prev) => [...prev, e.target.value]);
      setStep((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (step > qaData.length) {
      navigate("/ResultPage");
    }
  }, [navigate, step]);

  // mainpage와 step1일경우 interest 상태 초기화
  const resetValue = useCallback(() => {
    handleInterest([]);
  }, [handleInterest]);

  useEffect(() => {
    resetValue();
  }, [resetValue]);

  //이거 마지막 선택지 작동안함
  return (
    <QsLayOut>
      <div className="header">
        <Header />
      </div>
      {qaData.map(
        (data, index) =>
          data.step === step && (
            <div key={index} className="main-content">
              <div className="qs-container">
                <h2> {data.title}</h2>
                <h4> {data.subtitle} </h4>
              </div>
              <ul className="ans-container">
                {data.questionData.map((data, index) => (
                  <li key={index}>
                    <Mybutton
                      color={theme.palette.pink}
                      size="large"
                      onClick={handleStore}
                      id={data.id}
                      value={data.value}
                    >
                      {data.questionTitle}
                    </Mybutton>
                  </li>
                ))}
              </ul>
            </div>
          )
      )}

      <div className="footer">
        <div className="progess_container">
          {/* <span>{Math.floor(step / qaData.length)}</span> */}
          <div className="progess_num">
            {persentCalculator(step, qaData.length)}%
          </div>

          <PersentBar step={step} allStep={qaData.length} />
        </div>

        <Mybutton
          size="large"
          color={theme.palette.yellow}
          className="back-btn"
          onClick={clickBack}
        >
          뒤로가기
        </Mybutton>
      </div>
    </QsLayOut>
  );
};

// 백그라운드 어느정도의 길이 하나
//  하나의 색깔이 있는 box?가 점점 커지는 순
// width : calc(100% - current.step/step.length x 100 )
const persentWidth = css`
  ${({ step, allStep }) => {
    const processPercent = persentCalculator(step, allStep);
    return css`
      ${processPercent}%
    `;
  }}
`;
const PersentBar = styled.div`
  width: ${persentWidth};
  height: 5px;

  border-radius: 18px;

  background: ${theme.palette.deepGreen};
`;

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

  .footer {
    .progess_container {
      width: 100%;
      display: flex;
      flex-direction: row;
      //
      align-items: center;

      font-size: 1rem;
      padding: 0 25%;

      .progess_num {
        width: 45px;
        display: flex;
        justify-content: end;
        // margin-right: 15px;
      }

      // .persentbar_box {
      //   width: 100%;
      //   background: red;
      // }
    }
  }
`;

export default Question;
