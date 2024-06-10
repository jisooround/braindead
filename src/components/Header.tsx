import styled from "@emotion/styled";
import logo from "../assets/logo.svg";
import { keyframes } from "@emotion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// 타입스크립트 인터페이스 정의
interface DropdownContainerProps {
  isVisible: boolean;
}

const Header = () => {
  const [menuIndex, setMenuIndex] = useState<null | number>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    console.log(menuIndex);
  }, [menuIndex]);

  const handleMouseEnter = (index: number) => {
    setMenuIndex(index);
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
    setMenuIndex(null);
  };

  const handleClickSearch = () => {
    setIsSearchVisible(true);
  };

  return (
    <HeaderContainer isVisible={isDropdownVisible}>
      <LeftArea>
        <MenuWrap onMouseLeave={handleMouseLeave} isVisible={isDropdownVisible}>
          <div>
            <span onMouseEnter={() => handleMouseEnter(1)}>MENU</span>
            <span onMouseEnter={() => handleMouseEnter(2)}>SHOP ALL</span>
          </div>
          <DropdownContainer isVisible={isDropdownVisible}>
            {menuIndex === 1 && (
              <ul onMouseEnter={() => handleMouseEnter(1)}>
                <li>
                  <Link to="#about">About</Link>
                </li>
                <li>
                  <Link to="#stores">Stores</Link>
                </li>
                <li>
                  <Link to="#fairfax-theatre">Fairfax Theatre</Link>
                </li>
                <li>
                  <Link to="#contact">Contact</Link>
                </li>
              </ul>
            )}
            {menuIndex === 2 && (
              <ul onMouseEnter={() => handleMouseEnter(2)}>
                <li>
                  <Link to="#item1">Apparel</Link>
                </li>
                <li>
                  <Link to="#item2">Accessories</Link>
                </li>
                <li>
                  <Link to="#item3">Footwear</Link>
                </li>
                <li>
                  <Link to="#item3">Homegoods</Link>
                </li>
                <li>
                  <Link to="#item3">Archive</Link>
                </li>
              </ul>
            )}
          </DropdownContainer>
        </MenuWrap>
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
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div<DropdownContainerProps>`
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  display: flex;
  align-content: flex-start;
  padding: 16px 20px 0 20px;
  z-index: 9999;
`;

const LeftArea = styled.div`
  display: flex;
`;

const MenuWrap = styled.div<DropdownContainerProps>`
  height: 38px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px 6px;
  background-color: var(--color-lightgray);
  box-sizing: border-box;
  border-radius: ${({ isVisible }) => (isVisible ? "0.375rem 0.375rem 0 0" : "0.375rem;")};
  div {
    display: flex;
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
  }
`;

const DropdownContainer = styled.div<DropdownContainerProps>`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 50%;
  box-sizing: border-box;
  transform: translateX(-50%);
  border-radius: 0 0 0.375rem 0.375rem;
  background-color: var(--color-lightgray);
  height: ${({ isVisible }) => (isVisible ? "auto" : "0px")};
  transition: 0.2s;
  padding: ${({ isVisible }) => (isVisible ? "16px 12px" : "0 12px;")};
  font-size: 14px;
  li {
    box-sizing: border-box;
    padding: 4px 0;
    cursor: pointer;
    a:hover {
      color: rgb(227, 227, 227);
    }
  }
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

const spin = keyframes`
0% {
    transform: rotateY(360deg);
}
50% {
    transform: rotateY(180deg);
}
100% {
    transform: rotateY(360deg);
}
`;

const Logo = styled.div`
  animation: ${spin} 12s infinite linear;
  position: fixed;
  /* margin: auto; */
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  img {
    mix-blend-mode: difference;
    width: 100%;
    height: 90px;
    /* filter: drop-shadow(0 0 0.75rem white); */
  }
`;

export default Header;
