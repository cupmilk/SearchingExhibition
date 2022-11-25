import React, { PureComponent, useEffect, useRef, useState } from "react";
import { FixedSizeList as List } from "react-window";
import { FixedSizeGrid as Grid } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import GridPage from "./GridPage";

const InternalPage = (props) => {
  const { apiDatas } = props;

  //   const [dataNum, setDataNum] = useState(0);
  //   let dataNum = useRef(0);
  //   useEffect(() => {
  //     if (!apiDatas) {
  //       dataNum.current = 50;
  //     } else {
  //       dataNum.current = apiDatas.length;
  //     }
  //   }, [apiDatas]);

  //   console.log(dataNum);

  const LOADING = 1;
  const LOADED = 2;
  let itemStatusMap = {};

  const isItemLoaded = (index) => !!itemStatusMap[index];
  // const loadMoreItems = (startIndex, stopIndex) => {
  //   for (let index = startIndex; index <= stopIndex; index++) {
  //     itemStatusMap[index] = LOADING; //나중에 루프 애니메이션이 넣어지도록
  //   }
  //   return new Promise((resolve) =>
  //     setTimeout(() => {
  //       for (let index = startIndex; index <= stopIndex; index++) {
  //         itemStatusMap[index] = LOADED;
  //       }
  //       resolve();
  //     }, 250)
  //   );
  // };
  const loadMoreItems = (start, stop) => {};

  class Row extends PureComponent {
    render() {
      const { index, style } = this.props;
      let label;
      if (itemStatusMap[index] === LOADED) {
        if (apiDatas[index]) {
          //   dataNum.current += 1;
          label = `${apiDatas[index].TITLE}`;
        } else {
          label = null;
        }
      } else {
        label = "Loading...";
      }
      return (
        <div className="ListItem" style={style}>
          {label}
        </div>
      );
    }
  }

  //apidate가 존재여부확인
  //   const countApiDates = () => {
  //     if (apiDatas[index]) {
  //     }
  //   };

  const Cell = ({ columnIndex, rowIndex }) => (
    <div>
      Item {rowIndex},{columnIndex}
    </div>
  );

  return (
    <div>
      <InfiniteLoader
        isItemLoaded={isItemLoaded} // 조건
        itemCount={500} // 갯수
        loadMoreItems={loadMoreItems} // 매처음과끝 조건인가
      >
        {({ onItemsRendered, ref }) => (
          // <List
          //   className="List"
          //   height={300}
          //   itemCount={500}
          //   itemSize={30}
          //   onItemsRendered={onItemsRendered}
          //   ref={ref}
          //   width={1000}
          // >
          //   {Row}
          // </List>
          <Grid
            className="List"
            height={300}
            itemCount={500}
            itemSize={30}
            onItemsRendered={onItemsRendered}
            ref={ref}
            width={1000}
            columnCount={2}
            columnWidth={500}
            rowCount={100}
            rowHeight={35}
          >
            {Row}
          </Grid>
        )}
      </InfiniteLoader>
      <GridPage apiDatas={apiDatas} />
    </div>
  );
};

export default InternalPage;
