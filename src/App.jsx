import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography, Paper } from "@mui/material";
import Grid from "./components/Grid";

function App() {
  const [input, setInput] = useState("");
  const [position, setPosition] = useState("");

  const handlePlace = () => {
    setPosition(input);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5", // subtle background
        p: 2,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Grid Visualizer
        </Typography>

        <Box display="flex" gap={2} width="100%">
          <TextField
            fullWidth
            label="Enter Position (x,y DIRECTION)"
            placeholder="e.g., 1,2 EAST"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handlePlace}>
            Place
          </Button>
        </Box>

        <Grid positionString={position} />
      </Paper>
    </Box>
  );
}

export default App;
