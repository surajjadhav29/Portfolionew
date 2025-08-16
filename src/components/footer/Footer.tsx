import {
  socialMedia,
  socialMediaType,
} from "../../assets/staticData/socialMedia";
import MainHeading from "../common/MainHeading";
import LetTalkContainer from "./LetTalkContainer";

const Footer = () => {
  return (
    <div className="px-16 py-8 max-sm:px-12 max-sm:py-6 max-xs:px-8 max-xs:py-4">
      <MainHeading title="Follow Me" />
      <div className="grid grid-cols-3 gap-x-16 max-xs:grid-cols-2">
        {socialMedia.map((social: socialMediaType) => (
          <LetTalkContainer
            key={social.name}
            text={social.text}
            name={social.name}
            link={social.link}
            icon={social.icon}
            iconColor={social.iconColor}
          />
        ))}
      </div>
      <p className="text-primaryTextBlack font-semibold text-center text-[1.4rem] mt-16">
        © {new Date().getFullYear()} Suraj Jadhav. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
