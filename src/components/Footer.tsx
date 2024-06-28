import styled from "@emotion/styled";
import FooterMenu from "./FooterMenu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

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
  const [currentTime, setCurrentTime] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  useEffect(() => {
    // 현재 시간 업데이트
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000); // 1초마다 시간 업데이트

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // 현재 위치 정보 가져오기
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipinfo.io?token=64a14ffb08c1ce");
        const data = await response.json();
        setLocation(data.country);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <FooterContainer isDeskTop={isDesktop}>
      <MenuArea isDeskTop={isDesktop}>
        {isDesktop && (
          <LocationTime>
            BRAIN DEAD
            <br />
            {location} {currentTime}
          </LocationTime>
        )}
        <FooterMenu title="LEGAL" list={policyList} />
        <FooterMenu title="CUSTOMER" list={policyList} />
        <FooterMenu title="BRAND" list={brandList} />
      </MenuArea>
      <EmailArea isDeskTop={isDesktop}>
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

const FooterContainer = styled.div<{ isDeskTop: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: var(--color-lightpurple);
  box-sizing: border-box;
  padding: ${({ isDeskTop }) => (isDeskTop ? "158px 4px 12px 4px" : "50px 4px 100px 4px")};
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const MenuArea = styled.div<{ isDeskTop: boolean }>`
  display: ${({ isDeskTop }) => (isDeskTop ? "grid" : "flex")};
  flex-direction: column;
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

const EmailArea = styled.div<{ isDeskTop: boolean }>`
  width: 100%;
  display: ${({ isDeskTop }) => (isDeskTop ? "grid" : "block")};
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
