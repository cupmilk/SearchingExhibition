import { css } from "styled-components";

export const media = {
  desktop: (...args) => css`
    @media (max-width: 1600px) {
      ${css(...args)}
    }
  `,

  tablet: (...args) => css`
    @media (max-width: 992px) {
      ${css(...args)}
    }
  `,

  mobile: (...args) => css`
    @media (max-width: 600px) {
      ${css(...args)}
    }
  `,
};
