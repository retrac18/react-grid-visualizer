// parsePosition.js
export const parsePosition = (input) => {
  const regex = /^([0-4]),([0-4])\s+(NORTH|EAST|SOUTH|WEST)$/i;
  const match = input.trim().match(regex);
  if (!match) {
    throw new Error("Invalid input. Format: 'x,y DIRECTION' where x,y = 0-4 and direction = NORTH|EAST|SOUTH|WEST");
  }
  return {
    x: parseInt(match[1], 10),
    y: parseInt(match[2], 10),
    direction: match[3].toUpperCase()
  };
};
