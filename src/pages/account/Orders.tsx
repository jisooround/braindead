import styled from "@emotion/styled";
import useGetOrderHistory from "../../hooks/useGetOrderHistory";

const Orders = () => {
  const { isPending, error, data: orderHistory } = useGetOrderHistory();

  if (isPending) return <p>Loading...</p>;
  return (
    <OrdersContainer>
      {orderHistory.orders.map((order) => {
        return (
          <div>
            <p>total price : {order.total_price}</p>
            <p>order id : {order.id}</p>
            <p>order item</p>
            {order.items.map((item) => {
              return (
                <div>
                  <p>item quantity : {item.quantity}</p>
                  {/* {item.product.map((product) => {
                    return (
                      // <div>
                      //   <p>product name : {product.name}</p>
                      // </div>
                    );
                  })} */}
                </div>
              );
            })}
          </div>
        );
      })}
    </OrdersContainer>
  );
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
