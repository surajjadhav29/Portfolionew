import theGood from "/public/image.webp";
import mangochairs from "/public/mangochair.png";

export type projectItemType = {
  title: string;
  image: string;
  description: string;
  githubLink: string;
  previewLink: string;
  playStoreLink?: string;
  appStoreLink?: string;
};
export const projects: projectItemType[] = [
  {
    title: "The Good Home Teams",
    image: theGood,
    description:
      "Collaborated in developing a responsive, dynamic UI using Tailwind CSS, optimizing for mobile-first design and minimizing CSS overhead to enhance performance and scalability.Integrated the frontend with a headless CMS, enabling seamless real-time content updates and dynamic UI management via API for non-technical users.•Implemented Server-Side Rendering (SSR) and Static Site Generation (SSG) to improve SEO, page load times, and contentdelivery efficiency.",
    githubLink: "",
    previewLink: "https://thegoodhomesteam.com/",
  },

  {
    title: "Contact Based Tasks Management",
    image: mangochairs,
    description:
      "Developed a local-first, contact-based task management app using React Native and Expo. Leveraged Expo Contacts API and Watermelon DB for offline data storage and synchronization. Implemented features for task creation, editing, and deletion, ensuring seamless offline access. Optimized data handling and state management for a smooth user experience.",
    githubLink: "",
    previewLink: "https://mangochairs.com/",
  },
];
export const profProject: projectItemType[] = [
  {
    title: "The Good Home Teams",
    image: theGood,
    description:
      "Collaborated in developing a responsive, dynamic UI using Tailwind CSS, optimizing for mobile-first design and minimizing CSS overhead to enhance performance and scalability.Integrated the frontend with a headless CMS, enabling seamless real-time content updates and dynamic UI management via API for non-technical users.•Implemented Server-Side Rendering (SSR) and Static Site Generation (SSG) to improve SEO, page load times, and contentdelivery efficiency.",
    githubLink: "",
    previewLink: "https://thegoodhomesteam.com/",
  },
  {
    title: "Mangochairs",
    image: mangochairs,
    description:
      "Collaborated in developing a responsive, dynamic UI using Tailwind CSS, optimizing for mobile-first design and minimizing CSS overhead to enhance performance and scalability.Integrated the frontend with a headless CMS, enabling seamless real-time content updates and dynamic UI management via API for non-technical users.•Implemented Server-Side Rendering (SSR) and Static Site Generation (SSG) to improve SEO, page load times, and contentdelivery efficiency.",
    githubLink: "",
    previewLink: "https://mangochairs.com/",
  },
];
