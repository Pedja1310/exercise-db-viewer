import { Box, Typography } from "@mui/material";
import React from "react";

const TrainingType = ({ trainingType }) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: { xs: "3rem", sm: "4rem" },
        width: { xs: "7rem", sm: "8rem", md: "9rem", lg: "11rem" },
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #f44336",
        borderRadius: "6px",
        boxShadow: "-2px 4px 14px -5px rgba(0,0,0,0.63)",
        flexShrink: "0", // main

        "&:hover": {
          cursor: "pointer",
          transform: "scale(1.05)",
        },
      }}
    >
      <Typography sx={{ color: "#f44336", textTransform: "uppercase" }}>
        {trainingType}
      </Typography>
    </Box>
  );
};

export default TrainingType;
