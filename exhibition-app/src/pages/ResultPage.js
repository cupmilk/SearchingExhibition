import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const ResultPage = (props) => {
  const { interest, navigate } = props;
  const [category, setCategory] = useState(0);

  const showResult = (e) => {
    navigate(`/recommand?catrgory=${e.target.value}`);
  };
  //최빈값 구하기
  const getMode = useCallback(() => {
    const sortedInterest = [...interest].sort((a, b) => a - b);
    let cnt;
    let mode = 0; //최빈값
    let reMode = 0; //최빈값이 반복된 횟수
    let repeatCnt = 0; //같은숫자가 반복됫 횟수
    let beforeNum = 0; //  지금보고있는 숫자 이전값
    let isDupMode = false;
    for (cnt = 0; cnt < sortedInterest.length; cnt++) {
      if (beforeNum !== sortedInterest[cnt]) {
        repeatCnt = 1;
      } else {
        repeatCnt = repeatCnt + 1;
      }

      if (repeatCnt === reMode) {
        if (mode !== sortedInterest[cnt]) {
          isDupMode = true;
        }
      }

      if (repeatCnt > reMode) {
        mode = sortedInterest[cnt];
        reMode = repeatCnt;
        isDupMode = false;
      }
      beforeNum = sortedInterest[cnt];
    }

    if (isDupMode) {
      return setCategory(-1); // 중복일때 다시 생각해봐야할듯?
    }
    return setCategory(mode);
  }, [interest]);

  useEffect(() => {
    getMode();
  }, [getMode, interest]);

  //이건 컴포넌트로 빼는게 나을듯
  const showBtn = () => {
    switch (category) {
      case "1":
        return (
          <button id="Btn" value="문화교양/강좌" onClick={showResult}>
            문화교양/강좌
          </button>
        );
      case "2":
        return (
          <button id="Btn" value="전시/미술" onClick={showResult}>
            전시/미술
          </button>
        );
      case "3":
        return (
          <button id="Btn" value="뮤지컬/오페라" onClick={showResult}>
            뮤지컬/오페라
          </button>
        );
      case "4":
        return (
          <button id="Btn" value="콘서트" onClick={showResult}>
            콘서트
          </button>
        );
      case "5":
        return (
          <button id="Btn" value="클래식" onClick={showResult}>
            전시/미술
          </button>
        );
      default:
        //오류페이지 mainpage로 가도록
        return <ErrorPage navigate={navigate} />;
    }
  };

  return <>{showBtn()}</>;
};

export default ResultPage;
