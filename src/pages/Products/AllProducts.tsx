import { useCallback, useEffect, useRef, useState } from "react";
import ProductsList from "../../components/products/ProductsList";
import SkeletonProductsList from "../../components/products/SkeletonProductsList";
import styled from "@emotion/styled";
import Button from "../../components/common/Button";
import useGetProductsList from "../../hooks/useGetProductsList";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../utils/goTo";
import useURLParams from "../../hooks/useURLParams";

interface IProduct {
  name: string;
  img_src: string[];
  id: number;
  price: number;
  size: string[];
  infoTags: string[];
  soldOut: boolean;
}

interface IProducts {
  category: string;
  products: IProduct[];
}

export type ProductList = {
  title: string;
  desc: string;
  productsData: IProducts[];
};

const AllProducts = () => {
  const query = useURLParams();
  const pagination = query.get("pagination");
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(pagination ? Number(pagination) : 1);
  const { isPending, data } = useGetProductsList("", 12 * Number(page));

  useEffect(() => {
    console.log(pagination);
  }, [pagination]);

  useEffect(() => {
    if (page === 1) return;
    goTo(navigate, `/product/all-products?pagination=${page}`);
  }, [page]);

  return (
    <AllProductsContainer>
      <TitleWrap>
        <h2>All Products</h2>
        <p>List of all Brain Dead Products. This page serves as a product list page showcasing all products ordered by date, newest first.</p>
      </TitleWrap>
      {isPending && <SkeletonProductsList />}
      {!isPending && <ProductsList listData={data} />}
      <ButtonArea>
        <Button
          content="more"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        />
      </ButtonArea>
    </AllProductsContainer>
  );
};

const AllProductsContainer = styled.div`
  width: 100%;
  margin: 158px auto 50px;
`;

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    width: 90%;
    margin: 0 auto;
  }
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

export default AllProducts;
