import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";
import type { Project } from "../../types/ProjectType";
import ItemIcon from "../ItemIcon";
import { FaGithub } from "react-icons/fa";
import { Carousel } from "./Carousel";

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
                    <div className="fixed inset-0 grid place-items-center z-100 ">
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-260 h-full p-8 md:h-fit md:max-h-[90%] overflow-auto  bg-card sm:rounded-3xl hide-scrollbar "
                        >
                            <div className=" w-full flex flex-col justify-center items-center gap-8">
                                <div className="flex flex-col gap-8 h-full items-center w-150">
                                    <motion.h3 layoutId={`title-${active.title}-${id}`} className="font-bold underline underline-offset-4 text-title text-2xl text-center">
                                        {active.title}
                                    </motion.h3>
                                    <motion.p layoutId={`description-${active.description}-${id}`} className="text-body">
                                        {active.description}
                                    </motion.p>
                                    {active.features && (
                                        <ul className="list-disc pl-5 w-full text-body">
                                            {active.features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    )}
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {active.technologies.map((tech, idx) => (
                                            <ItemIcon key={tech.text || idx} {...tech} />
                                        ))}
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        {active.repo && (
                                            <ItemIcon icon={<FaGithub />} text="Repositorio" className="bg-main/50 hover:bg-main/30 cursor-pointer" />
                                        )}
                                    </div>

                                    <motion.div layoutId={`image-${active.title}-${id}`}>
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
            <ul className="flex mx-auto w-full gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        layoutId={`card-${project.title}-${id}`}
                        key={`card-${project.title}-${id}`}
                        onClick={() => setActive(project)}
                        className="p-4 flex justify-between items-center hover:bg-card rounded-xl cursor-pointer border border-line"
                    >
                        <div className="flex gap-4 flex-col md:flex-row">
                            <div>
                                <motion.h3 layoutId={`title-${project.title}-${id}`} className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                                    {project.title}
                                </motion.h3>
                                <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                                    {project.technologies.map((tech, idx) => (
                                        <ItemIcon key={tech.text || idx} {...tech} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}