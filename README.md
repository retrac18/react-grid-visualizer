# React 5x5 Grid Visualizer

A simple React application to visualize the placement of an object on a **5x5 grid** based on user input, built with **Material UI** and documented with **Storybook**.

---

## Demo

* Place an object on the grid by entering a string in the format:

```
x,y DIRECTION
```

* `x` and `y`: integers from 0 to 4 (0,0 is bottom-left).
* `DIRECTION`: `NORTH`, `EAST`, `SOUTH`, or `WEST`.

Examples:

* `"1,1 NORTH"`
* `"0,0 SOUTH"`
* `"4,4 WEST"`

The object will appear on the grid with an arrow indicating the direction. Invalid input will display a professional error alert.

---

## Features

* **Interactive 5x5 Grid**: Shows object placement based on input string.
* **Material UI Styling**: Bright, professional grid with hover effects.
* **Error Handling**: Graceful alerts for invalid input.
* **Storybook Integration**: Component stories including edge cases.
* **Unit Testing**: Jest and React Testing Library tests for parsing and grid placement.
* **Centered Layout**: Grid and input panel centered in the browser.

---

## Technologies

* React (Create React App)
* Material UI (`@mui/material`, `@mui/icons-material`)
* Storybook
* Jest + React Testing Library

---

## Getting Started

### Clone the repo

```bash
git clone <your-repo-url>
cd react-grid-visualizer
```

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npm start
npm run dev
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Run Storybook

```bash
npm run storybook
```

### Run Unit Tests

```bash
npm test
```

---

## Usage

1. Enter a position string in the input field: `"x,y DIRECTION"`.
2. Click the **Place** button.
3. See the object appear on the grid with the correct orientation.
4. Invalid input shows a professional error alert.

---

## License

MIT License © 2025
