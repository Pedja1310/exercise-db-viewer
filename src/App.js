import { Link, Route, Routes } from "react-router-dom";

import { Container, Typography } from "@mui/material";

import "./App.css";

import Home from "./pages/Home";
import ExercisePage from "./pages/ExercisePage";

function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        as={Link}
        to="/"
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExercisePage />} />
      </Routes>
    </Container>
  );
}

export default App;
