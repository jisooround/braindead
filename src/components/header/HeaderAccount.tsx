import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";
import { authTokenState } from "../../recoil/atoms/authAtom";
import { Link } from "react-router-dom";

const HeaderAccount = () => {
  const setAuthState = useSetRecoilState(authTokenState);

  return (
    <HeaderAccountWrap>
      <ul>
        <li>
          <Link to="/account/address">Address</Link>
        </li>
        <li>
          <Link to="/account/orders">Orders</Link>
        </li>
        <li>
          <Link to="/pages/contact">Help?</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          setAuthState(null);
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
