import styled from "@emotion/styled";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { authTokenState } from "../../recoil/atoms/authAtom";
import useGetMyCart from "../../hooks/useGetMyCart";
import Button from "../common/Button";
import { IoMenuOutline } from "react-icons/io5";
import LaptopPageMenu from "./LaptopPageMenu";
import LaptopShopMenu from "./LaptopShopMenu";
import LaptopAccountMenu from "./LaptopAccountMenu";
import { AnimatePresence, motion } from "framer-motion";

const HeaderLaptop = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<number | null>(null);
  const authState = useRecoilValue(authTokenState);
  const isLoggedIn = Boolean(authState?.token);

  const handleMenuOpne = (menuNumber) => {
    console.log("click menu number", menuNumber, isOpenMenu);
    if (menuNumber === isOpenMenu) {
      return setIsOpenMenu(null);
    }
    setIsOpenMenu(menuNumber);
  };

  return (
    <HeaderContainer>
      {isOpenMenu === 0 && <LaptopPageMenu />}
      {isOpenMenu === 1 && <LaptopShopMenu setIsOpenMenu={setIsOpenMenu} />}
      {isOpenMenu === 2 && <LaptopAccountMenu setIsOpenMenu={setIsOpenMenu} />}
      <MenuWrap>
        <MenuIcon
          active={isOpenMenu === 0}
          onClick={() => {
            handleMenuOpne(0);
          }}
        >
          <IoMenuOutline />
        </MenuIcon>
        <Button
          active={isOpenMenu === 1}
          content="shop"
          onClick={() => {
            handleMenuOpne(1);
          }}
        />
        <Button
          active={isOpenMenu === 2}
          content="account"
          onClick={() => {
            handleMenuOpne(2);
          }}
        />
        <Button
          active={isOpenMenu === 3}
          content="search"
          onClick={() => {
            handleMenuOpne(3);
          }}
        />
        <Button
          active={isOpenMenu === 4}
          content="cart"
          onClick={() => {
            handleMenuOpne(4);
          }}
        />
      </MenuWrap>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(motion.div)`
  width: calc(100% - 2rem);
  box-sizing: border-box;
  min-height: 42px;
  height: auto;
  position: fixed;
  background-color: var(--color-lightgray);
  border-radius: 0.375rem;
  bottom: 0.5rem;
  right: 0;
  left: 0;
  padding: 0.375rem 0;
  z-index: 9999;
  margin: 1.5rem auto;
  padding: 6px;
  overflow: hidden;
`;

const MenuWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  button {
    margin: 0;
  }
`;

const MenuIcon = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.75rem;
  font-size: 22px;
  height: 30px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "var(--color-point)" : "var(--color-lightgray")};
  :hover {
    background-color: var(--color-point);
  }
`;

const LeftArea = styled.div`
  display: flex;
`;
const RightArea = styled.div`
  display: flex;
`;

export default HeaderLaptop;
