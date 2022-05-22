import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render two button elements", () => {
      const expectedResult = 2;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getAllByRole("button");
      expect(receivedResult).toHaveLength(expectedResult);
    });
  });

  describe("When the word 'Nois' is written to the username input field", () => {
    test("Then the value of the username input field should be 'Nois'", () => {
      const inputText = "Nois";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
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
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      userEvent.type(screen.getByPlaceholderText("Password"), inputText);
      expect(screen.getByPlaceholderText("Password")).toHaveValue(inputText);
    });

    test("Then the value of the name input field should be 'Nois'", () => {
      const inputText = "Nois";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      userEvent.type(screen.getByPlaceholderText("Name"), inputText);
      expect(screen.getByPlaceholderText("Name")).toHaveValue(inputText);
    });

    test("Then the value of the img input field should be 'Nois'", () => {
      const inputText = "Nois";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      userEvent.type(screen.getByPlaceholderText("Image"), inputText);
      expect(screen.getByPlaceholderText("Image")).toHaveValue(inputText);
    });
  });
});
