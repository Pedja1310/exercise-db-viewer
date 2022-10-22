import { Container, Typography } from "@mui/material";

import "./App.css";

import Home from "./pages/Home";

function App() {
  if (!localStorage.getItem("saved")) {
    localStorage.setItem("saved", JSON.stringify([]));
  }

  return (
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
          textDecoration: "none",
          color: "#000",
          alignSelf: "center",
        }}
        fontWeight="500"
        mt={3}
      >
        ExerciseDB Viewer
      </Typography>
      <Home />
    </Container>
  );
}

export default App;
