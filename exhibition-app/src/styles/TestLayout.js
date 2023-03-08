import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: calc(100vh - 10%);
  //반응형에 따라서 크기 조절되도록만 하다
  grid-template-columns: 20% auto 20%;
  grid-template-rows: 10% auto 10%;
  grid-template-areas:
    ". content ."
    ". content ."
    ". . .";
`;

const TestLayout = ({ children }) => <Wrapper>{children}</Wrapper>;

export default TestLayout;

//모바일 기준 - 가장 낮은값 galaxy fold
// const TestLayout = styled.div`
//   display: grid;
//   width: 100vw;
//   height: 100vh;
//   grid-template-rows: 200px 1fr 200px;
//   grid-template-areas:
//     "header header header"
//     ". content ."
//     "footer footer footer";
// `;
