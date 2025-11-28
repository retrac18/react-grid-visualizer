import React from "react";
import Grid from "./Grid";

export default {
  title: "Components/Grid",
  component: Grid
};

export const Default = () => <Grid positionString="1,1 NORTH" />;
export const EdgeCases = () => <Grid positionString="0,0 SOUTH" />;
export const InvalidInput = () => <Grid positionString="5,5 NORTH" />;
