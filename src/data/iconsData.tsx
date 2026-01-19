import { DiRuby } from "react-icons/di";
import { FaGithub, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbFileCv } from "react-icons/tb";

export const itemIcons = [
  {
    icon: <FaGithub />,
    text: "GitHub",
    link: "https://github.com/JesusMoraColmenaresDev",
  },
  {
    icon: <TbFileCv />,
    text: "Curriculum",
    link: "/files/Curriculum - Jesus Miguel Mora Colmenares.pdf",
  },
  {
    icon: <FaLinkedin />,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/jesus-miguel-mora-colmenares-188244336/",
  },
];

export const stackIcons = [
  { icon: <FaReact className="text-6xl" />, text: "React" },
  { icon: <RiNextjsFill className="text-6xl" />, text: "Next.js" },
  { icon: <FaNodeJs className="text-6xl" />, text: "Node.js" },
  { icon: <DiRuby className="text-6xl" />, text: "Ruby" },
  { icon: <IoLogoJavascript className="text-6xl" />, text: "JavaScript" },
  { icon: <SiTypescript className="text-6xl" />, text: "TypeScript" },
  { icon: <RiTailwindCssFill className="text-6xl" />, text: "TailwindCSS" },
];
