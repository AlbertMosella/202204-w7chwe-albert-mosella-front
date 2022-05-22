import axios from "axios";
import jwtDecode from "jwt-decode";
import { logInActionCreator } from "../features/user/userSlice";
import { loadUsersActionCreator } from "../features/users/usersSlice";

const url = process.env.REACT_APP_API_URL;

export const loadUsersThunk = () => async (dispatch) => {
  try {
    const response = await fetch(`${url}/users/list`);
    const users = await response.json();
    dispatch(loadUsersActionCreator(users.users));
  } catch (error) {}
};

export const loginThunk = (userData) => async (dispatch) => {
  const { data } = await axios.post(`${url}/users/login`, userData);

  const userInfo = jwtDecode(data.token);

  localStorage.setItem("token", data.token);

  dispatch(logInActionCreator(userInfo));
};

export const registerThunk = (userData) => async (dispatch) => {
  try {
    await axios.post(`${url}/users/register`, userData);
  } catch (error) {}
};
