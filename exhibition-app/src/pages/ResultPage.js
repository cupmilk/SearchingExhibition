import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const ResultPage = (props) => {
  const { codeName, handleCodeName } = props;

  const [apiData, setApiData] = useState(null);
  const [newData, setNewData] = useState(null);
  const [endData, setEndData] = useState("");
  const [useFree, setUseFree] = useState(false);

  const getData = useCallback(async () => {
    try {
      const URL =
        "http://openapi.seoul.go.kr:8088/536e484769796d3937324150436959/json/culturalEventInfo/1/50/";

      const sendData = await axios.get(URL + `${codeName} `);
      const result = sendData.data;

      console.log(result);

      setNewData(result.culturalEventInfo);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const endTimeForm = (data) => {
    setEndData(data.slice(10));
  };

  const formChnage = () => {};

  //1. apidate를 끝나는 날이 현재 날짜를 넘지 않도록 새로운 arry에 집어 넣어야함
  //2. 유료,무료 여부 확인
  const ticketPrice = () => {
    if (apiData.USE_FEE === "무료" || apiData.USE_FEE === "") {
      setUseFree(true);
    } else setUseFree(false);
  };

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
    <div>
      <ul>
        {apiData &&
          apiData.map((list, index) => (
            <li key={index}>
              <img src={list.MAIN_IMG} width="150px" height="150px" alt="" />
              <h1>{list.TITLE}</h1>
              <span> {list.PLACE} </span>
              <span> {list.END_DATE.slice(0, 10)} </span>
              <span> 가격 : {list.USE_FEE ? "무료" : "유료"}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ResultPage;
