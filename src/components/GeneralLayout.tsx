import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const GeneralLayout = ({ children }: Props) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default GeneralLayout;
