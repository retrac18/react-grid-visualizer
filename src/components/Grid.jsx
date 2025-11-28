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
    return (
      <Box color="red" fontWeight="bold" mt={2}>
        {err.message}
      </Box>
    );
  }

  const cells = Array.from({ length: 5 }, (_, row) =>
    Array.from({ length: 5 }, (_, col) => {
      const hasObject = x === col && y === row;
      return <GridCell key={`${row}-${col}`} hasObject={hasObject} direction={direction} />;
    })
  );

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(5, 70px)"
      gridTemplateRows="repeat(5, 70px)"
      gap={1.5}
      sx={{
        mt: 3,
        justifyContent: "center",
        backgroundColor: "#e8f0fe", // bright grid background
        p: 2,
        borderRadius: 3,
        boxShadow: "0px 4px 15px rgba(0,0,0,0.1)"
      }}
    >
      {cells.flat().reverse()} {/* bottom-left is (0,0) */}
    </Box>
  );
};

export default Grid;
