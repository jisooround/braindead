import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";
import { authTokenState } from "../../recoil/atoms/authAtom";
import { Link } from "react-router-dom";
import Button from "../common/Button";

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
      <Button
        size="lg"
        bg="white"
        bgHover="point"
        content="LOG OUT"
        onClick={() => {
          setAuthState(null);
        }}
        type="submit"
      ></Button>
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
    margin: 0;
  }
`;

export default HeaderAccount;
