import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        textDecoration: "none",
        color: "#000",
        border: ".5px solid #f44336",
        borderRadius: "5px",
      }}
      as={Link}
      to={`/exercises/${exercise.id}`}
    >
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
