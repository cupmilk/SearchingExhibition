import React, { useCallback, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Mybutton from "./../styles/Mybutton";
import ErrorPage from "./../pages/ErrorPage";
import styled from "styled-components";
import LayOut from "./../styles/LayOut";

//이 컴포넌트는 단순하게 버튼만 나오도록 만들자
const resultCategoryInfo = new Map([
  [
    "1",
    {
      img: "https://cdn.pixabay.com/photo/2021/05/05/04/42/pixel-cells-6230153_960_720.png",
      type: "멀티",
      info: "멀티",
      interest: "멀티",
      character: "멀티",
      recommand: "멀티",
      color: "멀티",
    },
  ],
  [
    "2",
    {
      value: "문화교양",
      img: "https://cdn.pixabay.com/photo/2018/09/25/11/45/pixel-cells-3702062_960_720.png",
      type: "전시유형 뭐시기",
      info: "대충 이 유형에 대한 설명 주저리 주저리",
      interest: "대충 뭘 좋아하는지에 대해 설명",
      character: "대충 특징 설명",
      recommand: "대충 이런게 좋다 설명",
      color: "유형에 맞는 색깔",
    },
  ],
  [
    "3",
    {
      value: "전시",
      img: "https://cdn.pixabay.com/photo/2018/09/24/08/31/pixel-cells-3699332_960_720.png",
      type: "전시유형 뭐시기",
      info: "대충 이 유형에 대한 설명 주저리 주저리",
      interest: "대충 뭘 좋아하는지에 대해 설명",
      character: "대충 특징 설명",
      recommand: "대충 이런게 좋다 설명",
      color: "유형에 맞는 색깔",
    },
  ],
  [
    "4",
    {
      value: "콘서트",
      img: "https://cdn.pixabay.com/photo/2019/02/04/08/38/pixel-cells-3974182_960_720.png",
      type: "전시유형 뭐시기",
      info: "대충 이 유형에 대한 설명 주저리 주저리",
      interest: "대충 뭘 좋아하는지에 대해 설명",
      character: "대충 특징 설명",
      recommand: "대충 이런게 좋다 설명",
      color: "유형에 맞는 색깔",
    },
  ],
  [
    "5",
    {
      value: "클래식",
      img: "https://cdn.pixabay.com/photo/2018/09/24/08/31/pixel-cells-3699332_960_720.png",
      type: "전시유형 뭐시기",
      info: "대충 이 유형에 대한 설명 주저리 주저리",
      like: "대충 뭘 좋아하는지에 대해 설명",
      character: "대충 특징 설명",
      recommand: "대충 이런게 좋다 설명",
      color: "유형에 맞는 색깔",
    },
  ],
]);

const ResultTxt = (props) => {
  // ResultPage에서 interestType.value
  const { category } = props;
  const [interestType, setInterestType] = useState({});

  const matchingCategory = useCallback(() => {
    if (category.length === 1) {
      setInterestType(resultCategoryInfo.get(category[0]));
    } else {
      setInterestType({
        img: "https://cdn.pixabay.com/photo/2021/05/05/04/42/pixel-cells-6230153_960_720.png",
        type: "멀티",
        info: "멀티",
        interest: "멀티",
        character: "멀티",
        recommand: "멀티",
        color: "멀티",
      });
    }
  }, [category, setInterestType]);

  useEffect(() => {
    matchingCategory();
  }, [matchingCategory]);

  return (
    <div>
      <img src={interestType.img} width="300px" height="300px" alt="" />
      <section>
        <h4>{interestType.character}</h4>
        <span>{interestType.info}</span>
      </section>
      <section>
        <h4>{interestType.like}</h4>
        <p></p>
      </section>
      <section>
        <h4>{interestType.type}</h4>
      </section>
    </div>
  );
};

export default ResultTxt;
