import styled from "@emotion/styled";
import useLogin from "../../hooks/useLogin";

const HeaderLogin = () => {
  const { mutate: login } = useLogin();

  const loginSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    login({ username, password });
  };

  return (
    <HeaderLoginWrap>
      <h4>WELCOME BACK</h4>
      <LoginForm onSubmit={loginSubmitHandler}>
        <input type="text" placeholder="User Name" name="username" required />
        <input type="password" placeholder="Password" name="password" required />
        <button type="submit">SIGN IN</button>
      </LoginForm>
    </HeaderLoginWrap>
  );
};

const HeaderLoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    padding: 20px 10px;
    box-sizing: border-box;
  }
`;

const LoginForm = styled.form`
  display: flex;
  max-width: inherit;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  input[type="text"],
  input[type="password"] {
    width: 100%;
    min-height: 65px;
    padding: 0 10px;
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
    box-sizing: border-box;
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
export default HeaderLogin;
