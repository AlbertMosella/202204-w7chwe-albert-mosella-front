import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockUser } from "../../mocks/users";
import store from "../../redux/store/store";
import UsersList from "./UsersList";

describe("Given a UsersList Component", () => {
  describe("When it's called with a User", () => {
    test("Then it should render a li element'", () => {
      const expectedResult = 1;

      render(
        <Provider store={store}>
          <UsersList users={[mockUser]} />
        </Provider>
      );

      const receivedResult = screen.getAllByRole("list");
      expect(receivedResult).toHaveLength(expectedResult);
    });
  });
});
