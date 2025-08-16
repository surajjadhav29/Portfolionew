import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type props = {
  title: string;
  icon?: IconDefinition;
  onPressHandler?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  bg?: "yes" | "no";
  animation?: string;
  containerStyle?: string;
};
const PrimaryBtn: React.FC<props> = ({
  title,
  icon,
  onPressHandler,
  onMouseEnter,
  onMouseLeave,
  animation,
  bg = "yes",
  containerStyle,
}) => {
  const [isHovered, setHovered] = useState(false);
  const animationProps = animation && {
    [animation]: isHovered,
  };

  return (
    <div className={`${containerStyle}`}>
      <button
        type="button"
        onClick={onPressHandler}
        className={`w-full py-2 px-6 rounded-lg flex items-center justify-center gap-4 ${
          bg === "yes"
            ? "text-primaryWhite bg-primaryPink hover:scale-[1.05] transition-transform duration-500"
            : "border border-primaryPink hover:bg-primaryPink transition-colors duration-500 hover:text-primaryWhite"
        }`}
        onMouseEnter={() => {
          if (icon) setHovered(true);
          if (onMouseEnter) onMouseEnter();
        }}
        onMouseLeave={() => {
          if (icon) setHovered(false);
          if (onMouseLeave) onMouseLeave();
        }}
      >
        <p className="text-[1.7rem] font-bold line-clamp-1">
          {title}
          {icon && (
            <FontAwesomeIcon icon={icon} className="ml-2" {...animationProps} />
          )}
        </p>
      </button>
    </div>
  );
};

export default PrimaryBtn;
