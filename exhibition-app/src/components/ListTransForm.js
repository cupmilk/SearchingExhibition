import React, { useCallback, useEffect, useState } from "react";

const ListTransForm = (props) => {
  const { list } = props;
  const [endData, setEndData] = useState({
    endYear: 0,
    endMonth: 0,
    endDay: 0,
  });
  const [useFree, setUseFree] = useState(false);

  //   let useFree = false;
  //1. apidate를 끝나는 날이 현재 날짜를 넘지 않도록 새로운 arry에 집어 넣어야함

  //날짜변환
  const transFormEndData = useCallback(() => {
    const END_DATE = list.END_DATE.slice(0, 10);
    const arr = END_DATE.split("-");
    setEndData((prev) => ({
      endYear: Number(arr[0]),
      endMonth: Number(arr[1]),
      endDay: Number(arr[2]),
    }));
    console.log(1);
    //무한 스크롤이 되는 이유를 모르겠음
  }, [list.END_DATE]);

  // 티켓 무료, 유료 여부 확인
  const transFormUseFee = useCallback(() => {
    if (list.USE_FEE === "무료" || list.USE_FEE === "") {
      setUseFree((prev) => true);
    } else {
      setUseFree((prev) => false);
    }
    // console.log(2);
  }, [list.USE_FEE]);

  //전체렌더링
  useEffect(() => {
    transFormEndData();
  }, [transFormEndData]);

  useEffect(() => {
    transFormUseFee();
  }, [transFormUseFee]);

  //END_DATE < 현재 날짜
  console.log(list);

  return (
    <div>
      <img src={list.MAIN_IMG} width="150px" height="150px" alt="" />
      <h1>{list.TITLE}</h1>
      <span> {list.PLACE} </span>
      <span>
        {endData.endYear}년 {endData.endMonth}월 {endData.endYear}일{" "}
      </span>
      <span> 가격 : {useFree ? "무료" : "유료"}</span>
      <span> 가격 : {list.USE_FEE}</span>
    </div>
  );
};

export default ListTransForm;
