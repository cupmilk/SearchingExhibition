import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import theme from "./../styles/theme";
import { css } from "styled-components";
import resultCategoryInfo from "../utils/resultCategoryInfo";
import ErrorPage from "../pages/ErrorPage";

const switchInterestInfo = (num) => {
  switch (num) {
    case "1":
      return "문화교양";
    case "2":
      return "전시";
    case "3":
      return "콘서트";
    case "4":
      return "뮤지컬";
    case "5":
      return "클래식";
    default:
      return <ErrorPage />;
  }
};

const ResultTxt = (props) => {
  const { category } = props;
  const [interestType, setInterestType] = useState({});

  const matchingInterestType = useCallback(() => {
    if (category.length === 1) {
      const filteredRCI = resultCategoryInfo.find(
        (element) => element.value === switchInterestInfo(category[0])
      );
      setInterestType(filteredRCI);
    } else if (category.length > 1) {
      setInterestType({
        value: "멀티", //있을 필요가 있나? 구분때문에 넣어두긴 하는데
        img: "https://cdn.pixabay.com/photo/2019/01/22/10/58/pixel-cells-3947916_960_720.png",
        character: "다관심자",
        info: "하나의 장르에 얽매이지 않는 수많은 관심사를 가졌습니다. 그렇기에 문화를 즐기는 방식도 다양합니다. ",
        enjoy:
          "여러가지가 혼합된 경험을 하는것을 추천드려요, 다양한 장르에 있는 관심들이 하나도 혼합된 새로운 형태의 공연을 추천드립니다.",
        color: {
          theme: `${theme.palette.deepGreen}`,
          element: `${theme.palette.green}`,
        },
      });
    }
  }, [category]);

  useEffect(() => {
    matchingInterestType();
  }, [matchingInterestType]);

  //interestType.color에서만 오류가 걸려서 이렇게 했는데 어떻게 수정해야하는지 모르겠음
  return (
    <>
      {interestType.color ? (
        <TxtContainer>
          <section className="character_info">
            <h1>{interestType.character}</h1>
            <img src={interestType.img} width="300px" height="300px" alt="" />
          </section>
          <div className="main_description">
            <section className="info_section">
              <IndexTitle color={interestType.color.element}>특징</IndexTitle>
              <p>{interestType.info}</p>
            </section>
            <section className="recommand_section">
              <IndexTitle color={interestType.color.element}>
                선호하는 경험
              </IndexTitle>
              <p>{interestType.enjoy}</p>
            </section>
          </div>
        </TxtContainer>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

const colorStyles = css`
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
  ${colorStyles}
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
