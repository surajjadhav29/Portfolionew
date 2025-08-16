import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

type props = {
  title: string;
  icon: IconDefinition;
  link: string;
};
const NavElement: React.FC<props> = ({ title, icon, link }) => {
  return (
    <NavLink
      key={link}
      to={link}
      className={({ isActive }) =>
        `w-full py-3 px-8 rounded-lg flex items-center gap-3 transition-colors duration-500 ${
          isActive
            ? "bg-primaryPink text-primaryWhite"
            : "hover:text-primaryPink"
        }`
      }
    >
      <FontAwesomeIcon icon={icon} />
      <p className="text-[1.7rem] font-semibold">{title}</p>
    </NavLink>
  );
};

export default NavElement;
