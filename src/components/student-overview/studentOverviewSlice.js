import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const editStudentSlice = createSlice({
  name: "editStudent",
  initialState,
  reducers: {
    editStudentPending: (state) => {
      state.isLoading = true;
    },
    editStudentSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
    editStudentError: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
  },
});

const { reducer, actions } = editStudentSlice;

export const {
  editStudentPending,
  editStudentSuccess,
  editStudentError
} = actions;

export default reducer;