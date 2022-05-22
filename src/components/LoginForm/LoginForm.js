import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { loginThunk } from "../../redux/thunks/usersThunk";

const LoginFromContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    width: 200px;
    height: 300px;
    color: white;
  }
  input {
    margin: 10px;
    padding: 10px 0px;
  }
  button {
    margin: 10px;
    padding: 5px 35px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const LoginForm = () => {
  const dispatch = useDispatch();

  const blankFields = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankFields);
  const [buttonDisabled, setButtonDisabled] = useState(blankFields);

  useEffect(() => {
    if (formData.username !== "" && formData.password !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitLogin = (event) => {
    event.preventDefault();
    setFormData(blankFields);
    dispatch(loginThunk(formData));
  };

  return (
    <LoginFromContainer>
      <form autoComplete="off" noValidate onSubmit={submitLogin}>
        <label htmlFor="username" />
        <input
          id="username"
          value={formData.username}
          onChange={changeData}
          placeholder="Username"
        />
        <label htmlFor="password" />
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={changeData}
          placeholder="Password"
        />
        <button disabled={buttonDisabled} type="submit">
          LOG IN
        </button>
        <button>
          <NavLink to="/register">SIGN IN</NavLink>
        </button>
      </form>
    </LoginFromContainer>
  );
};

export default LoginForm;
