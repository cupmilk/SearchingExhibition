import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate("/");
  };

  return (
    <div>
      <h3> 오류로 인하여 메인페이지로 가기</h3>
      <button onClick={goMain}> 메인메뉴 </button>
    </div>
  );
};

export default ErrorPage;
