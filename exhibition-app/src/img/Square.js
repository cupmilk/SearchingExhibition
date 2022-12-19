import React from "react";

const Square = (props) => {
  const { height, width, fill } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill={fill} d="M512 512H0V0h512v512z" />
      {/* <path
        fill={fill}
        d="m0 20 l 420 40 L 800 0 l 750 60 l 370 -45 V 0 H 0 Z"
      /> */}
    </svg>
  );
};

export default Square;
