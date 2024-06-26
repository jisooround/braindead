import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { authTokenState } from "../../recoil/atoms/authAtom";
import Button from "../../components/common/Button";

const Account = () => {
  const authState = useRecoilValue(authTokenState);
  return (
    <AccountContainer>
      <h2>HI, {authState?.user?.username}, WELCOME BACK</h2>
      <ButtonWrap>
        <Button content="view address" size="lg" bg="point" bgHover="black" path="/account/address" />
        <Button content="order history" size="lg" bg="point" bgHover="black" path="/account/orders" />
        <Button content="my point" size="lg" bg="point" bgHover="black" path="/account/point" />
      </ButtonWrap>
      <ContactWrap>
        <h2>NEED HELP?</h2>
        <p>
          Contact us at <a href="mailto:service@wearebraindead.com">service@wearebraindead.com</a>
        </p>
      </ContactWrap>
    </AccountContainer>
  );
};

const AccountContainer = styled.div`
  max-width: 460px;
  height: calc(100vh - 158px);
  margin: 158px auto 0;
  h2 {
    width: auto;
    font-size: 22px;
    text-align: center;
    margin: auto;
    margin-bottom: 32px;
    text-transform: uppercase;
  }
`;

const ButtonWrap = styled.div`
  button {
    margin: 0 0 8px 0;
  }
`;

const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  h2 {
    margin-bottom: 8px;
  }
`;

export default Account;
