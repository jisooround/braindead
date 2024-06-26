import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { mutate: login } = useLogin();

  const loginSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    login({ username, password });
  };
  return (
    <LoginContainer>
      <LoginWrap>
        <LoginTitle>
          <h2>WELCOME BACK</h2>
          <Link to="/account/register">REGISTER</Link>
        </LoginTitle>
        <LoginForm onSubmit={loginSubmitHandler}>
          <input type="text" placeholder="User Name" name="username" required />
          <input type="password" placeholder="Password" name="password" required />
          <button type="submit">SIGN IN</button>
        </LoginForm>
      </LoginWrap>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const LoginWrap = styled.div`
  width: 458px;
  margin: 158px auto;
  padding: 0 1rem;
`;

const LoginTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  margin-bottom: 32px;
  a {
    color: var(--color-black);
    opacity: 0.3;
    :hover {
      opacity: 1;
    }
  }
`;

const LoginForm = styled.form`
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  input[type="text"],
  input[type="password"] {
    width: 100%;
    min-height: 65px;
    padding: 0 20px;
    margin-bottom: 0.5rem;
    background-color: transparent;
    border: 1px dashed var(--color-black);
    box-sizing: border-box;
    border-radius: 0.375rem;
    :hover {
      border: 1px solid var(--color-black);
    }
    :focus {
      outline: none;
    }
  }
  button {
    width: 100%;
    padding: 0 1.125rem;
    border-radius: 0.375rem;
    height: 65px;
    border: 1px solid var(--color-black);
    background-color: var(--color-black);
    color: var(--color-white);
    cursor: pointer;
    :hover {
      background-color: var(--color-point);
      border: 1px solid var(--color-point);
      color: var(--color-black);
    }
  }
`;

export default Login;
