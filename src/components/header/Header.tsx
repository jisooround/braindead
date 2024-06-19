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
      path: "/collections/all-products",
      id: 2,
      element: [
        { name: "All Products", path: "/products/all" },
        { name: "Top", path: "/products/top" },
        { name: "Accessories", path: "/accessories" },
        { name: "Footwear", path: "/footwear" },
        { name: "Homegoods", path: "/homegoods" },
        { name: "Archive", path: "/archive" },
      ],
    },
  ],
};

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { isPending, error, data: cartData } = useGetMyCart();
  const authState = useRecoilValue(authTokenState);
  const isLoggedIn = Boolean(authState?.token);
  const handleClickSearch = () => {
    setIsSearchVisible(true);
  };

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
        title: `CART (${cartData ? cartData?.items.length : "0"})`,
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
        <SearchWrap>
          <span onClick={handleClickSearch}>SEARCH</span>
          {isSearchVisible ? (
            <div className="search-input">
              <input type="text" placeholder="TYPE HERE" />
              <button
                onClick={() => {
                  setIsSearchVisible(false);
                }}
              >
                X
              </button>
            </div>
          ) : null}
        </SearchWrap>
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

const SearchWrap = styled.div`
  display: flex;
  height: 38px;
  box-sizing: border-box;
  align-items: center;
  background-color: var(--color-lightgray);
  padding: 4px 2px;
  margin-left: 6px;
  border-radius: 0.375rem;
  display: flex;
  .search-input {
    padding-right: 10px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: var(--color-lightgray);
    padding: 0 0.75rem;
    margin: 0 0.25rem;
    font-size: 14px;
    height: 30px;
    border-radius: 6px;
    line-height: 1.25rem;
    text-transform: uppercase;
    outline: none;
    border: 1px solid var(--color-lightgray);
    cursor: pointer;
    white-space: nowrap;
    :hover {
      background-color: var(--color-point);
      border: 1px solid var(--color-point);
    }
  }
`;

export default Header;
