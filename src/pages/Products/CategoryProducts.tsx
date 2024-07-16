import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/common/Button";
import ProductsList from "../../components/products/ProductsList";
import useGetCategory from "../../hooks/useGetCategoryItem";
import styled from "@emotion/styled";
import SkeletonProductsList from "../../components/products/SkeletonProductsList";
import useURLParams from "../../hooks/useURLParams";
import { useEffect, useState } from "react";
import { goTo } from "../../utils/goTo";
import useGetProductsList from "../../hooks/useGetProductsList";

const CategoryProducts = () => {
  const { category } = useParams();
  const query = useURLParams();
  const pagination = query.get("pagination");
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState(category);
  const [page, setPage] = useState<number>(pagination ? Number(pagination) : 1);
  const { isPending, data } = useGetProductsList(category, 12 * Number(page));

  // 카테고리 이름 setState
  useEffect(() => {
    setCategoryName(category);
  }, []);

  // page 이름 변경되면 url에 pagination 정보 추가
  useEffect(() => {
    if (page !== 1) {
      goTo(navigate, `/products/${category}?pagination=${page}`);
    }
  }, [page]);

  // 1. 같은 카테고리에서 새로고침할 경우 url 유지
  // 2. 다른 카테고리로 이동할 경우 page 1로 setState
  useEffect(() => {
    if (category === categoryName) return;
    setPage(1);
    return () => {
      if (page !== 1) {
        goTo(navigate, `/products/${category}`);
      }
    };
  }, [category]);

  return (
    <CategoryProductsContainer>
      <TitleWrap>
        <h2>{category}</h2>
        <p>List of all Brain Dead apparel ordered by date, newest first.</p>
      </TitleWrap>
      <ResultItemWrap>{isPending ? <SkeletonProductsList /> : <ProductsList listData={data} />}</ResultItemWrap>
      <ButtonArea>
        <Button
          content="more"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        />
      </ButtonArea>
    </CategoryProductsContainer>
  );
};

const CategoryProductsContainer = styled.div`
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
    text-transform: uppercase;
  }
  p {
    font-size: 14px;
    max-width: 650px;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 1rem;
  }
`;

const ResultItemWrap = styled.div``;

export default CategoryProducts;
