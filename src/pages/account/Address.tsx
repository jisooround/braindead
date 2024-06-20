import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { authTokenState } from "../../recoil/atoms/authAtom";
import Button from "../../components/common/Button";
import { useState } from "react";

const Address = () => {
  const [authState, setAuthState] = useRecoilState(authTokenState);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  console.log(authState);
  return (
    <AddressContainer isEdit={isEdit}>
      <h2>YOUR ADDRESSES</h2>
      <AddressArea>
        <InfoWrap isEdit={isEdit}>
          <p>YOUR INFORMATION</p>
          {Object.entries(authState?.user).map(([key, value]) => {
            return <p>{value}</p>;
          })}
          {/* <p>{authState?.user?.username}</p>
          <p>{authState?.user?.company}</p> */}
        </InfoWrap>
        <ButtonWrap>
          <Button
            onClick={() => {
              setIsEdit((prev) => !prev);
            }}
            content="EDIT"
            size="lg"
            bg="lightgray"
            bgHover="point"
          />
        </ButtonWrap>
      </AddressArea>
    </AddressContainer>
  );
};

const AddressContainer = styled.div<{ isEdit: boolean }>`
  max-width: 460px;
  height: ${({ isEdit }) => (isEdit ? "auto" : "calc(100vh - 158px)")};
  margin: ${({ isEdit }) => (isEdit ? "158px auto" : "158px auto 0;")};
  h2 {
    width: auto;
    font-size: 22px;
    text-align: center;
    margin: auto;
    margin-bottom: 32px;
    text-transform: uppercase;
  }
`;

const AddressArea = styled.div`
  border: 1px dashed var(--color-black);
  border-radius: 0.375rem;
  padding: 16px 8px 8px;
  box-sizing: border-box;
`;

const InfoWrap = styled.div<{ isEdit: boolean }>`
  padding: 16px;
  font-size: 14px;
  /* height: 500px; */
  height: ${({ isEdit }) => (isEdit ? "500px" : "auto")};
  p {
    margin: 4px 0;
  }
`;

const ButtonWrap = styled.div``;
export default Address;
