export type TimelineItem = {
  title: string;
  valueName: string;
  valueLink: string;
  date: string;
  achievements: string[];
};

export const educationData: TimelineItem[] = [
  {
    title: "Bachelor of Engineering",
    valueName: "JSPM's Rajarshi Shahu College of Engineering",
    valueLink: "https://www.jspmrscoe.edu.in/",
    date: "Aug 2019 - Jul 2023",
    achievements: [
      "Excelled in core subjects such as Digital Communication, Microprocessors, and Signal Processing.",
      "Developed analytical thinking and problem-solving skills through rigorous coursework and real-world projects.",
      "Applied engineering principles to real-world projects, bridging theoretical knowledge with practical implementation.",
      "Participated in coding hackathons and technical fests, showcasing innovative solutions to real-world problems.",
      "Member of the college's Tech Club, organizing workshops and mentoring peers on emerging technologies.",
      "Contributed to community-driven projects, helping implement technology-driven solutions for social impact.",
    ],
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    valueName: "SMT.SARASWATIBAI BHALE PATIL JR.COLLEGE",
    valueLink:
      "https://schools.org.in/parbhani/27170602706/smt-saraswatibai-bhale-patil-jr-college.html",
    date: "Jun 2017 - Feb 2019",
    achievements: [
      "Specialized in core subjects such as Physics, Chemistry, and Mathematics.",
      "Excelled in practical labs, developing a strong foundation in experimental methodologies.",
      "Participated in science exhibitions, demonstrating innovative experiments and concepts.",
      "Awarded for academic excellence and active participation in extracurricular activities.",
    ],
  },
  {
    title: "Secondary School Certificate (SSC)",
    valueName: "NVS Marathwada High School Parbhani",
    valueLink:
      "https://schools.org.in/parbhani/27171000188/n-v-s-marathwada-p-s-shivaji-nagar.html",
    date: "Jun 2014 - Mar 2017",
    achievements: [
      "Strong performance in core subjects such as Mathematics, Science, and English.",
      "Winner of cricket tournaments in both 7th and 10th grades, showcasing leadership and teamwork skills.",
      "Achieved the title of Kabaddi champion in 10th grade, highlighting physical fitness and strategic gameplay.",
      "Awarded for excellence in academics and sports, balancing academics with co-curricular interests.",
    ],
  },
];
