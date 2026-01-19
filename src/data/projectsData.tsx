import { DiRuby } from "react-icons/di";
import type { Project } from "../types/ProjectType";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

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