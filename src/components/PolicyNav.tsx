import { Link, useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const policyMenuList = [
  { title: "TERMS OF SERVICE", path: "/pages/terms-of-service" },
  { title: "SHIPPING & RETURNS POLICY", path: "/pages/refund-policy" },
  { title: "PRIVACY POLICY", path: "/pages/privacy-policy" },
  { title: "RETURN AN ITEM", path: "#" },
];

const PolicyNav = () => {
  const { pathname } = useLocation();
  return (
    <PolicyNavContainer className="policy-nav">
      <h4>CUSTOMER SERVICE</h4>
      <ul>
        {policyMenuList.map((item, index) => {
          const isActive = pathname === item.path;
          return (
            <Link to={item.path}>
              <li
                key={index}
                css={css`
                  ${isActive &&
                  css`
                    color: var(--color-pointgray);
                  `}
                `}
              >
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </PolicyNavContainer>
  );
};

const PolicyNavContainer = styled.div`
  position: fixed;
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
  li {
    cursor: pointer;
    :hover {
      color: var(--color-pointgray);
      transition: 0.2s;
    }
  }
`;

export default PolicyNav;
