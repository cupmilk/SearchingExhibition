import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ListTransForm from "../components/ListTransForm";
import { useSearchParams } from "react-router-dom";

const RecommandPage = () => {
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

  //근시일내에 6개만 나오도록 하고싶음
  // 1. 오늘날짜와 시작 날짜를 비교(오늘날짜 > 시작날짜) -> 최근꺼를 보여주기 위함
  // 2. 오늘날짜와 종료 날짜 비교 (오늘날짜 < 비교날짜) -> 현재 시청이 가능한거 구분
  // 3. 해당 목록중

  //  -> 근시일내로 무한스크롤로 보여주고싶음

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
  // let dateNum = useRef(0);
  // if (apiDatas && apiDatas.length > 0) {
  //   dateNum.current = apiDatas.length;
  //   console.log(dateNum.current);
  // }

  // 근 시일부터 결과값이 출력되게 하기 위해서 map을 역순으로 가져옴
  //  원본을 훼손 시키지 않기 위해서 slice(0)으로 복사 그후 reverse()적용

  const addNum = () => {
    setListNum((prev) => prev + 1);
  };

  // 매처음 0~n
  // 더보기 누르면 n~2n
  // n을 따로 저장 + 버튼 누를 때 slice 변화
  // 누를때마다 slice 변화 + 복제되서 나오기

  //현재구현 -> 다음으로 가는것
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
  // 더보기는 됬는데 이제 데이터를 날짜별로 보고싶단 말이지
  // 데이터의 종료일이 현재 날짜와 가까운순
  console.log(apiDatas.slice());

  return (
    <div>
      {/* <div>
        {apiDatas &&
          apiDatas
            .slice(0, 6)
            .reverse()
            .map((apiData, index) => (
              <div key={index}>
                <ListTransForm apiData={apiData} />
              </div>
            ))}
      </div> */}
      <div>{viewMore(listNum)}</div>
      <div>
        <button onClick={addNum}> 더보기</button>
      </div>
    </div>
  );
};

export default RecommandPage;
