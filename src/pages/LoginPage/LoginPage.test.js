import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LoginPage from "./LoginPage";

describe("Given a LoginPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render two button components", () => {
      const expectedResult = 2;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getAllByRole("button");

      expect(receivedResult).toHaveLength(expectedResult);
    });
  });
});
