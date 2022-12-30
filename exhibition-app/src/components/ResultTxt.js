import React, { useCallback, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Mybutton from "./../styles/Mybutton";
import ErrorPage from "./../pages/ErrorPage";
import styled from "styled-components";
import LayOut from "./../styles/LayOut";
import theme from "./../styles/theme";
import { css } from "styled-components";
// 색깔만 정하면 될듯

const { deepGreen, green, yellow, blue, pink, purple, grey } = theme.palette;
//이게 ResultBtn의 btnInfoMap이랑 연관이 되어있어서 잘못하면 2중으로 봐야하기 때문에 resultPage에서 props로 내릴려고 했으나
// 그렇게 할경우 최빈값이 2개가 나올경우 오류가 발생함 , 우선은 layout완성에 집중

const ResultTxt = (props) => {
  // ResultPage에서 interestType.value
  const { category, resultCategoryInfo } = props;

  // 이렇게 말고 default로 가능한가?
  let interestType = {};
  if (category.length === 1) {
    interestType = resultCategoryInfo.get(category[0]);
  } else if (category.length > 1) {
    interestType = {
      value: "멀티", //있을 필요가 있나? 구분때문에 넣어두긴 하는데
      img: "https://cdn.pixabay.com/photo/2021/05/05/04/42/pixel-cells-6230153_960_720.png",
      character: "다관심자",
      info: "하나의 장르에 얽매이지 않는 수많은 관심사를 가졌습니다. 그렇기에 문화를 즐기는 방식도 다양합니다. ",
      interest: "멀티",
      recommand:
        "여러가지가 혼합된 경험을 하느것을 추천드려요, 다양한 장르에 있는 관심들이 하나도 혼합된 새로운 형태의 공연을 추천드립니다.",
      color: "green",
    };
  }

  if (!interestType) {
    throw console.log("interest없음");
  }

  return (
    <TxtContainer>
      <section className="character_info">
        <h1>{interestType.character}</h1>
        <img src={interestType.img} width="300px" height="300px" alt="" />
      </section>

      <div className="main_description">
        <section className="info_section">
          <IndexTitle color={interestType.color}>특징</IndexTitle>
          <p>{interestType.info}</p>
        </section>

        <section className="recommand_section">
          <IndexTitle color={interestType.color}>선호하는 장르</IndexTitle>
          <p>{interestType.recommand}</p>
        </section>
      </div>
    </TxtContainer>
  );
};

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    // console.log(selected);
    return css`
      background: ${selected};
    `;
  }}
`;

const IndexTitle = styled.h2`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 35px;
  font-size: 1.35rem;

  padding: 0 15px;
  border: 0px solid;
  border-radius: 20px;

  /* 색상 */
  ${colorStyles}// color: white;
`;

const TxtContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 125%;

  .character_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
      font-size: 2rem;
      padding: 5% 0;
    }
  }

  .main_description {
    // 넓이가 800px이상부터는 width : 75%로 하는것이 적당해보임
    // 넓이 1000px 이상부터 크기 고정
    // width : 100%
    max-width: 850px;
    padding: 0 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 1.25rem;
    .info_section {
      background: #fff;

      // box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
    }
    .recommand_section {
    }
  }
`;

export default ResultTxt;
