import {
  faLinkedin,
  faSquareGithub,
  faSquareWhatsapp,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

export type socialMediaType = {
  text?: string;
  name: "Whatsapp" | "Medium" | "Linkedin" | "Twitter" | "Github" | "Telegram";
  link: string;
  icon: IconDefinition;
  iconColor: "#25D366" | "#1877F2" | "#000000" | "#0088CC";
};
export const socialMedia: socialMediaType[] = [
  {
    text: "Let's talk",
    name: "Whatsapp",
    link: "https://wa.me/7517208307",
    icon: faSquareWhatsapp,
    iconColor: "#25D366",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/suraj-jadhav-5b27ab241/",
    icon: faLinkedin,
    iconColor: "#1877F2",
  },
  {
    name: "Github",
    link: "https://github.com/surajjadhav29",
    icon: faSquareGithub,
    iconColor: "#000000",
  },
];
