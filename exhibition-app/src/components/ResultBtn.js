import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mybutton from "./../styles/Mybutton";
import styled from "styled-components";
import resultCategoryInfo from "../utils/resultCategoryInfo";
import ErrorPage from "../pages/ErrorPage";

//이 컴포넌트는 단순하게 버튼만 나오도록 만들자
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

const ResultBtn = (props) => {
  const { mode } = props;
  const [interestType, setInterestType] = useState({});
  const navigate = useNavigate();

  const matchingInterestType = useCallback(() => {
    const filteredRCI = resultCategoryInfo.find(
      (element) => element.value === switchInterestInfo(mode)
    );
    setInterestType(() => filteredRCI);
  }, [mode]);

  useEffect(() => {
    matchingInterestType();
  }, [matchingInterestType]);

  const showResult = (e) => {
    return navigate(`/recommand?catrgory=${e.target.value}`);
  };

  return (
    <>
      {!interestType.value && <div> interestType 값이 없습니다.</div>}
      {interestType.value && (
        <ResultButton
          size="large"
          color={interestType.color.element}
          value={interestType.value}
          onClick={showResult}
        >
          {interestType.value} 보러가기
        </ResultButton>
      )}
    </>
  );
};

const ResultButton = styled(Mybutton)`
  min-width: 168px;
`;

export default ResultBtn;
