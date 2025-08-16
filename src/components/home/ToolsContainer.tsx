import { skillItemType, tools } from "../../assets/staticData/skillsData";
import { rgbToRgba } from "../../utils/functions/rgbToRgba";
import Container from "./Container";

const ToolsContainer = () => {
  return (
    <Container title="Tools" withBg={false}>
      <div
        className="relative h-[14rem] overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))",
        }}
      >
        {tools.map((tool: skillItemType, index: number) => (
          <ToolsElement key={tool.title} index={index} {...tool} />
        ))}
      </div>
    </Container>
  );
};

export default ToolsContainer;
const ToolsElement: React.FC<skillItemType & { index: number }> = ({
  title,
  image,
  color,
  index,
}) => {
  return (
    <div
      className="w-[14rem] h-full rounded-full absolute top-0 toolElements border border-gray-200"
      style={{
        backgroundColor: rgbToRgba(color, 0.1),
        animationDelay: `calc(20s / 8 * (8 - ${index}) * -1)`,
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-1">
        <img src={image} alt={title} width={48} className="w-[4.8rem]" />
        <span className="font-semibold line-clamp-1">{title}</span>
      </div>
    </div>
  );
};
