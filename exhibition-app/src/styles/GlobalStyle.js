import { createGlobalStyle } from "styled-components";
import "../css/fonts.css";

const GlobalStyle = createGlobalStyle`

&, & * {
  box-sizing : border-box;

}

body{ 
  font-family :"IM_Hyemin-Bold";
  word-break: keep-all;
  font-size: 1.5rem;
  // background : #f5f5f7;
}
`;

export default GlobalStyle;
