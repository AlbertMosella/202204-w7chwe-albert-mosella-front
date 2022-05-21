import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUsersThunk } from "./redux/thunks/loadUsersThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersThunk());
  }, [dispatch]);

  return <h1>Life Invader</h1>;
}

export default App;
