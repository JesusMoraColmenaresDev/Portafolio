import { FaCheck, FaCheckCircle, FaGithub, FaGraduationCap, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";
import { HoverEffect } from "./components/AceternityComponents/HoverEffect";// Asumiendo que lo tienes aquí
import { TbFileCv } from "react-icons/tb";
import { TypewriterEffect } from "./components/AceternityComponents/TypewriterEffect";
import { useRef, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { motion, useInView } from "motion/react";
import EducationCard from "./components/EducationCard";
import { SiPrisma, SiTypescript, SiUdemy } from "react-icons/si";
import AnimatedSection from "./components/AnimatedSection";
import ItemIcon from "./components/ItemIcon";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiRuby } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FocusCards } from "./components/AceternityComponents/FocusCards";
import type { Project } from "./types/ProjectType";
import { ExpandableProjectCards } from "./components/AceternityComponents/ExpandableProjectCards";

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
  { text: "Jesus", className: "text-title" },
  { text: "Miguel", className: "text-title" },
  { text: "Mora", className: "text-title" },
  { text: "Colmenares", className: "text-title" },
];

const role = [
  { text: "Desarrollador", className: "text-body" },
  { text: "Fullstack", className: "text-body" },
];

const stackIcons = [
  { icon: <FaReact className="text-6xl" />, text: "React" },
  { icon: <RiNextjsFill className="text-6xl" />, text: "Next.js" },
  { icon: <FaNodeJs className="text-6xl" />, text: "Node.js" },
  { icon: <DiRuby className="text-6xl" />, text: "Ruby" },
  { icon: <IoLogoJavascript className="text-6xl" />, text: "JavaScript" },
  { icon: <SiTypescript className="text-6xl" />, text: "TypeScript" },
  { icon: <RiTailwindCssFill className="text-6xl" />, text: "TailwindCSS" },
];

export const projects: Project[] = [
  {
    title: "Fakebook - Clon de facebook",
    description: `
    Este proyecto es una aplicación que simula las funcionalidades principales de una red social similar a Facebook`,
    features: [
      "Permite a los usuarios registrarse, iniciar sesión y cerrar sesión.",
      "Los usuarios pueden ver su perfil, incluyendo información personal, publicaciones y amigos.",
      "Los usuarios pueden crear, editar, eliminar y comentar en publicaciones.",
      "Sistema para enviar, mostrar y listar comentarios en publicaciones.",
      "Funcionalidad para enviar, aceptar, cancelar y confirmar solicitudes de amistad.",
      "Chat en tiempo real entre usuarios, con historial de conversaciones y envío de mensajes instantáneos.",
      "Los usuarios reciben notificaciones sobre solicitudes de amistad, mensajes y comentarios.",
      "Los usuarios pueden compartir publicaciones de otros."
    ],
    technologies: [
      { icon: <DiRuby />, text: "Ruby" },
      { icon: <FaReact />, text: "React" },
      { icon: <SiTypescript />, text: "TypeScript" },
    ],
    imageThumb: "./fakebook/fakebook1.png",
    images: [
      "./fakebook/fakebook1.png",
      "./fakebook/fakebook2.png",
      "./fakebook/fakebook3.png",
      "./fakebook/fakebook4.png",
      "./fakebook/fakebook5.png",
      "./fakebook/fakebook6.png",
      "./fakebook/fakebook7.png",
      "./fakebook/fakebook8.png",
      "./fakebook/fakebook9.png",
      "./fakebook/fakebook10.png",
      "./fakebook/fakebook11.png",
      "./fakebook/fakebook12.png",
      "./fakebook/fakebook13.png",
      "./fakebook/fakebook14.png",
      "./fakebook/fakebook15.png",
      "./fakebook/fakebook16.png",
      "./fakebook/fakebook17.png",
      "./fakebook/fakebook18.png",
      "./fakebook/fakebook19.png",
      "./fakebook/fakebook20.png",
      "./fakebook/fakebook21.png",
      "./fakebook/fakebook22.png"
    ],
    repo: "https://github.com/JesusMoraColmenaresDev/Fakebook---Frontend",
  },
  {
    title: "Stockware - Gestión de inventario",
    description: `Este proyecto es una aplicación web para la gestión de inventarios y usuarios en empresas o comercios.`,
    features: [
      "Permite a los usuarios registrarse, iniciar sesión y cerrar sesión.",
      "Los administradores pueden ver, crear, editar y eliminar usuarios, así como cambiar contraseñas y editar perfiles.",
      "Los usuarios pueden ver y editar su información personal, cambiar su contraseña y eliminar su cuenta.",
      "Permite crear, editar, eliminar y ver detalles de productos, incluyendo el control de stock y visualización de productos con bajo inventario.",
      "Permite crear, editar, eliminar y listar categorías para organizar los productos.",
      "Visualización y gestión de los movimientos de inventario (entradas y salidas de productos).",
      "Generación y descarga de reportes en PDF sobre movimientos y stock.",
      "Sistema de notificaciones visuales (toasts) para informar al usuario sobre acciones realizadas o errores.",
      "Barra lateral, barra de navegación superior y paginación para facilitar la experiencia de usuario."
    ],
    technologies: [
      { icon: <FaReact />, text: "React" },
      { icon: <DiRuby />, text: "Ruby" },
      { icon: <SiTypescript />, text: "TypeScript" },
    ],
    imageThumb: "./stockware/stockware1.png",
    images: [
      "./stockware/stockware1.png",
      "./stockware/stockware2.png",
      "./stockware/stockware3.png",
      "./stockware/stockware4.png",
      "./stockware/stockware5.png",
      "./stockware/stockware6.png",
      "./stockware/stockware7.png",
      "./stockware/stockware8.png",
      "./stockware/stockware9.png",
      "./stockware/stockware10.png",
      "./stockware/stockware11.png",
      "./stockware/stockware12.png",
      "./stockware/stockware13.png",
      "./stockware/stockware14.png",
      "./stockware/stockware15.png",
      "./stockware/stockware16.png",
      "./stockware/stockware17.png",
      "./stockware/stockware18.png"
    ],
    repo: "https://github.com/JesusMoraColmenaresDev/Stockware-Frontend",
  },
  {
    title: "Prospera - Landing Page",
    description: `Este proyecto es una aplicación web orientada a la presentación y gestión de servicios financieros para clientes y empresas.`,
    features: [
      "Permite a los usuarios consultar información sobre la empresa, sus servicios y ventajas competitivas.",
      "Los usuarios pueden solicitar consultas gratuitas y agendar citas a través de formularios interactivos.",
      "Incluye un sistema de gestión de citas: los usuarios pueden crear, ver, actualizar y eliminar citas.",
      "Ofrece una sección de contacto para que los usuarios envíen mensajes o consultas directamente a la empresa.",
      "Presenta los servicios financieros disponibles, como planificación financiera, inversiones, gestión de patrimonio y planificación de retiro, mediante tarjetas informativas y diseño visual atractivo.",
      "Utiliza componentes reutilizables para encabezado, pie de página, formularios y tarjetas, asegurando una experiencia de usuario consistente y moderna.",
      "El sistema está construido con Next.js, TypeScript y Prisma, garantizando escalabilidad, seguridad y facilidad de mantenimiento."
    ],
    technologies: [
      { icon: <RiNextjsFill />, text: "Next.js" },
      { icon: <FaReact />, text: "React" },
      { icon: <SiTypescript />, text: "TypeScript" }
    ],
    imageThumb: "./prospera/prospera1.png",
    images: [
      "./prospera/prospera1.png",
      "./prospera/prospera2.png",
      "./prospera/prospera3.png",
      "./prospera/prospera4.png",
      "./prospera/prospera5.png",
      "./prospera/prospera6.png",
      "./prospera/prospera7.png"
    ],
    repo: "https://github.com/JesusMoraColmenaresDev/Prospera-Landing", // Agrega el enlace al repositorio si existe
  }
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