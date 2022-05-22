import { logInActionCreator } from "../features/user/userSlice";
import { loginThunk } from "./usersThunk";

jest.mock("jwt-decode", () => () => ({ username: "Bucay" }));

describe("Given a loginThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loginActionCreator with the data from the token", async () => {
      const dispatch = jest.fn();

      const expectedData = {
        username: "Bucay",
      };
      const userData = {
        username: "Bucay",
        password: "123456",
      };

      const expectedAction = logInActionCreator(expectedData);

      const thunk = loginThunk(userData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
