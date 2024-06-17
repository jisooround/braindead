import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authTokenState } from "../../recoil/atoms/authAtom";
import { v4 as uuid } from "uuid";

// 타입스크립트 인터페이스 정의
interface DropdownContainerProps {
  menuIndex: null | number;
  isVisible: boolean;
  itemType: "list" | "type";
}

const DropMenu = ({ listProps }) => {
  const navigate = useNavigate();
  const [menuIndex, setMenuIndex] = useState<null | number>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);
  const authToken = useRecoilValue(authTokenState);
  const isLoggedIn = authToken !== null && Boolean(authToken.token);

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

  const ReturnButton = () => {
    return (
      <>
        {listProps.map((item) => (
          <p key={uuid()} onClick={() => navigate(item.path)} onMouseEnter={() => handleMouseEnter(item.id)}>
            {item.title}
          </p>
        ))}
      </>
    );
  };

  return (
    <MenuWrap
      css={css`
        width: ${listProps[0].id === 6 ? "239px" : "auto"};
        height: ${menuIndex ? "auto" : "38px"};
        transition: 0.2s;
      `}
      onMouseLeave={handleMouseLeave}
    >
      <ButtonWrap>
        <ReturnButton />
      </ButtonWrap>
      {listProps.map((item) => {
        return (
          <DropdownContainer
            key={uuid()}
            css={css`
              display: ${menuIndex === item.id ? "block" : "none"};
            `}
            isVisible={isDropdownVisible}
            menuIndex={menuIndex}
            itemType={item.type}
          >
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

const MenuWrap = styled.div`
  width: auto;
  background-color: var(--color-lightgray);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 4px 6px;
  box-sizing: border-box;
  border-radius: 0.375rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-content: center;
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
