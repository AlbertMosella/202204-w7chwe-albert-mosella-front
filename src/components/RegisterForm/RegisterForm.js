import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { registerThunk } from "../../redux/thunks/usersThunk";

const RegisterFromContainer = styled.div`
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
    height: 350px;
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

const RegisterForm = () => {
  const dispatch = useDispatch();

  const blankFields = {
    name: "",
    username: "",
    password: "",
    img: "",
  };

  const [formData, setFormData] = useState(blankFields);
  const [buttonDisabled, setButtonDisabled] = useState(blankFields);

  useEffect(() => {
    if (
      formData.username !== "" &&
      formData.password !== "" &&
      formData.name !== ""
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitRegister = (event) => {
    event.preventDefault();
    setFormData(blankFields);
    dispatch(registerThunk(formData));
  };

  return (
    <RegisterFromContainer>
      <form autoComplete="off" noValidate onSubmit={submitRegister}>
        <label htmlFor="name" />
        <input
          id="name"
          value={formData.name}
          onChange={changeData}
          placeholder="Name"
        />
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
        <label htmlFor="img" />
        <input
          id="img"
          value={formData.img}
          onChange={changeData}
          placeholder="Image"
        />
        <button disabled={buttonDisabled} type="submit">
          CREATE USER
        </button>
        <button>
          <NavLink to="/login">BACK TO LOGIN</NavLink>
        </button>
      </form>
    </RegisterFromContainer>
  );
};

export default RegisterForm;
