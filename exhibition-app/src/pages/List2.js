import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const List2 = (props) => {
  const route = useNavigate();

  const showResult = (e) => {
    route(`/result?catrgory=${e.target.value}`);
  };
  return (
    <>
      <button id="Btn" value="문화교양/강좌" onClick={showResult}>
        문화교양/강좌
      </button>
      <button id="Btn" value="전시/미술" onClick={showResult}>
        전시/미술
      </button>
      <button id="Btn" value="뮤지컬/오페라" onClick={showResult}>
        뮤지컬/오페라
      </button>
      <button id="Btn" value="콘서트" onClick={showResult}>
        콘서트
      </button>
      <button id="Btn" value="클래식" onClick={showResult}>
        클래식
      </button>
    </>
  );
};

export default List2;
