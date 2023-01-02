import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

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

  const [useFree, setUseFree] = useState("");
  //날짜변환
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
  const transFormUseFee = useCallback(() => {
    if (apiData.USE_FEE === "무료" || apiData.USE_FEE === "") {
      setUseFree((prev) => "무료");
    } else {
      setUseFree((prev) => apiData.USE_FEE);
    }
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
    <>
      <Card>
        <section>
          <img
            onClick={ticketURL}
            src={apiData.MAIN_IMG}
            width="150px"
            height="150px"
            alt=""
          />
          <h1 onClick={ticketURL}>
            <span>{apiData.TITLE}</span>
          </h1>
        </section>

        <div>
          <section>
            <h2>장소</h2>
            <p> {apiData.PLACE} </p>
          </section>

          <section className="data_section">
            <h2>날짜</h2>
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
    </>
  );
};

const grey0 = "#f8f9fa";
const grey1 = "#f1f3f5";
const grey5 = "#adb5bd";
const grey6 = "#868e96";
const grey7 = "#495057";

//미디어 쿼리 수정 max-height : 420px;

const Card = styled.div`
  width: 100%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
  border-radius: 18px;
  background: ${grey0};

  * h2 {
    font-size: 0.75rem;
    color: ${grey6};
  }
  * p {
    font-size: 1rem;
  }
  * section {
    margin-right: 0;
    padding-bottom: 8px;
  }
  //750px이상일때

  > section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
      cursor: pointer;
    }

    > h1 {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      margin: 10px 0;
      cursor: pointer;

      > span {
        min-height: 40px;
        font-size: 1.25rem;
        white-space: normal;
      }
    }
  }

  > div {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 1rem;
    padding: 5px 10px;
    background: #fff;
    border-radius: 18px;
  }

  //모바일일 경우 width가 400이하일경우
  @media screen and (max-width: 450px) {
    > section {
      padding: 15px;
      > h1 {
        font-size: 1.25rem;
      }
      > img {
        width: 100%;
        // max-width : 315px;
        height: 400px;
      }
    }
  }

  @media screen and (max-width: 800px) {
    > section {
      > h1 {
        font-size: 1.25rem;
        > span {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 80px;
          padding: 10px 15px;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 0 15%;
    transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  }
`;

export default ListTransForm;
