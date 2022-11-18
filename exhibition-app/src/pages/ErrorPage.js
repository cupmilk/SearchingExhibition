import React from "react";

const ErrorPage = (props) => {
  const { navigate } = props;

  const goMain = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>페이지 오류</h1>
      <h3> 오류로 인하여 메인페이지로 가주세요</h3>
      <button onClick={goMain}> 메인메뉴 </button>
    </div>
  );
};

export default ErrorPage;
