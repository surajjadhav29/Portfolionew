import IntroTextContainer from "./IntroTextContainer";
import heroImage from "../../assets/images/Designer(1).png";
const IntroWithImage = () => {
  return (
    <div className="flex justify-center items-center gap-16 max-lg:flex-col-reverse">
      <IntroTextContainer />
      <div className="flex-1 mx-auto">
        <img
          src={heroImage}
          width={340}
          className="animate-morph w-full max-lg:w-[40rem]"
        />
      </div>
    </div>
  );
};

export default IntroWithImage;
