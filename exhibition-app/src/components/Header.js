import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";
import theme from "../styles/theme";
import { media } from "./../styles/media";

const Header = (props) => {
  const { color } = props;
  const navigate = useNavigate();

  const LinkNav = () => {
    navigate("/");
  };

  return (
    <MainLabel color={color}>
      <div className="header-container">
        <div className="title-container" onClick={LinkNav}>
          <Title>문화 성향 테스트</Title>
        </div>
      </div>
    </MainLabel>
  );
};
const Title = styled.h1`
  ${media.desktop`
    font-size: ${theme.fontSizes.title};

    `}

  ${media.tablet`
    font-size: ${theme.fontSizes.title};

    `}

    ${media.mobile`
    font-size: ${theme.fontSizes.subtitle};    

    `}
`;
const themebackground = css`
  ${({ color }) => {
    return color
      ? css`
          background: ${color};
        `
      : css`
          ${theme.palette.deepGreen}
        `;
  }}
`;

const MainLabel = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;

  border: 0px solid;
  ${themebackground};
  color: ${(color) => {
    if (color !== theme.palette.deepGreen) {
      return "white";
    } else {
      return "dark";
    }
  }};
  padding: 0.25rem;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 20px),
    calc(50% + 320px) 100%,
    47% calc(100% - 15px),
    calc(50% - 310px) 100%,
    0 calc(100% - 15px)
  );

  ${media.desktop`
  height: 100px;

    `}

  ${media.tablet`
  height: 80px;

    `}

    ${media.mobile`
    height: 80px;   

    `}

  .header-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .title-container {
      cursor: pointer;
    }
  }
`;

export default Header;

// .header {
//   grid-area: header;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 0px solid;
//   background: ${theme.palette.deepGreen};
//   //폴리곤 모형
//   clip-path: polygon(
//     0 0,
//     100% 0,
//     100% calc(100% - 20px),
//     calc(50% + 320px) 100%,
//     47% calc(100% - 15px),
//     calc(50% - 310px) 100%,
//     0 calc(100% - 15px)
//   );
//   cursor: pointer;
// }
