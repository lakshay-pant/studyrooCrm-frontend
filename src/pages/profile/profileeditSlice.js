import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const editUserSlice = createSlice({
  name: "editUser",
  initialState,
  reducers: {
    editUserPending: (state) => {
      state.isLoading = true;
    },
    editUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
    editUserError: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
  },
});

const { reducer, actions } = editUserSlice;

export const {
  editUserPending,
  editUserSuccess,
  editUserError
} = actions;

export default reducer;