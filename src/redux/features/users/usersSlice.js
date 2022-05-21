import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    loadUsers: (users, action) => [...action.payload],
  },
});

export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;

export default usersSlice.reducer;
