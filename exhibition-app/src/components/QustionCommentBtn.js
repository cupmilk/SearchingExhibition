import React from "react";

// 버튼 부분
const QustionCommentBtn = (props) => {
  const { handleInterest, navigate, nextURL, value } = props;

  const handleStore = (e) => {
    handleInterest((prev) => [...prev, e.target.value]);
    navigate(nextURL);
  };

  return (
    <div>
      <li>
        <button onClick={handleStore} id="exhibition" value={value}>
          문화교양/강좌 질문
        </button>
      </li>
    </div>
  );
};

export default QustionCommentBtn;
