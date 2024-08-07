import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import useGetDetails from "../../hooks/useGetDetails";
import { formatPrice } from "../../utils/formatPrice";
import { v4 as uuid } from "uuid";
import Button from "../../components/common/Button";
import { HiOutlineMinus, HiPlus } from "react-icons/hi2";
import RecommendedList from "../../components/products/RecommendedList";
import useGetRecommended from "../../hooks/useGetRecommended";
import { useEffect, useState } from "react";
import useAddCartItem from "../../hooks/useAddCartItem";
import { CartData } from "../../types/cart";
import { useMediaQuery } from "react-responsive";

const ProductDetail = () => {
  const { id } = useParams();
  const { mutate: addCartItem } = useAddCartItem();
  const { data: detailData, error: detailError, isPending: detailPending } = useGetDetails(Number(id));
  const { data: recommendedData, error: recommendedError, isPending: recommendedPending } = useGetRecommended({ size: 6, excludes: Number(id) });
  const [addToCartData, setAddToCartData] = useState<CartData>({
    size: null,
    quantity: 1,
    product_id: Number(id),
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  // 첫번째로 true인 사이즈를 state로 변경
  useEffect(() => {
    if (detailData) {
      const findTrue = Object.entries(detailData.sizes).find(([size, available]) => available);
      const initSize = findTrue ? findTrue[0] : null;
      setAddToCartData((prevState) => ({ ...prevState, size: initSize }));
    }
  }, [detailData]);

  // 로딩 상태 관리
  const isLoading = detailPending || recommendedPending;

  // 에러 상태 관리
  const error = detailError || recommendedError;

  if (isLoading) {
    return <div>...Loading</div>;
  }

  // 사이즈 선택시 실행 함수
  const handleClickSize = (size) => {
    setAddToCartData((prevState) => ({ ...prevState, size }));
  };

  // 카트 추가 버튼 클릭시 실행 함수
  const handleClickAddToCart = (size) => {
    addCartItem(addToCartData);
  };

  return (
    <>
      {isDesktop ? (
        <DesktopContainer>
          <DetailContainer $isDesktop={isDesktop}>
            <InfoArea $isDesktop={isDesktop}>
              <p>₩ {formatPrice(detailData.price)}</p>
              <h3>{detailData.name}</h3>
              <h6>DETAILS</h6>
              <p>{detailData.description}</p>
              <p>Material: {detailData.material}</p>
              <p>Color: {detailData.color}</p>
            </InfoArea>
            <ImageArea>
              {detailData.photos.map((photo) => {
                return (
                  <div key={uuid()}>
                    <img src={photo} alt={photo} />
                  </div>
                );
              })}
            </ImageArea>
            <CheckoutArea $isDesktop={isDesktop}>
              <CheckoutWrap $isDesktop={isDesktop}>
                <TitleWrap>
                  <p>SIZE</p>
                  <p>Size Chart</p>
                </TitleWrap>
                <SizeWrap sizeLength={Object.keys(detailData.sizes).length}>
                  {Object.entries(detailData.sizes).map(([key, value]) => {
                    return (
                      <Button
                        content={key}
                        key={uuid()}
                        disabled={detailData.is_sold_out ? true : !value}
                        active={detailData.is_sold_out ? false : addToCartData.size === key}
                        onClick={() => {
                          handleClickSize(key);
                        }}
                      ></Button>
                    );
                  })}
                </SizeWrap>
                <QuantityBox>
                  <Icon>
                    <HiOutlineMinus
                      onClick={() => {
                        if (addToCartData.quantity === 1) return;
                        setAddToCartData((prevState) => ({ ...prevState, quantity: prevState.quantity - 1 }));
                      }}
                    />
                  </Icon>
                  <p>{addToCartData.quantity}</p>
                  <Icon>
                    <HiPlus
                      onClick={() => {
                        setAddToCartData((prevState) => ({ ...prevState, quantity: prevState.quantity + 1 }));
                      }}
                    />
                  </Icon>
                </QuantityBox>
                <AddToCartButton onClick={handleClickAddToCart} disabled={detailData.is_sold_out}>
                  <p>ADD TO CART</p>
                  <p>₩ {formatPrice(detailData.price)}</p>
                </AddToCartButton>
                <span>Free domestic (US) shipping on orders over $400 USD</span>
              </CheckoutWrap>
            </CheckoutArea>
          </DetailContainer>
          <DetailRecommenededContainer>
            <RecommendedList listData={recommendedData} />
          </DetailRecommenededContainer>
        </DesktopContainer>
      ) : (
        <LaptopContainer>
          <DetailContainer $isDesktop={isDesktop}>
            <ImageArea>
              {detailData.photos.map((photo) => {
                return (
                  <div key={uuid()}>
                    <img src={photo} alt={photo} />
                  </div>
                );
              })}
            </ImageArea>
            <InfoArea $isDesktop={isDesktop}>
              <p>₩ {formatPrice(detailData.price)}</p>
              <h3>{detailData.name}</h3>
              <h6>DETAILS</h6>
              <p>{detailData.description}</p>
              <p>Material: {detailData.material}</p>
              <p>Color: {detailData.color}</p>
            </InfoArea>
            <CheckoutArea $isDesktop={isDesktop}>
              <CheckoutWrap $isDesktop={isDesktop}>
                <TitleWrap>
                  <p>SIZE</p>
                  <p>Size Chart</p>
                </TitleWrap>
                <SizeWrap sizeLength={Object.keys(detailData.sizes).length}>
                  {Object.entries(detailData.sizes).map(([key, value]) => {
                    return (
                      <Button
                        content={key}
                        key={uuid()}
                        disabled={detailData.is_sold_out ? true : !value}
                        active={detailData.is_sold_out ? false : addToCartData.size === key}
                        onClick={() => {
                          handleClickSize(key);
                        }}
                      ></Button>
                    );
                  })}
                </SizeWrap>
                <QuantityBox>
                  <Icon>
                    <HiOutlineMinus
                      onClick={() => {
                        if (addToCartData.quantity === 1) return;
                        setAddToCartData((prevState) => ({ ...prevState, quantity: prevState.quantity - 1 }));
                      }}
                    />
                  </Icon>
                  <p>{addToCartData.quantity}</p>
                  <Icon>
                    <HiPlus
                      onClick={() => {
                        setAddToCartData((prevState) => ({ ...prevState, quantity: prevState.quantity + 1 }));
                      }}
                    />
                  </Icon>
                </QuantityBox>
                <AddToCartButton onClick={handleClickAddToCart} disabled={detailData.is_sold_out}>
                  <p>ADD TO CART</p>
                  <p>₩ {formatPrice(detailData.price)}</p>
                </AddToCartButton>
                <span>Free domestic (US) shipping on orders over $400 USD</span>
              </CheckoutWrap>
            </CheckoutArea>
          </DetailContainer>
          <DetailRecommenededContainer>
            <RecommendedList listData={recommendedData} />
          </DetailRecommenededContainer>
        </LaptopContainer>
      )}
    </>
  );
};

const DesktopContainer = styled.div``;

const LaptopContainer = styled.div`
  width: 100%;
`;

const DetailContainer = styled.div<{ $isDesktop: boolean }>`
  width: 100%;
  /* display: grid; */
  display: ${(props) => (props.$isDesktop ? "grid" : "flex")};
  flex-direction: column;
  grid-template-columns: 372px 1fr 372px;
  gap: 1rem;
  margin: 158px auto 100px;
  padding: 0 20px;
  box-sizing: border-box;
`;

const InfoArea = styled.div<{ $isDesktop: boolean }>`
  width: 100%;
  height: ${(props) => (props.$isDesktop ? "calc(100vh - 158px)" : "auto")};
  position: ${(props) => (props.$isDesktop ? "sticky" : "relative")};
  top: 158px;
  padding-right: 2.5rem;
  box-sizing: border-box;
  h3 {
    margin-bottom: 2.5rem;
    font-size: 22px;
    line-height: 1.625rem;
    font-weight: 300;
  }
  p,
  h6 {
    font-size: 14px;
    margin: 0 0 8px;
    line-height: 1.25rem;
  }
`;

const ImageArea = styled.div`
  width: 100%;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
`;

const CheckoutArea = styled.div<{ $isDesktop: boolean }>`
  width: 100%;
  height: ${(props) => (props.$isDesktop ? "calc(100vh - 158px)" : "auto")};
  position: ${(props) => (props.$isDesktop ? "sticky" : "relative")};
  top: 158px;
  line-height: 1.625rem;
  span {
    width: 100%;
    display: inline-block;
    font-size: 12px;
    text-align: right;
    margin: 0 0 10px;
  }
`;

const CheckoutWrap = styled.div<{ $isDesktop: boolean }>`
  max-width: ${(props) => (props.$isDesktop ? "349px" : "100%")};
  float: ${(props) => (props.$isDesktop ? "right" : "none")};
  margin-bottom: 5rem;
`;

const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 0 0 0.5rem;
`;

const SizeWrap = styled.div<{ sizeLength: number }>`
  width: 100%;
  display: grid;
  /* grid-template-columns: ${({ sizeLength }) => `repeat(${sizeLength}, 1fr)`}; */
  grid-template-columns: ${({ sizeLength }) => `repeat(${sizeLength}, 54px 54px)`};
  margin-bottom: 1.25rem;
  gap: 0.3rem;
  button {
    margin: 0;
  }
`;

const QuantityBox = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 0.375rem;
  border: 1px solid var(--color-black);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
`;

const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  cursor: pointer;
  svg {
    margin: 0.25rem;
  }
  :hover {
    background-color: var(--color-point);
  }
`;

const AddToCartButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.375rem;
  background-color: var(--color-point);
  border: none;
  padding: 0 18px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 1.25rem;
  ${(props) =>
    !props.disabled &&
    `
    :hover {
      background-color: var(--color-black);
      color: var(--color-white);
    }
  `}
`;

const DetailRecommenededContainer = styled.div`
  width: 100%;
  margin-top: 50px;
`;

export default ProductDetail;
