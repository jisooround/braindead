import { forwardRef } from "react";
import styled from "@emotion/styled";
import { ListItem } from "../../types/header";
import { v4 as uuid } from "uuid";
import { goTo } from "../../utils/goTo";
import { useNavigate } from "react-router-dom";

const PageMenuList: ListItem[] = [
  { name: "About", path: "/pages/about-us" },
  { name: "Stores", path: "/pages/stores" },
  { name: "Contact", path: "/pages/contact" },
];

const LaptopPageMenu = () => {
  const navigate = useNavigate();
  return (
    <PageMenu>
      <ul>
        {PageMenuList.map((menu) => {
          return (
            <li
              key={uuid()}
              onClick={() => {
                goTo(navigate, menu.path);
              }}
            >
              {menu.name}
            </li>
          );
        })}
      </ul>
    </PageMenu>
  );
};

const PageMenu = styled.nav`
  width: 100%;
  padding: 10px 12px 34px 12px;
  display: flex;
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    li {
      text-transform: uppercase;
      font-size: 14px;
      cursor: pointer;
      :hover {
        color: var(--color-gray);
        transition: 0.2s;
      }
    }
  }
`;

export default LaptopPageMenu;
