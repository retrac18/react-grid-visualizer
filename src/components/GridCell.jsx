import React from "react";
import { Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const directionRotation = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270
};

const GridCell = ({ hasObject, direction }) => {
  return (
    <Box
      sx={{
        width: 60,
        height: 60,
        border: "1px solid #ccc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {hasObject && (
        <ArrowUpwardIcon
          sx={{ transform: `rotate(${directionRotation[direction]}deg)` }}
        />
      )}
    </Box>
  );
};

export default GridCell;
