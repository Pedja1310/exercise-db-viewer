import React from "react";
import { Box } from "@mui/material";

import SearchBar from "../components/SearchBar";
import TrainingTypeOpitons from "../components/TrainingTypeOptions";

const Home = () => {
  return (
    <Box>
      <SearchBar />
      <TrainingTypeOpitons />
    </Box>
  );
};

export default Home;
