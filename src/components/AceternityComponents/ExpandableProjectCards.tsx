import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";
import type { Project } from "../../types/ProjectType";
import ItemIcon from "../ItemIcon";
import { FaGithub } from "react-icons/fa";
import { Carousel } from "./Carousel";
import { IoIosCloseCircleOutline } from "react-icons/io";

export function ExpandableProjectCards({ projects }: { projects: Project[] }) {
    const [active, setActive] = useState<Project | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") setActive(null);
        }
        if (active) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 h-full w-full z-10 bg-main/70 backdrop-blur-lg "
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active ? (
                    <div className="fixed my-8 inset-0 grid place-items-center z-100 ">
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="max-w-[80%] h-full p-2 md:h-fit md:max-h-[90%] overflow-auto  bg-card rounded-3xl hide-scrollbar "
                        >
                            <div className=" w-full flex flex-col justify-center items-center gap-2">
                                <div className="w-full flex justify-end">
                                    <button
                                        onClick={() => setActive(null)}
                                    >
                                        <IoIosCloseCircleOutline className="text-3xl text-[#BE123C]" />
                                    </button>
                                </div>

                                <div className="flex flex-col gap-8 h-full w-full items-center text-xl px-4 ">
                                    <motion.h3 layoutId={`title-${active.title}-${id}`} className="font-bold underline underline-offset-4 text-title max-md:text-2xl text-5xl text-center ">
                                        {active.title}
                                    </motion.h3>
                                    <motion.p layoutId={`description-${active.description}-${id}`} className="text-body max-md:text-[18px] max-w-[80%] text-center">
                                        {active.description}
                                    </motion.p>
                                    {active.features && (
                                        <div className="max-w-[80%]">
                                            <ul className="list-disc w-full text-body max-md:text-[18px] font-bold space-y-2">
                                                {active.features.map((feature, idx) => (
                                                    <li key={idx}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                                        {active.technologies.map((tech, idx) => (
                                            <ItemIcon key={tech.text || idx} {...tech} />
                                        ))}
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        {active.repo && (
                                            <ItemIcon icon={<FaGithub />} text="Repositorio" className="bg-main/50 hover:bg-main/30 cursor-pointer" />
                                        )}
                                    </div>

                                    <motion.div layoutId={`image-${active.title}-${id}`} className="w-full flex flex-col items-center gap-4">
                                        <motion.p className="text-2xl text-title text-center mt-2 underline underline-offset-4">Imagenes del proyecto</motion.p>
                                        {active.images && active.images.length > 0 && (
                                            <Carousel images={active.images} />
                                        )}
                                    </motion.div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <div className="flex max-[1400px]:flex-col w-full gap-8">
                {projects.map((project) => (
                    <motion.div
                        layoutId={`card-${project.title}-${id}`}
                        key={`card-${project.title}-${id}`}
                        onClick={() => setActive(project)}
                        className="p-4 w-115 max-[1400px]:w-75 flex justify-center items-center hover:bg-card rounded-xl cursor-pointer border border-line"
                    >
                        <div className="flex gap-4 flex-col items-center justify-between">
                            <motion.h3 layoutId={`title-${project.title}-${id}`} className="font-medium text-neutral-800 dark:text-neutral-200 text-center">
                                {project.title}
                            </motion.h3>
                            <div className="flex max-[1400px]:flex-col items-center gap-2 mt-2 justify-center ">
                                {project.technologies.map((tech, idx) => (
                                    <ItemIcon key={tech.text || idx} {...tech} />
                                ))}
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
}