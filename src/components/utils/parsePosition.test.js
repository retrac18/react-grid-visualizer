import { parsePosition } from "./parsePosition";

describe("parsePosition utility", () => {
  test("parses valid input correctly", () => {
    const result = parsePosition("1,2 EAST");
    expect(result).toEqual({ x: 1, y: 2, direction: "EAST" });
  });

  test("parses input with extra spaces", () => {
    const result = parsePosition(" 0, 4  NORTH ");
    expect(result).toEqual({ x: 0, y: 4, direction: "NORTH" });
  });

  test("throws error on invalid input", () => {
    expect(() => parsePosition("5,5 NORTH")).toThrow(
      "Invalid input. Format: 'x,y DIRECTION' where x,y = 0-4 and direction = NORTH|EAST|SOUTH|WEST"
    );
  });

  test("throws error on invalid direction", () => {
    expect(() => parsePosition("1,1 UP")).toThrow();
  });
});
