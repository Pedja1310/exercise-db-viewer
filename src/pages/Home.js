import React, { useState } from "react";
import { Box } from "@mui/material";

import SearchBar from "../components/SearchBar";
import TrainingTypeOpitons from "../components/TrainingTypeOptions";
import Exercises from "../components/Exercises";

const Home = () => {
  const [paginationPage, setPaginationPage] = useState(1);

  return (
    <Box>
      <SearchBar setPaginationPage={setPaginationPage} />
      <TrainingTypeOpitons />
      <Exercises
        setPaginationPage={setPaginationPage}
        paginationPage={paginationPage}
      />
    </Box>
  );
};

export default Home;
