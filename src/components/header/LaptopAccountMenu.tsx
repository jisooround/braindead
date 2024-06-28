import styled from "@emotion/styled";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import useCreateAccount from "../../hooks/useCreateAccount";

type Props = {
  setIsOpenMenu: React.Dispatch<React.SetStateAction<number>>;
};

const LaptopAccountMenu = ({ setIsOpenMenu }: Props) => {
  const [isLogin, setIsLogin] = useState(true);
  const { mutate: login } = useLogin();
  const { mutate: createAccount } = useCreateAccount();

  const loginSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    login({ username, password });
    setIsOpenMenu(null);
  };

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

    createAccount({ username, password });
    setIsOpenMenu(null);
  };

  return (
    <>
      <AccountWrap>
        {isLogin ? (
          <>
            <AccountTitle>
              <h5>LOGIN</h5>
              <p
                onClick={() => {
                  setIsLogin(false);
                }}
              >
                REGISTER
              </p>
            </AccountTitle>
            <Form onSubmit={loginSubmitHandler}>
              <input type="text" placeholder="User Name" name="username" required />
              <input type="password" placeholder="Password" name="password" required />
              <Button content="sign in" size="lg" type="submit" bg="point" bgHover="black" />
            </Form>
          </>
        ) : (
          <>
            <AccountTitle>
              <h5>REGISTER</h5>
              <p
                onClick={() => {
                  setIsLogin(true);
                }}
              >
                LOGIN
              </p>
            </AccountTitle>
            <Form onSubmit={registerSubmitHandler}>
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
              <Button content="CREATE" size="lg" type="submit" bg="point" bgHover="black" />
            </Form>
          </>
        )}
      </AccountWrap>
    </>
  );
};

const AccountWrap = styled.div`
  width: 100%;
  margin: 20px auto;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const AccountTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 32px;
  p {
    cursor: pointer;
    color: var(--color-black);
    opacity: 0.3;
    :hover {
      opacity: 1;
    }
  }
`;

const Form = styled.form`
  width: 100%;
  div {
    width: 100%;
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
    border: 0;
    border-bottom: 1px dashed var(--color-black);
    box-sizing: border-box;
    :hover {
      border-bottom: 1px solid var(--color-black);
    }
    :focus {
      outline: none;
    }
  }
  button {
    width: 100%;
    margin-top: 1rem;
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

export default LaptopAccountMenu;
