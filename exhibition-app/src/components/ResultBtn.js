import React from "react";
import { useNavigate } from "react-router-dom";
import Mybutton from "./../styles/Mybutton";
import styled from "styled-components";

//이 컴포넌트는 단순하게 버튼만 나오도록 만들자
const btnInfoMap = new Map([
  [
    "1",
    {
      value: "문화교양",
      color: "green",
    },
  ],
  [
    "2",
    {
      value: "전시",
      color: "yellow",
    },
  ],
  [
    "3",
    {
      value: "콘서트",
      color: "blue",
    },
  ],
  [
    "4",
    {
      value: "뮤지컬",
      color: "pink",
    },
  ],
  [
    "5",
    {
      value: "클래식",
      color: "purple",
    },
  ],
]);

const ResultBtn = (props) => {
  // ResultPage에서 interestType.value
  const { mode, resultCategoryInfo } = props;

  const status = resultCategoryInfo.get(mode);
  if (!status) {
    throw console.log("mode없음");
  }
  const { value, color } = status;

  const navigate = useNavigate();

  const showResult = (e) => {
    // console.dir(e.target.value);
    return navigate(`/recommand?catrgory=${e.target.value}`);
  };

  return (
    <ResultButton size="large" color={color} value={value} onClick={showResult}>
      {status.value} 보러가기
    </ResultButton>
  );
};

const ResultButton = styled(Mybutton)`
  min-width: 168px;
`;

export default ResultBtn;
