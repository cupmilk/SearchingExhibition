import React, { PureComponent } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import ListTransForm from "./ListTransForm";

const RecommandCard = (props) => {
  const { apiDatas } = props;

  const LOADING = 1;
  const LOADED = 2;
  const NUM_COLUMNS = 2;
  let itemStatusMap = {};

  const isItemLoaded = (index) => !!itemStatusMap[index];
  const loadMoreItems = (startIndex, stopIndex) => {
    for (let index = startIndex; index <= stopIndex; index++) {
      itemStatusMap[index] = LOADING;
    }
    return new Promise((resolve) =>
      setTimeout(() => {
        for (let index = startIndex; index <= stopIndex; index++) {
          itemStatusMap[index] = LOADED;
        }
        resolve();
      }, 1000)
    );
  };

  class Cell extends PureComponent {
    render() {
      const { columnIndex, rowIndex, style } = this.props;
      let label;
      //   = {
      //     title: null,
      //     img: null,
      //   };
      const itemIndex = rowIndex * NUM_COLUMNS + columnIndex;
      if (itemStatusMap[itemIndex] === LOADED) {
        label = `Cell (${rowIndex}, ${columnIndex})`;

        // label.title = apiDatas[rowIndex * 2 + columnIndex].TITLE;
        // label.img = apiDatas[rowIndex * 2 + columnIndex].MAIN_IMG;
      } else {
        label = "Loading...";
      }
      return (
        // <ListTransForm apiData={label} />

        <div className="ListItem" style={style}>
          {label}
          {/* <h4> {label.title}</h4>
          <img src={label.img} alt="" width="150px" height="150px" /> */}
        </div>
      );
    }
  }

  return (
    <>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={100}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => {
          const newItemsRendered = (gridData) => {
            const {
              visibleRowStopIndex,
              overscanRowStartIndex,
              overscanRowStopIndex,
              overscanColumnStopIndex,
            } = gridData;

            console.dir(gridData);
            const visibleStartIndex =
              overscanRowStartIndex * overscanColumnStopIndex;
            const visibleStopIndex =
              overscanRowStopIndex * overscanColumnStopIndex;

            // 현재 브라우저에 보여지는 list가 맨 바닥이면 onItemsRendered를 실행한다.
            if (visibleRowStopIndex >= apiDatas.length / 2 - 1) {
              onItemsRendered({ visibleStartIndex, visibleStopIndex });
            }
          };

          return (
            <Grid
              className="grid"
              itemCount={apiDatas.length + 1}
              columnCount={NUM_COLUMNS}
              columnWidth={300}
              height={1000}
              rowCount={apiDatas.length / 2 + 1}
              rowHeight={300}
              onItemsRendered={newItemsRendered}
              ref={ref}
              width={1000}
              overscanCount={4}
            >
              {Cell}
            </Grid>
          );
        }}
      </InfiniteLoader>
    </>
  );
};

export default RecommandCard;
