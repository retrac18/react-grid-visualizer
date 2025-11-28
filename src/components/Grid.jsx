import React from "react";
import { Box, Alert } from "@mui/material";
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
    return (
      <Box mt={2} display="flex" justifyContent="center">
        <Alert severity="error" variant="outlined" sx={{ maxWidth: 400 }}>
          {err.message}
        </Alert>
      </Box>
    );
  }

  const gridSize = 5;
  const cells = [];

  // Loop through rows from top (gridSize-1) to bottom (0)
  for (let row = gridSize - 1; row >= 0; row--) {
    for (let col = 0; col < gridSize; col++) {
      const hasObject = x === col && y === row; // now y=0 is bottom row
      cells.push(
        <GridCell key={`${row}-${col}`} hasObject={hasObject} direction={direction} />
      );
    }
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(${gridSize}, 70px)`}
      gridTemplateRows={`repeat(${gridSize}, 70px)`}
      gap={1.5}
      sx={{
        mt: 3,
        justifyContent: "center",
        backgroundColor: "#e8f0fe",
        p: 2,
        borderRadius: 3,
        boxShadow: "0px 4px 15px rgba(0,0,0,0.1)"
      }}
    >
      {cells}
    </Box>
  );
};

export default Grid;
