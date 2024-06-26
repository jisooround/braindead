import styled from "@emotion/styled";
import useGetOrderHistory from "../../hooks/useGetOrderHistory";
import { useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import Button from "../../components/common/Button";

const Orders = () => {
  const { isPending, error, data: orderHistory } = useGetOrderHistory();
  const [isOpen, setIsOpen] = useState<number>(null);

  if (isPending) return <p>Loading...</p>;
  return (
    <OrdersContainer>
      <h2>YOUR ORDER HISTORY</h2>
      {orderHistory.orders.map((order) => {
        return (
          <OrderBox>
            <OrderWrap>
              <div>
                <p>ORDER ID</p>
                <span>{order.id}</span>
              </div>
              <div>
                <p>TOTAL PRICE</p>
                <span>₩ {formatPrice(order.total_price)}</span>
              </div>
              <div>
                <p>MEMO</p>
                <span>{order.memo}</span>
              </div>
            </OrderWrap>
            {isOpen === order.id && (
              <OrderDetailWrap>
                {order.items.map((item) => {
                  return (
                    <OrderProductWrap key={item.product.name}>
                      <ImageArea>
                        <img src={item.product.photos[0]} alt="" />
                      </ImageArea>
                      <InfoArea>
                        <p>{item.product.name}</p>
                        <p>SIZE: {item.size}</p>
                        <p>QUANTITY: {item.quantity}</p>
                        <p>PRICE: {item.product.price}</p>
                      </InfoArea>
                    </OrderProductWrap>
                  );
                })}
              </OrderDetailWrap>
            )}
            {isOpen === order.id && (
              <Button
                content="close"
                size="sm"
                bg="point"
                bgHover="black"
                onClick={() => {
                  setIsOpen(null);
                }}
              />
            )}
            {isOpen !== order.id && (
              <Button
                content="view"
                size="sm"
                bg="point"
                bgHover="black"
                onClick={() => {
                  setIsOpen(order.id);
                }}
              />
            )}
          </OrderBox>
        );
      })}
    </OrdersContainer>
  );
};

const OrdersContainer = styled.div`
  max-width: 460px;
  height: auto;
  margin: 158px auto;
  h2 {
    width: auto;
    font-size: 22px;
    text-align: center;
    margin: auto;
    margin-bottom: 32px;
    text-transform: uppercase;
  }
`;

const OrderBox = styled.div`
  width: 100%;
  border: 1px dashed var(--color-black);
  border-radius: 0.375rem;
  padding: 16px;
  margin-bottom: 16px;
  button {
    width: 100%;
    margin: 0.5rem 0 0 0;
  }
`;

const OrderWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    span {
      font-weight: 400;
    }
  }
`;
const OrderDetailWrap = styled.div`
  width: 100%;
  border-top: 1px dashed var(--color-black);
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const OrderProductWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 8fr;
  background-color: var(--color-lightgray);
  padding: 0.5rem;
  box-sizing: border-box;
  border-radius: 0.375rem;
`;

const ImageArea = styled.div`
  width: 100%;
  object-fit: contain;
  border-radius: 0.375rem;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
  padding: 0.5rem;
  font-size: 14px;
  gap: 0.5rem;
`;

export default Orders;
