import styled from "@emotion/styled";
import logo from "../../assets/logo.svg";
import { keyframes } from "@emotion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropMenu from "./DropMenu";
import { useRecoilState } from "recoil";
import { authTokenState } from "../../recoil/atoms/authAtom";
import HeaderAccount from "./HeaderAccount";
import HeaderLogin from "./HeaderLogin";
import HeaderRegister from "./HeaderRegister";

// 각 메뉴 항목의 타입 정의
interface MenuItem {
  name: string;
  path: string;
}

interface MenuComponent {
  component: React.ReactNode | React.Component;
}
// 메뉴의 타입 정의
interface Menu {
  type: "list" | "component";
  title: string;
  path: string;
  id: number;
  element: MenuItem[] | MenuComponent[];
}

const leftMenuList: Menu[] = [
  {
    type: "list",
    title: "MENU",
    path: "#",
    id: 1,
    element: [
      { name: "About", path: "/about" },
      { name: "Stores", path: "/stores" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    type: "list",
    title: "SHOP ALL",
    path: "/collections/all-products",
    id: 2,
    element: [
      { name: "Apparel", path: "/apparel" },
      { name: "Accessories", path: "/accessories" },
      { name: "Footwear", path: "/footwear" },
      { name: "Homegoods", path: "/homegoods" },
      { name: "Archive", path: "/archive" },
    ],
  },
];

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(authTokenState);

  const handleClickSearch = () => {
    setIsSearchVisible(true);
  };

  const rightMenuListLogout: Menu[] = [
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
      title: "CART (1)",
      path: "/cart",
      id: 5,
      element: [{ component: <HeaderLogin /> }],
    },
  ];

  const rightMenuListLoggedIn: Menu[] = [
    {
      type: "component",
      title: `HI, ${isLoggedIn?.username || isLoggedIn?.user.username}`,
      path: "/account",
      id: 6,
      element: [{ component: <HeaderAccount /> }],
    },
    {
      type: "component",
      title: "CART (1)",
      path: "/cart",
      id: 7,
      element: [{ component: <HeaderLogin /> }],
    },
  ];
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
