import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  logInActionCreator,
  registeredActionCreator,
} from "../features/user/userSlice";
import { loadUsersActionCreator } from "../features/users/usersSlice";

const url = process.env.REACT_APP_API_URL;

export const loadUsersThunk = () => async (dispatch) => {
  try {
    const { data: users } = await axios.get(`${url}/users/list`, {
      headers: {
        Authorization: `Bearer `,
      },
    });
    dispatch(loadUsersActionCreator(users.users));
  } catch (error) {}
};

export const loginThunk = (userData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${url}/users/login`, userData);

    const userInfo = jwtDecode(data.token);
    localStorage.setItem("token", data.token);
    dispatch(logInActionCreator(userInfo));
  } catch (error) {}
};

export const registerThunk =
  ({ username, password, name, image }) =>
  async (dispatch) => {
    const body = {
      username,
      password,
      name,
      image,
    };
    const { data } = await axios.post(`${url}/users/register`, body);
    dispatch(registeredActionCreator(data));
  };
