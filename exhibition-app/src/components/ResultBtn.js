import React, { useCallback, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Mybutton from "./../styles/Mybutton";
import ErrorPage from "./../pages/ErrorPage";
import styled from "styled-components";
import LayOut from "./../styles/LayOut";
import theme from "./../styles/theme";

//이 컴포넌트는 단순하게 버튼만 나오도록 만들자
const btnInfoMap = new Map([
  [
    "1",
    {
      value: "문화교양",
      color: "pink",
    },
  ],
  [
    "2",
    {
      value: "전시",
      color: "pink",
    },
  ],
  [
    "3",
    {
      value: "뮤지컬",
      color: "pink",
    },
  ],
  [
    "4",
    {
      value: "클래식",
      color: "pink",
    },
  ],
  [
    "5",
    {
      value: "콘서트",
      color: "pink",
    },
  ],
]);

const ResultBtn = (props) => {
  // ResultPage에서 interestType.value
  const { mode } = props;
  const status = btnInfoMap.get(mode);
  if (!status) {
    throw console.log("mode없음");
  }
  const { value, color } = status;

  const navigate = useNavigate();

  const showResult = (e) => {
    console.dir(e.target.value);
    // return navigate(`/recommand?catrgory=${e.target.value}`);
  };

  console.log(status);
  return (
    <Mybutton size="large" color={color} value={value} onClick={showResult}>
      {status.value} 보러가기
    </Mybutton>
  );
};

export default ResultBtn;
