import styled from "@emotion/styled";
import { TfiPlus } from "react-icons/tfi";
import { IoMdArrowDropright } from "react-icons/io";
import Button from "../components/common/Button";
import useGetMyCart from "../hooks/useGetMyCart";
import { formatPrice } from "../utils/formatPrice";
import useDeleteCartItem from "../hooks/useDeleteCartItem";
import CartIsEmpty from "../components/cart/CartIsEmpty";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import usePatchCartItem from "../hooks/usePatchCartItem";
import { HiOutlineMinus, HiPlus } from "react-icons/hi2";
import useCheckout from "../hooks/useCheckout";
import CartRecommendItem from "../components/cart/CartRecommendItem";
import { keyframes } from "@emotion/react";
import SkeletonCart from "../components/cart/SkeletonCart";

interface StyleProps {
  direction?: "row" | "column";
  isNoteOpen?: boolean;
}

const Cart = () => {
  const [isNoteOpen, setIsNoteOpen] = useState<boolean>(false);
  const [noteValue, setNoteValue] = useState("");
  const { isPending, error, data: cartData } = useGetMyCart();
  const debouncedText = useDebounce(noteValue, 500);
  const { mutate: deleteCartItem } = useDeleteCartItem();
  const { mutate: patchCartData } = usePatchCartItem();
  const { mutate: checkoutMutate } = useCheckout();

  useEffect(() => {
    patchCartData({ memo: debouncedText });
  }, [debouncedText]);

  useEffect(() => {
    if (cartData?.memo) {
      setNoteValue(cartData.memo);
    }
  }, [isNoteOpen]);

  if (error) {
    console.error(error);
  }
  if (cartData?.items.length === 0) {
    return (
      <>
        <CartIsEmpty />
      </>
    );
  }

  const totalPrice = cartData?.items.reduce((accumulator, item) => {
    return accumulator + item.product.price * item.quantity;
  }, 0);

  const onClickDelete = (id) => {
    deleteCartItem(id);
    console.log(id);
  };

  const onClickNote = () => {
    setIsNoteOpen((prev) => !prev);
  };

  const onClickCheckout = () => {
    checkoutMutate();
  };

  return (
    <CartContainer>
      <CartRecommendItem />
      <CartWrap>
        <h2>YOUR CART</h2>
        <TitleWrap>
          <div>PRODUCT</div>
          <div>REMOVE</div>
        </TitleWrap>
        {isPending ? (
          <SkeletonCart />
        ) : (
          <>
            <div>
              {cartData?.items.map((item, index) => {
                return (
                  <ItemBox key={index}>
                    <ItemImageArea>
                      <img src={item.product.photos[0]} alt="" />
                    </ItemImageArea>
                    <ItemInfoArea>
                      <div>
                        {/* TODO: 아이템 이름 누르면 상세페이지로 이동 */}
                        <p>{item.product.name}</p>
                        <p>SIZE: {item.size}</p>
                      </div>
                      <p>₩ {formatPrice(item.product.price * item.quantity)}</p>
                    </ItemInfoArea>
                    <DeleteIcon onClick={() => onClickDelete(item.product.id)} />
                    <QuantityArea>
                      <Icon>
                        <HiOutlineMinus
                          onClick={() => {
                            if (item.quantity === 1) return;
                            patchCartData({ product_id: item.product.id, quantity: item.quantity - 1, size: item.size });
                          }}
                        />
                      </Icon>
                      <p>{item.quantity}</p>
                      <Icon>
                        <HiPlus
                          onClick={() => {
                            patchCartData({ product_id: item.product.id, quantity: item.quantity + 1, size: item.size });
                          }}
                        />
                      </Icon>
                    </QuantityArea>
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
              <NoteBox isNoteOpen={isNoteOpen}>
                <p onClick={onClickNote}>
                  <ArrowIcon isNoteOpen={isNoteOpen} />
                  Add Note
                </p>
                {isNoteOpen && (
                  <textarea
                    name=""
                    id=""
                    value={noteValue}
                    onChange={(e) => {
                      setNoteValue(e.target.value);
                    }}
                  />
                )}
              </NoteBox>
            </div>
            <ButtonWrap>
              <Button
                content={`check out ${formatPrice(totalPrice)} KRW`}
                size="lg"
                bg="point"
                bgHover="black"
                colorHover="white"
                onClick={() => {
                  onClickCheckout();
                }}
              />
              <Button content="CONTINUE SHOPPING" size="lg" bg="lightgray" bgHover="point" />
            </ButtonWrap>
          </>
        )}
      </CartWrap>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`;

const CartWrap = styled.div`
  max-width: 460px;
  /* min-height: calc(100vh - 158px); */
  margin: 158px auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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

const QuantityArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 15px;
  right: 15px;
  background-color: var(--color-lightgray);
  padding: 0.3rem 0.5rem;
  border-radius: 0.375rem;
  box-sizing: border-box;
  p {
    font-size: 13px;
  }
`;

const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  cursor: pointer;
  font-size: 13px;
  svg {
    margin: 0.25rem;
  }
  :hover {
    background-color: var(--color-point);
  }
`;

const BasicBox = styled.div<StyleProps>`
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

const NoteBox = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  align-content: center;
  position: relative;
  border: 1px dashed var(--color-black);
  box-sizing: border-box;
  border-radius: 0.375rem;
  font-size: 14px;
  height: auto;
  overflow: hidden;
  padding-bottom: ${({ isNoteOpen }) => (isNoteOpen ? "1rem" : "0")};
  :hover {
    border: 1px solid var(--color-black);
  }
  p {
    margin-bottom: ${({ isNoteOpen }) => (isNoteOpen ? "0.5rem" : "0")};
    width: 100%;
    cursor: pointer;
    padding: 1.25rem;
    display: flex;
    align-content: center;
    gap: 0.3rem;
  }
  textarea {
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    padding: 0.5rem;
    display: ${({ isNoteOpen }) => (isNoteOpen ? "block" : "none")};
    border: transparent;
    padding: 0 1.25rem;
    resize: none;
    :focus {
      outline: none;
    }
  }
`;

const ArrowIcon = styled(IoMdArrowDropright)<StyleProps>`
  transform: ${({ isNoteOpen }) => (isNoteOpen ? "rotate(90deg)" : "0")};
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 0.5rem;
`;

export default Cart;
