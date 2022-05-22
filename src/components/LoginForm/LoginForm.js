import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/thunks/usersThunk";

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

    dispatch(loginThunk(formData));
  };

  return (
    <form autoComplete="off" noValidate onSubmit={submitLogin}>
      <label htmlFor="username" />
      <input id="username" value={formData.username} onChange={changeData} />
      <label htmlFor="password" />
      <input
        id="password"
        type="password"
        value={formData.password}
        onChange={changeData}
      />
      <button disabled={buttonDisabled} type="submit">
        LOG IN
      </button>
    </form>
  );
};

export default LoginForm;
