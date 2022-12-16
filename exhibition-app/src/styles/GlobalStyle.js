import { createGlobalStyle } from "styled-components";
import "../css/fonts.css";

const GlobalStyle = createGlobalStyle`

&, & * {
  box-sizing : border-box;
}

body{ 
  font-family :"IM_Hyemin-Bold";
  background: #d8e9ef;
  font-size: 1.5rem;
}
`;

export default GlobalStyle;
