import styled from "styled-components";

const palette = {
  green: "#d6ece3",
  deepGreen: "#33a474",
  blue: "#d8e9ef",
  deepBlue: "#4298b4",
  yellow: "#ece5d5",
  deepYellow: "#e4ae3a",
  pink: "#eddef4",
  deepPink: "#f25e62",
  grey: "#eaeae9",
  purple: "#e7dfea",
  deepPurple: "#88619a",
  grey0: "#f8f9fa",
  grey1: "#f1f3f5",
  grey5: "#efeeed",
  grey6: "#cccccc",
  grey7: "#868e96",
};

const deviceSizes = {
  mobile: "450px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and ((min-widt:${deviceSizes.mobile}) and (max-width:${deviceSizes.laptop}))`,
  laptop: `screen and (min-width: ${deviceSizes.laptop})`,
};

const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (size) => `${size / 16}rem`;

// font size를 객체로 반환해주자.
const fontSizes = {
  title: pixelToRem(40),
  subtitle: pixelToRem(23),
  txt: pixelToRem(18),
};

const theme = {
  palette,
  device,
  common,
  fontSizes,
};

export default theme;
