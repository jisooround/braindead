import styled from "@emotion/styled";
import FooterMenu from "./FooterMenu";
import { Link } from "react-router-dom";

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
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <MenuArea>
        <LocationTime>
          BRAIN DEAD
          <br />
          LOCATION TIME
        </LocationTime>
        <FooterMenu title="LEGAL" list={policyList} />
        <FooterMenu title="CUSTOMER" list={policyList} />
        <FooterMenu title="BRAND" list={brandList} />
      </MenuArea>
      <EmailArea>
        <EmailWrap>
          <p>SUBSCRIBE</p>
          <div className="email-wrap">
            <input required type="email" placeholder="Email" />
            <button type="submit">SUBSCRIBE</button>
          </div>
          <div className="agree-wrap">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">
              I've read and accept the{" "}
              <Link to="/pages/privacy-policy" target="blank">
                Privacy Policy
              </Link>
            </label>
          </div>
        </EmailWrap>
        <Copyright>
          &copy; {currentYear} &middot; BrainDead &middot; <Link to="">Credits</Link>
        </Copyright>
      </EmailArea>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-lightpurple);
  box-sizing: border-box;
  padding: 158px 4px 12px 4px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const MenuArea = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(6, 1fr);
  padding-bottom: 30px;
  width: 100%;
`;

const LocationTime = styled.h2`
  font-weight: 100;
  padding: 0 16px 16px 16px;
  font-size: 3.375rem;
  line-height: 3.5rem;
  grid-column-start: 1;
  grid-column-end: 4;
`;

const EmailArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.75rem;
`;

const EmailWrap = styled.div`
  padding: 0 16px 5px 16px;
  grid-column-start: 1;
  grid-column-end: 4;
  p {
    margin-bottom: 0.5rem;
  }
  div {
    display: flex;
    width: 100%;
  }
  .email-wrap {
    input {
      width: 100%;
      min-height: 65px;
      padding: 0 20px;
      background-color: transparent;
      border: 1px dashed var(--color-black);
      border-radius: 0.375rem;
      :hover {
        border: 1px solid var(--color-black);
      }
      :focus {
        outline: none;
      }
    }
    button {
      margin-left: 0.5rem;
      padding: 0 1.25rem;
      background-color: var(--color-point);
      border-radius: 0.375rem;
      border: 1px solid transparent;
      cursor: pointer;
      :hover {
        background-color: var(--color-black);
        color: var(--color-white);
      }
    }
  }
  .agree-wrap {
    margin-top: 8px;
    label {
      font-size: 12px;
      a {
        border-bottom: 1px solid var(--color-black);
      }
    }
    input {
      float: left;
    }
  }
`;

const Copyright = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  font-size: 12px;
  padding: 0 16px 5px 16px;
`;

export default Footer;
