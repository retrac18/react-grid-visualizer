import React from "react";
import { Box } from "@mui/material";
import GridCell from "./GridCell";
import { parsePosition } from "./utils/parsePosition";

const Grid = ({ positionString }) => {
  let x = -1,
    y = -1,
    direction = null;

  try {
    const pos = parsePosition(positionString);
    x = pos.x;
    y = pos.y;
    direction = pos.direction;
  } catch (err) {
    return <Box color="red">{err.message}</Box>;
  }

  const cells = Array.from({ length: 5 }, (_, row) =>
    Array.from({ length: 5 }, (_, col) => {
      const hasObject = x === col && y === row;
      return <GridCell key={`${row}-${col}`} hasObject={hasObject} direction={direction} />;
    })
  );

  return (
    <Box display="grid" gridTemplateColumns="repeat(5, 60px)" gap="0">
      {cells.flat()}
    </Box>
  );
};

export default Grid;
