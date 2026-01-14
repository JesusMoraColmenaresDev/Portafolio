import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HoverEffect } from "./components/AceternityComponents/HoverEffect";// Asumiendo que lo tienes aquí
import { TbFileCv } from "react-icons/tb";

const itemIcons = [
  {
    icon: <FaGithub />,
    text: "GitHub",
    link: "https://github.com/usuario",
  },
  {
    icon: <FaLinkedin />,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/usuario",
  },
  {
    icon: <TbFileCv />,
    text: "Curriculum",
    link: "/files/Curriculum - Jesus Miguel Mora Colmenares.pdf",
  },
];

function App() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-title">Jesus Miguel Mora Colmenares</h1>
      <p className="text-2xl font-bold text-body">Desarrollador fullstack</p>
      <HoverEffect items={itemIcons} />
    </section>
  );
}

export default App;