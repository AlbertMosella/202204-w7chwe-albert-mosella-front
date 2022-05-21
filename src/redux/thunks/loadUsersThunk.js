import { loadUsersActionCreator } from "../features/users/usersSlice";

export const loadUsersThunk = () => async (dispatch) => {
  try {
    const url = process.env.REACT_APP_API_URL;
    const response = await fetch(`${url}users/list`);
    const users = await response.json();
    dispatch(loadUsersActionCreator(users.users));
  } catch (error) {}
};
