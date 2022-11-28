import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListTransForm = (props) => {
  const { apiData } = props;

  const [endData, setEndData] = useState({
    endYear: 0,
    endMonth: 0,
    endDay: 0,
  });

  const [useFree, setUseFree] = useState(false);

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
  }, [apiData]);

  const ticketURL = () => {
    window.location.href = `${apiData.ORG_LINK}`;
  };

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

  // console.log("실행중");
  return (
    <div>
      <img
        onClick={ticketURL}
        src={apiData.MAIN_IMG}
        width="150px"
        height="150px"
        alt=""
      />
      <h1>{apiData.TITLE}</h1>
      <span> {apiData.PLACE} </span>
      {/* <span>{apiData.DATE}</span> */}
      <span>
        종료일 : {endData.endYear}년 {endData.endMonth}월 {endData.endDay}일{" "}
      </span>
      <span> 가격 : {useFree ? "무료" : "유료"}</span>
    </div>
  );
};

export default ListTransForm;
