import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";
import { useRecoilState, useRecoilValue } from "recoil";
import { authTokenState } from "../recoil/atoms/authAtom";
import { useEffect } from "react";
import { previousUrlState } from "../recoil/atoms/previousUrlAtom";
import Logo from "./common/Logo";

type Props = {
  children: React.ReactNode;
  isGuestOnly?: boolean;
};

const GeneralLayout = ({ children, isGuestOnly }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const authToken = useRecoilValue(authTokenState);
  const isLoggedIn = authToken !== null && Boolean(authToken.token);
  const [previousUrl, setPreviousUrl] = useRecoilState(previousUrlState);

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
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default GeneralLayout;
