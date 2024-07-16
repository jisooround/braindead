import styled from "@emotion/styled";
import { useState } from "react";
import DropMenu from "./DropMenu";
import { useRecoilValue } from "recoil";
import { authTokenState } from "../../recoil/atoms/authAtom";
import HeaderCart from "./HeaderCart";
import HeaderAccount from "./HeaderAccount";
import { MenuList } from "../../types/header";
import HeaderRegister from "./HeaderRegister";
import HeaderLogin from "./HeaderLogin";
import useGetMyCart from "../../hooks/useGetMyCart";
import HeaderSearch from "./HeaderSearch";
import { useLocation } from "react-router-dom";
// import { leftMenuList, rightMenuListLoggedIn, rightMenuListLogout } from "../../constants/headerMenuList";

// 각 메뉴 항목의 타입 정의

const leftMenuList: MenuList = {
  position: "left",
  list: [
    {
      type: "list",
      title: "MENU",
      path: "#",
      id: 1,
      element: [
        { name: "About", path: "/pages/about-us" },
        { name: "Stores", path: "/pages/stores" },
        { name: "Contact", path: "/pages/contact" },
      ],
    },
    {
      type: "list",
      title: "SHOP ALL",
      path: "/product/all-products",
      id: 2,
      element: [
        { name: "All Products", path: "/product/all-products" },
        { name: "Top", path: "/products/top" },
        { name: "Bottom", path: "/products/bottom" },
        { name: "Footwear", path: "/products/footwear" },
        { name: "Accessory", path: "/products/accessory" },
        { name: "Eyewear", path: "/products/eyewear" },
        { name: "Homegoods", path: "/products/homegoods" },
      ],
    },
  ],
};

const HeaderDesktop = () => {
  const authState = useRecoilValue(authTokenState);
  const isLoggedIn = Boolean(authState?.token);
  const { pathname } = useLocation();
  const { isPending, data: cartData } = useGetMyCart();

  const rightMenuListLogout: MenuList = {
    position: "right",
    list: [
      {
        type: "component",
        title: "LOGIN",
        path: "/account/login",
        id: 3,
        element: [{ component: <HeaderLogin /> }],
      },
      {
        type: "component",
        title: "REGISTER",
        path: "/account/register",
        id: 4,
        element: [{ component: <HeaderRegister /> }],
      },
      {
        type: "component",
        title: `CART`,
        path: "/cart",
        id: 5,
        element: [{ component: <HeaderCart /> }],
      },
    ],
  };

  // 로그인한 경우의 오른쪽 메뉴 리스트
  const rightMenuListLoggedIn: MenuList = {
    position: "right",
    list: [
      {
        type: "component",
        title: `HI, ${authState?.user.username}`,
        path: "/account",
        id: 6,
        element: [{ component: <HeaderAccount /> }],
      },
      {
        type: "component",
        title: `CART (${!isPending || cartData ? cartData?.items.length : "0"})`,
        path: "/cart",
        id: 7,
        element: [{ component: <HeaderCart /> }],
      },
    ],
  };

  return (
    <HeaderContainer>
      <LeftArea>
        <DropMenu listProps={leftMenuList} />
        {pathname !== "/products" && <HeaderSearch />}
      </LeftArea>
      <RightArea>
        <DropMenu listProps={isLoggedIn ? rightMenuListLoggedIn : rightMenuListLogout} />
      </RightArea>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: auto;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  padding: 16px 20px 0 20px;
  z-index: 9999;
`;

const LeftArea = styled.div`
  display: flex;
`;
const RightArea = styled.div`
  display: flex;
`;

export default HeaderDesktop;
