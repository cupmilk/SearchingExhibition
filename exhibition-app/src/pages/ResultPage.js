import React, { useCallback, useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import styled from "styled-components";
import Mode from "./../components/Mode";
import ResultBtn from "../components/ResultBtn";
import ResultTxt from "../components/ResultTxt";
import LayOut from "./../styles/LayOut";

import Mybutton from "../styles/Mybutton";
import theme from "./../styles/theme";
import { useNavigate } from "react-router-dom";

const ResultPage = (props) => {
  const { interest } = props;
  const [categoryNum, setCategoryNum] = useState([]);
  const navigate = useNavigate();
  // intereste의 최빈값통해  공연 종류에 해당하는 번호 설정
  const getCategoryNum = useCallback(() => {
    // 베열 interest안에 요소 하나에 2개이상의 값이 들어가있을 경우 풀어서 새로운 배열에 추가
    // 예를 들어['', '3,4', '1,2,5', '2', '1,5,2', '', '3', '4,5', '1', '2', '3', '3', '1', '5', ''] 의경우 아래와 같이 변환
    // ['', '3', '4', '1', '2', '5', '2', '1', '5', '2', '', '3', '4', '5', '1', '2', '3', '3', '1', '5', '']
    let flatInterest = [];
    for (const index of interest) {
      if (index.length > 1) {
        for (const item of index) {
          if (item !== ",") {
            flatInterest.push(item);
          }
        }
      } else {
        flatInterest.push(index);
      }
    }
    const modeResult = Mode(flatInterest);
    setCategoryNum(modeResult.modes);
  }, [interest]);

  const goMain = () => {
    navigate("/");
  };
  const goAllResult = () => {
    //dev
    // window.open("http://localhost:3000/resultPage/all");
    window.open("https://cupmilk.netlify.app/ResultPage");
  };

  useEffect(() => {
    getCategoryNum();
  }, [getCategoryNum]);

  // useEffect(() => {
  //   console.log(interest);
  // }, [interest]);

  return (
    <ResultLayOut>
      <ContentBox>
        {interest.length > 1 ? (
          <div className="main-content">
            <section className="resultInfo_container">
              <ResultTxt categoryNum={categoryNum} />
            </section>
            <section className="resultBtn_container">
              {categoryNum.map((mode, index) => (
                <ResultBtn mode={mode} key={index} />
              ))}
            </section>
          </div>
        ) : (
          <ErrorPage navigate={navigate} />
        )}
      </ContentBox>
      <Footer>
        <Mybutton onClick={goMain}>다시하기</Mybutton>
        <Mybutton onClick={goAllResult}>모든 유형 살펴보기</Mybutton>
      </Footer>
    </ResultLayOut>
  );
};
const ContentBox = styled.div`
  grid-area: content;
`;
const Footer = styled.div`
  grid-area: footer;
  margin: 20% 0;

  ${theme.common.flexCenterColumn}
  > button {
    min-height: 2.5rem;
  }
`;

const ResultLayOut = styled(LayOut)`
  .main-content {
    /* max-width: ; */
    padding-bottom: 5%;
    & p {
      font-size: 1.1rem;
    }

    .resultBtn_container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (max-width: 780px) {
        padding-top: 30px;
      }
      padding-top: 75px;
      //600px넘을때부터 flex-direction: row
    }
  }
`;

export default ResultPage;
