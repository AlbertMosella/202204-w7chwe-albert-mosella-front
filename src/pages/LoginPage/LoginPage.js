import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPageContainer = styled.div`
  margin-top: 100px;
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginForm />
    </LoginPageContainer>
  );
};

export default LoginPage;
