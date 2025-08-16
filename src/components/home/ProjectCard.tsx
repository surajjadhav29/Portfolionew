import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projectItemType } from "../../assets/staticData/projectsData";
import {
  faAppStoreIos,
  faGooglePlay,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircleArrowRight,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import PrimaryBtn from "../common/PrimaryBtn";
type props = {
  fullMode?: boolean;
};
const ProjectCard: React.FC<projectItemType & props> = ({
  title,
  image,
  description,
  githubLink,
  previewLink,
  appStoreLink,
  playStoreLink,
  fullMode = false,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex-1 bg-primaryWhite rounded-2xl relative ${
        fullMode ? "p-6" : "group"
      }`}
      style={{
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.03)",
      }}
    >
      <img
        src={image}
        alt={title}
        className={`aspect-video object-cover ${
          fullMode
            ? "rounded-xl mx-auto w-full object-center"
            : "rounded-t-2xl w-full h-[15rem] object-top"
        }`}
      />
      <div className={`${fullMode ? "mt-4" : "p-4"}`}>
        <h5
          className={`font-semibold my-4 ${
            fullMode ? "mt-4 text-[2rem]" : "text-[1.8rem] line-clamp-1"
          }`}
        >
          {title}
        </h5>
        <p className={`${fullMode ? "" : "line-clamp-3"}`}>{description}</p>
      </div>
      {fullMode === false ? (
        <>
          <div className="absolute top-0 left-0 rounded-2xl w-full h-full transition-all duration-500 group-hover:backdrop-blur-xl"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full hidden group-hover:block">
            <PrimaryBtn
              title="Details"
              icon={faCircleArrowRight}
              onPressHandler={() => navigate("/projects")}
              containerStyle="w-max mx-auto"
            />
            <div className="flex justify-between p-4 mt-4">
              <Link to={previewLink} target="_blank">
                <FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  size="2xl"
                  className="text-primaryPink cursor-pointer hover:animate-bounce"
                />
              </Link>
              {/* <Link to={githubLink} target="_blank">
                <FontAwesomeIcon
                  icon={faSquareGithub}
                  size="2xl"
                  className="text-primaryPink cursor-pointer hover:animate-bounce"
                />
              </Link> */}
            </div>
          </div>
        </>
      ) : (
        <div className="mt-4 space-x-8">
          <Link to={previewLink} target="_blank">
            <FontAwesomeIcon
              icon={faSquareArrowUpRight}
              size="2xl"
              className="text-primaryPink cursor-pointer"
            />
          </Link>
          {playStoreLink && (
            <Link to={playStoreLink} target="_blank">
              <FontAwesomeIcon
                icon={faGooglePlay}
                size="2xl"
                className="text-primaryPink cursor-pointer"
              />
            </Link>
          )}
          {appStoreLink && (
            <Link to={appStoreLink} target="_blank">
              <FontAwesomeIcon
                icon={faAppStoreIos}
                size="2xl"
                className="text-primaryPink cursor-pointer"
              />
            </Link>
          )}
          {githubLink && (
            <Link to={githubLink} target="_blank">
              <FontAwesomeIcon
                icon={faSquareGithub}
                size="2xl"
                className="text-primaryPink cursor-pointer"
              />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
