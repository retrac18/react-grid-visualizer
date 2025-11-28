import React from "react";
import Grid from "./Grid";

export default {
  title: "Components/Grid",
  component: Grid
};

// Default placement in the middle
export const Default = () => <Grid positionString="2,2 NORTH" />;

// Edge cases - grid boundaries
export const BottomLeftCorner = () => <Grid positionString="0,0 SOUTH" />;
export const TopRightCorner = () => <Grid positionString="4,4 WEST" />;

// All corners
export const AllCorners = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
    <Grid positionString="0,0 SOUTH" />
    <Grid positionString="0,4 NORTH" />
    <Grid positionString="4,0 EAST" />
    <Grid positionString="4,4 WEST" />
  </div>
);

// Invalid input
export const InvalidInput = () => <Grid positionString="5,5 NORTH" />;
