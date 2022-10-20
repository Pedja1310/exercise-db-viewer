import { Box, Typography } from "@mui/material";

import trainignTypes from "../utils/trainingTypes";
import TrainingType from "./TrainingType";

const TrainingTypeOptions = () => {
  return (
    <Box mt={5}>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Or choose a category
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowY: "hidden",
          overflowX: "scroll",
          padding: "20px",
          gap: "1rem",
          width: "100%",
        }}
      >
        {trainignTypes.map((trainingType, id) => (
          <TrainingType trainingType={trainingType} key={id} />
        ))}
      </Box>
    </Box>
  );
};

export default TrainingTypeOptions;
