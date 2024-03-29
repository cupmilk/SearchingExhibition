import React, { useCallback, useEffect, useState } from "react";
import ListTransForm from "../components/ListTransForm";
import SkeletonListForm from "../components/SkeletonListForm";

import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Mybutton from "./../styles/Mybutton";
import { css } from "styled-components";
import resultCategoryInfo from "./../utils/resultCategoryInfo";
import theme from "./../styles/theme";

const RecommandPage = (props) => {
  const { handleHeaderColor } = props;

  const [newData, setNewData] = useState(null); // apiData
  const [shaowDatas, setShowDatas] = useState([]); // 날짜별 정리된 Api_Date
  const [listNum, setListNum] = useState(1);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("catrgory"); //url로가져온 공연종류

  const navigate = useNavigate();
  const VIEW_NUMBER = 6;

  // [dev mode]
  // const API_KEY = process.env.REACT_APP_CULTURAL_EVENT_API_KEY;
  // const getData = useCallback(async () => {
  //   try {
  //     const URL = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/culturalEventInfo/1/100/`;
  //     const sendData = await axios.get(URL + `${category} `);
  //     const result = await sendData.data;

  //     setNewData(result.culturalEventInfo);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [category, API_KEY]);

  const getData = useCallback(async () => {
    try {
      // culturalEvent 가져오는 api를 호출하는 파일 경로 설정
      const sendData = await axios.get("/.netlify/functions/culturalEvent", {
        // 인자전달
        params: { category: `${category}` },
      });
      // 오류확인용
      if (!sendData.data) {
        console.log(sendData);
      }
      const result = sendData.data.culturalEventInfo;

      setNewData(result);
    } catch (error) {
      console.log(error);
    }
  }, [category]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (newData) {
      //현재 날짜보다 공연종료의 날짜가 늦은경우 filtering
      const filtedData = newData.row.filter((apiData) => {
        const endDay = new Date(apiData.DATE.split("~")[1]);
        const today = new Date();

        return endDay >= today ? true : false;
      });

      setShowDatas(
        //filtedData 오름차순 정렬
        filtedData.sort((a, b) => {
          const aEndDay = new Date(a.END_DATE);
          const bEndDay = new Date(b.END_DATE);

          return aEndDay - bEndDay;
        })
      );
    }
  }, [newData]);

  const goMain = () => {
    navigate("/");
  };

  const addNum = () => {
    return setListNum((prev) => prev + 1);
  };

  // VIEW_NUMBER의 크기만큼 보여줌
  const viewMore = (num) => {
    let maxView = num * VIEW_NUMBER;
    return (
      shaowDatas &&
      shaowDatas.slice(0, maxView).map((shaowData, index) => (
        <ul>
          <li key={index}>
            {/* shaowDatas 형식변환 */}
            <ListTransForm shaowData={shaowData} />
            {/* <SkeletonListForm shaowData={shaowData} /> */}
          </li>
        </ul>
      ))
    );
  };

  //스켈레톤 ui
  const preView = () => {
    const forms = [];
    for (let i = 0; i < VIEW_NUMBER; i++) {
      forms.push(
        <ul>
          <li>
            <SkeletonListForm key={i} />
          </li>
        </ul>
      );
    }
    return forms;
  };

  let recommandPageColor = resultCategoryInfo.categoryInfo.find(
    (element) => element.value === category
  );
  // 혹시 오류로 안나올 경우
  if (!recommandPageColor) {
    console.log("recommandPageColor 오류");
    recommandPageColor = {
      color: {
        banner: `${theme.palette.deepGreen}`,
        element: `${theme.palette.green}`,
      },
    };
  }
  const { banner, element } = recommandPageColor.color;

  //headColor 적용
  const headerValue = useCallback(() => {
    handleHeaderColor(banner);
  }, [handleHeaderColor, banner]);

  useEffect(() => {
    headerValue();
  }, [headerValue]);

  return (
    <RecommandLayOut>
      {newData ? (
        <>
          <div className="list_container">
            <ListLayOut>{viewMore(listNum)}</ListLayOut>
          </div>
          <div className="btn_container">
            <section>
              {shaowDatas.length > listNum * VIEW_NUMBER ? (
                <RecommandBtn id="viewMore" color={element} onClick={addNum}>
                  더보기
                </RecommandBtn>
              ) : null}
            </section>
            <section>
              <RecommandBtn color={element} onClick={goMain}>
                테스트 다시하기
              </RecommandBtn>
            </section>
          </div>
        </>
      ) : (
        <ListLayOut>{preView()}</ListLayOut>
      )}
    </RecommandLayOut>
  );
};

const ListLayOut = styled.div`
  @media (min-width: 450px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 15px;
  }
`;
const RecommandBtn = styled(Mybutton)`
  //배경색
  background: ${(props) => props.color || "black"};
`;

const themebackground = css`
  ${({ color }) => {
    return css`
      background: ${color};
    `;
  }}
`;

const RecommandLayOut = styled.div`
  width: 100vw;
  .header {
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid;

    ${themebackground}
    color: white;
    //폴리곤 모형
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 20px),
      calc(50% + 320px) 100%,
      47% calc(100% - 15px),
      calc(50% - 310px) 100%,
      0 calc(100% - 15px)
    );
    //배경색
  }

  .btn_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > section {
      margin-top: 20px;
    }
  }
`;

export default RecommandPage;
