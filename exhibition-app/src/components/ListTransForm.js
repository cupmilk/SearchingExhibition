import React, { useCallback, useEffect, useState } from "react";

const ListTransForm = (props) => {
  const { apiData } = props;

  const [endData, setEndData] = useState({
    endYear: 0,
    endMonth: 0,
    endDay: 0,
  });
  const [existence, setExistence] = useState(false);
  const [useFree, setUseFree] = useState(false);

  //   let useFree = false;
  //1. apidate를 끝나는 날이 현재 날짜를 넘지 않도록 새로운 arry에 집어 넣어야함
  const checkEventDATE = useCallback(() => {
    if (apiData) {
      const startDay = new Date(apiData.DATE.split("~")[0]);
      const endDay = new Date(apiData.DATE.split("~")[1]);
      const today = new Date();
      if (
        startDay.getTime() < today.getTime() &&
        endDay.getTime() > today.getTime()
      ) {
        return setExistence((prev) => !prev);
      } else {
        return setExistence((prev) => prev);
      }
    }

    console.log("checkEventDATE");
  }, [apiData]);

  useEffect(() => {
    checkEventDATE();
  }, [checkEventDATE]);

  //날짜변환
  const transFormEndData = useCallback(() => {
    if (apiData) {
      const END_DATE = apiData.END_DATE.slice(0, 10);
      const arr = END_DATE.split("-");
      setEndData((prev) => ({
        endYear: Number(arr[0]),
        endMonth: Number(arr[1]),
        endDay: Number(arr[2]),
      }));
    }
    //무한 스크롤이 되는 이유를 모르겠음
  }, [apiData]);

  // 티켓 무료, 유료 여부 확인
  const transFormUseFee = useCallback(() => {
    if (apiData.USE_FEE === "무료" || apiData.USE_FEE === "") {
      setUseFree((prev) => true);
    } else {
      setUseFree((prev) => false);
    }
    // console.log(2);
  }, [apiData.USE_FEE]);

  //전체렌더링
  useEffect(() => {
    transFormEndData();
  }, [transFormEndData]);

  useEffect(() => {
    transFormUseFee();
  }, [transFormUseFee]);

  //END_DATE < 현재 날짜  null값
  // console.log(list.DATE.split("~"));existence
  return (
    <div>
      {existence ? (
        <>
          <img src={apiData.MAIN_IMG} width="150px" height="150px" alt="" />
          <h1>{apiData.TITLE}</h1>
          <span> {apiData.PLACE} </span>
          {/* <span>{apiData.DATE}</span> */}
          <span>
            {endData.endYear}년 {endData.endMonth}월 {endData.endYear}일{" "}
          </span>
          <span> 가격 : {useFree ? "무료" : "유료"}</span>
          <span> 가격 : {apiData.USE_FEE}</span>
        </>
      ) : null}
      {/* <img src={apiData.MAIN_IMG} width="150px" height="150px" alt="" />
      <h1>{apiData.TITLE}</h1>
      <span> {apiData.PLACE} </span>
      <span>{apiData.DATE}</span>
      <span>
        {endData.endYear}년 {endData.endMonth}월 {endData.endYear}일{" "}
      </span>
      <span> 가격 : {useFree ? "무료" : "유료"}</span>
      <span> 가격 : {apiData.USE_FEE}</span> */}
    </div>
  );
};

export default ListTransForm;
