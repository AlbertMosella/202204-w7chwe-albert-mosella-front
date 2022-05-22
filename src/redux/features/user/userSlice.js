import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    logIn: (user, action) => ({ ...action.payload }),
    logOut: (user, action) => ({}),
    registered: (user) => ({ ...user }),
  },
});

export const {
  logIn: logInActionCreator,
  logOut: logOutActionCreator,
  registered: registeredActionCreator,
} = userSlice.actions;

export default userSlice.reducer;
