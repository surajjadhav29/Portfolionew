import { educationData } from "../assets/staticData/educationData";
import TimelineContainer from "../components/common/TimelineItem";

const Education = () => {
  return (
    <div className="space-y-16">
      <TimelineContainer
        title="My Academic Foundation"
        data={educationData}
        certificatesLink="https://drive.google.com/drive/folders/1OG1MbGihJihAkgv5Gan5BcmRxrKlODHf"
      />
    </div>
  );
};

export default Education;
