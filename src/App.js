import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "./components/LoginForm/LoginForm";

import { loadUsersThunk } from "./redux/thunks/usersThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersThunk());
  }, [dispatch]);

  return (
    <h1>
      Life Invader
      <LoginForm />
    </h1>
  );
}

export default App;
