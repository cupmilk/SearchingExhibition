import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import ListTransForm from "../components/ListTransForm";
import { useSearchParams } from "react-router-dom";

const RecommandPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("catrgory");

  const [apiDatas, setApiDatas] = useState(null);
  const [newData, setNewData] = useState(null);

  const getData = useCallback(async () => {
    try {
      const URL =
        "http://openapi.seoul.go.kr:8088/536e484769796d3937324150436959/json/culturalEventInfo/1/50/";

      const sendData = await axios.get(URL + `${category} `);
      const result = sendData.data;

      // console.log(result);

      setNewData(result.culturalEventInfo);
    } catch (error) {
      console.log(error);
    }
  }, [category]);

  //근시일내에 6개만 나오도록 하고싶음
  // 1. 오늘날짜와 시작 날짜를 비교(오늘날짜 > 시작날짜)
  // 2. 오늘날짜와 종료 날짜 비교 (오늘날짜 < 비교날짜)
  // 3. 해당 목록중

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (newData) {
      const filtedData = newData.row.filter((apiData) => {
        const startDay = new Date(apiData.DATE.split("~")[0]);
        const endDay = new Date(apiData.DATE.split("~")[1]);
        const today = new Date();

        if (
          startDay.getTime() < today.getTime() &&
          endDay.getTime() > today.getTime()
        ) {
          return true;
        } else {
          return false;
        }
      });

      setApiDatas(filtedData);
    }
  }, [newData]);

  return (
    <div>
      {apiDatas &&
        apiDatas.map((apiData, index) => (
          <div key={index}>
            <ListTransForm apiData={apiData} />
          </div>
        ))}
    </div>
  );
};

export default RecommandPage;
