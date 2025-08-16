import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMediaType } from "../../assets/staticData/socialMedia";
import { useState } from "react";

const LetTalkContainer: React.FC<socialMediaType> = ({
  text = "Follow on",
  name,
  link,
  icon,
  iconColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={link}
      target="_blank"
      className="border-b border-gray-200 py-4 flex justify-between items-center hover:text-primaryPink"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <span className="">
          {text} <strong className="font-semibold">{name}</strong>
        </span>
      </div>
      <FontAwesomeIcon
        icon={icon}
        size="lg"
        color={iconColor}
        bounce={isHovered}
      />
    </a>
  );
};

export default LetTalkContainer;
