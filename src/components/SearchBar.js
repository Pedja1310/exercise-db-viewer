import { Box, TextField, Button, Stack, Typography } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <Stack mt={5} alignItems="center">
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Search Through More Than <br /> 1000 Exercises For All Body Parts
      </Typography>
      <Box position="relative" mt={3}>
        <TextField
          type="text"
          sx={{
            input: { fontWeight: "500", border: "none", borderRadius: "4px" },
            width: { xs: "18.75rem", sm: "27rem", md: "40rem" },
          }}
          placeholder="Search exercise"
        />
        <Button
          variant="contained"
          color="error"
          sx={{
            textTransform: "none",
            height: "3.5rem",
            width: { xs: "6rem", sm: "8rem", lg: "10rem" },
            position: "absolute",
            right: 0,
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchBar;
