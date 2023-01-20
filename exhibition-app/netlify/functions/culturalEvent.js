const axios = require("axios");
//maxBodyLength 설정을 무한대로 설정
axios.defaults.maxBodyLength = Infinity;

exports.handler = async (event, context) => {
  // category호출
  // event : 함수가 호출될 때 전달되는 정보를 담고 있는 객체
  // event.queryStringParameters : event객체의 일부, 함수가 호출될 때 URL에 쿼리 문자열 매개변수의 키-값 쌍을 포함하는 개체.
  const { category } = event.queryStringParameters;

  // api 요청
  const API_KEY = process.env.REACT_APP_CULTURAL_EVENT_API_KEY;
  const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/culturalEventInfo/1/100/${category}`;
  const res = await axios.get(url);

  // json객체로 반환
  return {
    statusCode: 200,
    body: JSON.stringify(res.data),
  };
};
