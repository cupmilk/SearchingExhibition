import React from "react";
import styled, { css } from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    // console.log(selected);
    return css`
      background: ${selected};
    `;
  }}
`;

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem",
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
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
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

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
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
  color: "blue",
  size: "medium",
};

export default Mybutton;
