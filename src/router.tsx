import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GeneralLayout from "./components/GeneralLayout";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import Stores from "./pages/Stores";
import Contact from "./pages/Contact";
import Register from "./pages/account/Register";
import Login from "./pages/account/Login";
import Cart from "./pages/Cart";
import AllProducts from "./pages/Products/AllProducts";
import Account from "./pages/account/Account";
import Address from "./pages/account/Address";
import Orders from "./pages/account/Orders";
import ProductDetail from "./pages/Products/ProductDetail";
import Point from "./pages/account/Point";
import SearchResult from "./pages/SearchResult";
import CategoryProducts from "./pages/Products/CategoryProducts";

interface Router {
  id: number; // 페이지 아이디 (반복문용 고유값)
  path: string; // 페이지 경로
  label: string; // 사이드바에 표시할 페이지 이름
  element: React.ReactNode; // 페이지 엘리먼트
  isGuestOnly: boolean; // 비회원 여부
  isMemberOnly: boolean; // 회원 여부
}

export const routerData: Router[] = [
  {
    id: 0,
    path: "/",
    label: "home",
    element: <Home />,
    isGuestOnly: false,
    isMemberOnly: false,
  },
  {
    id: 1,
    path: "/pages/terms-of-service",
    label: "terms",
    element: <Terms />,
    isGuestOnly: false,
    isMemberOnly: false,
  },
  {
    id: 2,
    path: "/pages/refund-policy",
    label: "refund-policy",
    element: <RefundPolicy />,
    isGuestOnly: false,
    isMemberOnly: false,
  },
  {
    id: 3,
    path: "/pages/privacy-policy",
    label: "privacy-policy",
    element: <PrivacyPolicy />,
    isGuestOnly: false,
    isMemberOnly: false,
  },
  {
    id: 4,
    path: "/pages/about-us",
    label: "about-us",
    element: <AboutUs />,
    isGuestOnly: false,
    isMemberOnly: false,
  },
  {
    id: 5,
    path: "/pages/stores",
    label: "stores",
    element: <Stores />,
    isGuestOnly: false,
    isMemberOnly: false,
  },
  {
    id: 6,
    path: "/pages/contact",
    label: "contact",
    element: <Contact />,
    isGuestOnly: false,
    isMemberOnly: false,
  },
  {
    id: 7,
    path: "/account/register",
    label: "register",
    element: <Register />,
    isGuestOnly: true,
    isMemberOnly: false,
  },
  {
    id: 8,
    path: "/account/login",
    label: "login",
    element: <Login />,
    isGuestOnly: true,
    isMemberOnly: false,
  },
  {
    id: 8,
    path: "/cart",
    label: "cart",
    element: <Cart />,
    isGuestOnly: false,
    isMemberOnly: true,
  },
  {
    id: 9,
    path: "/product/all-products",
    label: "all-products",
    element: <AllProducts />,
    isGuestOnly: false,
    isMemberOnly: false,
  },
  {
    id: 10,
    path: "/products/:category",
    label: "category-products",
    element: <CategoryProducts />,
    isGuestOnly: false,
    isMemberOnly: false,
  },
  {
    id: 11,
    path: "/account",
    label: "account",
    element: <Account />,
    isGuestOnly: false,
    isMemberOnly: true,
  },
  {
    id: 12,
    path: "/account/address",
    label: "address",
    element: <Address />,
    isGuestOnly: false,
    isMemberOnly: true,
  },
  {
    id: 13,
    path: "/account/orders",
    label: "orders",
    element: <Orders />,
    isGuestOnly: false,
    isMemberOnly: true,
  },
  {
    id: 14,
    path: `/detail/:id`,
    label: "product-detail",
    element: <ProductDetail />,
    isGuestOnly: false,
    isMemberOnly: false,
  },
  {
    id: 15,
    path: "/account/point",
    label: "point",
    element: <Point />,
    isGuestOnly: false,
    isMemberOnly: true,
  },
  {
    id: 16,
    path: "/products",
    label: "search-result",
    element: <SearchResult />,
    isGuestOnly: false,
    isMemberOnly: false,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: (
        <GeneralLayout isGuestOnly={router.isGuestOnly} isMemberOnly={router.isMemberOnly}>
          {router.element}
        </GeneralLayout>
      ),
      errorElement: <NotFound />,
    };
  }),
);
