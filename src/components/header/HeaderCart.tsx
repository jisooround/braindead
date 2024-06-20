import styled from "@emotion/styled";
import Button from "../common/Button";
import useGetMyCart from "../../hooks/useGetMyCart";
import { formatPrice } from "../../utils/formatPrice";
import { v4 as uuid } from "uuid";
import { TfiPlus } from "react-icons/tfi";
import useDeleteCartItem from "../../hooks/useDeleteCartItem";
import { useRecoilValue } from "recoil";
import { authTokenState } from "../../recoil/atoms/authAtom";

const HeaderCart = () => {
  const { data: cartData } = useGetMyCart();
  const { mutate: deleteCartItem } = useDeleteCartItem();
  const authState = useRecoilValue(authTokenState);
  const isLoggedIn = Boolean(authState?.token);
  const totalPrice = cartData?.items.reduce((accumulator, item) => {
    return accumulator + item.product.price;
  }, 0);

  const onClickDelete = (id) => {
    deleteCartItem(id);
    console.log(id);
  };

  if (!isLoggedIn) {
    return (
      <HeaderCartEmpty>
        <Button content="You need to login" size="lg" bg="point" bgHover="black" height="30px" path="/account/login"></Button>
      </HeaderCartEmpty>
    );
  }

  if (cartData?.items.length === 0) {
    return (
      <HeaderCartEmpty>
        <p>YOUR CART IS EMPTY</p>
      </HeaderCartEmpty>
    );
  }

  return (
    <HeaderCartWrap>
      <ItemWrap>
        {cartData?.items.map((item) => {
          return (
            <ItemBox key={uuid()}>
              <ItemImageArea>
                <img src={item.product.photos[0]} alt="" />
              </ItemImageArea>
              <ItemInfoArea>
                {/* TODO: 아이템 이름 누르면 상세페이지로 이동 */}
                <p>{item.product.name}</p>
                <p>SIZE: {item.size}</p>
                <p>₩ {formatPrice(item.product.price)}</p>
              </ItemInfoArea>
              <DeleteIcon onClick={() => onClickDelete(item.product.id)} />
            </ItemBox>
          );
        })}
      </ItemWrap>
      <Button content={`CHECK OUT ${formatPrice(totalPrice)} KRW`} size="lg" bg="point" bgHover="black"></Button>
      <Button content="GO TO CART" size="lg" bg="white" height="30px"></Button>
    </HeaderCartWrap>
  );
};

const HeaderCartEmpty = styled.div`
  padding: 1rem 0.5rem 0.3rem 0.5rem;
`;
const HeaderCartWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemWrap = styled.div`
  margin: 0.9375rem 0;
  max-height: 400px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 2px; /* 스크롤바의 너비 */
  }
  /* 스크롤바 핸들 스타일 */
  ::-webkit-scrollbar-thumb {
    background: var(--color-black);
    border-radius: 4px;
  }
`;

const ItemBox = styled.div`
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: 2.5fr 4fr 1fr;
  gap: 0.5rem;
  position: relative;
  box-sizing: border-box;
  border-radius: 0.375rem;
  padding: 0.2rem 0;
`;

const ItemImageArea = styled.div`
  max-width: 65px;
  height: auto;
  margin-right: 0.3rem;
  border-radius: 0.375rem;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const ItemInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 0.875rem;
  line-height: 1.4;
  p {
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const DeleteIcon = styled(TfiPlus)`
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
  justify-self: center;
`;

export default HeaderCart;
