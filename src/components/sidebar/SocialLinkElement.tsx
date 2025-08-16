import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type props = {
  link: string;
  icon: IconDefinition;
};
const SocialLinkElement: React.FC<props> = ({ link, icon }) => {
  return (
    <a href={link} target="_blank">
      <FontAwesomeIcon
        icon={icon}
        border={true}
        size="lg"
        className="aspect-square hover:text-primaryPink mx-2 rounded-full border-gray-300 hover:border-primaryPink transition-colors duration-500"
      />
    </a>
  );
};

export default SocialLinkElement;
