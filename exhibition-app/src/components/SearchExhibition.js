import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const SearchExhibition = () => {
  const [apiData, setApiData] = useState(null);
  const [newData, setNewData] = useState(null);

  //한번만 실행되기때문에 useCallback 사용
  const getData = useCallback(async () => {
    try {
      const URL =
        "http://openapi.seoul.go.kr:8088/536e484769796d3937324150436959/json/culturalEventInfo/1/5/영화/";
      const sendData = await axios.get(URL);
      const result = sendData.data;

      console.log(result);

      setNewData(result.culturalEventInfo);
    } catch (error) {
      console.log(error);
    }
  }, []);
  //useEffect를 이용해서 한번 사용해도 되지만 getData가 실행이 안될수도 있기 때문에 [getData]를 넣어줘야하는데 callback을 사용하지 않을 경우 한무 반복
  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (newData) {
      console.log("data in", newData.row);
      setApiData(newData.row);
    }
  }, [newData]);
  return (
    // 내가 의문을 갖었떤 오류는 배열을 불러온는건데 반복문으로 돌리질 않으니 오류가 나왔던것
    <div className="App">
      {apiData &&
        apiData.map((deta, index) => <span key={index}>{deta.TITLE} </span>)}
    </div>
  );
};

export default SearchExhibition;
