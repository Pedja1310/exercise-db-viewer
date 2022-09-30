import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Typography, Grid } from "@mui/material";

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
      <Grid2 container spacing={2} mt={4}>
        {data.length ? (
          data.map((exercise) => (
            <ExerciseCard exercise={exercise} key={exercise.id} />
          ))
        ) : (
          <Typography variant="h6">No exercises!</Typography>
        )}
      </Grid2>
    </Box>
  );
};

export default Exercises;
