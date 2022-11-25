import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ListTransForm from "../components/ListTransForm";
import { useSearchParams } from "react-router-dom";
import InternalPage from "../components/InternalPage";

const RecommandPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("catrgory");

  const [apiDatas, setApiDatas] = useState([]);
  const [newData, setNewData] = useState(null);

  const items = {
    item: [],
    moreItemsLoading: false,
    hasNextPage: true,
  };

  const loadmore = async () => {
    const URL =
      "http://openapi.seoul.go.kr:8088/536e484769796d3937324150436959/json/culturalEventInfo/1/1000/";

    const sendData = await axios.get(URL + `${category} `);
    const result = await sendData.data;
  };

  const getData = useCallback(async () => {
    try {
      const URL =
        "http://openapi.seoul.go.kr:8088/536e484769796d3937324150436959/json/culturalEventInfo/1/1000/";

      const sendData = await axios.get(URL + `${category} `);
      const result = await sendData.data;

      console.log(result);

      setNewData(result.culturalEventInfo);
    } catch (error) {
      console.log(error);
    }
  }, [category]);

  //근시일내에 6개만 나오도록 하고싶음
  // 1. 오늘날짜와 시작 날짜를 비교(오늘날짜 > 시작날짜) -> 최근꺼를 보여주기 위함
  // 2. 오늘날짜와 종료 날짜 비교 (오늘날짜 < 비교날짜) -> 현재 시청이 가능한거 구분
  // 3. 해당 목록중

  //  -> 근시일내로 무한스크롤로 보여주고싶음
  let dateNum = useRef(0);
  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (newData) {
      const filtedData = newData.row.filter((apiData) => {
        const endDay = new Date(apiData.DATE.split("~")[1]);
        const today = new Date();

        if (endDay >= today) {
          return true;
        } else {
          return false;
        }
      });
      setApiDatas(filtedData);
    }
  }, [newData]);

  if (apiDatas && apiDatas.length > 0) {
    dateNum.current = apiDatas.length;
    console.log(dateNum.current);
  }

  // 근 시일부터 결과값이 출력되게 하기 위해서 map을 역순으로 가져옴
  //  원본을 훼손 시키지 않기 위해서 slice(0)으로 복사 그후 reverse()적용
  return (
    <div>
      <div>
        {apiDatas &&
          apiDatas
            .slice(0, 6)
            .reverse()
            .map((apiData, index) => (
              <div key={index}>
                <ListTransForm apiData={apiData} />
              </div>
            ))}
      </div>
      <div>
        <InternalPage apiDatas={apiDatas} />
      </div>
    </div>
  );
};

export default RecommandPage;
