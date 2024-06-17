import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { TfiPlus } from "react-icons/tfi";
import Button from "../components/common/Button";
import { useRecoilValue } from "recoil";
import { authTokenState } from "../recoil/atoms/authAtom";
import useGetMyCart from "../hooks/useGetMyCart";
import { useEffect } from "react";

interface IProduct {
  productName: string;
  price: number;
  size: string;
  desc: string;
  img_src: string;
}

interface IDirection {
  direction: "row" | "column";
}

const cartItemList: IProduct[] = [
  {
    productName: "Worm Food T-shirt - Cement",
    price: 14000,
    size: "M",
    desc: "",
    img_src: "/public/cart/Worm_Food_T-shirt_Cement_Front_optimized.webp",
  },
  {
    productName: "Logo Striped Quarter Sock - Orange",
    price: 56000,
    size: "OS",
    desc: "",
    img_src: "/public/cart/Logo_Striped_Quarter_Sock_Orange_Front_optimized.webp",
  },
  {
    productName: "BRAIN DEAD EQUIPMENT ALPINE BACKPACK - CLEAR BLUE",
    price: 245000,
    size: "OS",
    desc: "",
    img_src: "/public/cart/Brain_Dead_Equipment_Alpine_Backpack_Clear_Blue_Front_optimized.webp",
  },
];

const Cart = () => {
  const authToken = useRecoilValue(authTokenState);
  const isLoggedIn = authToken !== null && Boolean(authToken.token);
  const { isPending, error, data } = useGetMyCart(isLoggedIn);

  console.log(data);

  const totalPrice = cartItemList.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);
  return (
    <CartContainer>
      <h2>YOUR CART</h2>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin: 8px 0;
          padding: 16px 20px 0;
        `}
      >
        <div>PRODUCT</div>
        <div>REMOVE</div>
      </div>
      <ItemList>
        {cartItemList.map((item, index) => {
          return (
            <ItemBox key={index}>
              <div
                css={css`
                  max-width: 65px;
                  height: auto;
                  margin-right: 0.75rem;
                `}
              >
                <img
                  css={css`
                    width: 100%;
                  `}
                  src={item.img_src}
                  alt=""
                />
              </div>
              <div
                css={css`
                  max-width: 285px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                `}
              >
                <div>
                  <p>{item.productName}</p>
                  <p>SIZE: {item.size}</p>
                </div>
                <p>₩ {item.price}</p>
              </div>
              <TfiPlus
                css={css`
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
                `}
              />
            </ItemBox>
          );
        })}
      </ItemList>
      <CartInfo>
        <BasicBox direction="row">
          <p>SUMMARY</p>
          <p
            css={css`
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
            `}
          >
            {cartItemList.length}
          </p>
        </BasicBox>
        <BasicBox direction="column">
          <p>SUBTOTAL</p>
          <p
            css={css`
              font-size: 12px;
              margin-top: 8px;
            `}
          >
            Taxes & shipping calculated at checkout
          </p>
        </BasicBox>
        <BasicBox direction="row">
          <p>Add Note</p>
        </BasicBox>
      </CartInfo>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          margin-top: 24px;
          gap: 0.5rem;
        `}
      >
        <Button content={`check out ${totalPrice}`} size="lg" bg="point" bgHover="black" colorHover="white" />
        <Button content="CONTINUE SHOPPING" size="lg" bg="lightgray" bgHover="point" />
      </div>
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

const ItemList = styled.div``;

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
`;

const CartInfo = styled.div``;

export default Cart;
