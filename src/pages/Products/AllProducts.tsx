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

// const allProductsList: ProductList = {
//   title: "All Products",
//   desc: "List of all Brain Dead Products. This page serves as a product list page showcasing all products ordered by date, newest first.",
//   productsData: [
//     {
//       category: "top",
//       products: [
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 1,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: ["New"],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 2,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: ["New"],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 3,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: ["New"],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 4,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: ["New"],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 5,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: [],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 6,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: [],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 7,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: [],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 8,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: [],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 9,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: [],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 10,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: [],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 11,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: [],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 12,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: [],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 13,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: [],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 14,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: [],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 15,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: [],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 16,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: [],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 17,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: [],
//           soldOut: false,
//         },
//         {
//           name: "BRAIN DEAD X MELLOW CLIMBING EXPERIMENTAL CLIMBING T-SHIRT - WHITE",
//           img_src: ["/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Front_opt.webp", "/public/Brain_Dead_x_Mellow_Climbing_Tee_White_Detail_opt.webp"],
//           id: 18,
//           price: 76000,
//           size: ["XS", "S", "M", "L", "XL"],
//           infoTags: [],
//           soldOut: false,
//         },
//       ],
//     },
//   ],
// };

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
