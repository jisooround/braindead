import styled from "@emotion/styled";
import useAddCartItem from "../../hooks/useAddCartItem";
import useGetRecommended from "../../hooks/useGetRecommended";
import { formatPrice } from "../../utils/formatPrice";
import Button from "../common/Button";
import { useEffect, useState } from "react";
import useGetMyCart from "../../hooks/useGetMyCart";
import { useMediaQuery } from "react-responsive";

const CartRecommendItem = () => {
  const { mutate: addCartItem } = useAddCartItem();
  const [cartItemId, setCartItemId] = useState([]);
  const [excludesParam, setExcludesParam] = useState("");
  const { isPending: cartDataIsPending, error: cartDataIsError, data: cartData } = useGetMyCart();
  const { isPending, error, data: recommendedData } = useGetRecommended({ size: 3, excludes: excludesParam });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  useEffect(() => {
    // API 응답에서 모든 product ID를 추출
    if (cartData?.items) {
      const productIds = cartData.items.map((item) => item.product.id);
      // 기존 excludes 파라미터에 새 product ID들을 추가
      setCartItemId((prevExcludes) => {
        const updatedExcludes = [...prevExcludes, ...productIds];
        return Array.from(new Set(updatedExcludes));
      });
    }
  }, [cartData]);

  useEffect(() => {
    if (cartItemId && cartItemId.length > 0) {
      setExcludesParam(cartItemId.join(","));
    }
  }, [cartData]);

  useEffect(() => {
    console.log("excludesParam:", excludesParam);
  }, [cartItemId]);

  const onClickQuickAdd = (productId, size) => {
    const addSize = Object.entries(size).find(([key, value]) => value === true)[0];
    addCartItem({ product_id: productId, size: addSize });
  };

  if (isPending) return <div>...Loading</div>;

  return (
    <>
      {isDesktop ? (
        <CartRecommendItemContainer>
          <h4>YOU MAY LIKE</h4>
          {recommendedData.map((product) => {
            return (
              <ProductItemBox isDesktop={isDesktop} key={product.id}>
                <InfoWrap>
                  <ImageArea>
                    <img src={product.photos[0]} alt="" />
                  </ImageArea>
                  <InfoArea>
                    <p className="name">{product.name}</p>
                    <p className="price">₩ {formatPrice(product.price)}</p>
                  </InfoArea>
                </InfoWrap>
                <Button
                  content="QUICK ADD"
                  bg="point"
                  bgHover="black"
                  onClick={() => {
                    onClickQuickAdd(product.id, product.sizes);
                  }}
                />
              </ProductItemBox>
            );
          })}
        </CartRecommendItemContainer>
      ) : (
        <LaptopCartRecommendItemContainer>
          <h4>YOU MAY LIKE</h4>
          <ProductWrap>
            <ScrollArea>
              {recommendedData.map((product) => {
                return (
                  <ProductItemBox isDesktop={isDesktop} key={product.id}>
                    <InfoWrap>
                      <ImageArea>
                        <img src={product.photos[0]} alt="" />
                      </ImageArea>
                      <InfoArea>
                        <p className="name">{product.name}</p>
                        <p className="price">₩ {formatPrice(product.price)}</p>
                      </InfoArea>
                    </InfoWrap>
                    <Button
                      content="QUICK ADD"
                      bg="point"
                      bgHover="black"
                      onClick={() => {
                        onClickQuickAdd(product.id, product.sizes);
                      }}
                    />
                  </ProductItemBox>
                );
              })}
            </ScrollArea>
          </ProductWrap>
        </LaptopCartRecommendItemContainer>
      )}
    </>
  );
};

const CartRecommendItemContainer = styled.div`
  position: absolute;
  width: 250px;
  bottom: 30px;
  right: 20px;
  border-radius: 0.375rem;
  h4 {
    text-align: left;
    padding: 0.625rem;
    font-size: 14px;
  }
`;

const LaptopCartRecommendItemContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  h4 {
    text-align: left;
    padding: 1rem;
    font-size: 14px;
  }
`;

const ProductWrap = styled.div`
  width: auto;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  overflow-x: auto;
  ::-webkit-scrollbar {
    height: 2px; /* 스크롤바의 너비 */
  }
  /* 스크롤바 핸들 스타일 */
  ::-webkit-scrollbar-thumb {
    background: var(--color-black);
    border-radius: 4px;
  }
`;

const ScrollArea = styled.div`
  width: 225vw;
  display: flex;
  gap: 0.5rem;
`;

const ProductItemBox = styled.div<{ isDesktop: boolean }>`
  border-radius: 0.375rem;
  padding: 0.625rem;
  box-sizing: border-box;
  background-color: var(--color-lightgray);
  display: flex;
  margin-bottom: 0.625rem;
  flex-direction: column;
  width: ${({ isDesktop }) => (isDesktop ? "auto" : "75vw")};
  button {
    margin: 0;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  margin-bottom: 0.625rem;
`;

const ImageArea = styled.div`
  width: 55px;
  margin-right: 0.675rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  object-fit: contain;
  img {
    width: 55px;
    border-radius: 0.375rem;
  }
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 14px;
  line-height: 1.4rem;
  .name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .price {
    font-size: 0.75rem;
  }
`;
export default CartRecommendItem;
