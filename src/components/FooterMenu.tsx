import styled from "@emotion/styled";
import Button from "./common/Button";
import { useLocation } from "react-router-dom";
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

  return (
    <FooterMenuWrap>
      <MenuTitle>{title}</MenuTitle>
      <ul>
        {list.map((item, index) => {
          return (
            <ListItem key={index}>
              <Button content={item.name} active={pathname === item.path} path={item.path} />
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

const ListItem = styled.li`
  button {
    margin-bottom: 5px;
  }
`;

export default FooterMenu;
