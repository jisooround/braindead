import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { authTokenState } from "../../recoil/atoms/authAtom";
import Button from "../../components/common/Button";
import { useEffect, useState } from "react";
import useGetUserMe from "../../hooks/useGetUserMe";
import useEditUserMe from "../../hooks/useEditUserMe";
import { EditUser } from "../../types/user";
import SkeletonAddress from "../../components/account/SkeletonAddress";

const Address = () => {
  const [authState, setAuthState] = useRecoilState(authTokenState);
  const isLoggedIn = Boolean(authState?.token);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { isPending, error, data: userAddressData } = useGetUserMe();
  const { mutate: editUserMe } = useEditUserMe();
  const [addressData, setAddressData] = useState<EditUser>({
    name: "",
    address_1: "",
    city: "",
    country: "",
    zipcode: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (!isPending && userAddressData) {
      setUserData();
    }
  }, [authState, userAddressData]);

  const setUserData = () => {
    if (isLoggedIn && !isPending && userAddressData) {
      const { name, address_1, city, country, zipcode, phone, email } = userAddressData;
      setAddressData({ name: name, address_1: address_1, city: city, country: country, zipcode: zipcode, phone: phone, email: email });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData({
      ...addressData,
      [name]: value,
    });
  };

  const handleEditButton = () => {
    editUserMe(addressData);
    setIsEdit(false);
    window.scrollTo(0, 0);
  };

  // if (isPending) return <p>Loading...</p>;
  return (
    <AddressContainer isEdit={isEdit}>
      <h2>YOUR ADDRESS</h2>
      <AddressArea>
        {isPending && <SkeletonAddress />}
        {!isPending && (
          <InfoWrap isEdit={isEdit}>
            <h5>YOUR ADDRESS</h5>
            <div>
              <p>Name :</p>
              <p>{userAddressData?.name}</p>
            </div>
            <div>
              <p>Address :</p>
              <p>{userAddressData?.address_1}</p>
            </div>
            <div>
              <p>City :</p>
              <p>{userAddressData?.city}</p>
            </div>
            <div>
              <p>Country :</p>
              <p>{userAddressData?.country}</p>
            </div>
            <div>
              <p>Email :</p>
              <p>{userAddressData?.email}</p>
            </div>
            <div>
              <p>Phone :</p>
              <p>{userAddressData?.phone}</p>
            </div>
            <div>
              <p>Zipcode :</p>
              <p>{userAddressData?.zipcode}</p>
            </div>
          </InfoWrap>
        )}
        {isEdit && (
          <EditWrap>
            <h5>EDIT ADDRESS</h5>
            <form action="">
              <input type="text" placeholder="Name" name="name" value={addressData?.name} onChange={(event) => handleChange(event)} />
              <input type="text" placeholder="Address" name="address_1" value={addressData?.address_1} onChange={(event) => handleChange(event)} />
              <input type="text" placeholder="City" name="city" value={addressData?.city} onChange={(event) => handleChange(event)} />
              <input type="text" placeholder="Country" name="country" value={addressData?.country} onChange={(event) => handleChange(event)} />
              <input type="text" placeholder="Zipcode" name="zipcode" value={addressData?.zipcode} onChange={(event) => handleChange(event)} />
              <input type="text" placeholder="Phone" name="phone" value={addressData?.phone} onChange={(event) => handleChange(event)} />
              <input type="text" placeholder="Email" name="email" value={addressData?.email} onChange={(event) => handleChange(event)} />
            </form>
            <EditButtonArea>
              <Button content="Update Address" bg="point" bgHover="black" size="lg" onClick={handleEditButton} />
              <Button
                content="cancel"
                bg="black"
                bgHover="point"
                size="lg"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsEdit(false);
                }}
              />
            </EditButtonArea>
          </EditWrap>
        )}
        {!isEdit && (
          <ButtonWrap>
            <Button
              disabled={isPending}
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
  h5 {
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 16px;
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
  height: auto;
  p {
    margin: 4px 0;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;

const EditWrap = styled.div`
  box-sizing: border-box;
  h5 {
    padding: 0 16px;
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
