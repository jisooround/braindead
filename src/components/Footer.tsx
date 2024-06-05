import styled from "@emotion/styled";
import FooterMenu from "./FooterMenu";

interface List {
  name: string;
  path: string;
}

const policyList: List[] = [
  {
    name: "TERMS OF SERVICE",
    path: "/pages/terms-of-service",
  },
  {
    name: "SHIPPING & RETURNS POLICY",
    path: "/pages/refund-policy",
  },
  {
    name: "PRIVACY POLICY",
    path: "/pages/privacy-policy",
  },
  {
    name: "RETURN AN ITEM",
    path: "#",
  },
];

const brandList: List[] = [
  {
    name: "ABOUT",
    path: "/pages/about-us",
  },
  {
    name: "FAIRFAX THEATRE",
    path: "#",
  },
  {
    name: "STORES",
    path: "/pages/stores",
  },
  {
    name: "CONTACT",
    path: "/pages/contact",
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <TimeArea>
        BRAIN DEAD
        <br />
        LOCATION TIME
      </TimeArea>
      <MenuArea>
        <FooterMenu title="LEGAL" list={policyList} />
        <FooterMenu title="CUSTOMER" list={policyList} />
        <FooterMenu title="BRAND" list={brandList} />
      </MenuArea>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-lightpurple);
  box-sizing: border-box;
  padding: 158px 4px 12px 4px;
`;

const TimeArea = styled.h2`
  font-weight: 100;
  padding: 0 16px 16px 16px;
  font-size: 3.375rem;
  line-height: 3.5rem;
`;

const MenuArea = styled.div``;

export default Footer;
