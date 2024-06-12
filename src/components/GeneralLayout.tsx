import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useRecoilValue } from "recoil";
import { authTokenState } from "../recoil/atoms/authAtom";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  isGuestOnly?: boolean;
};

const GeneralLayout = ({ children, isGuestOnly }: Props) => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(authTokenState);

  useEffect(() => {
    if (isGuestOnly && isLoggedIn) {
      // 현재 도메인과 이전 도메인을 비교
      const currentDomain = window.location.hostname;
      const previousDomain = document.referrer;
      console.log("currentDomain", currentDomain);
      console.log("previousDomain", previousDomain);

      if (currentDomain === previousDomain) {
        navigate(-1);
      } else {
        navigate("/");
      }
    }
  }, [isGuestOnly, isLoggedIn, navigate]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default GeneralLayout;
