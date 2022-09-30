import React from "react";
import { Box, Typography } from "@mui/material";

import ExerciseCard from "./ExerciseCard";

import { data } from "../utils/developmentData";

const Exercises = () => {
  // const data = [];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      mt={5}
    >
      <Typography variant="h5">Exercises</Typography>
      <Box
        mt={4}
        sx={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
        }}
      >
        {data.length ? (
          data.map((exercise) => (
            <ExerciseCard exercise={exercise} key={exercise.id} />
          ))
        ) : (
          <Typography variant="h6">No exercises!</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Exercises;
