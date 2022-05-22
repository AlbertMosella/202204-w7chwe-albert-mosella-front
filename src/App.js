import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UsersPage from "./pages/UsersPage/UsersPage";

import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Life Invader</h1>
      <h2>Welcome to the end of your privacy</h2>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </>
  );
}

export default App;
