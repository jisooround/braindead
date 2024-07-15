import styled from "@emotion/styled";
import { v4 as uuid } from "uuid";
import { Product, ProductPage } from "../../types/products";
import { useEffect, useRef, useState } from "react";
import { css, keyframes } from "@emotion/react";
import { formatPrice } from "../../utils/formatPrice";
import useAddCartItem from "../../hooks/useAddCartItem";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  listData: Product[];
};

const RecommendedList = ({ listData }: Props) => {
  const [itemIsHover, setItemIsHover] = useState<null | number>(null);
  const slideRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    beforeChange: (newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  useEffect(() => {
    if (slideRef.current) {
      console.log("Current slide index:", currentSlide);
    }
  }, [currentSlide]);

  const { mutate: addCartItem } = useAddCartItem();
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const handleMouseEnter = (id) => {
    setItemIsHover(id);
  };
  const handleMouseLeave = () => {
    setItemIsHover(null);
  };

  const onClickSizeTag = (id, size) => {
    addCartItem({ product_id: id, size: size });
  };

  return (
    <RecommendedListContainer $isDesktop={isDesktop}>
      <h2>RECOMMENDED PRODUCTS</h2>
      {isDesktop ? (
        <ItemListWrap $isDesktop={isDesktop}>
          {listData.map((product) => {
            return (
              <ItemBox key={uuid()} onMouseEnter={() => handleMouseEnter(product.id)} onMouseLeave={handleMouseLeave}>
                {product.is_new && (
                  <NewTag isSoldOut={false} key={uuid()}>
                    New
                  </NewTag>
                )}
                <DefaultItemBox>
                  <img src={product.photos[0]} alt={product.name} />
                  <HoveredItemBox isVisible={product.id === itemIsHover}>
                    <Link to={`/detail/${product.id}`}>
                      <img src={product.photos[1]} alt={product.name} />
                    </Link>
                    {product.is_sold_out ? (
                      <NewTag isSoldOut={true}>Sold out</NewTag>
                    ) : (
                      <SizeWrap>
                        {Object.entries(product.sizes)
                          .filter(([size, available]) => available)
                          .map(([size]) => (
                            <SizeTag
                              onClick={() => {
                                onClickSizeTag(product.id, size);
                              }}
                              key={size}
                            >
                              {size}
                            </SizeTag>
                          ))}
                      </SizeWrap>
                    )}
                    <PriceTag>₩ {formatPrice(product.price)}</PriceTag>
                  </HoveredItemBox>
                </DefaultItemBox>
              </ItemBox>
            );
          })}
        </ItemListWrap>
      ) : (
        <ItemListWrap className="slider-container" $isDesktop={isDesktop}>
          <Slider {...settings} ref={slideRef}>
            {listData.map((product) => {
              return (
                <ItemBox className="slider-item" key={uuid()} onMouseEnter={() => handleMouseEnter(product.id)} onMouseLeave={handleMouseLeave}>
                  {product.is_new && (
                    <NewTag isSoldOut={false} key={uuid()}>
                      New
                    </NewTag>
                  )}
                  <DefaultItemBox>
                    <img src={product.photos[0]} alt={product.name} />
                    <HoveredItemBox isVisible={product.id === itemIsHover}>
                      <Link to={`/detail/${product.id}`}>
                        <img src={product.photos[1]} alt={product.name} />
                      </Link>
                      {product.is_sold_out ? (
                        <NewTag isSoldOut={true}>Sold out</NewTag>
                      ) : (
                        <SizeWrap>
                          {Object.entries(product.sizes)
                            .filter(([size, available]) => available)
                            .map(([size]) => (
                              <SizeTag
                                onClick={() => {
                                  onClickSizeTag(product.id, size);
                                }}
                                key={size}
                              >
                                {size}
                              </SizeTag>
                            ))}
                        </SizeWrap>
                      )}
                      <PriceTag>₩ {formatPrice(product.price)}</PriceTag>
                    </HoveredItemBox>
                  </DefaultItemBox>
                </ItemBox>
              );
            })}
          </Slider>
        </ItemListWrap>
      )}
    </RecommendedListContainer>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const RecommendedListContainer = styled.div<{ $isDesktop: boolean }>`
  width: 100%;
  padding: 24px 20px;
  box-sizing: border-box;
  margin-bottom: 80px;
  h2 {
    font-size: ${(props) => (props.$isDesktop ? "54px" : "22px")};
    margin-bottom: 1rem;
  }
`;

const ItemListWrap = styled.div<{ $isDesktop: boolean }>`
  padding: ${(props) => (props.$isDesktop ? "1.25rem" : "0")};
  display: ${(props) => (props.$isDesktop ? "grid" : "block")};
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  &.slider-container {
    width: 100%;
    .slick-slide {
      max-width: 100%;
      padding: 10px;
      box-sizing: border-box;
      .slider-item {
        width: 100%;
        border-radius: 0.375rem;
        overflow: hidden;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

const ItemBox = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`;

const DefaultItemBox = styled.div`
  border-radius: 1.25rem;
  img {
    border-radius: 0.3rem;
    width: 100%;
    transition: opacity all.2s;
  }
`;

const HoveredItemBox = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: opacity 0.3s;
  animation: ${({ isVisible }) =>
    isVisible
      ? css`
          ${fadeIn} .2s ease-in-out
        `
      : "none"};
`;

const NewTag = styled.span<{ isSoldOut: boolean }>`
  position: absolute;
  top: ${({ isSoldOut }) => (isSoldOut ? "none" : "0.8rem")};
  bottom: ${({ isSoldOut }) => (isSoldOut ? "1.6rem" : "none")};
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background-color: ${({ isSoldOut }) => (isSoldOut ? "var(--color-yellow)" : "var(--color-point)")};
  display: inline-block;
  text-align: center;
  padding: 2px;
  border-radius: 3px;
  z-index: 10;
`;

const SizeWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 0.5rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: absolute;
  bottom: 2rem;
  gap: 0.5rem;
  left: 50%;
  transform: translate(-50%);
`;

const SizeTag = styled.span`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  font-size: 14px;
  background-color: var(--color-lightgray);
  display: inline-block;
  text-align: center;
  padding: 0 0.2rem;
  box-sizing: border-box;
  height: 30px;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background-color: var(--color-point);
  }
`;

const PriceTag = styled.span`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background-color: var(--color-white);
  display: inline-block;
  text-align: center;
  padding: 2px;
  border-radius: 3px;
`;

export default RecommendedList;
