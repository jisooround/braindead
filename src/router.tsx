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
import TopList from "./pages/Products/TopList";
import AllProducts from "./pages/Products/AllProducts";
import Account from "./pages/account/Account";

interface Router {
  id: number; // 페이지 아이디 (반복문용 고유값)
  path: string; // 페이지 경로
  label: string; // 사이드바에 표시할 페이지 이름
  element: React.ReactNode; // 페이지 엘리먼트
  isGuestOnly: boolean; // 비회원 여부
}

export const routerData: Router[] = [
  {
    id: 0,
    path: "/",
    label: "home",
    element: <Home />,
    isGuestOnly: false,
  },
  {
    id: 1,
    path: "/pages/terms-of-service",
    label: "terms",
    element: <Terms />,
    isGuestOnly: false,
  },
  {
    id: 2,
    path: "/pages/refund-policy",
    label: "refund-policy",
    element: <RefundPolicy />,
    isGuestOnly: false,
  },
  {
    id: 3,
    path: "/pages/privacy-policy",
    label: "privacy-policy",
    element: <PrivacyPolicy />,
    isGuestOnly: false,
  },
  {
    id: 4,
    path: "/pages/about-us",
    label: "about-us",
    element: <AboutUs />,
    isGuestOnly: false,
  },
  {
    id: 5,
    path: "/pages/stores",
    label: "stores",
    element: <Stores />,
    isGuestOnly: false,
  },
  {
    id: 6,
    path: "/pages/contact",
    label: "contact",
    element: <Contact />,
    isGuestOnly: false,
  },
  {
    id: 7,
    path: "/account/register",
    label: "register",
    element: <Register />,
    isGuestOnly: true,
  },
  {
    id: 8,
    path: "/account/login",
    label: "login",
    element: <Login />,
    isGuestOnly: true,
  },
  {
    id: 8,
    path: "/cart",
    label: "cart",
    element: <Cart />,
    isGuestOnly: false,
  },
  {
    id: 9,
    path: "/collections/all-products",
    label: "all-products",
    element: <AllProducts />,
    isGuestOnly: false,
  },
  {
    id: 10,
    path: "/collections/top",
    label: "top",
    element: <TopList />,
    isGuestOnly: false,
  },
  {
    id: 11,
    path: "/account",
    label: "account",
    element: <Account />,
    isGuestOnly: false,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: <GeneralLayout isGuestOnly={router.isGuestOnly}>{router.element}</GeneralLayout>,
      errorElement: <NotFound />,
    };
  }),
);
