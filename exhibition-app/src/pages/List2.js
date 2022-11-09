import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const List2 = (props) => {
  const { handleCodeName, codeName } = props;
  const [result, setResult] = useState(null);

  const navigate = useNavigate();

  const showResult = (e) => {
    setResult(e.target.value);
  };

  useEffect(() => {
    if (result) {
      navigate("/result");
    }
  }, [result]);

  useEffect(() => {
    handleCodeName(result);
  }, [handleCodeName, result]);

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
