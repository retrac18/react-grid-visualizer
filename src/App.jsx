import React, { useState } from "react";
import { Container, TextField, Button, Box } from "@mui/material";
import Grid from "./components/Grid";

function App() {
  const [input, setInput] = useState("");
  const [position, setPosition] = useState("");

  const handlePlace = () => {
    setPosition(input);
  };

  return (
    <Container>
      <Box my={2}>
        <TextField
          label="Enter Position (x,y DIRECTION)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={handlePlace} variant="contained" sx={{ ml: 2 }}>
          Place
        </Button>
      </Box>
      <Grid positionString={position} />
    </Container>
  );
}

export default App;
