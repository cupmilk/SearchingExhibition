import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const transFormData = (data, division) => {
  if (data) {
    let transData;
    if (division === "end") {
      transData = data.END_DATE.slice(0, 10);
    } else if (division === "start") {
      transData = data.STRTDATE.slice(0, 10);
    }

    return transData.split("-");
  }
};

const ListTransForm = (props) => {
  const { apiData } = props;

  const [endData, setEndData] = useState({
    year: 0,
    month: 0,
    day: 0,
  });
  const [startData, setStartData] = useState({
    year: 0,
    month: 0,
    day: 0,
  });

  // const [useFree, setUseFree] = useState(false);
  const [useFree, setUseFree] = useState("");
  //날짜변환
  // const transFormEndData = useCallback(() => {
  //   if (apiData) {
  //     const END_DATE = apiData.END_DATE.slice(0, 10);
  //     const arr = END_DATE.split("-");
  //     setEndData((prev) => ({
  //       endYear: Number(arr[0]),
  //       endMonth: Number(arr[1]),
  //       endDay: Number(arr[2]),
  //     }));
  //   }
  // }, [apiData]);

  // const ticketURL = () => {
  //   window.location.href = `${apiData.ORG_LINK}`;
  // };
  const transFormEndData = useCallback(() => {
    const arr = transFormData(apiData, "end");
    setEndData((prev) => ({
      year: Number(arr[0]),
      month: Number(arr[1]),
      day: Number(arr[2]),
    }));
  }, [apiData]);

  const transFormStartData = useCallback(() => {
    const arr = transFormData(apiData, "start");
    setStartData((prev) => ({
      year: Number(arr[0]),
      month: Number(arr[1]),
      day: Number(arr[2]),
    }));
  }, [apiData]);

  const ticketURL = () => {
    window.location.href = `${apiData.ORG_LINK}`;
  };
  // 티켓 무료, 유료 여부 확인
  // const transFormUseFee = useCallback(() => {
  //   if (apiData.USE_FEE === "무료" || apiData.USE_FEE === "") {
  //     setUseFree((prev) => true);
  //   } else {
  //     setUseFree((prev) => false);
  //   }
  //   // console.log(2);
  // }, [apiData.USE_FEE]);
  const transFormUseFee = useCallback(() => {
    if (apiData.USE_FEE === "무료" || apiData.USE_FEE === "") {
      setUseFree((prev) => "무료");
    } else {
      setUseFree((prev) => apiData.USE_FEE);
    }
    // console.log(2);
  }, [apiData.USE_FEE]);

  //전체렌더링
  useEffect(() => {
    transFormEndData();
  }, [transFormEndData]);

  useEffect(() => {
    transFormStartData();
  }, [transFormStartData]);

  useEffect(() => {
    transFormUseFee();
  }, [transFormUseFee]);

  return (
    <Card>
      <section>
        <h1>{apiData.TITLE}</h1>
        <img
          onClick={ticketURL}
          src={apiData.MAIN_IMG}
          width="150px"
          height="150px"
          alt=""
        />
      </section>

      <div>
        <section>
          <h2>장소</h2>
          <p> {apiData.PLACE} </p>
        </section>

        <section className="data_section">
          <h2>날짜</h2>
          {/* <span>시작일</span>
          <p>
            {startData.year}년 {startData.month}월 {startData.day}일{" "}
          </p>
          <span> 종료일</span>
          <p>
            {endData.year}년 {endData.month}월 {endData.day}일{" "}
          </p> */}

          <p>
            {startData.year}년 {startData.month}월 {startData.day}일 ~{" "}
            {endData.year}년 {endData.month}월 {endData.day}일
          </p>
        </section>

        <section className="fee_section">
          <h2>요금</h2>
          <p>{useFree === "무료" ? "무료" : useFree}</p>
        </section>
      </div>
    </Card>
  );
};

const Card = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
  * h2 {
    font-size: 0.75rem;
  }
  * p {
    font-size: 1rem;
  }
  //750px이상일때

  > section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
      width: ;
    }
  }

  > div {
    font-size: 1rem;
    padding: 0 15px;
  }

  @media (max-width: 400px) {
    width: 100%;

    > section {
      padding: 15px;
      > img {
        width: 100%;
        height: 400px;
      }
    }
  }
`;

export default ListTransForm;
