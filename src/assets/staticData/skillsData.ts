import htmlIcon from "../images/skills/icons8-html.svg";
import cssIcon from "../images/skills/icons8-css.svg";
import jsIcon from "../images/skills/icons8-javascript.svg";
import nextIcon from "../images/skills/icons8-nextjs.svg";
import tsIcon from "../images/skills/icons8-typescript.svg";
import reactIcon from "../images/skills/icons8-react-native.svg";
import reduxIcon from "../images/skills/icons8-redux.svg";
import tailwindIcon from "../images/skills/icons8-tailwind-css.svg";
import gitIcon from "../images/skills/icons8-git.svg";
import expoIcon from "../images/skills/icons8-expo.svg";
import awsIcon from "../images/skills/icons8-aws.svg";
import nodeIcon from "../images/skills/icons8-nodejs.svg";
import figmaIcon from "../images/skills/icons8-figma.svg";
import sassIcon from "../images/skills/icons8-sass.svg";
import expressIcon from "../images/skills/icons8-express-js.svg";
import postmanIcon from "../images/skills/icons8-postman-api.svg";
import dockerIcon from "../images/skills/icons8-docker.svg";
import testflightIcon from "../images/skills/icons8-testflight.svg";
import webpackIcon from "../images/skills/icons8-webpack.svg";

export type skillItemType = {
  title: string;
  color: string;
  image: string;
  percent: number;
};
export const skills: skillItemType[] = [
  // Tier 1: High Priority Skills
  {
    title: "React.js",
    color: "rgb(97, 218, 251)", // React logo blue
    image: reactIcon,
    percent: 90,
  },
  {
    title: "JavaScript",
    color: "rgb(247, 223, 138)", // Pale yellow
    image: jsIcon,
    percent: 90,
  },
  {
    title: "TypeScript",
    color: "rgb(49, 120, 198)", // Muted blue
    image: tsIcon,
    percent: 80,
  },
  {
    title: "Next.js",
    color: "rgb(33, 33, 33)", // Charcoal grey
    image: nextIcon,
    percent: 85,
  },
  {
    title: "Tailwind CSS",
    color: "rgb(56, 178, 172)", // Teal
    image: tailwindIcon,
    percent: 90,
  },
  {
    title: "HTML",
    color: "rgb(247, 141, 167)", // Soft pink
    image: htmlIcon,
    percent: 90,
  },
  {
    title: "CSS",
    color: "rgb(126, 201, 242)", // Light blue
    image: cssIcon,
    percent: 85,
  },

  // Tier 2: Medium Priority Skills
  {
    title: "Redux",
    color: "rgb(118, 74, 188)", // Soft purple
    image: reduxIcon,
    percent: 80,
  },
  {
    title: "Node.js",
    color: "rgb(139, 195, 74)", // Light green
    image: nodeIcon,
    percent: 60,
  },
  {
    title: "Express.js",
    color: "rgb(99, 99, 99)", // Dark grey
    image: expressIcon,
    percent: 50,
  },
  {
    title: "Sass",
    color: "rgb(204, 102, 153)", // Light magenta
    image: sassIcon,
    percent: 50,
  },
];

export const tools: skillItemType[] = [
  // Tier 1: High Priority Tools
  {
    title: "Expo",
    color: "rgb(33, 33, 33)", // Same as Next.js color
    image: expoIcon,
    percent: 90,
  },
  {
    title: "Git/GitHub",
    color: "rgb(240, 80, 50)", // Muted coral
    image: gitIcon,
    percent: 70,
  },
  {
    title: "Postman",
    color: "rgb(255, 102, 0)", // Postman Orange
    image: postmanIcon,
    percent: 75,
  },
  {
    title: "TestFlight",
    color: "rgb(0, 122, 255)", // TestFlight Blue
    image: testflightIcon,
    percent: 75,
  },

  // Tier 3: Lower Priority Tools
  {
    title: "Docker",
    color: "rgb(0, 123, 193)", // Docker Blue
    image: dockerIcon,
    percent: 60,
  },
  {
    title: "AWS",
    color: "rgb(255, 153, 51)", // AWS Orange
    image: awsIcon,
    percent: 50,
  },
  {
    title: "Figma",
    color: "rgb(162, 89, 255)", // Lavender purple
    image: figmaIcon,
    percent: 40,
  },
  {
    title: "Webpack",
    color: "rgb(142, 214, 251)", // Webpack Light Blue
    image: webpackIcon,
    percent: 50,
  },
];
