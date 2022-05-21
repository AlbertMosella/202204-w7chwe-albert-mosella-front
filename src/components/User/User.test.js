import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockUser } from "../../mocks/users";
import store from "../../redux/store/store";
import User from "./User";

describe("Given a User Component", () => {
  describe("When it's called with a User prop", () => {
    test("Then it should render the text 'Bucay'", () => {
      const expectedText = "Bucay";

      render(
        <Provider store={store}>
          <User user={mockUser} />
        </Provider>
      );

      const receivedResult = screen.getByText(expectedText).textContent;
      expect(receivedResult).toBe(expectedText);
    });
  });
});
