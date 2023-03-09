import React, { useState } from "react";
import LayOut from "./../styles/LayOut";
import styled from "styled-components";
import resultCategoryInfo from "./../utils/resultCategoryInfo";
import ResultTxt from "./../components/ResultTxt";

const AllResultPage = () => {
  const [allInfo, setAllInfo] = useState(resultCategoryInfo.categoryInfo);

  return (
    <LayOut>
      <ContentBox>
        {allInfo.map((info) =>
          info.color.element ? (
            <Box className="resultInfo_container">
              <ResultTxt categoryNum={[info.id]} />
            </Box>
          ) : (
            <div>now Loading</div>
          )
        )}
      </ContentBox>
    </LayOut>
  );
};

const Box = styled.section`
  padding-bottom: 30px;
  text-align: center;
  background: ${({ color }) => color};
`;

const ContentBox = styled.div`
  grid-area: content;
`;

export default AllResultPage;
