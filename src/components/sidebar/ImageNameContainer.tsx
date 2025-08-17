import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profilePic from "../../../public/Rectangle 8-2.jpeg";
import SocialLinkElement from "./SocialLinkElement";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const ImageNameContainer = () => {
  return (
    <div className="relative">
      <div
        className="w-full h-[12rem] bg-primaryPink absolute top-0 left-0"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 10%, 0 100%)",
        }}
      ></div>

      <div className="mt-8 mb-4">
        <img
          src={profilePic}
          className="rounded-full w-[135px] lg:w-[200px] mx-auto relative aspect-square hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="text-center">
        <h5 className="text-[2.2rem] font-semibold">Suraj Jadhav</h5>
        <p className="font-medium opacity-75 text-[1.7rem]">
          Frontend Developer
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 py-4">
        <SocialLinkElement
          link="https://www.linkedin.com/in/suraj-jadhav-5b27ab241/"
          icon={faLinkedin}
        />
        <SocialLinkElement
          link="https://github.com/surajjadhav29"
          icon={faGithub}
        />
        <SocialLinkElement
          link="mailto:surajjadhav8307@gmail.com"
          icon={faEnvelope}
        />
      </div>
    </div>
  );
};

export default ImageNameContainer;
