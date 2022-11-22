import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

const Main = (props) => {
  const { handleInterest } = props;

  const resetValue = useCallback(() => {
    handleInterest([]);
  }, []);

  useEffect(() => {
    resetValue();
  }, [resetValue]);

  return (
    <div>
      <Link to="/Question">테스트시작하기</Link>
    </div>
  );
};

export default Main;
