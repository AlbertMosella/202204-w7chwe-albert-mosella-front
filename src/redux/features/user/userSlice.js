import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    logIn: (user, action) => ({ ...action.payload }),
    logOut: (user, action) => ({}),
  },
});

export const { logIn: logInActionCreator, logOut: logOutActionCreator } =
  userSlice.action;

export default userSlice.reducer;