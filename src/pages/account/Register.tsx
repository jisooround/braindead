import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Register = () => {
  const loginSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // FormData를 이용해서 로그인 시도
    const formData = new FormData(event.currentTarget);
    console.log(formData);
    console.log("username", formData.get("username"));
    console.log("password", formData.get("password"));
  };
  return (
    <RegisterContainer>
      <RegisterWrap>
        <RegisterTitle>
          <h2>JOIN THE COMMUNITY</h2>
          <Link to="/account/login">LOGIN</Link>
        </RegisterTitle>
        <RegisterForm onSubmit={loginSubmitHandler}>
          <input type="text" placeholder="User Name" name="username" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" name="password" required />
          <CheckWrap>
            <div>
              <input required type="checkbox" id="agree" />
              <label htmlFor="agree">
                I agree to the{" "}
                <Link to="/pages/privacy-policy" target="blank">
                  Terms of Service
                </Link>
                and
                <Link to="/pages/privacy-policy" target="blank">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <div>
              <input required type="checkbox" id="agree" />
              <label htmlFor="agree">Sign up for emails on products, events, and goings-on in the Brain Dead universe.</label>
            </div>
          </CheckWrap>
          <button type="submit">CREATE</button>
        </RegisterForm>
      </RegisterWrap>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const RegisterWrap = styled.div`
  width: 458px;
  margin: 158px auto;
  padding: 0 1rem;
`;

const RegisterTitle = styled.div`
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

const RegisterForm = styled.form`
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

const CheckWrap = styled.div`
  flex-wrap: wrap;
  margin: 24px 0;
  input[type="checkbox"] {
  }
  label {
    font-size: 12px;
    a {
      border-bottom: 1px solid var(--color-black);
    }
  }
`;
export default Register;
