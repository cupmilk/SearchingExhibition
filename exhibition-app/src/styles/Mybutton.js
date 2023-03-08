import React from "react";
import styled, { css } from "styled-components";
import { keyframes } from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

// const colorStyles = css`
//   ${({ theme, color }) => {
//     const selected = theme.palette[color];
//     return css`
//       background: ${selected};
//     `;
//   }}
// `;

const colorStyles = css`
  ${({ color }) => {
    return css`
      background: ${color};
    `;
  }}
`;
const pixelToRem = (size) => `${size / 16}rem`;

const sizes = {
  large: {
    height: `${pixelToRem(80)}`,
    fontSize: `${pixelToRem(30)}`,
  },
  medium: {
    height: `${pixelToRem(50)}`,
    fontSize: `${pixelToRem(20)}`,
  },
  small: {
    height: `${pixelToRem(30)}`,
    fontSize: `${pixelToRem(20)}`,
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-top: 1rem;
      }
    `}
`;

//btn animation
const jelly = keyframes`
  25% {
    transform: scale(0.9, 1.1);
  }

  50% {
    transform: scale(1.1, 0.9);
  }

  75% {
    transform: scale(0.95, 1.05);
  }
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  font-family: "IM_Hyemin-Bold";
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 15px;
  &:hover {
    animation: ${jelly} 0.5s;
  }

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
 ${colorStyles} 

  /* 기타 */
  & + & {
    margin-top: 1rem;
  }

  ${fullWidthStyle}
`;

function Mybutton({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton
        color={color}
        size={size}
        outline={outline}
        fullWidth={fullWidth}
        {...rest}
      >
        {children}
      </StyledButton>
    </ThemeProvider>
  );
}

Mybutton.defaultProps = {
  color: `${theme.palette.blue}`,
  size: "medium",
};

export default Mybutton;
