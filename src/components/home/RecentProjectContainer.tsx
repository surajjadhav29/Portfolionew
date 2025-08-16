import {
  projectItemType,
  projects,
} from "../../assets/staticData/projectsData";
import Container from "./Container";
import ProjectCard from "./ProjectCard";

const RecentProjectContainer = () => {
  return (
    <Container title="Recent Projects" withBg={false}>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-xs:flex-col">
          {projects.map((item: projectItemType) => (
            <ProjectCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RecentProjectContainer;
