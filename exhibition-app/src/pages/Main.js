import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Mybutton from "./../styles/Mybutton";
import LayOut from "./../styles/LayOut";
import theme from "./../styles/theme";
import { ThemeProvider } from "styled-components";

import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const goQuestion = () => {
    navigate("/Question");
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <MainLayOut>
          {/* 레이아웃이 이따위로 되어있는게 문제가 많음 그래도 우선 진행 */}
          <div className="header">
            <Header />
          </div>

          <div className="main-content">
            <img
              className="mainImg"
              src="https://cdn.pixabay.com/photo/2018/09/26/09/13/pixel-cells-3704048_960_720.png"
              alt=""
            />
            <div className="title_container">
              <h2>문화성향을 알고싶으신가요?</h2>

              <p>문화성향 테스트로 나의 성향을 파악해보아요</p>
            </div>
            <Mybutton color="green" size="large" onClick={goQuestion}>
              테스트 시작하기
            </Mybutton>
          </div>
          <div className="footer"></div>
        </MainLayOut>
      </ThemeProvider>
    </div>
  );
};

const MainLayOut = styled(LayOut)`
  .main-content {
    .mainImg {
      width: 300px;
      height: 300px;
    }
    .title_container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2.5rem;

      & > h2 {
        font-size: 2rem;
        color: ${(props) => props.theme.palette.green};
      }
    }
  }
`;

export default Main;
