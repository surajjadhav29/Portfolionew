import AboutMeContainer from "../components/home/AboutMeContainer";
import IntroWithImage from "../components/home/IntroWithImage";
import RecentProjectContainer from "../components/home/RecentProjectContainer";
import SkillsContainer from "../components/home/SkillsContainer";
import ToolsContainer from "../components/home/ToolsContainer";
export const Home = () => {
  return (
    <div className="space-y-16">
      <IntroWithImage />
      <AboutMeContainer />
      <SkillsContainer />
      <ToolsContainer />
      <RecentProjectContainer />
    </div>
  );
};

export default Home;
