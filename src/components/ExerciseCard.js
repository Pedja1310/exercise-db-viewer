import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Grid2 xs={12} sm={6} md={4} lg={3} sx={{}}>
      <Card
        sx={{
          maxWidth: 360,
          textDecoration: "none",
          color: "#000",
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
    </Grid2>
  );
};

export default ExerciseCard;
