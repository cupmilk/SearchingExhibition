import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const ResultPage = (props) => {
  const { codeName } = props;

  const [apiData, setApiData] = useState(null);
  const [newData, setNewData] = useState(null);
  const [result, setResult] = useState(codeName);

  useEffect(() => {
    console.log(codeName);
    setResult(codeName);
  }, [codeName]);

  const getData = useCallback(async () => {
    try {
      const URL =
        "http://openapi.seoul.go.kr:8088/536e484769796d3937324150436959/json/culturalEventInfo/1/50/";
      const sendData = await axios.get(URL + `${{ codeName }} `);
      const result = sendData.data;

      console.log(result);

      setNewData(result.culturalEventInfo);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <ul>
        {apiData &&
          apiData.map((list, index) => <li key={index}>{list.title} </li>)}
      </ul>
    </div>
  );
};

export default ResultPage;
