import React, { useCallback, useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import styled from "styled-components";
import Mode from "./../components/Mode";
import ResultBtn from "../components/ResultBtn";
import ResultTxt from "../components/ResultTxt";
import LayOut from "./../styles/LayOut";
import Header from "./../components/Header";
import theme from "./../styles/theme";
import resultCategoryInfo from "../utils/resultCategoryInfo";
//result Page에서 하는거 -> 레이아웃만 있으면 좋겠어
//1. category분류
//2. category에 따른 component 출력 -> 아무리 생각해도 전체구성? 이런건 똑같고 이미지랑 txt만 달라는데 여러개를 만들 필요는 없지
// 근데 여기서 발생되는게 이미지를 넣는데 component를 map으로 돌리니가 이미지가 겹쳐
// 값이 여러개가 나오면 여러개의 이미지가 아니라 한개의 이미지 + 여러개의 버튼을 원한단 말이지
//3. 전체화면 구성

// logic ( 최빈값이 뭔지 ,중복인지 아닌지 ) ->  img, doc, button

const ResultPage = (props) => {
  const { interest, navigate } = props;
  const [category, setCategory] = useState([]);

  //카테고리로 하나 -> logic( 1. (최반값 설정 -> 최빈값에 따른 category설정) -> 그거에따른 interest)
  //img로 하나 -> 그냥 이미지 출력
  //그냥 doc -> 출력

  //여기에 interesttype을 넣어야함
  // 그래서 이미지 + txt
  // 버튼 따로 나올 수 있도록

  //요소에 포함된 갯수 만큼 보여준다
  const getCategory = useCallback(() => {
    // 여러값을 가진 interest 풀어해침
    let flatInterest = [];
    for (const index of interest) {
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

    const modeResult = Mode(flatInterest);
    setCategory(modeResult.modes);
  }, [interest]);

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  //여기는 너무 가독성이 떨어짐 수정이 필요

  //1. 여러개의 값일땔
  // 2. 각각의 이미지와 내용 -> 다수의 값이 = 설명, 이미지 => 공통된 하나
  // 3. 즉 map돌리는건 버튼만 돌리면 된다.
  return (
    <ResultLayOut>
      <div className="header">
        <Header />
      </div>
      {interest.length > 1 ? (
        <div className="main-content">
          <section className="resultInfo_container">
            <ResultTxt
              category={category}
              resultCategoryInfo={resultCategoryInfo}
            />
          </section>
          <section className="resultBtn_container">
            {category.map((mode, index) => (
              <ResultBtn mode={mode} resultCategoryInfo={resultCategoryInfo} />
            ))}
          </section>
        </div>
      ) : (
        <ErrorPage navigate={navigate} />
      )}
    </ResultLayOut>
  );
};

const ResultLayOut = styled(LayOut)`
  .main-content {
    padding-bottom: 5%;
    & p {
      font-size: 1.1rem;
    }

    .resultBtn_container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (max-width: 780px) {
        padding-top: 30px;
      }
      padding-top: 75px;
      //600px넘을때부터 flex-direction: row
    }
  }
`;

export default ResultPage;
