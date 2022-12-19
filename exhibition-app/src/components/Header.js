import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Square from "../img/Square";

const Header = (props) => {
  const navigate = useNavigate();

  const LinkNav = () => {
    navigate("/");
  };

  return (
    <MainLabel>
      <div className="header-container">
        <label className="mainLogo" htmlFor="banner">
          문화 성향 테스트
        </label>
        <input
          className="logBtn"
          type="button"
          onClick={LinkNav}
          name="문화성향 테스트"
          id="banner"
        />
      </div>
    </MainLabel>
  );
};

const MainLabel = styled.div`
  width: 100%;
  .header-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .mainLogo {
      height: 30px;
    }
    .logBtn {
      display: none;
    }
  }
`;

export default Header;
