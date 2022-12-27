import React from "react";

const showResult = (e) => {
  console.log(e.target.value);
  // navigate(`/recommand?catrgory=${e.target.value}`);
};

const ResultType2 = (props) => {
  const { key, value } = props;

  return (
    <>
      {/* <button key={key} value={value}>
        추천 공연보러가기?
      </button> */}
      <p>dddd</p>
    </>
  );
};

export default ResultType2;
