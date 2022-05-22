import userReducer, { logInActionCreator } from "./userSlice";

describe("Given a userlice with an logIn reducer", () => {
  describe("When a login with a value username and a password", () => {
    test("Then it should return the username", () => {
      const initialState = {};
      const userLoged = { username: "Bucay" };
      const expectReturn = { username: "Bucay" };

      const action = logInActionCreator(userLoged);
      const newState = userReducer(initialState, action);

      expect(newState).toEqual(expectReturn);
    });
  });
});
