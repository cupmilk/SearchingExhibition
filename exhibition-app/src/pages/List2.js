import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const List2 = (props) => {
  const { handleCodeName, codeName } = props;
  const [result, setResult] = useState(codeName);

  const navigate = useNavigate();

  const showResult = async (e) => {
    e.preventDefault();
    setResult(e.target.value);
    console.log(result);

    navigate("/result");
  };

  useEffect(() => {
    handleCodeName(result);
  }, [handleCodeName, result]);

  console.log(result);

  return (
    <>
      <label htmlFor="Btn">라벨</label>

      <button id="Btn" value="전시" onClick={showResult}>
        전시
      </button>
    </>
  );
};

export default List2;
