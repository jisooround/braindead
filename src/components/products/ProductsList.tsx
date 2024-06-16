import styled from "@emotion/styled";
import { ProductList } from "../../pages/Products/AllList";
import { useState } from "react";
import { css } from "@emotion/react";

type Props = {
  listData: ProductList;
};

const ProductsList = ({ listData }: Props) => {
  const [itemIsHover, setItemIsHover] = useState<null | number>(null);

  const handleMouseEnter = (id) => {
    setItemIsHover(id);
  };
  const handleMouseLeave = () => {
    setItemIsHover(null);
  };

  return (
    <ProductsListContainer>
      <TitleWrap>
        <h2>{listData.title}</h2>
        <p>{listData.desc}</p>
      </TitleWrap>
      <FilterButtonWrap></FilterButtonWrap>
      <ItemListWrap>
        {listData.productsData[0].products.map((product, index) => {
          return (
            <ItemBox onMouseEnter={(e) => handleMouseEnter(product.id)} onMouseLeave={handleMouseLeave}>
              {/* {product.id !== itemIsHover ? (
                <DefaultItemBox>
                  <img src={product.img_src[0]} alt={product.name} />
                </DefaultItemBox>
              ) : (
                <HoveredItemBox>
                  <img src={product.img_src[1]} alt={product.name} />
                </HoveredItemBox>
              )} */}
              <DefaultItemBox>
                <img src={product.img_src[0]} alt={product.name} />
                <HoveredItemBox
                  css={css`
                    opacity: ${product.id === itemIsHover ? "1" : "0"};
                  `}
                >
                  <img src={product.img_src[1]} alt={product.name} />
                </HoveredItemBox>
              </DefaultItemBox>
            </ItemBox>
          );
        })}
      </ItemListWrap>
    </ProductsListContainer>
  );
};

const ProductsListContainer = styled.div`
  width: 100%;
  margin: 158px auto 50px;
`;

const TitleWrap = styled.div`
  h2 {
    font-size: 22px;
    text-align: center;
    padding-bottom: 1rem;
  }
  p {
    font-size: 14px;
    max-width: 650px;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 1rem;
  }
`;

const FilterButtonWrap = styled.div``;

const ItemListWrap = styled.div`
  padding: 1.25rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
`;

const ItemBox = styled.div`
  img {
    width: 100%;
  }
`;

const DefaultItemBox = styled.div`
  position: relative;
`;

const HoveredItemBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transition: 0.2s;
`;

export default ProductsList;
