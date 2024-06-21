import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { authTokenState } from "../../recoil/atoms/authAtom";
import Button from "../../components/common/Button";
import { useEffect, useState } from "react";

const Address = () => {
  const [authState, setAuthState] = useRecoilState(authTokenState);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [addressData, setAddressData] = useState({
    name: "",
    address_1: "",
    city: "",
    country: "",
    zipcode: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    setUserData();
  }, [authState]);

  const setUserData = () => {
    if (authState) {
      const { name, address_1, city, country, zipcode, phone, email } = authState?.user;
      setAddressData({ name, address_1, city, country, zipcode, phone, email });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData({
      ...addressData,
      [name]: value,
    });
  };

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
        {isEdit && (
          <EditWrap>
            <h5>EDIT ADDRESS</h5>
            <form action="">
              <input type="text" placeholder="Name" name="name" value={addressData.name} onChange={(event) => handleChange(event)} />
              <input type="text" placeholder="Address" name="address_1" value={addressData.address_1} onChange={(event) => handleChange(event)} />
              <input type="text" placeholder="City" name="city" value={addressData.city} onChange={(event) => handleChange(event)} />
              <input type="text" placeholder="Country" name="country" value={addressData.country} onChange={(event) => handleChange(event)} />
              <input type="text" placeholder="Zipcode" name="zipcode" value={addressData.zipcode} onChange={(event) => handleChange(event)} />
              <input type="text" placeholder="Phone" name="phone" value={addressData.phone} onChange={(event) => handleChange(event)} />
              <input type="text" placeholder="Email" name="email" value={addressData.email} onChange={(event) => handleChange(event)} />
            </form>
            <EditButtonArea>
              <Button content="Update Address" bg="point" bgHover="black" size="lg" />
              <Button
                content="cancel"
                bg="black"
                bgHover="point"
                size="lg"
                onClick={() => {
                  setIsEdit(false);
                }}
              />
            </EditButtonArea>
          </EditWrap>
        )}
        {!isEdit && (
          <ButtonWrap>
            <Button
              content="EDIT"
              size="lg"
              bg="lightgray"
              bgHover="point"
              onClick={() => {
                setIsEdit(true);
              }}
            />
          </ButtonWrap>
        )}
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
  /* height: ${({ isEdit }) => (isEdit ? "500px" : "auto")}; */
  height: auto;
  p {
    margin: 4px 0;
  }
`;

const EditWrap = styled.div`
  box-sizing: border-box;
  h5 {
    padding: 0 16px;
    font-size: 14px;
    margin-bottom: 16px;
  }
  input[type="text"] {
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
`;

const EditButtonArea = styled.div`
  display: flex;
  margin-top: 16px;
`;

const ButtonWrap = styled.div``;
export default Address;
