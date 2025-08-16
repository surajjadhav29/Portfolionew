import NavElement from "./NavElement";
import {
  faDiagramProject,
  faGraduationCap,
  faUserAlt,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

const NavList = () => {
  return (
    <div className="px-6 divide-y-[1px] divide-gray-300">
      <NavElement title="About Me" icon={faUserAlt} link="/" />
      <NavElement title="Experience" icon={faAddressCard} link="/experiences" />
      <NavElement title="Projects" icon={faDiagramProject} link="/projects" />
      <NavElement title="Education" icon={faGraduationCap} link="/education" />
    </div>
  );
};

export default NavList;
