import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

const Main = (props) => {
  return (
    <div>
      <h2>문화성향을 알고싶으신가요?</h2>
      <p>나의 성향을 무엇일까?</p>

      <Link to="/Question">테스트시작하기</Link>
    </div>
  );
};

export default Main;
