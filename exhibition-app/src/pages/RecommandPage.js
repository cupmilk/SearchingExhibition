import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ListTransForm from "../components/ListTransForm";
import { useSearchParams } from "react-router-dom";

const RecommandPage = (props) => {
  const { navigate } = props;
  const [searchParams] = useSearchParams();
  const category = searchParams.get("catrgory");

  const [apiDatas, setApiDatas] = useState([]);
  const [newData, setNewData] = useState(null);
  const [listNum, setListNum] = useState(1);

  const getData = useCallback(async () => {
    try {
      const URL =
        "http://openapi.seoul.go.kr:8088/536e484769796d3937324150436959/json/culturalEventInfo/1/1000/";

      const sendData = await axios.get(URL + `${category} `);
      const result = await sendData.data;

      setNewData(result.culturalEventInfo);
    } catch (error) {
      console.log(error);
    }
  }, [category]);

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

      setApiDatas(
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
  // 맨처음 6개, 이후 추가로 6개씩 보여줌

  //이건 따로 빼는게 나을듯?
  // 없을때 어떻게 할지에 대한 무언가가 있어야할듯?
  const viewMore = (num) => {
    let max = num * 6;
    return (
      apiDatas &&
      apiDatas.slice(0, max).map((apiData, index) => (
        <div key={index}>
          <ListTransForm apiData={apiData} />
        </div>
      ))
    );
  };

  console.log(apiDatas);

  return (
    <div>
      <div>{viewMore(listNum)}</div>
      <div>
        {apiDatas.length >= listNum * 6 ? (
          <button id="viewMore" onClick={addNum}>
            더보기
          </button>
        ) : null}
      </div>
      <div>
        <button onClick={goMain}> 테스트 다시하기 </button>
      </div>
    </div>
  );
};

export default RecommandPage;
