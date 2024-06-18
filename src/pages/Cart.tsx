import styled from "@emotion/styled";
import { TfiPlus } from "react-icons/tfi";
import Button from "../components/common/Button";
import { useRecoilValue } from "recoil";
import { authTokenState } from "../recoil/atoms/authAtom";
import useGetMyCart from "../hooks/useGetMyCart";
import { formatPrice } from "../utils/formatPrice";
import useDeleteCartItem from "../hooks/useDeleteCartItem";

interface IDirection {
  direction: "row" | "column";
}

const Cart = () => {
  const authToken = useRecoilValue(authTokenState);
  const isLoggedIn = authToken !== null && Boolean(authToken.token);
  const { isPending, error, data: cartData } = useGetMyCart(isLoggedIn);
  const { mutate: deleteCartItem } = useDeleteCartItem();

  console.log(cartData);

  const totalPrice = cartData?.items.reduce((accumulator, item) => {
    return accumulator + item.product.price;
  }, 0);

  const onClickDelete = (id) => {
    deleteCartItem(id);
    console.log(id);
  };

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (error) {
  }

  if (!cartData || !cartData.items) {
    return <div>No items in cart.</div>;
  }

  return (
    <CartContainer>
      <h2>YOUR CART</h2>
      <TitleWrap>
        <div>PRODUCT</div>
        <div>REMOVE</div>
      </TitleWrap>
      <div>
        {cartData?.items.map((item, index) => {
          return (
            <ItemBox key={index}>
              <ItemImageArea>
                <img src={item.product.photos[0]} alt="" />
              </ItemImageArea>
              <ItemInfoArea>
                <div>
                  <p>{item.product.name}</p>
                  <p>SIZE: {item.size}</p>
                </div>
                <p>₩ {formatPrice(item.product.price)}</p>
              </ItemInfoArea>
              <DeleteIcon onClick={() => onClickDelete(item.product.id)} />
            </ItemBox>
          );
        })}
      </div>
      <div>
        <BasicBox direction="row">
          <p>SUMMARY</p>
          <p className="item-count">{cartData?.items.length}</p>
        </BasicBox>
        <BasicBox direction="column">
          <p>SUBTOTAL</p>
          <p className="subTotal-description">Taxes & shipping calculated at checkout</p>
        </BasicBox>
        <BasicBox direction="row">
          <p>Add Note</p>
        </BasicBox>
      </div>
      <ButtonWrap>
        <Button content={`check out ${formatPrice(totalPrice)} `} size="lg" bg="point" bgHover="black" colorHover="white" />
        <Button content="CONTINUE SHOPPING" size="lg" bg="lightgray" bgHover="point" />
      </ButtonWrap>
    </CartContainer>
  );
};
const CartContainer = styled.div`
  max-width: 460px;
  height: 100vh;
  margin: 158px auto;
  h2 {
    width: auto;
    font-size: 22px;
    text-align: center;
    margin: auto;
    margin-bottom: 16px;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  padding: 16px 20px 0;
`;

const ItemBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  padding: 1.25rem;
  border: 1px dashed var(--color-black);
  box-sizing: border-box;
  border-radius: 0.375rem;
  margin-bottom: 8px;
  p {
    font-size: 14px;
    line-height: 1.2rem;
  }
`;

const ItemImageArea = styled.div`
  max-width: 65px;
  height: auto;
  margin-right: 0.75rem;
  img {
    width: 100%;
  }
`;

const ItemInfoArea = styled.div`
  max-width: 285px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DeleteIcon = styled(TfiPlus)`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: var(--color-lightgray);
  padding: 3px;
  border-radius: 50px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const BasicBox = styled.div<IDirection>`
  display: flex;
  position: relative;
  flex-direction: ${({ direction }) => (direction === "row" ? "row" : "column")};
  justify-content: ${({ direction }) => (direction === "row" ? "space-between" : "")};
  align-items: ${({ direction }) => (direction === "row" ? "center" : "flex-start")};
  padding: 1.25rem;
  border: 1px dashed var(--color-black);
  box-sizing: border-box;
  border-radius: 0.375rem;
  margin-bottom: 8px;
  font-size: 14px;
  .item-count {
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding: 5px;
    box-sizing: border-box;
    background-color: var(--color-point);
    font-size: 14px;
  }
  .subTotal-description {
    font-size: 12px;
    margin-top: 8px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 0.5rem;
`;

export default Cart;
