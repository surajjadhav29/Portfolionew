import { ReactNode } from "react";
import MainHeading from "../common/MainHeading";
import WhiteContainer from "../common/WhiteContainer";
type props = {
  title: string;
  children: ReactNode;
  withBg?: boolean;
};

const Container: React.FC<props> = ({ title, children, withBg = true }) => {
  return (
    <div className="flex-1">
      <MainHeading title={title} />
      {withBg ? (
        <WhiteContainer>
          <div className="p-4">{children}</div>
        </WhiteContainer>
      ) : (
        <div className="">{children}</div>
      )}
    </div>
  );
};

export default Container;
