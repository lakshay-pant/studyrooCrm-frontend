import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
  isLoading: false,
  error: "",
  
};

const studentListSlice = createSlice({
  name: "studentList",
  initialState,
  reducers: {
    fetchStudentLoading: (state) => {
      state.isLoading = true;
    },
    fetchStudentSuccess: (state, action) => {
      state.students = action.payload;
      state.isLoading = false;
    },
    fetchStudentFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    
  },
});

const { reducer, actions } = studentListSlice;

export const {
  fetchStudentLoading,
  fetchStudentSuccess,
  fetchStudentFail,
} = actions;

export default reducer;