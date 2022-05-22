import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockUsers } from "../../mocks/users";
import store from "../../redux/store/store";
import UsersPage from "./UsersPage";

describe("Given a UsersPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'All users of Life Invader'", () => {
      const expectedResult = "All users of Life Invader";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <UsersPage users={mockUsers} />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
