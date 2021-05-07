import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const deleteStudentSlice = createSlice({
  name: "deleteStudent",
  initialState,
  reducers: {
    deleteStudentPending: (state) => {
      state.isLoading = true;
    },
    deleteStudentSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
    deleteStudentError: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
  },
});

const { reducer, actions } = deleteStudentSlice;

export const {
  deleteStudentPending,
  deleteStudentSuccess,
  deleteStudentError
} = actions;

export default reducer;