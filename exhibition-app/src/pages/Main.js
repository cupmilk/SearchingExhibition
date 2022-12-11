import React, { useCallback, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

const Main = (props) => {
  return (
    <div>
      <h2>문화성향을 알고싶으신가요?</h2>
      <p>나의 성향을 무엇일까?</p>
      <simpleLink>
        <StyledNavLink to="/Question">테스트시작하기</StyledNavLink>
        {/* <NavLink to="/Question">테스트시작하기</NavLink> */}
      </simpleLink>
    </div>
  );
};

export default Main;
