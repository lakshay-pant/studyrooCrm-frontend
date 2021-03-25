import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  error: "",
  searchUserList: []
  
};


const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    fetchUserLoading: (state) => {
      state.isLoading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    fetchUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchUsers: (state, { payload }) => {
      state.searchUserList = state.users.filter((row) => {
        if (!payload) return row;
        

        return row.email.toLowerCase().includes(payload.toLowerCase());
      });
    
  }
}})

const { reducer, actions } = userListSlice;

export const {
  fetchUserLoading,
  fetchUserSuccess,
  fetchUserFail,
  searchUsers
} = actions;

export default reducer;