import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Pagination } from "@mui/material";

import ExerciseCard from "./ExerciseCard";

import { data } from "../utils/developmentData";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllExercises,
  getExercisesByBodyPart,
} from "../store/exercisesSlice";

const Exercises = () => {
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { bodyPart } = useSelector((state) => state.exercises);

  useEffect(() => {
    if (bodyPart !== "all" && bodyPart !== "saved") {
      dispatch(getExercisesByBodyPart(bodyPart));
    }

    // if (bodyPart === "all") {
    //   dispatch(getAllExercises());
    // }
  }, [dispatch, bodyPart]);

  const changePage = (e, value) => {
    setPage(value);
    wrapperRef.current.scrollIntoView();
  };

  const exercisesPerPage = 6;
  const indexOfLastExercise = page * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = data.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  return (
    <Box
      ref={wrapperRef}
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
          currentExercises.map((exercise) => (
            <ExerciseCard exercise={exercise} key={exercise.id} />
          ))
        ) : (
          <Typography variant="h6">No exercises!</Typography>
        )}
      </Box>
      <Pagination
        count={Math.ceil(data.length / exercisesPerPage)}
        shape="rounded"
        color="error"
        sx={{ mt: "2rem", mb: "2rem" }}
        page={page}
        onChange={changePage}
      />
    </Box>
  );
};

export default Exercises;
