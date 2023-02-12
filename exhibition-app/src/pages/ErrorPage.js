import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const [showImg, setShowImg] = useState({});
  const [randomNum, setRandomNum] = useState();
  const navigate = useNavigate();

  const goMain = () => {
    navigate("/");
  };

  const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
  const getData = useCallback(async () => {
    try {
      const URL = `https://pixabay.com/api/?key=${API_KEY}&q=gallery&image_type=photo&per_page=10`;
      const sendData = await axios.get(URL);
      const result = await sendData.data;

      setShowImg(result.hits);
    } catch (error) {
      console.log(error);
    }
  }, [API_KEY]);

  useEffect(() => {
    getData();
  }, [getData]);

  const getRandomNum = () => {
    const num = Math.floor(Math.random() * 10);
    setRandomNum(num);
  };
  useEffect(() => {
    getRandomNum();
  }, []);

  useEffect(() => {
    console.log(showImg);
  }, [showImg]);

  return (
    <div>
      {randomNum && showImg[randomNum] ? (
        <>
          {" "}
          <div>
            <img
              src={showImg[randomNum].webformatURL}
              width="300px"
              height="300px"
              alt=""
            />
          </div>
          <span> 오류로 인하여 메인페이지로 가기</span>
          <button onClick={goMain}> 메인메뉴 </button>
        </>
      ) : (
        <div>잠시만요</div>
      )}
    </div>
  );
};

export default ErrorPage;
