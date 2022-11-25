import React from "react";
import { FixedSizeGrid as Grid } from "react-window";

const GridPage = () => {
  const Cell = ({ columnIndex, rowIndex, style }) => (
    <div style={style}>index : {rowIndex * 2 + columnIndex}</div>
  );

  return (
    <div>
      <Grid
        className="Grid"
        columnCount={2}
        columnWidth={100}
        height={150}
        rowCount={1000}
        rowHeight={35}
        width={300}
      >
        {Cell}
      </Grid>
    </div>
  );
};

export default GridPage;
