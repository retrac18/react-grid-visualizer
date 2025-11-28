import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Grid from "./Grid";

describe("Grid Component", () => {
  test("renders grid with object at correct position", () => {
    render(<Grid positionString="1,1 NORTH" />);
    const arrow = screen.getByTestId("grid-arrow");
    expect(arrow).toBeInTheDocument();
    expect(arrow).toHaveStyle("transform: rotate(0deg)"); // NORTH rotation
  });

  test("renders error alert for invalid input", () => {
    render(<Grid positionString="5,5 NORTH" />);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent(
      "Invalid input. Format: 'x,y DIRECTION' where x,y = 0-4 and direction = NORTH|EAST|SOUTH|WEST"
    );
  });

  test("renders grid without object if position string is empty", () => {
    render(<Grid positionString="" />);
    const arrows = screen.queryAllByTestId("grid-arrow");
    expect(arrows.length).toBe(0);
  });

  test("renders object at bottom-left corner correctly", () => {
    render(<Grid positionString="0,0 SOUTH" />);
    const arrow = screen.getByTestId("grid-arrow");
    expect(arrow).toHaveStyle("transform: rotate(180deg)"); // SOUTH
  });

  test("renders object at top-right corner correctly", () => {
    render(<Grid positionString="4,4 WEST" />);
    const arrow = screen.getByTestId("grid-arrow");
    expect(arrow).toHaveStyle("transform: rotate(270deg)"); // WEST
  });

  test("renders object at top-left corner correctly", () => {
    render(<Grid positionString="0,4 NORTH" />);
    const arrow = screen.getByTestId("grid-arrow");
    expect(arrow).toHaveStyle("transform: rotate(0deg)"); // NORTH
  });

  test("renders object at bottom-right corner correctly", () => {
    render(<Grid positionString="4,0 EAST" />);
    const arrow = screen.getByTestId("grid-arrow");
    expect(arrow).toHaveStyle("transform: rotate(90deg)"); // EAST
  });
});
