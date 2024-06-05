import styled from "@emotion/styled";
import Button from "./common/Button";
import { Link, useLocation } from "react-router-dom";
interface List {
  name: string;
  path: string;
}

type Props = {
  title: string;
  list: List[];
};

const FooterMenu = ({ title, list }: Props) => {
  const { pathname } = useLocation();
  console.log("list", pathname);
  return (
    <FooterMenuWrap>
      <MenuTitle>{title}</MenuTitle>
      <ul>
        {list.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link to={item.path}>
                <Button content={item.name} active={pathname === item.path} />
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </FooterMenuWrap>
  );
};

const FooterMenuWrap = styled.div`
  padding: 0 1rem 2rem 1rem;
`;

const MenuTitle = styled.p`
  font-size: 14px;
  padding: 0 0.75rem;
  margin-bottom: 8px;
`;

const ListItem = styled.li``;

export default FooterMenu;
