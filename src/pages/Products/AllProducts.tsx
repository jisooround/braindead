import ProductsList from "../../components/products/ProductsList";
import useGetAllProducts from "../../hooks/useGetAllProducts";
import styled from "@emotion/styled";

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
  const { isPending, error, data } = useGetAllProducts();
  console.log(data);
  return (
    <AllProductsContainer>
      <TitleWrap>
        <h2>All Products</h2>
        <p>List of all Brain Dead Products. This page serves as a product list page showcasing all products ordered by date, newest first.</p>
      </TitleWrap>
      {!isPending && <ProductsList listData={data} />}
    </AllProductsContainer>
  );
};

const AllProductsContainer = styled.div`
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
export default AllProducts;
