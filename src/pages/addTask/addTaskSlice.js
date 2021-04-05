import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "success",
  message: "he",
};

const addTaskSlice = createSlice({
  name: "addTask",
  initialState,
  reducers: {
    addTaskPending: (state) => {
      state.isLoading = true;
    },
    addTaskSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
    addTaskError: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
  },
});

const { reducer, actions } = addTaskSlice;

export const {
  addTaskPending,
  addTaskSuccess,
  addTaskError,
} = actions;

export default reducer;