import { useNavigate } from "react-router-dom";
import Container from "./Container";
import PrimaryBtn from "../common/PrimaryBtn";
import TitleValueWithDateContainer from "../common/TitleValueWithDateContainer";

const AboutMeContainer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container title="About Me">
        <p className="mb-4">
          I’m Suraj Jadhav—a dedicated frontend developer turning ideas into
          seamless, high-performance user experiences. With 1.5 years of
          hands-on expertise in React.js and Next.js I design intuitive UIs,
          optimize performance, and prioritize secure, user-centric solutions.
          Currently expanding my skill set into backend development with
          Node.js, I'm evolving into a full-stack creator capable of delivering
          end-to-end digital products. Let’s collaborate and bring your ideas to
          life.
        </p>
      </Container>
      <div className="grid grid-cols-1 gap-8">
        <Container title="Experience">
          <TitleValueWithDateContainer
            title="Frontend Developer"
            valueName="Consociate Solutions Pvt Ltd"
            valueLink="https://consociatesolutions.com/"
            valueText="As a Frontend Developer at Consociate Solutions Pvt Ltd, I migrated Django templates to React.js and built Next.js app, deploying it on both Google
            Play and Apple App Store."
            date="Feb 2024 - July 2025"
          >
            <PrimaryBtn
              title="Show Me"
              bg="no"
              onPressHandler={() => navigate("/experiences")}
              containerStyle="w-max mt-8 ml-auto"
            />
          </TitleValueWithDateContainer>
        </Container>
        <Container title="Education">
          <TitleValueWithDateContainer
            title="Bachelor of Engineering"
            valueName="JSPM Rajarshi Shahu College Of Engineering Tathawade Pune"
            valueLink="https://www.jspmrscoe.edu.in/"
            valueText="Information Technology"
            date="Aug 2019 - Jul 2023"
          >
            <PrimaryBtn
              title="Show Me"
              bg="no"
              onPressHandler={() => navigate("/education")}
              containerStyle="w-max mt-8 ml-auto h-full"
            />
          </TitleValueWithDateContainer>
        </Container>
      </div>
    </>
  );
};

export default AboutMeContainer;
