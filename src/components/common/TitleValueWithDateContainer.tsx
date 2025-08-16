import { ReactNode } from "react";
import { Link } from "react-router-dom";
type props = {
  title: string;
  valueName: string;
  valueLink: string;
  valueText?: string;
  date: string;
  children?: ReactNode;
};
const TitleValueWithDateContainer: React.FC<props> = ({
  title,
  valueName,
  valueLink,
  valueText,
  date,
  children,
}) => {
  return (
    <div className="h-auto">
      <h4 className="font-semibold text-[2.2rem] leading-[3.2rem] mb-2 text-pretty flex items-center justify-between">
        {title}
        <span className="text-[1.4rem] text-primaryTextGray font-medium">
          {date}
        </span>
      </h4>
      <Link
        to={valueLink}
        target="_blank"
        className="border-primaryTextBlack  h-full w-max font-semibold text-[1.7rem] text-pretty leading-[0rem] hover:border-b-2 pb-1"
      >
        {valueName}
      </Link>
      {valueText && <p className="mt-6">{valueText}</p>}
      {children}
    </div>
  );
};

export default TitleValueWithDateContainer;
