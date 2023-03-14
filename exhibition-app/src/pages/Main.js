import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Mybutton from "./../styles/Mybutton";
import LayOut from "./../styles/LayOut";
import theme from "./../styles/theme";
import { ThemeProvider } from "styled-components";

import { useNavigate } from "react-router-dom";

const Main = (props) => {
  const { handleHeaderColor } = props;

  const navigate = useNavigate();
  const goQuestion = () => {
    navigate("/Question");
  };

  const headerValue = useCallback(() => {
    handleHeaderColor(theme.palette.deepGreen);
  }, [handleHeaderColor]);

  useEffect(() => {
    headerValue();
  }, [headerValue]);

  return (
    <LayOut>
      <ContentBox>
        <div className="title_box">
          <Title>문화성향 테스트</Title>
          <img
            src="https://cdn.pixabay.com/photo/2018/09/26/09/13/pixel-cells-3704048_960_720.png"
            style={{ width: "200px", height: "200px" }}
            alt=""
          />
          <div className="subTitle_box">
            <SubTitle>나의 성향과 맞는 문화생활은?</SubTitle>
          </div>
        </div>
      </ContentBox>
      <Footer>
        <Mybutton color="green" size="large" onClick={goQuestion}>
          테스트 시작하기
        </Mybutton>
      </Footer>
    </LayOut>
  );
};
const Title = styled.h1`
  font-size: ${theme.fontSizes.title};
  color: ${(props) => props.theme.palette.deepGreen};
`;
const SubTitle = styled.h1`
  font-size: ${theme.fontSizes.subtitle};
`;
const Footer = styled.div`
  grid-area: footer;
  ${theme.common.flexCenter}
`;
const ContentBox = styled.div`
  grid-area: content;
  ${theme.common.flexCenterColumn}

  .title_box {
    ${theme.common.flexCenterColumn}
    text-align: center;
    h1 {
      margin: 20px 0;
    }
  }
`;

export default Main;
