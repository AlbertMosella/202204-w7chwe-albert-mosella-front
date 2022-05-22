import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LoginForm from "./LoginForm";

describe("Given a LoginForm Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'LOG IN':", () => {
      const expectedResult = "LOG IN";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });

  describe("When the word 'Nois' is written to the username input field", () => {
    test("Then the value of the username input field should be 'Nois'", () => {
      const inputText = "Nois";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      userEvent.type(screen.getByPlaceholderText("Username"), inputText);
      expect(screen.getByPlaceholderText("Username")).toHaveValue(inputText);
    });

    test("Then the value of the password input field should be 'Nois'", () => {
      const inputText = "Nois";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      userEvent.type(screen.getByPlaceholderText("Password"), inputText);
      expect(screen.getByPlaceholderText("Password")).toHaveValue(inputText);
    });
  });
  describe("When the LOG IN button is clicked", () => {
    test("Then the username input field should be empty", () => {
      const expectedResult = "";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      userEvent.click(screen.getByText("LOG IN"));
      expect(screen.getByPlaceholderText("Username")).toHaveValue(
        expectedResult
      );
    });
  });
});
