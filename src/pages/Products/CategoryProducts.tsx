import { useParams } from "react-router-dom";
import Button from "../../components/common/Button";
import ProductsList from "../../components/products/ProductsList";
import useGetCategory from "../../hooks/useGetCategoryItem";
import styled from "@emotion/styled";

const CategoryProducts = () => {
  const { category } = useParams();
  const { data, error, isPending } = useGetCategory(category);

  if (isPending) return <div>Loading...</div>;

  return (
    <CategoryProductsContainer>
      <TitleWrap>
        <h2>{category}</h2>
        <p>List of all Brain Dead apparel ordered by date, newest first.</p>
      </TitleWrap>
      <ResultItemWrap>
        <ProductsList listData={data} />
      </ResultItemWrap>
    </CategoryProductsContainer>
  );
};

const CategoryProductsContainer = styled.div`
  width: 100%;
  margin: 158px auto 50px;
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
