import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ResultPage = (props) => {
  const { interest } = props;

  const route = useNavigate();
  //최빈값 구하기
  // stirng -> 숫자변환
  // 숫자에 맞춰 최반값 구하기

  const [category, setCategory] = useState(0);

  const showResult = (e) => {
    route(`/recommand?catrgory=${e.target.value}`);
  };

  const getMode = useCallback(() => {
    const interestArr = interest;
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

  useEffect(() => {
    console.log(category);
  }, [category]);

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
      default:
        return (
          <div>
            {" "}
            <h1> switch오류</h1>{" "}
          </div>
        );
    }
  };

  return (
    // <>
    //   <button id="Btn" value="문화교양/강좌" onClick={showResult}>
    //     문화교양/강좌
    //   </button>
    //   <button id="Btn" value="전시/미술" onClick={showResult}>
    //     전시/미술
    //   </button>
    //   <button id="Btn" value="뮤지컬/오페라" onClick={showResult}>
    //     뮤지컬/오페라
    //   </button>
    //   <button id="Btn" value="콘서트" onClick={showResult}>
    //     콘서트
    //   </button>
    //   <button id="Btn" value="클래식" onClick={showResult}>
    //     클래식
    //   </button>
    // </>
    <>{showBtn()}</>
  );
};

export default ResultPage;
