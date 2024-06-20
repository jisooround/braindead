import styled from "@emotion/styled";

const Address = () => {
  return <AddressContainer>Address</AddressContainer>;
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

export default Address;
