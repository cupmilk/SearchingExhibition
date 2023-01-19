import ErrorPage from "./../pages/ErrorPage";
const switchInterestInfo = (num) => {
  switch (num) {
    case "1":
      return "교육";
    case "2":
      return "전시";
    case "3":
      return "콘서트";
    case "4":
      return "뮤지컬";
    case "5":
      return "클래식";
    default:
      return <ErrorPage />;
  }
};

export default switchInterestInfo;
