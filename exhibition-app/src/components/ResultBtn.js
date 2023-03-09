import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mybutton from "./../styles/Mybutton";
import styled from "styled-components";
import resultCategoryInfo from "../utils/resultCategoryInfo";
import ErrorPage from "../pages/ErrorPage";

// from. resultPage
const ResultBtn = (props) => {
  const { mode } = props;
  const [interestType, setInterestType] = useState({});
  const navigate = useNavigate();

  // categoryInfo설정
  const matchingInterestType = useCallback(() => {
    const filteredCategory = resultCategoryInfo.categoryInfo.find(
      (element) => element.id === Number(mode)
    );
    setInterestType(() => filteredCategory);
  }, [mode]);

  useEffect(() => {
    matchingInterestType();
  }, [matchingInterestType]);

  const showResult = (e) => {
    return navigate(`/recommand?catrgory=${e.target.value}`);
  };

  return (
    <>
      {!interestType.value && (
        <div>
          {" "}
          <ErrorPage />{" "}
        </div>
      )}
      {interestType.value && (
        <ResultButton
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
