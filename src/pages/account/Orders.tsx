import styled from "@emotion/styled";

const Orders = () => {
  return <OrdersContainer>Orders</OrdersContainer>;
};

const OrdersContainer = styled.div`
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

export default Orders;
