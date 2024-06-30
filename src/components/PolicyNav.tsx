import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

const policyMenuList = [
  { title: "TERMS OF SERVICE", path: "/pages/terms-of-service" },
  { title: "SHIPPING & RETURNS POLICY", path: "/pages/refund-policy" },
  { title: "PRIVACY POLICY", path: "/pages/privacy-policy" },
  { title: "RETURN AN ITEM", path: "#" },
];

const PolicyNav = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const { pathname } = useLocation();
  return (
    <PolicyNavContainer className="policy-nav" isDesktop={isDesktop}>
      <h4>CUSTOMER SERVICE</h4>
      <ul>
        {policyMenuList.map((item, index) => {
          return (
            <ListItem key={index} isActive={pathname === item.path}>
              <Link to={item.path}> {item.title}</Link>
            </ListItem>
          );
        })}
      </ul>
    </PolicyNavContainer>
  );
};

const PolicyNavContainer = styled.div<{ isDesktop: boolean }>`
  position: fixed;
  display: ${({ isDesktop }) => (isDesktop ? "block" : "none")};
  width: 15.875rem;
  left: 1.25rem;
  top: 60px;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.375rem;
  background-color: var(--color-lightgray);
  h4 {
    padding-bottom: 0.75rem;
  }
`;

const ListItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "var(--color-gray)" : "var(--color-black)")};
  :hover {
    color: var(--color-gray);
    transition: 0.2s;
  }
`;

export default PolicyNav;
