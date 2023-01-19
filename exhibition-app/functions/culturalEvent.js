const axios = require("axios");

exports.handler = async function (event) {
  console.log(event);

  const CATEGORY = event;
  const CULTURAL_EVENT_API_KEY = "536e484769796d3937324150436959";
  const URL = `http://openapi.seoul.go.kr:8088/${CULTURAL_EVENT_API_KEY}/json/culturalEventInfo/1/100/${CATEGORY}`;
  try {
    const { data } = await axios.get(URL);

    return {
      statusCode: 200,
      body: data.culturalEventInfo,
    };
  } catch (error) {
    return {
      statusCode: error.response.status, // axios 공식문서 참조
      body: error.message,
    };
  }
};
