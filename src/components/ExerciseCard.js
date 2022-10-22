import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { toggleSavedExercise } from "../store/exercisesSlice";

const ExerciseCard = ({ exercise }) => {
  const dispatch = useDispatch();
  const { savedExercises } = useSelector((state) => state.exercises);

  const savedExerciseIndex = savedExercises.findIndex(
    (ex) => exercise.id === ex.id
  );

  return (
    <Card
      sx={{
        maxWidth: "100%",
        textDecoration: "none",
        color: "#000",
        border: ".5px solid #d32f2f",
        borderRadius: "5px",
        position: "relative",
      }}
    >
      {savedExerciseIndex === -1 ? (
        <FavoriteBorderIcon
          sx={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
            cursor: "pointer",
          }}
          color="error"
          onClick={() => dispatch(toggleSavedExercise(exercise))}
        />
      ) : (
        <FavoriteIcon
          sx={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
            cursor: "pointer",
          }}
          color="error"
          onClick={() => dispatch(toggleSavedExercise(exercise))}
        />
      )}
      <CardMedia component="img" image={exercise.gifUrl} />
      <CardContent sx={{ bgcolor: "#fff" }}>
        <Typography
          variant="h6"
          noWrap
          sx={{ textTransform: "capitalize", fontWeight: 500 }}
        >
          {exercise.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;
