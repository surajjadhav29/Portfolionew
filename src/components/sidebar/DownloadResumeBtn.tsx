import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import PrimaryBtn from "../common/PrimaryBtn";

const DownloadResumeBtn = () => {
  return (
    <div className="p-6">
      <a
        href="https://drive.google.com/file/d/1lEEkDkfbpOZGfkYK_jae8OBtjkN4ISx2/view?usp=sharing"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <PrimaryBtn
          title="Download Resume"
          icon={faCloudArrowDown}
          animation="beat"
        />
      </a>
    </div>
  );
};

export default DownloadResumeBtn;
