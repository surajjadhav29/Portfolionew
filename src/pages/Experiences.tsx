import { experienceData } from "../assets/staticData/experiencesData";
import TimelineContainer from "../components/common/TimelineItem";

const Experiences = () => {
  return (
    <div className="space-y-16">
      <TimelineContainer
        title="Professional Milestones"
        data={experienceData}
        certificatesLink="https://drive.google.com/drive/folders/1OG1MbGihJihAkgv5Gan5BcmRxrKlODHf"
      />
    </div>
  );
};

export default Experiences;
