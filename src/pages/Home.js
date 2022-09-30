import React from "react";
import { Box } from "@mui/material";

import SearchBar from "../components/SearchBar";
import TrainingTypeOpitons from "../components/TrainingTypeOptions";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <Box>
      <SearchBar />
      <TrainingTypeOpitons />
      <Exercises />
    </Box>
  );
};

export default Home;
