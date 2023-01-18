import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const BasicLayOut = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 75px 1fr 75px;

  grid-template-areas:
    "header header header"
    "   a    main    b   "
    "footer footer footer";

  .header {
    grid-area: header;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid;
    background: ${theme.palette.deepGreen};
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
    cursor: pointer;
  }

  .main-content {
    grid-area: main;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
  }
  .footer {
    grid-area: footer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function LayOut({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <BasicLayOut {...rest}>{children}</BasicLayOut>
    </ThemeProvider>
  );
}

export default LayOut;
