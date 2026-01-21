import { MdOutlineEmail } from "react-icons/md"
import ItemIcon from "./ItemIcon"
import { LuGraduationCap } from "react-icons/lu"
import { FaGithub,} from "react-icons/fa"

function Navbar() {

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault();
        const id = link.replace('#', '');
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <nav className="w-full bg-main sticky -top-px z-80 border-b border-brand/20 flex items-center justify-center">
            <div className="flex gap-16 max-md:gap-4 p-2">
                <a href="#contacto" onClick={e => handleNavClick(e, "#contacto")} className="hover:bg-card rounded-3xl ">
                    <ItemIcon icon={<MdOutlineEmail />} className="border-none max-md:flex-col max-md:gap-0 max-md:text-[18px]" text={"Contacto"} />
                </a>
                <a href="#educacion" onClick={e => handleNavClick(e, "#educacion")} className="hover:bg-card rounded-3xl">
                    <ItemIcon icon={<LuGraduationCap />} className="border-none max-md:flex-col max-md:gap-0 max-md:text-[18px]" text={"Educación"} />
                </a>
                <a href="#proyectos" onClick={e => handleNavClick(e, "#proyectos")} className="hover:bg-card rounded-3xl">
                    <ItemIcon icon={<FaGithub />} className="border-none max-md:flex-col max-md:gap-0 max-md:text-[18px]" text={"Proyectos"} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar