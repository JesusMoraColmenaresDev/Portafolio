import { FaCheck, FaGraduationCap} from "react-icons/fa";
import { HoverEffect } from "./components/AceternityComponents/HoverEffect";// Asumiendo que lo tienes aquí
import { TypewriterEffect } from "./components/AceternityComponents/TypewriterEffect";
import { useRef, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import EducationCard from "./components/EducationCard";
import AnimatedSection from "./components/AnimatedSection";
import { FocusCards } from "./components/AceternityComponents/FocusCards";
import { ExpandableProjectCards } from "./components/AceternityComponents/ExpandableProjectCards";
import { projects } from "./data/projectsData";
import { itemIcons, stackIcons } from "./data/iconsData";
import { SiUdemy } from "react-icons/si";



const role = [
  { text: "Desarrollador", className: "text-body" },
  { text: "Fullstack", className: "text-body" },
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
    <main className="flex flex-col justify-center p-8 items-center gap-26 md:pb-70">
      <section className="w-full h-screen flex flex-col justify-center items-center gap-8 ">
        
        <AnimatedSection className="flex flex-col justify-center items-center gap-2">
          
          <p className="max-md:text-[24px] md:text-4xl font-bold text-title text-center">Jesus Miguel Mora Colmenares</p>
          <TypewriterEffect words={role} className=" max-md:text-[20px] md:text-3xl " />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <HoverEffect items={itemIcons} />
        </AnimatedSection>

        <AnimatedSection delay={0.6} className="flex justify-center items-center  w-full">
          <p className="text-body bg-card text-xl max-[500px]:text-[16px] opacity-70 border p-3 border-line rounded-3xl" ref={titleRef}>
            jesusmiguelmora.dev@gmail.com
          </p>
          <button
            onClick={handleCopy}
            title={copyEmail ? "Correo copiado" : "Copiar correo"}
            className="cursor-pointer"
          >
            <HoverEffect items={[{ icon: copyIcon }]} />
          </button>
        </AnimatedSection>
      </section>

      <section>
        <AnimatedSection
          useInViewLogic
          delay={0.1}
          duration={0.8}
          className="flex flex-col items-center gap-8 "
        >
          <h2 className="text-4xl font-bold text-title">Educación</h2>
          <div className="w-full flex max-[1100px]:flex-col gap-6 justify-center items-stretch">
            <EducationCard
              icon={<FaGraduationCap className="text-6xl " />}
              title="Ingenieria Informatica"
              institution="Universidad Nacional Experimental del Tachira (UNET)"
              period="2022 - Actualidad"
            />
            <EducationCard
              icon={<SiUdemy className="text-6xl " />}
              title="React y TypeScript - La Guía Completa Creando +10 Proyectos"
              institution="Udemy - Juan Pablo De la Torre Valdez"
              period="2025"
            />
          </div>
        </AnimatedSection>
      </section>

      <section>
        <AnimatedSection
          useInViewLogic
          delay={0.1}
          duration={0.8}
          className="flex flex-col items-center gap-8 "
        >
          <h2 className="text-4xl font-bold text-title text-center">Stack tecnológico</h2>
          <FocusCards cards={stackIcons} />
        </AnimatedSection>
      </section>

      <AnimatedSection
        useInViewLogic
        delay={0.1}
        duration={0.8}
        className="flex flex-col items-center gap-8"
      >
        <h2 className="text-4xl font-bold text-title">Proyectos</h2>
        <ExpandableProjectCards projects={projects} />
      </AnimatedSection>
    </main>
  );
}

export default App;