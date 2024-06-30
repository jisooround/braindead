import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useRecoilState, useRecoilValue } from "recoil";
import { authTokenState } from "../recoil/atoms/authAtom";
import { useEffect } from "react";
import { previousUrlState } from "../recoil/atoms/previousUrlAtom";
import Logo from "./common/Logo";
import HeaderDesktop from "./header/HeaderDesktop";
import { useMediaQuery } from "react-responsive";
import HeaderLaptop from "./header/HeaderLaptop";

type Props = {
  children: React.ReactNode;
  isGuestOnly: boolean;
  isMemberOnly: boolean;
};

const GeneralLayout = ({ children, isGuestOnly, isMemberOnly }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const authState = useRecoilValue(authTokenState);
  const isLoggedIn = Boolean(authState?.token);
  const [previousUrl, setPreviousUrl] = useRecoilState(previousUrlState);
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  // 페이지마다 현재 URL을 previousAtom에 저장
  useEffect(() => {
    window.scrollTo(0, 0);
    // isGuestOnly 페이지라면 URL상태 저장하지 않고 return
    if (isGuestOnly) {
      return;
    }
    // 현재 domain과 previousAtom에 저장
    setPreviousUrl(`${import.meta.env.VITE_DOMAIN_URL}${location.pathname}`);
  }, [location.pathname, setPreviousUrl]);

  useEffect(() => {
    if (isMemberOnly && !isLoggedIn) {
      navigate("/account/login");
    }
  }, [location.pathname, isLoggedIn]);

  useEffect(() => {
    // isGuestOnly 페이지에서 로그인상태라면 previousURL로 이동
    if (isGuestOnly && isLoggedIn) {
      // previousURL이 null이라면 홈으로 이동
      if (previousUrl === null) {
        navigate("/");
      }
      navigate(previousUrl.split(import.meta.env.VITE_DOMAIN_URL)[1]);
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <Logo />
      {isDesktop ? <HeaderDesktop /> : <HeaderLaptop />}
      {children}
      <Footer />
    </div>
  );
};

export default GeneralLayout;
