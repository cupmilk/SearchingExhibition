import React from "react";
import styled from "styled-components";

const Header = (props) => {
  const { navigate } = props;

  const LinkNav = () => {
    navigate("/");
  };

  return (
    <MainLabel>
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
    </MainLabel>
  );
};

// const MainLabel = styled.div`
//   width: 100vw;
//   height: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   padding-top: 20px;

//   .mainLogo {
//     width: 30%;
//     height: 30px;

//     display: flex;
//     justify-content: center;
//   }
//   .logBtn {
//     display: none;
//     background: green;
//   }
// `;

const MainLabel = styled.div`
  width: 100% .mainLogo {
    width: 30%;
    height: 30px;

    display: flex;
    justify-content: center;
  }
  .logBtn {
    display: none;
    background: green;
  }
`;

export default Header;
