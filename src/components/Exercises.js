import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";

import ExerciseCard from "./ExerciseCard";

import { data } from "../utils/developmentData";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllExercises,
  getExercisesByBodyPart,
} from "../store/exercisesSlice";

const Exercises = () => {
  const dispatch = useDispatch();
  const { bodyPart } = useSelector((state) => state.exercises);

  useEffect(() => {
    console.log(bodyPart);
    if (bodyPart !== "all" && bodyPart !== "saved") {
      dispatch(getExercisesByBodyPart(bodyPart));
    }

    // if (bodyPart === "all") {
    //   dispatch(getAllExercises());
    // }
  }, [dispatch, bodyPart]);

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
