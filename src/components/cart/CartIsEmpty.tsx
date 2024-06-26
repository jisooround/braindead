import styled from "@emotion/styled";
import Button from "../common/Button";
import CartRecommendItem from "./CartRecommendItem";

const CartIsEmpty = () => {
  return (
    <EmptyContainer>
      <CartRecommendItem />
      <h2>YOUR CART IS EMPTY.</h2>
      <Button content="CONTINUE SHOPPING" size="sm" bg="point" bgHover="black" path="/collections/all-products" />
    </EmptyContainer>
  );
};

const EmptyContainer = styled.div`
  width: 50%;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
  h2 {
    width: 100%;
    font-size: 54px;
    margin-bottom: 16px;
  }
`;

export default CartIsEmpty;
