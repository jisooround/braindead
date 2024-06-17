import styled from "@emotion/styled";
// import { useEffect, useState } from "react";
// import { css } from "@emotion/react";
// import { formatPrice } from "../../utils/formatPrice";
import { v4 as uuid } from "uuid";
import { ProductPage } from "../../types/products";
import { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";
import { formatPrice } from "../../utils/formatPrice";

type Props = {
  listData: ProductPage;
};

type StyleProps = {
  isSoldOut: boolean;
};
const ProductsList = ({ listData }: Props) => {
  const [itemIsHover, setItemIsHover] = useState<null | number>(null);

  // useEffect(() => {
  //   console.log(itemIsHover);
  // }, [itemIsHover]);

  const handleMouseEnter = (id) => {
    setItemIsHover(id);
  };
  const handleMouseLeave = () => {
    setItemIsHover(null);
  };

  return (
    <ProductsListContainer>
      <FilterButtonWrap></FilterButtonWrap>
      <ItemListWrap>
        {listData.products.map((product) => {
          return (
            <ItemBox key={uuid()} onMouseEnter={() => handleMouseEnter(product.id)} onMouseLeave={handleMouseLeave}>
              {product.is_new && <NewTag key={uuid()}>New</NewTag>}
              <DefaultItemBox>
                <img src={product.photos[0]} alt={product.name} />
                <HoveredItemBox isVisible={product.id === itemIsHover}>
                  <img src={product.photos[1]} alt={product.name} />
                  <SizeWrap>
                    {Object.entries(product.sizes)
                      .filter(([size, available]) => available)
                      .map(([size]) => (
                        <SizeTag key={size}>{size}</SizeTag>
                      ))}
                  </SizeWrap>
                  <PriceTag>₩ {formatPrice(product.price)}</PriceTag>
                </HoveredItemBox>
              </DefaultItemBox>
            </ItemBox>
          );
        })}
      </ItemListWrap>
    </ProductsListContainer>
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

const ProductsListContainer = styled.div`
  width: 100%;
  margin: 158px auto 50px;
`;

const FilterButtonWrap = styled.div``;

const ItemListWrap = styled.div`
  padding: 1.25rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
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

const NewTag = styled.span`
  position: absolute;
  top: 0.8rem;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background-color: var(--color-point);
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

export default ProductsList;
