import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { media } from "./media";

const BasicLayOut = styled.div`
  display: grid;
  width: 100vw;
  height: calc(100vh - 10%);
  ${media.desktop`
  height: calc(100vh - 100px);

    `}

  ${media.tablet`
  height: calc(100vh - 80px);

    `}

    ${media.mobile`
    height: calc(100vh - 80px);   

    `}
  //반응형에 따라서 크기 조절되도록만 하다
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: 10% auto 10%;
  grid-template-areas:
    ". content ."
    ". content ."
    "footer footer footer";
`;

function LayOut({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <BasicLayOut {...rest}>{children}</BasicLayOut>
    </ThemeProvider>
  );
}

export default LayOut;
