import React from "react";
import LayOut from "../styles/LayOut";
import styled from "styled-components";
import Header from "./Header";
import Mybutton from "./../styles/Mybutton";
import ErrorPage from "../pages/ErrorPage";

//단일 컨텐츠
// 다수  컨텐츠일경우에 나눠서 나타내느거 생각
const Exhibition = (props) => {
  const { key, mode } = props;
  const showResult = (e) => {
    console.log(e.target.value);
    // navigate(`/recommand?catrgory=${e.target.value}`);
  };

  const result = (mode, index) => {
    switch (mode) {
      case "1":
        return (
          <button id="Btn" key={index} value="문화교양" onClick={showResult}>
            문화교양/강좌
          </button>
        );
      case "2":
        return (
          <button id="Btn" key={index} value="콘서트" onClick={showResult}>
            콘서트
          </button>
        );
      case "3":
        const exhibition = {
          value: "전시",
          img: "https://cdn.pixabay.com/photo/2018/09/24/08/31/pixel-cells-3699332_960_720.png",
          type: "전시유형 뭐시기",
          info: "대충 이 유형에 대한 설명 주저리 주저리",
          interest: "대충 뭘 좋아하는지에 대해 설명",
          character: "대충 특징 설명",
          recommand: "대충 이런게 좋다 설명",
          color: "유형에 맞는 색깔",
        };
        return exhibition;
      case "4":
        return (
          <button id="Btn" key={index} value="오페라" onClick={showResult}>
            뮤지컬/오페라
          </button>
        );
      case "5":
        return (
          <button id="Btn" key={index} value="클래식" onClick={showResult}>
            클래식
          </button>
        );
      default:
      //오류페이지 mainpage로 가도록
      // return <ErrorPage navigate={navigate} />;
    }
  };

  return (
    <ResultLayOut>
      <div className="main-content">
        <polygon
          className="background"
          points="1920,730 1067,835 0,753.3 0,458.1 377,393 778,495 1242,333 1920,0"
          class="c1"
        ></polygon>
        <section className="type-info">
          <img
            src="https://cdn.pixabay.com/photo/2018/09/24/08/31/pixel-cells-3699332_960_720.png"
            width="300px"
            height="300px"
            alt=""
          />
        </section>

        <div className="main-description">
          <h2> 어떤 유형 : 땡땡땡</h2>
          <p>이렇게 이렇게 생각하는 당신 뭐시기 뭐시기</p>
          <p>그리고 그래서 어떻게 저래서 저렇게 이렇게 이렇게 이런이런사람</p>
        </div>

        <Mybutton
          size="large"
          color="yellow"
          key={key}
          value="전시"
          onClick={showResult}
        >
          전시/미술
        </Mybutton>
      </div>
    </ResultLayOut>
  );
};

const ResultLayOut = styled(LayOut)`
  .main-content {
    .background {
      fill: #33a474;
    }
  }
`;

export default Exhibition;
