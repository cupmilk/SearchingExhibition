import React, { useCallback, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

const Main = (props) => {
  return (
    <Box>
      <h2>문화성향을 알고싶으신가요?</h2>
      <p>나의 성향을 무엇일까?</p>
      <simpleLink>
        <StyledNavLink to="/Question">테스트시작하기</StyledNavLink>
        {/* <NavLink to="/Question">테스트시작하기</NavLink> */}
      </simpleLink>
    </Box>
  );
};

export default Main;
