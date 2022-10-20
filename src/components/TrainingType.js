import React from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeBodyPart } from "../store/exercisesSlice";

const TrainingType = ({ trainingType }) => {
  const dispatch = useDispatch();

  const { bodyPart } = useSelector((state) => state.exercises);

  return (
    <Box
      onClick={() => dispatch(changeBodyPart(trainingType))}
      sx={{
        background: bodyPart === trainingType ? "#d32f2f" : "#fff",
        display: "flex",
        height: { xs: "3rem", sm: "4rem" },
        width: { xs: "8rem", md: "9rem", lg: "11rem" },
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #d32f2f",
        borderRadius: "6px",
        boxShadow: "-2px 4px 14px -5px rgba(0,0,0,0.63)",
        flexShrink: "0", // main

        "&:hover": {
          cursor: "pointer",
          transform: "scale(1.03)",
        },
      }}
    >
      <Typography
        sx={{
          color: bodyPart === trainingType ? "#fffafb" : "#d32f2f",
          textTransform: "uppercase",
        }}
      >
        {trainingType}
      </Typography>
    </Box>
  );
};

export default TrainingType;
