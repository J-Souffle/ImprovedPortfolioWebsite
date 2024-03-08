import { BsGithub } from "react-icons/bs";
import { CgViewDay, CgWebsite } from "react-icons/cg";
// import { FaPython } from "react-icons/fa";
import type { IconType } from "react-icons/lib";
// import { SiPypi, SiDocker } from "react-icons/si";

interface FeaturedProjectTypeIconType {
  id: number;
  icon: IconType;
  url: string;
}

interface FeaturedProjectType {
  id: number;
  alt: string;
  name: string;
  height: number;
  width: number;
  description: string;
  images: string[];
  tags: string[];
  icons: FeaturedProjectTypeIconType[];
  reversed: boolean;
}

const FeaturedProjectList: FeaturedProjectType[] = [
  {
    id: 0,
    alt: "social network graph",
    name: "Social Network Graph",
    height: 1032,
    width: 1919,
    description:
      "A social network for rare diseases aims to address the critical challenges faced by individuals dealing with rare diseases, particularly focusing on ADCY5-related Dyskinesia, an ultra-rare condition with fewer than 500 known cases worldwide. The lack of resources for finding specialized doctors and connecting with others facing the same rare conditions underscores the need for a dedicated platform to bridge these gaps.",
    images: ["/giphy (1).gif"],
    tags: [
      "Python",
      "OMIM API",
      "HTML/CSS",
      "React",
      "JavaScript",
      "Neo4j",
      "Selenium",
    ],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/Jnguye84/rarediseases?tab=readme-ov-file",
      },
      {
        id: 1,
        icon: CgWebsite,
        url: "https://www.youtube.com/watch?v=nMjota5Zhok&ab_channel=JessicaNguyen",
      },
    ],
    reversed: false,
  },
  {
    id: 1,
    alt: "activity tracker github",
    name: "ActivityLog",
    height: 1031,
    width: 1920,
    description:
      "This Tracker allows users to time their activities using a simple interface. The tracker is written in JavaScript and uses HTML/CSS (This project is still in development).",
    images: ["/giphy (3).gif"],
    tags: [
    "JavaScript", 
    "HTML/CSS",
  ],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/J-Souffle/RecentActivityTracker",
      },
      {
        id: 1,
        icon: CgWebsite,
        url: "https://pypi.org/RecentActivityTracker/",
      },
      {
        id: 2,
        icon: CgViewDay,
        url: "https://giphy.com/gifs/SisAtklykrAYSnf8Hl",
      },
    ],
    reversed: true,
  },
  {
    id: 2,
    alt: "graph guesser",
    name: "Graph Guesser",
    height: 893,
    width: 1666,
    description:
      "A reveresed engineered Desmos where a free image comparasion AI with an api compatible with python was used. We then built the frontend in HTML/CSS and node.js to run Javascript to then converted it to a webapp. Also using python, we generated a dataset of graphs with random offsets to mimic the offsets the user will most likely put. Clarifai then compares the graph to the dataset and gives us a list of which function the graph is most likely to be, and we present that to the user.",
    images: ["/giphy (4).gif"],
    tags: [
    "Python", 
    "HTML/CSS", 
    "JavaScript", 
    "Clarifai API", 
    "Desmos", 
    "Node.js", 
    "Pyqt5",
  ],
    icons: [
      {
        id: 0,
        icon: BsGithub,
        url: "https://github.com/Functional-Dysfunctionals/Graph-Guesser",
      },
      {
        id: 1,
        icon: CgWebsite,
        url: "https://giphy.com/gifs/UK4A9Wkgude001xzfu",
      },
    ],
    reversed: false,
  },
  
];

export default FeaturedProjectList;
