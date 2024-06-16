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
import AllList from "./pages/Products/AllList";

interface RouterBase {
  id: number; // 페이지 아이디 (반복문용 고유값)
  path: string; // 페이지 경로
  label: string; // 사이드바에 표시할 페이지 이름
  element: React.ReactNode; // 페이지 엘리먼트
}

interface UserAccessibleRouterElement extends RouterBase {
  isGuestOnly?: boolean; // 손님전용 페이지 여부
}

type RouterElement = UserAccessibleRouterElement;

export const routerData: RouterElement[] = [
  {
    id: 0,
    path: "/",
    label: "home",
    element: <Home />,
  },
  {
    id: 1,
    path: "/pages/terms-of-service",
    label: "terms",
    element: <Terms />,
  },
  {
    id: 2,
    path: "/pages/refund-policy",
    label: "refund-policy",
    element: <RefundPolicy />,
  },
  {
    id: 3,
    path: "/pages/privacy-policy",
    label: "privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    id: 4,
    path: "/pages/about-us",
    label: "about-us",
    element: <AboutUs />,
  },
  {
    id: 5,
    path: "/pages/stores",
    label: "stores",
    element: <Stores />,
  },
  {
    id: 6,
    path: "/pages/contact",
    label: "contact",
    element: <Contact />,
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
  },
  {
    id: 9,
    path: "/products/all",
    label: "all-products",
    element: <AllList />,
  },
  {
    id: 10,
    path: "/products/top",
    label: "top",
    element: <TopList />,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: <GeneralLayout isGuestOnly={"isGuestOnly" in router && router.isGuestOnly}>{router.element}</GeneralLayout>,
      errorElement: <NotFound />,
    };
  }),
);
