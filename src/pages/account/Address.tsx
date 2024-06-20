import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { authTokenState } from "../../recoil/atoms/authAtom";

const Address = () => {
  const [authState, setAuthState] = useRecoilState(authTokenState);
  console.log(authState);
  return (
    <AddressContainer>
      <h2>YOUR ADDRESSES</h2>
      <AddressWrap>
        <div>
          {Object.entries(authState?.user).map(([key, value]) => {
            return <p>{value}</p>;
          })}
          <p>{authState?.user?.username}</p>
          <p>{authState?.user?.company}</p>
        </div>
      </AddressWrap>
    </AddressContainer>
  );
};

const AddressContainer = styled.div`
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

const AddressWrap = styled.div`
  border: 1px dashed var(--color-black);
`;

export default Address;
