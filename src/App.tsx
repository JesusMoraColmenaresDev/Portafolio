import { FaCheck, FaCheckCircle, FaGithub, FaLinkedin } from "react-icons/fa";
import { HoverEffect } from "./components/AceternityComponents/HoverEffect";// Asumiendo que lo tienes aquí
import { TbFileCv } from "react-icons/tb";
import { TypewriterEffect } from "./components/AceternityComponents/TypewriterEffect";
import { useRef, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { motion } from "motion/react";

const itemIcons = [
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

const name = [
  { text: "Jesus" , className: "text-title" },
  { text: "Miguel" , className: "text-title" },
  { text: "Mora" , className: "text-title" },
  { text: "Colmenares" , className: "text-title" },
];

const role = [
  { text: "Desarrollador" , className: "text-body" },
  { text: "Fullstack" , className: "text-body" },
];

function App() {

  const titleRef = useRef<HTMLParagraphElement>(null);
  const [copyIcon, setCopyIcon] = useState(<MdContentCopy />);
  const [copyEmail, setCopyEmail] = useState(false);


  const handleCopy = () => {
    if (titleRef.current) {
      navigator.clipboard.writeText(titleRef.current.textContent || "");
      setCopyIcon(<FaCheck className="text-green-500" />);
      setCopyEmail(true);
    }
  };

  return (
    <section className="w-full h-full flex flex-col justify-center items-center gap-16">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-center items-center gap-2"
      >
        <TypewriterEffect words={name}/>
        <TypewriterEffect words={role} className="sm:text-xl md:text-2xl lg:text-3xl "></TypewriterEffect>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <HoverEffect items={itemIcons} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="flex justify-center items-center gap-2 w-full"
      >
        <p className="text-body bg-card text-xl opacity-70 border p-3 border-line rounded-3xl" ref={titleRef}>jesusmiguelmora.dev@gmail.com</p>
        <button onClick={handleCopy} title={copyEmail ? "Correo copiado" : "Copiar correo"} className="cursor-pointer">{<HoverEffect items={[{ icon: copyIcon }]}></HoverEffect>}</button>
      </motion.div>

    </section>
  );
}

export default App;