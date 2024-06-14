import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { authTokenState } from "../../recoil/atoms/authAtom";
import { css } from "@emotion/react";
type Props = {};

const HeaderAccount = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(authTokenState);

  return (
    <HeaderAccountWrap>
      <ul>
        <li>Addresses (1)</li>
        <li>Orders (0)</li>
        <li>Help?</li>
      </ul>
      <button
        onClick={() => {
          setIsLoggedIn(null);
        }}
        type="submit"
      >
        LOG OUT
      </button>
    </HeaderAccountWrap>
  );
};

const HeaderAccountWrap = styled.div`
  padding: 4px 0;
  ul {
    padding: 16px 12px;
    font-size: 14px;
    line-height: 1.25rem;
    cursor: pointer;
    li:hover {
      color: var(--color-gray);
      transition: 0.2s;
    }
  }
  button {
    width: 100%;
    box-sizing: border-box;
    padding: 0 1.125rem;
    border-radius: 0.375rem;
    height: 65px;
    border: 1px solid var(--color-white);
    background-color: var(--color-white);
    color: var(--color-black);
    cursor: pointer;
    :hover {
      background-color: var(--color-point);
      border: 1px solid var(--color-point);
      color: var(--color-black);
    }
  }
`;

export default HeaderAccount;
