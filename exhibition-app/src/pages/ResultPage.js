import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import styled from "styled-components";
import Mode from "./../components/Mode";
import ResultBtn from "../components/ResultBtn";
import ResultTxt from "../components/ResultTxt";

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
  const [interestType, setInterestType] = useState({
    value: null,
    img: null,
    type: null,
    info: null,
    interest: null,
    character: null,
    recommand: null,
    color: null,
  });

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

  console.log(category);

  // category별 다른 버튼 출력 -> 1.category분리  ->switch로 구현 할라고 하는건데  2.버튼 출력

  // const matchingInterest = useCallback(
  //   (mode) => {
  //     console.dir(mode);
  //     if ((mode.length = 1)) {
  //       const modeValue = mode[0];
  //       switch (modeValue) {
  //         case "1":
  //           return setInterestType((prev) => ({
  //             value: "문화교양",
  //             img: "https://cdn.pixabay.com/photo/2018/09/25/11/45/pixel-cells-3702062_960_720.png",
  //             type: "전시유형 뭐시기",
  //             info: "대충 이 유형에 대한 설명 주저리 주저리",
  //             interest: "대충 뭘 좋아하는지에 대해 설명",
  //             character: "대충 특징 설명",
  //             recommand: "대충 이런게 좋다 설명",
  //             color: "유형에 맞는 색깔",
  //           }));
  //         case "2":
  //           return setInterestType((prev) => ({
  //             value: "전시",
  //             img: "https://cdn.pixabay.com/photo/2018/09/24/08/31/pixel-cells-3699332_960_720.png",
  //             type: "전시유형 뭐시기",
  //             info: "대충 이 유형에 대한 설명 주저리 주저리",
  //             interest: "대충 뭘 좋아하는지에 대해 설명",
  //             character: "대충 특징 설명",
  //             recommand: "대충 이런게 좋다 설명",
  //             color: "유형에 맞는 색깔",
  //           }));

  //         case "3":
  //           return setInterestType((prev) => ({
  //             value: "콘서트",
  //             img: "https://cdn.pixabay.com/photo/2019/02/04/08/38/pixel-cells-3974182_960_720.png",
  //             type: "전시유형 뭐시기",
  //             info: "대충 이 유형에 대한 설명 주저리 주저리",
  //             interest: "대충 뭘 좋아하는지에 대해 설명",
  //             character: "대충 특징 설명",
  //             recommand: "대충 이런게 좋다 설명",
  //             color: "유형에 맞는 색깔",
  //           }));
  //         case "4":
  //           return setInterestType((prev) => ({
  //             value: "뮤지컬",
  //             img: "https://cdn.pixabay.com/photo/2021/05/05/05/10/pixel-cells-6230200_960_720.png",
  //             type: "전시유형 뭐시기",
  //             info: "대충 이 유형에 대한 설명 주저리 주저리",
  //             interest: "대충 뭘 좋아하는지에 대해 설명",
  //             character: "대충 특징 설명",
  //             recommand: "대충 이런게 좋다 설명",
  //             color: "유형에 맞는 색깔",
  //           }));
  //         case "5":
  //           return setInterestType((prev) => ({
  //             value: "클래식",
  //             img: "https://cdn.pixabay.com/photo/2018/09/24/08/31/pixel-cells-3699332_960_720.png",
  //             type: "전시유형 뭐시기",
  //             info: "대충 이 유형에 대한 설명 주저리 주저리",
  //             like: "대충 뭘 좋아하는지에 대해 설명",
  //             character: "대충 특징 설명",
  //             recommand: "대충 이런게 좋다 설명",
  //             color: "유형에 맞는 색깔",
  //           }));
  //         default:
  //           //오류페이지 mainpage로 가도록
  //           return <ErrorPage navigate={navigate} />;
  //       }
  //     } else {
  //       setCategory({});
  //     }
  //   },
  //   [navigate]
  // );

  // 작동안함
  const showImg = () => {};
  const showText = () => {
    return <ResultTxt category={category} />;
  };

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  //버튼을 여러개 하기 위해서는 map을 돌려서 여러개가 나타나게 해야한다
  // map으로 돌리기 위해서는 여러개가 있어야하는데 값은 하나만 넣을 수 있다.
  // 그냥 값이 여러개일때는 여러개가 사용될수있는 모양의 함수를만들면 되잖아?

  //방법 1 : value와
  // useEffect(() => {
  //   if (category.length !== 1) {
  //     matchingInterest(category[0]);
  //   } else {
  //     mupltiInterest(category);
  //   }

  //   // console.log(category);
  // }, [matchingInterest, category]);

  //여기는 너무 가독성이 떨어짐 수정이 필요

  //1. 여러개의 값일땔
  // 2. 각각의 이미지와 내용 -> 다수의 값이 = 설명, 이미지 => 공통된 하나
  // 3. 즉 map돌리는건 버튼만 돌리면 된다.
  const showBtn = () => {
    //고정된 설명을 넣어야됌
    return (
      <div>
        {category.map((mode, index) => (
          <ResultBtn mode={mode} multiple={true} />
        ))}
      </div>
    );
  };

  // <div>
  //   {category.length !== 1 ? (
  //     <>
  //       {/* <img
  //         src="https://cdn.pixabay.com/photo/2021/05/05/04/42/pixel-cells-6230153_960_720.png"
  //         width="300px"
  //         height="300px"
  //         alt=""
  //       /> */}

  //       <div>
  //         {/* 여기에 이미지를 넣는게 있겠지  */}
  //         {category.map((mode, index) => (
  //           <ResultType mode={mode} multiple={true} />
  //         ))}
  //       </div>
  //     </>
  //   ) : (
  //     <>
  //       {/* <div>(단일) 컨텐츠 </div> */}
  //       <div>
  //         {category.map((mode, index) => (
  //           <ResultType mode={mode} multiple={false} />
  //         ))}
  //         {category.map((mode, index) => console.log(index))}
  //       </div>
  //     </>
  //   )}
  // </div>

  console.log(category);
  return (
    <div>
      {/* {category.length === 0 ? <ErrorPage navigate={navigate} /> : cateoryMap} */}

      {category ? (
        <div>
          <section>
            <ResultTxt category={category} />
          </section>
          <section>{showBtn()}</section>
        </div>
      ) : (
        <ErrorPage navigate={navigate} />
      )}
      {/* 
      {interest ? (
        <>
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
            <div>
              {interestType.recommand}
              {category.length > 1 ? (
                cateoryMap
              ) : (
                <ResultBtn result={interestType.value} />
              )}
            </div>
          </section>
        </>
      ) : (
        <ErrorPage navigate={navigate} />
      )} */}
    </div>
  );
};

export default ResultPage;
