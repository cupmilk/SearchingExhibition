import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import resultCategoryInfo from "../utils/resultCategoryInfo";
import switchInterestInfo from "./../utils/switchInterestInfo";

//from resultPage
const ResultTxt = (props) => {
  const { categoryNum } = props;
  const [interestType, setInterestType] = useState({}); //interest를 통해 보여줄 캐릭터정보

  // categoryinfo 설정
  const matchingInterestType = useCallback(() => {
    if (categoryNum.length === 1) {
      const filteredCategory = resultCategoryInfo.categoryInfo.find(
        (element) => element.value === switchInterestInfo(categoryNum[0])
      );
      setInterestType(filteredCategory);
    } else if (categoryNum.length > 1) {
      setInterestType(resultCategoryInfo.multiCategoryInfo);
    }
  }, [categoryNum]);

  useEffect(() => {
    matchingInterestType();
  }, [matchingInterestType]);
  //interestType의 다른 값들은 가져올때 interestType.color는 못가져오는 경우가 있어서 아래와 같이 설정

  const { adjective, character, img, color, enjoy, info } = interestType;

  return (
    <>
      {interestType && interestType.color ? (
        <TxtContainer>
          <section className="character_info">
            <h2 color={color.banner}>{adjective}</h2>
            <h1>{character}</h1>
            <img src={img} width="300px" height="300px" alt="" />
          </section>
          <div className="main_description">
            <section className="info_section">
              <IndexTitle color={color.element}>특징</IndexTitle>
              <p>{info}</p>
            </section>
            <section className="recommand_section">
              <IndexTitle color={color.element}>선호하는 경험</IndexTitle>
              <p>{enjoy}</p>
            </section>
          </div>
        </TxtContainer>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

const bgcolorStyles = css`
  ${({ color }) => {
    return css`
      background: ${color};
    `;
  }}
`;

const IndexTitle = styled.h2`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 35px;
  font-size: 1.35rem;
  color: white;

  padding: 0 15px;
  border: 0px solid;
  border-radius: 20px;

  /* 색상 */
  ${bgcolorStyles}
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

    :first-child {
      font-size: 1rem;
    }
    > h1 {
      font-size: 2rem;
      margin: 0 0 15px 0;
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
    align-items: start;

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
