import React from "react";
import styled, { css } from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const BasicLayOut = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 50px 1fr 50px;

  grid-template-areas:
    "header header header"
    "   a    main    b   "
    "footer footer footer";

  .header {
    grid-area: header;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .main-content {
    grid-area: main;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
