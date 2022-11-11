import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import ListTransForm from "../components/ListTransForm";
import { useSearchParams } from "react-router-dom";

const ResultPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("catrgory");

  const [apiDatas, setApiDatas] = useState(null);
  const [newData, setNewData] = useState(null);
  const [passed, setPassed] = useState(false);

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
    console.log("query?", category);
  }, [category]);

  useEffect(() => {
    if (newData) {
      setApiDatas(newData.row);
      console.log("setApiData");
    }
  }, [newData]);
  //apidate를 정제하는 무언가

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

export default ResultPage;
