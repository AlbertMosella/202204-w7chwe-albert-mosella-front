import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import usersReducer from "../features/users/usersSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
  },
});

export default store;
