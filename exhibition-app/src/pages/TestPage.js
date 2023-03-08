import React from "react";
import TestLayout from "./../styles/TestLayout";
import styled from "styled-components";
import theme from "./../styles/theme";
import Mybutton from "./../styles/Mybutton";
const TestPage = () => {
  return (
    <TestLayout>
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

        <div>
          <Mybutton color="green" size="large">
            테스트 시작하기
          </Mybutton>
        </div>
      </ContentBox>
    </TestLayout>
  );
};
const Title = styled.h1`
  font-size: ${theme.fontSizes.title};
`;
const SubTitle = styled.h1`
  font-size: ${theme.fontSizes.subtitle};
`;

const ContentBox = styled.div`
  grid-area: content;
  ${theme.common.flexCenterColumn}

  .title_box {
    ${theme.common.flexCenterColumn}
    text-align: center;
    h1 {
      margin: 10px 0;
    }
  }
`;

export default TestPage;
// & > h2 {
//   font-size: 2rem;
//   color: ${(props) => props.theme.palette.green};
// }
