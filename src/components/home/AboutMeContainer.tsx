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
          I’m Suraj Jadhav, a frontend developer passionate about building
          smooth, high-performance user experiences. For the past 1.5 years,
          I’ve been working with React.js and Next.js, creating clean
          interfaces, improving performance, and focusing on secure,
          user-friendly solutions. Recently, I’ve started diving into backend
          development with Node.js, aiming to grow into a full-stack developer
          who can handle projects from start to finish. I’d love to collaborate
          and help bring your ideas to life.
        </p>
      </Container>
      <div className="grid grid-cols-1 gap-8">
        <Container title="Experience">
          <TitleValueWithDateContainer
            title="Frontend Developer"
            valueName="Consociate Solutions Pvt Ltd"
            valueLink="https://consociatesolutions.com/"
            valueText="As a Frontend Developer at Consociate Solutions Pvt Ltd,Designed and developed user-friendly, scalable frontend systems using modern frameworks like React JS, Next.JS  Ensured intuitive UI/UX, cross-browser compatibility, and adherence to mobile-first design principles to enhance user experience across various devices"
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
