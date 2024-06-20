import styled from "@emotion/styled";
import useCreateAccount from "../../hooks/useCreateAccount";
import { Link } from "react-router-dom";

const HeaderRegister = () => {
  const { mutate: createAccount } = useCreateAccount();

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
  };
  return (
    <HeaderRegisterWrap>
      <RegisterForm onSubmit={registerSubmitHandler}>
        <input type="text" placeholder="User Name" name="username" required />
        <input type="password" placeholder="Password" name="password" required />
        <input type="password" placeholder="Confirm Password" name="confirmPassword" required />
        <CheckWrap>
          <div>
            <input required type="checkbox" id="agree_first" />
            <label htmlFor="agree_first">
              I accept the{" "}
              <Link to="/pages/privacy-policy" target="blank">
                T&C
              </Link>{" "}
              and{" "}
              <Link to="/pages/privacy-policy" target="blank">
                PP
              </Link>
            </label>
          </div>
          <div>
            <input required type="checkbox" id="agree_second" />
            <label htmlFor="agree_second">Subscribe to email marketing</label>
          </div>
        </CheckWrap>
        <button type="submit">CREATE</button>
      </RegisterForm>
    </HeaderRegisterWrap>
  );
};

const HeaderRegisterWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const RegisterForm = styled.form`
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

const CheckWrap = styled.div`
  flex-wrap: wrap;
  margin: 5px 0 10px;
  box-sizing: border-box;
  width: 100%;
  input[type="checkbox"] {
    padding-right: 10px;
  }
  label {
    font-size: 12px;
    a {
      border-bottom: 1px solid var(--color-black);
    }
  }
`;

export default HeaderRegister;
