import styled from "@emotion/styled";
import { ListItem } from "../../types/header";
import { v4 as uuid } from "uuid";
import Button from "../common/Button";
import useLogin from "../../hooks/useLogin";

const ShopMenuList: ListItem[] = [
  { name: "All Products", path: "/product/all-products" },
  { name: "Top", path: "/products/top" },
  { name: "Bottom", path: "/products/bottom" },
  { name: "Footwear", path: "/products/footwear" },
  { name: "Accessory", path: "/products/accessory" },
  { name: "Eyewear", path: "/products/eyewear" },
  { name: "Homegoods", path: "/products/homegoods" },
];

type Props = {
  setIsOpenMenu: React.Dispatch<React.SetStateAction<number>>;
};

const LaptopPageMenu = ({ setIsOpenMenu }: Props) => {
  return (
    <ShopMenu>
      {ShopMenuList.map((menu) => {
        return (
          <div key={uuid()}>
            <Button
              content={menu.name}
              bg="white"
              bgHover="point"
              path={menu.path}
              onClick={() => {
                setIsOpenMenu(null);
              }}
            />
          </div>
        );
      })}
    </ShopMenu>
  );
};

const ShopMenu = styled.nav`
  padding: 10px 12px 34px 12px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export default LaptopPageMenu;
