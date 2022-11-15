import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Selection from "../components/Selection";

// 점수를 리턴해서 배열에 넣어서 마지막 배열에 값에 따라 결과값(result page의 결과) 다르게 도출

const List1 = () => {
  const [interest, SetInterest] = useState({
    exhibition: [],
    consert: [],
  });
  //[exhibition,exhibition, exhibition, consert ] => exhibition
  //[1,2,3].length랑 비교해서 pop 으로 지우기
  const [score, setScore] = useState(0);
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleResult = () => {
    navigate("/ResultPage");
  };

  // const handleCount = (e) => {
  //   setExhibitionCount((prev) => [...prev, e.target.value]);
  // };

  // const handleInterest =() =>{
  //     SetInterest((prev) => ({
  //         ...prev,
  //         exhibition: [...prev.exhibition, e.target.value],
  //       }));
  // }
  const handleStore = (e) => {
    setScore(e.target.value);
    setId(e.target.value);
  };

  const ddt = (name, value) => {
    SetInterest((prev) => ({
      ...prev,
      [name]: [...prev[name], value],
    }));
  };

  const handleCount = (e) => {
    ddt(e.target.id, e.target.value);
    // switch (e.target.id) {
    //   case "exhibition":
    //     ddt(e.target.value);
    //     // SetInterest((prev) => ({
    //     //   ...prev,
    //     //   exhibition: [...prev.exhibition, e.target.value],
    //     // }));
    //     break;
    //   case "consert":
    //     ddt(e.target.value);
    //     // SetInterest((prev) => ({
    //     //   ...prev,
    //     //   consert: [...prev.consert, e.target.value],
    //     // }));
    //     break;
    //   default:
    //     console.log("switch 오류");
    //}
    // navigate("/ResultPage");
  };

  useEffect(() => {
    console.log(interest);
  }, [interest]);

  //뒤로가기를 누르면 pop이 실행되도록

  // const handleCount = (e) => {
  //   e.preventDefault();
  //   switch (e.target.id) {
  //     case "exhibition":
  //       SetInterest((prev) => ({
  //         ...prev,
  //         exhibition: [...prev.exhibition, e.target.value],
  //       }));
  //       break;
  //     case "consert":
  //       SetInterest((prev) => ({
  //         ...prev,
  //         consert: [...prev.consert, e.target.value],
  //       }));
  //       break;
  //     default:
  //       console.log("switch 오류");
  //   }
  //   // navigate("/ResultPage");
  //   console.log(interest);
  // };

  // const handleCount = useCallback((e) => {
  //   e.preventDefault();
  //   switch (e.target.id) {
  //     case "exhibition":
  //       SetInterest((prev) => ({
  //         ...prev,
  //         exhibition: [...prev.exhibition, e.target.value],
  //       }));
  //       break;
  //     case "consert":
  //       SetInterest((prev) => ({
  //         ...prev,
  //         consert: [...prev.consert, e.target.value],
  //       }));
  //       break;
  //     default:
  //       console.log("switch 오류");
  //   }
  // navigate("/ResultPage");
  // console.log(interest);
  // }, []);

  // useEffect(() => {
  //   handleCount();
  // }, [handleCount]);

  return (
    // <div>
    //   <ul>
    //     <li>
    //       <Selection
    //         handleSelection={handleSelection}
    //         label="전시"
    //         countScore={interest}
    //         score={5}
    //       />
    //     </li>
    //     <li>
    //       <Selection
    //         handleSelection={handleSelection}
    //         label="콘서트"
    //         score={3}
    //       />
    //     </li>
    //     <li>
    //       <button onClick={handleResult} value={{}}>
    //         질문 3
    //       </button>
    //     </li>
    //   </ul>
    // </div>
    <div>
      <h6>앱이름</h6>
      <h1>질문</h1>
      <h4> 어떤 성향에 대한 질문 </h4>
      <ul>
        <li>
          <Link></Link>
          <button onClick={handleCount} id="exhibition" value={5}>
            전시 질문
          </button>
        </li>
        <li>
          <button onClick={handleCount} id="consert" value={3}>
            콘서트 질문
          </button>
        </li>
      </ul>
    </div>
  );
};

export default List1;
