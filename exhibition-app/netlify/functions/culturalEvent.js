// const axios = require("axios");

// exports.handler = async function (event) {
//   console.log(event);

//   const CATEGORY = event;
//   const CULTURAL_EVENT_API_KEY = "536e484769796d3937324150436959";
//   const URL = `http://openapi.seoul.go.kr:8088/${CULTURAL_EVENT_API_KEY}/json/culturalEventInfo/1/100/${CATEGORY}`;
//   try {
//     const response = await axios.get(URL);

//     return {
//       statusCode: 200,
//       body: response.data,
//     };
//   } catch (error) {
//     return {
//       statusCode: error.response.status, // axios 공식문서 참조
//       body: error.message,
//     };
//   }
// };

const axios = require("axios");
axios.defaults.maxBodyLength = Infinity;

exports.handler = async (event, context) => {
  // Get the category from the query string
  const { category } = event.queryStringParameters;

  // Make the API request
  const API_KEY = "536e484769796d3937324150436959";
  const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/culturalEventInfo/1/100/${category}`;
  const res = await axios.get(url);

  // Return the data as a JSON object
  return {
    statusCode: 200,
    body: JSON.stringify(res.data),
  };
};
