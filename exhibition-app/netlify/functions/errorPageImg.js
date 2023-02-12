const axios = require("axios");

exports.handler = async (event, context) => {
  // api 요청
  const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=gallery&image_type=photo&per_page=10`;
  const res = await axios.get(url);

  // json객체로 반환
  return {
    statusCode: 200,
    body: JSON.stringify(res.data),
  };
};
