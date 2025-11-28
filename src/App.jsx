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
    <Container maxWidth="sm">
      <Paper elevation={5} sx={{ p: 4, mt: 5, borderRadius: 3, backgroundColor: "#ffffff" }}>
        <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center">
          Grid Visualizer
        </Typography>
        <Box display="flex" mb={3} gap={2}>
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
    </Container>
  );
}

export default App;
