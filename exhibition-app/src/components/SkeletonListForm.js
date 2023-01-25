import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

// 스켈레톤 ui간단하게 생성
const SkeletonListForm = () => {
  return (
    <>
      <Card>
        <section className="show_container">
          <div></div>

          <h1>
            <span></span>
          </h1>
        </section>

        <div className="show_info_container">
          <section className="location_section">
            <h2></h2>
            <p> </p>
          </section>

          <section className="data_section">
            <h2></h2>
            <p></p>
          </section>

          <section className="fee_section">
            <h2></h2>
            <p></p>
          </section>
        </div>
      </Card>
    </>
  );
};

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
    background: ${theme.palette.grey5};
    width: 2rem;
    height: 0.8rem;
    margin: 4px 0;
    font-size: 0.75rem;
    border-radius: 15%;
  }
  * p {
    background: ${theme.palette.grey5};
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    border-radius: 7px;
  }
  * section {
    margin-right: 0;
  }
  //750px이상일때

  > section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      color: ${theme.palette.deepPink};
    }

    > div {
      background-color: ${theme.palette.grey6};
      width: 150px;
      height: 150px;
      > img {
        cursor: pointer;
      }
    }

    > h1 {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      margin: 10px 0;
      border-radius: 7px;
      > span {
        min-height: 40px;
        font-size: 1.25rem;
        white-space: normal;
        background-color: ${theme.palette.grey5};
      }
    }
  }

  .show_info_container {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 1rem;
    padding: 5px 10px;
    background: #fff;
    border-radius: 18px;

    > section {
      width: 100%;
    }
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

    .show_info_container {
      padding: 0 20px;
      > section {
        width: 85%;
      }
    }
  }

  //이부분 수정
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

export default SkeletonListForm;
