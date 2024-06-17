import styled from "@emotion/styled";
import { ProductList } from "../../pages/Products/AllList";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { formatPrice } from "../../utils/formatPrice";
import { v4 as uuid } from "uuid";

type Props = {
  listData: ProductList;
};

const ProductsList = ({ listData }: Props) => {
  const [itemIsHover, setItemIsHover] = useState<null | number>(null);

  useEffect(() => {
    console.log(itemIsHover);
  }, [itemIsHover]);

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
        {listData.productsData[0].products.map((product) => {
          return (
            <ItemBox key={uuid()} onMouseEnter={() => handleMouseEnter(product.id)} onMouseLeave={handleMouseLeave}>
              <DefaultItemBox>
                {product.infoTags.length > 0 &&
                  product.infoTags.map((tag) => {
                    return <InfoTag key={uuid()}>{tag}</InfoTag>;
                  })}
                <img src={product.img_src[0]} alt={product.name} />
                <HoveredItemBox
                  css={css`
                    opacity: ${product.id === itemIsHover ? "1" : "0"};
                  `}
                >
                  <img src={product.img_src[1]} alt={product.name} />
                  <SizeWrap>
                    {product.size.map((size) => {
                      return <SizeTag key={uuid()}>{size}</SizeTag>;
                    })}
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
  border-radius: 1.25rem;
  img {
    border-radius: 0.3rem;
  }
`;

const HoveredItemBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s ease-in-out;
`;

const InfoTag = styled.span`
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
`;

const SizeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%);
`;

const SizeTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-color: var(--color-white);
  display: inline-block;
  text-align: center;
  padding: 0 12px;
  height: 30px;
  margin: 5px;
  border-radius: 3px;
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
