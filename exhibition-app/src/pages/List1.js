import React from "react";
import { useNavigate } from "react-router-dom";

const List1 = () => {
  const navigate = useNavigate();

  const handleResult = () => {
    navigate("/ResultPage");
  };

  return (
    <div>
      <ul>
        <li>
          <button onClick={handleResult}>질문 1</button>
        </li>
        <li>
          <button onClick={handleResult}>질문 2</button>
        </li>
        <li>
          <button onClick={handleResult}>질문 3</button>
        </li>
        <li>
          <button onClick={handleResult}>질문 4</button>
        </li>
        <li>
          <button onClick={handleResult}>질문 5</button>
        </li>
      </ul>
    </div>
  );
};

export default List1;
