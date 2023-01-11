import React, { useCallback, useEffect, useState } from "react";
import ListTransForm from "../components/ListTransForm";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Header from "./../components/Header";
import theme from "../styles/theme";
import Mybutton from "./../styles/Mybutton";
import { css } from "styled-components";

const categoryColors = new Map([
  [
    "문화교양",
    {
      theme: `${theme.palette.deepGreen}`,
      btn: `${theme.palette.green}`,
    },
  ],
  [
    "전시",
    {
      theme: `${theme.palette.deepBlue}`,
      btn: `${theme.palette.blue}`,
    },
  ],
  [
    "콘서트",
    {
      theme: `${theme.palette.deepYellow}`,
      btn: `${theme.palette.yellow}`,
    },
  ],
  [
    "뮤지컬",
    {
      theme: `${theme.palette.deepBlue}`,
      btn: `${theme.palette.blue}`,
    },
  ],
  [
    "클래식",
    {
      theme: `${theme.palette.deepPink}`,
      btn: `${theme.palette.pink}`,
    },
  ],
]);

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
        <ul>
          <li key={index}>
            <ListTransForm apiData={apiData} />
          </li>
        </ul>
      ))
    );
  };

  const status = categoryColors.get(category);
  if (!status) {
    throw console.log("mode없음");
  }
  const { theme, btn } = status;

  return (
    <RecommandLayOut>
      <ReccomandHeader className="header" color={theme}>
        <Header />
      </ReccomandHeader>

      <div className="list_container">
        <ListLayOut>{viewMore(listNum)}</ListLayOut>
      </div>
      <div className="btn_container">
        <section>
          {apiDatas.length > listNum * 6 ? (
            <RecommandBtn id="viewMore" color={btn} onClick={addNum}>
              더보기
            </RecommandBtn>
          ) : null}
        </section>
        <section>
          <RecommandBtn color={btn} onClick={goMain}>
            {" "}
            테스트 다시하기{" "}
          </RecommandBtn>
        </section>
      </div>
    </RecommandLayOut>
  );
};

// 테마 색깔 보류

const ListLayOut = styled.div`
  @media (min-width: 450px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 15px;
  }
`;
const RecommandBtn = styled(Mybutton)`
  //배경색
  background: ${(props) => props.color || "black"};
`;

const themebackground = css`
  ${({ color }) => {
    return css`
      background: ${color};
    `;
  }}
`;

const ReccomandHeader = styled.div`
  ${themebackground}
`;

const RecommandLayOut = styled.div`
  width: 100vw;
  .header {
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid;

    ${themebackground}
    // background : #33a474;
    color: white;
    //폴리곤 모형
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 20px),
      calc(50% + 320px) 100%,
      47% calc(100% - 15px),
      calc(50% - 310px) 100%,
      0 calc(100% - 15px)
    );
    //배경색
  }

  .btn_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > section {
      margin-top: 20px;
    }
  }
`;

export default RecommandPage;
