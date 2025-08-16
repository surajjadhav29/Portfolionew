import {
  profProject,
  projectItemType,
  // projects,
} from "../assets/staticData/projectsData";
import ProjectCard from "../components/home/ProjectCard";

const Projects = () => {
  return (
    <div className="space-y-16">
      <div>
        <h4 className="font-semibold text-[2.6rem] leading-[3.2rem] mb-8 text-pretty">
          Professional Projects
        </h4>
        <div className="space-y-8">
          {profProject.map((item: projectItemType) => (
            <ProjectCard key={item.title} {...item} fullMode={true} />
          ))}
        </div>
      </div>
      {/* <div>
        <h4 className="font-semibold text-[2.6rem] leading-[3.2rem] mb-8 text-pretty">
          Personal Projects
        </h4>
        <div className="space-y-8">
          {projects.map((item: projectItemType) => (
            <ProjectCard key={item.title} {...item} fullMode={true} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
