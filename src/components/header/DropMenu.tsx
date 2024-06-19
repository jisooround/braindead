import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authTokenState } from "../../recoil/atoms/authAtom";
import { v4 as uuid } from "uuid";

// 타입스크립트 인터페이스 정의
interface DropdownContainerProps {
  menuIndex?: null | number;
  isVisible?: boolean;
  itemType?: "list" | "type";
  isMenu?: boolean;
  rightPosition?: boolean;
}

const DropMenu = ({ listProps }) => {
  const navigate = useNavigate();
  const [menuIndex, setMenuIndex] = useState<null | number>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);
  const authState = useRecoilValue(authTokenState);
  const isLoggedIn = Boolean(authState?.token);

  useEffect(() => {
    handleMouseLeave();
  }, [isLoggedIn]);

  const handleMouseEnter = (index: number) => {
    setMenuIndex(index);
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
    setMenuIndex(null);
  };

  return (
    <MenuWrap isVisible={isDropdownVisible} rightPosition={listProps[0].id === 6} menuIndex={menuIndex} onMouseLeave={handleMouseLeave}>
      <ButtonWrap>
        {listProps.map((item) => (
          <p key={uuid()} onClick={() => navigate(item.path)} onMouseEnter={() => handleMouseEnter(item.id)}>
            {item.title}
          </p>
        ))}
      </ButtonWrap>
      {listProps.map((item) => {
        return (
          <DropdownContainer key={uuid()} isMenu={menuIndex === item.id} isVisible={isDropdownVisible} menuIndex={menuIndex} itemType={item.type}>
            {
              <ul onMouseEnter={() => handleMouseEnter(item.id)}>
                {item.type === "list" &&
                  item.element.map((subItem) => {
                    return (
                      <Link key={uuid()} to={subItem.path}>
                        <li>{subItem.name}</li>
                      </Link>
                    );
                  })}
                {item.type === "component" &&
                  item.element.map((subItem) => {
                    return <li key={uuid()}>{subItem.component}</li>;
                  })}
              </ul>
            }
          </DropdownContainer>
        );
      })}
    </MenuWrap>
  );
};

const growHeight = keyframes`  
0% {
  max-height: 38px;  
}
100% {
  max-height: 500px;    

}
`;

const shrinkHeight = keyframes`
  0% {
    max-height: 500px;
  }
  100% {
    max-height: 38px;
  }
`;

const MenuWrap = styled.div<DropdownContainerProps>`
  width: ${({ rightPosition }) => (rightPosition ? "239px" : "auto")};
  height: ${({ menuIndex }) => (menuIndex ? "auto" : "38px")};
  background-color: var(--color-lightgray);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  padding: 4px 6px;
  box-sizing: border-box;
  border-radius: 0.375rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    display: flex;
    align-items: center;
    background-color: var(--color-lightgray);
    padding: 0 0.75rem;
    font-size: 14px;
    height: 30px;
    border-radius: 6px;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    white-space: nowrap;
    :hover {
      background-color: var(--color-point);
    }
  }
`;

const DropdownContainer = styled.div<DropdownContainerProps>`
  overflow: hidden;
  display: ${({ isMenu }) => (isMenu ? "block" : "none")};
  animation: ${growHeight} 0.5s ease-in-out forwards;
  ul {
    font-size: 14px;
    line-height: 1.25rem;
    padding: ${({ itemType }) => (itemType === "list" ? "16px 12px" : "auto")};
    box-sizing: border-box;
    li {
      cursor: pointer;
      :hover {
        color: ${({ itemType }) => (itemType === "list" ? "var(--color-gray)" : "auto")};
        transition: 0.2s;
      }
    }
  }
`;

export default DropMenu;
