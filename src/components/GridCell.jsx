import React from "react";
import { Paper } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const directionRotation = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270
};

const GridCell = ({ hasObject, direction }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 70,
        height: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f4ff", // bright background
        borderRadius: 2,
        border: "1px solid #1976d2", // professional border
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "#e3f2fd"
        }
      }}
    >
      {hasObject && (
        <ArrowUpwardIcon
            data-testid="grid-arrow"
            sx={{
            fontSize: 32,
            color: "#1976d2",
            transform: `rotate(${directionRotation[direction]}deg)`,
            transition: "transform 0.3s"
          }}
        />
      )}
    </Paper>
  );
};

export default GridCell;
