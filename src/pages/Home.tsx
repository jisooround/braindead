import Archive from "../components/Archive";
import Essentials from "../components/Essentials";
import SpecialProjects from "../components/SpecialProjects";
import MainBanner from "./MainBanner";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <Essentials />
      <SpecialProjects />
      <Archive />
    </div>
  );
};

export default Home;
