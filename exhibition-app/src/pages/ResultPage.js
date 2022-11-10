import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import ListTransForm from "../components/ListTransForm";
import { useSearchParams } from "react-router-dom";

const ResultPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("catrgory");

  const [apiData, setApiData] = useState(null);
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

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    console.log("query?", category);
  }, [category]);

  useEffect(() => {
    if (newData) {
      // console.log("data in", newData.row);
      setApiData(newData.row);
    }
  }, [newData]);
  //apidate를 정제하는 무언가

  return (
    <div>
      <ul>
        {apiData &&
          apiData.map((list, index) => (
            <li key={index}>
              <ListTransForm list={list} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ResultPage;
