import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import theme from "./../styles/theme";

// 날짜 형식 변환
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

// from. RecommandPage
const ListTransForm = (props) => {
  const { shaowData } = props;
  //공연 시작날
  const [startData, setStartData] = useState({
    year: 0,
    month: 0,
    day: 0,
  });
  //공연 종료날
  const [endData, setEndData] = useState({
    year: 0,
    month: 0,
    day: 0,
  });
  const [showPay, setShowPay] = useState(""); // 공연비

  //날짜변환
  const transFormEndData = useCallback(() => {
    const arr = transFormData(shaowData, "end");
    setEndData((prev) => ({
      year: Number(arr[0]),
      month: Number(arr[1]),
      day: Number(arr[2]),
    }));
  }, [shaowData]);

  const transFormStartData = useCallback(() => {
    const arr = transFormData(shaowData, "start");
    setStartData((prev) => ({
      year: Number(arr[0]),
      month: Number(arr[1]),
      day: Number(arr[2]),
    }));
  }, [shaowData]);

  const ticketURL = () => {
    const Url = `${shaowData.ORG_LINK}`;
    window.open(Url);
  };

  const transShowPay = useCallback(() => {
    if (shaowData.USE_FEE === "무료" || shaowData.USE_FEE === "") {
      setShowPay((prev) => "무료");
    } else {
      setShowPay((prev) => shaowData.USE_FEE);
    }
  }, [shaowData.USE_FEE]);

  useEffect(() => {
    transFormEndData();
  }, [transFormEndData]);

  useEffect(() => {
    transFormStartData();
  }, [transFormStartData]);

  useEffect(() => {
    transShowPay();
  }, [transShowPay]);

  return (
    <>
      <Card>
        <section onClick={ticketURL}>
          <img src={shaowData.MAIN_IMG} width="150px" height="150px" alt="" />
          <h1 onClick={ticketURL}>
            <span>{shaowData.TITLE}</span>
          </h1>
        </section>

        <div className="show_info_container">
          <section>
            <h2>장소</h2>
            <p> {shaowData.PLACE} </p>
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
            <p>{showPay === "무료" ? "무료" : showPay}</p>
          </section>
        </div>
      </Card>
    </>
  );
};

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
  background: ${theme.palette.grey0};

  * h2 {
    font-size: 0.75rem;
    color: ${theme.palette.grey7};
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
    cursor: pointer;
    &:hover {
      color: ${theme.palette.deepPink};
    }

    > img {
      cursor: pointer;
    }

    > h1 {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      margin: 10px 0;

      > span {
        min-height: 40px;
        font-size: 1.25rem;
        text-align: center;
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
        max-width: calc(500px - 2rem);
        max-height: calc(500px - 2rem);
        width: calc(100vw - 2rem);
        height: auto;
        overflow: hidden;
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
    .show_info_container {
      padding: 0 20px;
      > section {
        width: 85%;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 0 15%;
    transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  }
`;

export default ListTransForm;
