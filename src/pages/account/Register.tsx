import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authTokenState } from "../../recoil/atoms/authAtom";
import { useCreateAccount } from "../../hooks/useAuth";
import { AuthenticationResponse } from "../../types/user";

const Register = () => {
  const navigate = useNavigate();
  const setAuthTokenData = useSetRecoilState(authTokenState);
  const createAccountMutation = useCreateAccount();

  const registerSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const isMatched = formData.get("password") === formData.get("confirmPassword");

    if (!isMatched) {
      alert("비밀번호와 비밀번호확인이 일치하지 않습니다.");
      return;
    }

    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (typeof username !== "string" || typeof password !== "string") {
      alert("Invalid input");
      return;
    }

    createAccountMutation.mutate(
      { username, password },
      {
        onSuccess: (response: AuthenticationResponse) => {
          setAuthTokenData(response);
          if (response) {
            navigate("/");
          }
        },
        onError: () => {
          alert("회원가입에 실패했습니다.");
        },
      },
    );
  };

  return (
    <RegisterContainer>
      <RegisterWrap>
        <RegisterTitle>
          <h2>JOIN THE COMMUNITY</h2>
          <Link to="/account/login">LOGIN</Link>
        </RegisterTitle>
        <RegisterForm onSubmit={registerSubmitHandler}>
          <input type="text" placeholder="User Name" name="username" required />
          <input type="password" placeholder="Password" name="password" required />
          <input type="password" placeholder="Confirm Password" name="confirmPassword" required />
          <CheckWrap>
            <div>
              <input required type="checkbox" id="agree_first" />
              <label htmlFor="agree_first">
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
              <input required type="checkbox" id="agree_second" />
              <label htmlFor="agree_second">Sign up for emails on products, events, and goings-on in the Brain Dead universe.</label>
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
