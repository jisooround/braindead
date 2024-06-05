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

interface RouterBase {
  id: number; // 페이지 아이디 (반복문용 고유값)
  path: string; // 페이지 경로
  label: string; // 사이드바에 표시할 페이지 이름
  element: React.ReactNode; // 페이지 엘리먼트
}

export const routerData: RouterBase[] = [
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
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: <GeneralLayout>{router.element}</GeneralLayout>,
      errorElement: <NotFound />,
    };
  }),
);
