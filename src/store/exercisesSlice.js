import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7d8a3a67c8msh01dc576395d4f59p1e4419jsnce771175719a",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const getAllExercises = createAsyncThunk(
  "exercises/fetchAll",
  async () => {
    const response = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises",
      fetchOptions
    );

    return response.json();
  }
);

export const getExercisesByBodyPart = createAsyncThunk(
  "exercises/fetchByBodyPart",
  async (bodyPart) => {
    const response = await fetch(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
      fetchOptions
    );

    return response.json();
  }
);

export const searchExercisesByName = createAsyncThunk(
  "exercises/searchByName",
  async (query) => {
    const response = await fetch(
      `https://exercisedb.p.rapidapi.com/exercises/name/${query}`,
      fetchOptions
    );

    return response.json();
  }
);

const exercisesSlice = createSlice({
  name: "exercises",
  initialState: {
    bodyPart: "all",
    exercises: [],
    loading: false,
    error: "",
    savedExercises: JSON.parse(localStorage.getItem("saved")) || [],
  },
  reducers: {
    changeBodyPart: (state, action) => {
      state.bodyPart = action.payload;
    },
    toggleSavedExercise: (state, action) => {
      const savedExerciseIndex = state.savedExercises.findIndex(
        (ex) => action.payload.id === ex.id
      );

      if (savedExerciseIndex > -1) {
        state.savedExercises.splice(savedExerciseIndex, 1);
        localStorage.setItem("saved", JSON.stringify(state.savedExercises));
      } else {
        state.savedExercises.push(action.payload);
        localStorage.setItem("saved", JSON.stringify(state.savedExercises));
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllExercises.fulfilled, (state, action) => {
      state.exercises = [...action.payload];
      state.loading = false;
    });
    builder.addCase(getAllExercises.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getExercisesByBodyPart.fulfilled, (state, action) => {
      state.exercises = [...action.payload];
      state.loading = false;
    });
    builder.addCase(getExercisesByBodyPart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchExercisesByName.fulfilled, (state, action) => {
      state.exercises = [...action.payload];
      state.loading = false;
    });
    builder.addCase(searchExercisesByName.pending, (state, action) => {
      state.loading = true;
    });
  },
});

const { actions, reducer } = exercisesSlice;

export const { changeBodyPart, toggleSavedExercise } = actions;

export default reducer;
