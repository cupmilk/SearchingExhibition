import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import styled from "styled-components";
import App from "./../App";
import Main from "./Main";

function getSortedArr(array) {
  // 1. 출연 빈도 구하기
  const counts = array.reduce((pv, cv) => {
    // 겹치는 값을 따로 넣을 수 있는 지 확인
    pv[cv] = (pv[cv] || 0) + 1;
    return pv;
  }, {});

  // 2. 요소와 개수를 표현하는 배열 생성 => [ [요소: 개수], [요소: 개수], ...]
  const countArr = [];
  for (let key in counts) {
    countArr.push([key, counts[key]]);
  }

  // 3. 출현 빈도별 정리하기
  countArr.sort((first, second) => {
    // second[1] - first[1] 숫자가 같게 변함 second[1] = first[1]이렇게 되버림 ? 왜그렇지 고장 나버림 이건 이유를 찾아서 확인 해봐야할듯
    //  first[1] - second[1] 이경우에만 정상적으로 작동 근데 왜 그렇게 되는지 모름
    return first[1] - second[1];
  });

  let repeatMode = 0; // 최빈값이 반복된 횟수
  let modes = []; //최빈값

  for (const item in countArr) {
    // 배열속 배열의 2번재값 = 2.의 개수
    //
    if (countArr[item][1] > repeatMode) {
      // 가장 많이 반복된 횟수를 넣는다
      repeatMode = countArr[item][1];
      // 가장 많이 반복됫 회수의 요소를 집어 넣는다
      modes = [countArr[item][0]];
    } else if ((countArr[item][1] = repeatMode)) {
      // 가장 많이 반복된 횟수가 동일할경우 배열에 집어넣는다.
      modes.push(countArr[item][0]);
    }
  }

  const result = {
    repeatMode,
    modes,
    countArr,
  };

  return result;
}

const ResultPage = (props) => {
  const { interest, navigate } = props;
  const [category, setCategory] = useState([]);

  const showResult = (e) => {
    navigate(`/recommand?catrgory=${e.target.value}`);
  };

  //요소에 포함된 갯수 만큼 보여준다
  const getCategory = useCallback(() => {
    // 여러값을 가진 interest 풀어해침
    let flatInterest = [];
    for (const index of interest) {
      console.log(typeof index);
      if (index.length > 1) {
        for (const item of index) {
          if (item !== ",") {
            flatInterest.push(item);
          }
        }
      } else {
        flatInterest.push(index);
      }
    }

    const modeResult = getSortedArr(flatInterest);
    setCategory(modeResult.modes);
  }, [interest]);

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  const showBtn = (mode, index) => {
    switch (mode) {
      case "1":
        return (
          <button id="Btn" key={index} value="문화교양" onClick={showResult}>
            문화교양/강좌
          </button>
        );
      case "2":
        return (
          <button id="Btn" key={index} value="콘서트" onClick={showResult}>
            콘서트
          </button>
        );
      case "3":
        return (
          <button id="Btn" key={index} value="전시" onClick={showResult}>
            전시/미술
          </button>
        );
      case "4":
        return (
          <button id="Btn" key={index} value="오페라" onClick={showResult}>
            뮤지컬/오페라
          </button>
        );
      case "5":
        return (
          <button id="Btn" key={index} value="클래식" onClick={showResult}>
            클래식
          </button>
        );
      default:
        //오류페이지 mainpage로 가도록
        return <ErrorPage navigate={navigate} />;
    }
  };
  // 새로고침때의 오류

  //여기는 너무 가독성이 떨어짐 수정이 필요
  const cateoryMap =
    ((<p> ㅇㅇ</p>),
    (
      <div>
        {category.length !== 1 ? (
          <>
            <div>(다수) 대충 컨텐츠</div>
            <div>{category.map((mode, index) => showBtn(mode, index))}</div>
          </>
        ) : (
          <>
            <div>(단일) 컨텐츠 </div>
            <div>{category.map((mode, index) => showBtn(mode, index))}</div>
          </>
        )}
      </div>
    ));

  return (
    <div>
      {/* {category.length === 0 ? <Main /> : cateoryMap} */}
      {category.length === 0 ? <ErrorPage navigate={navigate} /> : cateoryMap}
    </div>
  );
};

export default ResultPage;
